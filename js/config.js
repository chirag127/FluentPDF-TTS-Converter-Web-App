// Default configuration for Spokable PDF Converter
const DEFAULT_CONFIG = {
    // API Settings
    geminiApiUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
    defaultModel: 'gemini-1.5-flash',

    // Prompt Templates
    systemPrompt: `You are an expert at converting technical documents into natural, spoken language optimized for text-to-speech applications. Your goal is to make content understandable when listened to, not just read.`,

    transformPrompt: `Convert the following text into a clean, natural-language format optimized for text-to-speech (TTS) applications. Follow these rules:

1. Convert all code examples into natural language descriptions
2. Convert figure references and image descriptions into clear spoken summaries
3. Expand acronyms on first use
4. Replace symbols and special characters with spoken equivalents
5. Simplify complex technical jargon while preserving meaning
6. Add natural transitions between sections
7. Remove inline citations but keep the main content
8. Make the text flow naturally when read aloud
9. Preserve the logical structure and key information

Text to convert:`,

    codePrompt: `Describe this code example in natural language, explaining what it does without showing the actual code:`,

    figurePrompt: `Provide a clear, descriptive summary of this figure/image that can be understood when spoken aloud:`,

    // Batch Processing Settings
    batchSize: 8000, // tokens per batch
    overlapSize: 200, // token overlap between batches
    maxRetries: 3,
    retryDelay: 2000, // milliseconds

    // Model Parameters
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 4096,

    // Transformation Rules
    preserveFormatting: true,
    expandAcronyms: true,
    simplifyTechnical: true,
    addTransitions: true,
    removeReferences: true,

    // PDF Output Settings
    fontSize: 12,
    lineHeight: 1.5,
    pageMargin: 20,

    // Conversion Options
    convertCode: true,
    convertFigures: true,
    optimizeTTS: true,

    // MCP Settings
    enableMCP: false,
    mcpServerUrl: ''
};

// Configuration Manager
class ConfigManager {
    constructor() {
        this.config = this.loadConfig();
    }

    loadConfig() {
        const saved = localStorage.getItem('spokablePdfConfig');
        if (saved) {
            try {
                return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
            } catch (e) {
                console.error('Error loading config:', e);
                return { ...DEFAULT_CONFIG };
            }
        }
        return { ...DEFAULT_CONFIG };
    }

    saveConfig(config) {
        this.config = { ...this.config, ...config };
        localStorage.setItem('spokablePdfConfig', JSON.stringify(this.config));
    }

    resetConfig() {
        this.config = { ...DEFAULT_CONFIG };
        localStorage.setItem('spokablePdfConfig', JSON.stringify(this.config));
    }

    getConfig() {
        return { ...this.config };
    }

    exportConfig() {
        return JSON.stringify(this.config, null, 2);
    }

    importConfig(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            this.config = { ...DEFAULT_CONFIG, ...imported };
            localStorage.setItem('spokablePdfConfig', JSON.stringify(this.config));
            return true;
        } catch (e) {
            console.error('Error importing config:', e);
            return false;
        }
    }
}

// API Key Manager
class ApiKeyManager {
    constructor() {
        this.storageKey = 'geminiApiKey';
    }

    saveKey(key) {
        localStorage.setItem(this.storageKey, key);
    }

    getKey() {
        return localStorage.getItem(this.storageKey) || '';
    }

    clearKey() {
        localStorage.removeItem(this.storageKey);
    }

    hasKey() {
        return !!this.getKey();
    }
}

// Token estimation (rough approximation)
function estimateTokens(text) {
    // Rough estimate: 1 token ≈ 4 characters
    return Math.ceil(text.length / 4);
}

// Text splitter for batching
function splitTextIntoBatches(text, batchSize, overlapSize) {
    const tokens = estimateTokens(text);

    if (tokens <= batchSize) {
        return [text];
    }

    const batches = [];
    const charPerToken = 4;
    const batchChars = batchSize * charPerToken;
    const overlapChars = overlapSize * charPerToken;

    let start = 0;

    while (start < text.length) {
        let end = Math.min(start + batchChars, text.length);

        // Try to break at sentence boundary
        if (end < text.length) {
            const lastPeriod = text.lastIndexOf('.', end);
            const lastNewline = text.lastIndexOf('\n', end);
            const breakPoint = Math.max(lastPeriod, lastNewline);

            if (breakPoint > start + batchChars * 0.7) {
                end = breakPoint + 1;
            }
        }

        batches.push(text.substring(start, end));
        start = end - overlapChars;

        if (start >= text.length) break;
    }

    return batches;
}

// Initialize global config manager
const configManager = new ConfigManager();
const apiKeyManager = new ApiKeyManager();
