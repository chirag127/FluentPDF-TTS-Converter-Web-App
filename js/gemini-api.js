// Gemini API Client
class GeminiAPI {
    constructor(apiKey, config) {
        this.apiKey = apiKey;
        this.config = config;
        this.baseUrl = config.geminiApiUrl;
    }

    async generateContent(prompt, model = null) {
        const selectedModel = model || this.config.defaultModel;
        const url = `${this.baseUrl}/${selectedModel}:generateContent?key=${this.apiKey}`;

        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: this.config.temperature,
                topP: this.config.topP,
                topK: this.config.topK,
                maxOutputTokens: this.config.maxOutputTokens
            }
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (!data.candidates || data.candidates.length === 0) {
                throw new Error('No response generated from API');
            }

            const text = data.candidates[0].content.parts[0].text;
            return text;

        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    }

    async generateContentWithRetry(prompt, model = null, maxRetries = 3, retryDelay = 2000) {
        let lastError;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await this.generateContent(prompt, model);
            } catch (error) {
                lastError = error;
                console.warn(`Attempt ${attempt} failed:`, error.message);

                if (attempt < maxRetries) {
                    // Exponential backoff
                    const delay = retryDelay * Math.pow(2, attempt - 1);
                    console.log(`Retrying in ${delay}ms...`);
                    await this.sleep(delay);
                }
            }
        }

        throw lastError;
    }

    async transformTextBatch(text, batchIndex, totalBatches) {
        const config = this.config;

        let fullPrompt = config.systemPrompt + '\n\n' + config.transformPrompt + '\n\n';

        if (totalBatches > 1) {
            fullPrompt += `[Batch ${batchIndex + 1} of ${totalBatches}]\n\n`;
        }

        fullPrompt += text;

        return await this.generateContentWithRetry(
            fullPrompt,
            null,
            config.maxRetries,
            config.retryDelay
        );
    }

    async testConnection() {
        try {
            const response = await this.generateContent('Hello, respond with "OK" if you can read this.');
            return { success: true, message: 'API connection successful' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Rate limiter for API calls
class RateLimiter {
    constructor(maxRequestsPerMinute = 15) {
        this.maxRequests = maxRequestsPerMinute;
        this.requests = [];
    }

    async waitIfNeeded() {
        const now = Date.now();
        const oneMinuteAgo = now - 60000;

        // Remove requests older than 1 minute
        this.requests = this.requests.filter(time => time > oneMinuteAgo);

        if (this.requests.length >= this.maxRequests) {
            // Wait until the oldest request is more than 1 minute old
            const oldestRequest = this.requests[0];
            const waitTime = 60000 - (now - oldestRequest) + 100; // Add 100ms buffer

            if (waitTime > 0) {
                console.log(`Rate limit reached. Waiting ${Math.ceil(waitTime / 1000)}s...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
        }

        this.requests.push(Date.now());
    }
}

// Progress tracker
class ProgressTracker {
    constructor(totalBatches, onUpdate) {
        this.totalBatches = totalBatches;
        this.currentBatch = 0;
        this.onUpdate = onUpdate;
    }

    update(batchIndex, status, details = '') {
        this.currentBatch = batchIndex + 1;
        const percentage = Math.round((this.currentBatch / this.totalBatches) * 100);

        if (this.onUpdate) {
            this.onUpdate({
                percentage,
                currentBatch: this.currentBatch,
                totalBatches: this.totalBatches,
                status,
                details
            });
        }
    }

    complete() {
        if (this.onUpdate) {
            this.onUpdate({
                percentage: 100,
                currentBatch: this.totalBatches,
                totalBatches: this.totalBatches,
                status: 'complete',
                details: 'Processing complete!'
            });
        }
    }

    error(message) {
        if (this.onUpdate) {
            this.onUpdate({
                percentage: 0,
                currentBatch: this.currentBatch,
                totalBatches: this.totalBatches,
                status: 'error',
                details: message
            });
        }
    }
}
