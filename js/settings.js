// Settings page logic
document.addEventListener('DOMContentLoaded', () => {
    // Get all form elements
    const systemPrompt = document.getElementById('systemPrompt');
    const transformPrompt = document.getElementById('transformPrompt');
    const codePrompt = document.getElementById('codePrompt');
    const figurePrompt = document.getElementById('figurePrompt');
    const batchSize = document.getElementById('batchSize');
    const overlapSize = document.getElementById('overlapSize');
    const maxRetries = document.getElementById('maxRetries');
    const retryDelay = document.getElementById('retryDelay');
    const temperature = document.getElementById('temperature');
    const temperatureValue = document.getElementById('temperatureValue');
    const topP = document.getElementById('topP');
    const topPValue = document.getElementById('topPValue');
    const topK = document.getElementById('topK');
    const maxOutputTokens = document.getElementById('maxOutputTokens');
    const preserveFormatting = document.getElementById('preserveFormatting');
    const expandAcronyms = document.getElementById('expandAcronyms');
    const simplifyTechnical = document.getElementById('simplifyTechnical');
    const addTransitions = document.getElementById('addTransitions');
    const removeReferences = document.getElementById('removeReferences');
    const fontSize = document.getElementById('fontSize');
    const lineHeight = document.getElementById('lineHeight');
    const pageMargin = document.getElementById('pageMargin');
    const enableMCP = document.getElementById('enableMCP');
    const mcpServerUrl = document.getElementById('mcpServerUrl');
    const saveSettings = document.getElementById('saveSettings');
    const resetSettings = document.getElementById('resetSettings');
    const exportSettings = document.getElementById('exportSettings');
    const importSettings = document.getElementById('importSettings');
    const settingsMessage = document.getElementById('settingsMessage');

    // Load current settings
    loadSettings();

    // Update range value displays
    temperature.addEventListener('input', () => {
        temperatureValue.textContent = temperature.value;
    });

    topP.addEventListener('input', () => {
        topPValue.textContent = topP.value;
    });

    // Save settings
    saveSettings.addEventListener('click', () => {
        const config = {
            systemPrompt: systemPrompt.value,
            transformPrompt: transformPrompt.value,
            codePrompt: codePrompt.value,
            figurePrompt: figurePrompt.value,
            batchSize: parseInt(batchSize.value),
            overlapSize: parseInt(overlapSize.value),
            maxRetries: parseInt(maxRetries.value),
            retryDelay: parseInt(retryDelay.value),
            temperature: parseFloat(temperature.value),
            topP: parseFloat(topP.value),
            topK: parseInt(topK.value),
            maxOutputTokens: parseInt(maxOutputTokens.value),
            preserveFormatting: preserveFormatting.checked,
            expandAcronyms: expandAcronyms.checked,
            simplifyTechnical: simplifyTechnical.checked,
            addTransitions: addTransitions.checked,
            removeReferences: removeReferences.checked,
            fontSize: parseInt(fontSize.value),
            lineHeight: parseFloat(lineHeight.value),
            pageMargin: parseInt(pageMargin.value),
            enableMCP: enableMCP.checked,
            mcpServerUrl: mcpServerUrl.value
        };

        configManager.saveConfig(config);
        showMessage('Settings saved successfully!', 'success');
    });

    // Reset settings
    resetSettings.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all settings to defaults?')) {
            configManager.resetConfig();
            loadSettings();
            showMessage('Settings reset to defaults', 'success');
        }
    });

    // Export settings
    exportSettings.addEventListener('click', () => {
        const configJson = configManager.exportConfig();
        const blob = new Blob([configJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'spokable-pdf-settings.json';
        a.click();
        URL.revokeObjectURL(url);
        showMessage('Settings exported', 'success');
    });

    // Import settings
    importSettings.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';

        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const success = configManager.importConfig(event.target.result);
                    if (success) {
                        loadSettings();
                        showMessage('Settings imported successfully!', 'success');
                    } else {
                        showMessage('Failed to import settings. Invalid file format.', 'error');
                    }
                } catch (error) {
                    showMessage('Error importing settings: ' + error.message, 'error');
                }
            };
            reader.readAsText(file);
        };

        input.click();
    });

    // Helper functions
    function loadSettings() {
        const config = configManager.getConfig();

        systemPrompt.value = config.systemPrompt;
        transformPrompt.value = config.transformPrompt;
        codePrompt.value = config.codePrompt;
        figurePrompt.value = config.figurePrompt;
        batchSize.value = config.batchSize;
        overlapSize.value = config.overlapSize;
        maxRetries.value = config.maxRetries;
        retryDelay.value = config.retryDelay;
        temperature.value = config.temperature;
        temperatureValue.textContent = config.temperature;
        topP.value = config.topP;
        topPValue.textContent = config.topP;
        topK.value = config.topK;
        maxOutputTokens.value = config.maxOutputTokens;
        preserveFormatting.checked = config.preserveFormatting;
        expandAcronyms.checked = config.expandAcronyms;
        simplifyTechnical.checked = config.simplifyTechnical;
        addTransitions.checked = config.addTransitions;
        removeReferences.checked = config.removeReferences;
        fontSize.value = config.fontSize;
        lineHeight.value = config.lineHeight;
        pageMargin.value = config.pageMargin;
        enableMCP.checked = config.enableMCP;
        mcpServerUrl.value = config.mcpServerUrl;
    }

    function showMessage(message, type) {
        settingsMessage.textContent = message;
        settingsMessage.className = 'message ' + type;
        settingsMessage.style.display = 'block';

        setTimeout(() => {
            settingsMessage.style.display = 'none';
        }, 5000);
    }
});
