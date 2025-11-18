// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const apiKeyInput = document.getElementById('apiKey');
    const toggleApiKeyBtn = document.getElementById('toggleApiKey');
    const pdfFileInput = document.getElementById('pdfFile');
    const fileInfo = document.getElementById('fileInfo');
    const convertBtn = document.getElementById('convertBtn');
    const progressSection = document.getElementById('progressSection');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressDetails = document.getElementById('progressDetails');
    const resultSection = document.getElementById('resultSection');
    const errorSection = document.getElementById('errorSection');
    const errorMessage = document.getElementById('errorMessage');
    const downloadBtn = document.getElementById('downloadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const retryBtn = document.getElementById('retryBtn');
    const modelSelect = document.getElementById('modelSelect');
    const convertCodeCheckbox = document.getElementById('convertCode');
    const convertFiguresCheckbox = document.getElementById('convertFigures');
    const optimizeTTSCheckbox = document.getElementById('optimizeTTS');

    // State
    let selectedFile = null;
    let pdfProcessor = null;
    let generatedPDF = null;

    // Load saved API key
    const savedApiKey = apiKeyManager.getKey();
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        checkConvertButton();
    }

    // Toggle API key visibility
    toggleApiKeyBtn.addEventListener('click', () => {
        if (apiKeyInput.type === 'password') {
            apiKeyInput.type = 'text';
            toggleApiKeyBtn.textContent = '🙈';
        } else {
            apiKeyInput.type = 'password';
            toggleApiKeyBtn.textContent = '👁️';
        }
    });

    // Save API key on change
    apiKeyInput.addEventListener('input', () => {
        apiKeyManager.saveKey(apiKeyInput.value);
        checkConvertButton();
    });

    // Handle file selection
    pdfFileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) {
            selectedFile = null;
            fileInfo.classList.remove('show');
            checkConvertButton();
            return;
        }

        if (file.type !== 'application/pdf') {
            showError('Please select a valid PDF file');
            pdfFileInput.value = '';
            return;
        }

        selectedFile = file;

        // Show file info
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        fileInfo.innerHTML = `
            <strong>Selected:</strong> ${file.name}<br>
            <strong>Size:</strong> ${sizeInMB} MB
        `;
        fileInfo.classList.add('show');

        checkConvertButton();
    });

    // Check if convert button should be enabled
    function checkConvertButton() {
        const hasApiKey = apiKeyInput.value.trim().length > 0;
        const hasFile = selectedFile !== null;
        convertBtn.disabled = !(hasApiKey && hasFile);
    }

    // Handle conversion
    convertBtn.addEventListener('click', async () => {
        if (!selectedFile || !apiKeyInput.value.trim()) {
            return;
        }

        // Hide previous results/errors
        resultSection.style.display = 'none';
        errorSection.style.display = 'none';
        progressSection.style.display = 'block';
        convertBtn.disabled = true;

        try {
            // Get current config
            const config = configManager.getConfig();

            // Update config with current UI selections
            config.defaultModel = modelSelect.value;
            config.convertCode = convertCodeCheckbox.checked;
            config.convertFigures = convertFiguresCheckbox.checked;
            config.optimizeTTS = optimizeTTSCheckbox.checked;

            // Initialize PDF processor
            pdfProcessor = new PDFProcessor();

            // Load PDF
            updateProgress(0, 'Loading PDF...', 'Reading file...');
            const pdfInfo = await pdfProcessor.loadPDF(selectedFile);

            updateProgress(10, 'Extracting text...', `Processing ${pdfInfo.numPages} pages...`);

            // Extract text
            const extractedText = await pdfProcessor.extractText();
            const wordCount = extractedText.split(/\s+/).length;
            const estimatedTokens = estimateTokens(extractedText);

            updateProgress(20, 'Text extracted',
                `Extracted ${wordCount.toLocaleString()} words (~${estimatedTokens.toLocaleString()} tokens)`);

            // Process with Gemini
            updateProgress(25, 'Processing with AI...', 'Sending to Gemini API...');

            const transformedText = await pdfProcessor.processWithGemini(
                apiKeyInput.value.trim(),
                config,
                (progress) => {
                    const overallProgress = 25 + (progress.percentage * 0.65);
                    updateProgress(
                        overallProgress,
                        progress.status === 'complete' ? 'AI processing complete' : 'Processing with AI...',
                        progress.details
                    );
                }
            );

            // Generate PDF
            updateProgress(90, 'Generating PDF...', 'Creating output document...');

            const pdfGenerator = new PDFGenerator(config);
            generatedPDF = await pdfGenerator.generatePDF(transformedText, selectedFile.name);

            updateProgress(100, 'Complete!', 'Your spokable PDF is ready');

            // Show success
            progressSection.style.display = 'none';
            resultSection.style.display = 'block';

        } catch (error) {
            console.error('Conversion error:', error);
            showError(error.message);
            convertBtn.disabled = false;
        }
    });

    // Download button
    downloadBtn.addEventListener('click', () => {
        if (generatedPDF) {
            const pdfGenerator = new PDFGenerator(configManager.getConfig());
            pdfGenerator.downloadPDF(generatedPDF.doc, generatedPDF.fileName);
        }
    });

    // Reset button
    resetBtn.addEventListener('click', () => {
        resetUI();
    });

    // Retry button
    retryBtn.addEventListener('click', () => {
        errorSection.style.display = 'none';
        convertBtn.disabled = false;
    });

    // Helper functions
    function updateProgress(percentage, status, details) {
        progressBar.style.width = percentage + '%';
        progressText.textContent = status;
        progressDetails.textContent = details;
    }

    function showError(message) {
        progressSection.style.display = 'none';
        resultSection.style.display = 'none';
        errorSection.style.display = 'block';
        errorMessage.textContent = message;
    }

    function resetUI() {
        selectedFile = null;
        pdfProcessor = null;
        generatedPDF = null;
        pdfFileInput.value = '';
        fileInfo.classList.remove('show');
        progressSection.style.display = 'none';
        resultSection.style.display = 'none';
        errorSection.style.display = 'none';
        progressBar.style.width = '0%';
        checkConvertButton();
    }
});
