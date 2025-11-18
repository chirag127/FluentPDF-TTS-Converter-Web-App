// PDF Processing Module
class PDFProcessor {
    constructor() {
        this.pdfDoc = null;
        this.extractedText = '';
    }

    async loadPDF(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = async (e) => {
                try {
                    const typedArray = new Uint8Array(e.target.result);

                    // Load PDF using PDF.js
                    const loadingTask = pdfjsLib.getDocument({ data: typedArray });
                    this.pdfDoc = await loadingTask.promise;

                    resolve({
                        numPages: this.pdfDoc.numPages,
                        fileName: file.name,
                        fileSize: file.size
                    });
                } catch (error) {
                    reject(new Error('Failed to load PDF: ' + error.message));
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsArrayBuffer(file);
        });
    }

    async extractText() {
        if (!this.pdfDoc) {
            throw new Error('No PDF loaded');
        }

        let fullText = '';
        const numPages = this.pdfDoc.numPages;

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            const page = await this.pdfDoc.getPage(pageNum);
            const textContent = await page.getTextContent();

            const pageText = textContent.items
                .map(item => item.str)
                .join(' ');

            fullText += pageText + '\n\n';
        }

        this.extractedText = fullText;
        return fullText;
    }

    getExtractedText() {
        return this.extractedText;
    }

    async processWithGemini(apiKey, config, onProgress) {
        if (!this.extractedText) {
            throw new Error('No text extracted. Call extractText() first.');
        }

        // Split text into batches
        const batches = splitTextIntoBatches(
            this.extractedText,
            config.batchSize,
            config.overlapSize
        );

        console.log(`Split into ${batches.length} batches`);

        // Initialize API client and rate limiter
        const geminiAPI = new GeminiAPI(apiKey, config);
        const rateLimiter = new RateLimiter(15); // 15 requests per minute for free tier
        const progressTracker = new ProgressTracker(batches.length, onProgress);

        // Process each batch
        const transformedBatches = [];

        for (let i = 0; i < batches.length; i++) {
            try {
                progressTracker.update(i, 'processing', `Processing batch ${i + 1} of ${batches.length}...`);

                // Wait if rate limit reached
                await rateLimiter.waitIfNeeded();

                // Transform the batch
                const transformed = await geminiAPI.transformTextBatch(batches[i], i, batches.length);
                transformedBatches.push(transformed);

                progressTracker.update(i, 'completed', `Completed batch ${i + 1} of ${batches.length}`);

            } catch (error) {
                console.error(`Error processing batch ${i + 1}:`, error);
                progressTracker.error(`Error in batch ${i + 1}: ${error.message}`);
                throw error;
            }
        }

        progressTracker.complete();

        // Combine transformed batches
        return this.combineBatches(transformedBatches, config.overlapSize);
    }

    combineBatches(batches, overlapSize) {
        if (batches.length === 1) {
            return batches[0];
        }

        let combined = batches[0];

        for (let i = 1; i < batches.length; i++) {
            // Remove overlap from the beginning of the current batch
            const currentBatch = batches[i];
            const overlapChars = overlapSize * 4; // Rough estimate

            // Try to find a good merge point
            const mergePoint = this.findMergePoint(combined, currentBatch, overlapChars);

            if (mergePoint > 0) {
                combined += '\n\n' + currentBatch.substring(mergePoint);
            } else {
                combined += '\n\n' + currentBatch;
            }
        }

        return combined;
    }

    findMergePoint(previousText, currentText, overlapChars) {
        // Try to find where the overlap ends in the current batch
        const prevEnd = previousText.slice(-overlapChars);

        // Look for the end of the overlap in the current text
        for (let i = 0; i < Math.min(overlapChars * 2, currentText.length); i++) {
            const substring = currentText.substring(i, i + 50);
            if (prevEnd.includes(substring)) {
                // Found overlap, return position after it
                return i + 50;
            }
        }

        // If no overlap found, try to break at sentence
        const firstPeriod = currentText.indexOf('.', overlapChars / 2);
        if (firstPeriod > 0 && firstPeriod < overlapChars * 1.5) {
            return firstPeriod + 1;
        }

        return 0;
    }
}

// PDF Generator
class PDFGenerator {
    constructor(config) {
        this.config = config;
    }

    async generatePDF(text, originalFileName) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = this.config.pageMargin;
        const maxWidth = pageWidth - (margin * 2);

        doc.setFontSize(this.config.fontSize);

        // Split text into lines that fit the page width
        const lines = doc.splitTextToSize(text, maxWidth);

        let y = margin;
        const lineHeight = this.config.fontSize * this.config.lineHeight * 0.352778; // Convert to mm

        for (let i = 0; i < lines.length; i++) {
            if (y + lineHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }

            doc.text(lines[i], margin, y);
            y += lineHeight;
        }

        // Generate filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const baseName = originalFileName.replace('.pdf', '');
        const outputFileName = `${baseName}_spokable_${timestamp}.pdf`;

        return {
            doc,
            fileName: outputFileName
        };
    }

    downloadPDF(doc, fileName) {
        doc.save(fileName);
    }
}
