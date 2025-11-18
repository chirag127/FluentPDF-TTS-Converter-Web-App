# Convert to Readable Spokable PDF

A client-side web application that transforms technical PDFs into clean, human-friendly, TTS-optimized documents using Google's Gemini API.

## Features

-   🎯 **Smart Text Processing**: Converts technical content into natural, spoken language
-   🔊 **TTS Optimized**: Perfect for Moon+ Reader Pro and other text-to-speech apps
-   📚 **Large Document Support**: Automatic batching handles books and long documents
-   ⚙️ **Fully Customizable**: Edit prompts, adjust parameters, fine-tune conversion
-   🔒 **Privacy First**: 100% client-side processing, no backend servers
-   🚀 **Easy Deployment**: Static HTML/CSS/JS, works on any hosting

## How It Works

1. **Upload PDF**: Select a PDF with extractable text (OCR not required)
2. **Enter API Key**: Use your free Google AI Studio API key
3. **Configure Options**: Choose model, enable/disable features
4. **Convert**: AI processes text in batches, converting code and figures to descriptions
5. **Download**: Get your TTS-friendly PDF ready for listening

## Setup Instructions

### 1. Download Required Libraries

You need to download two JavaScript libraries and place them in the `js/` folder:

#### PDF.js (for reading PDFs)

1. Visit: https://mozilla.github.io/pdf.js/getting_started/
2. Download the prebuilt version: https://github.com/mozilla/pdf.js/releases/latest
3. Extract `pdf.min.js` and place it in `js/pdf.min.js`
4. Also extract `pdf.worker.min.js` and place it in `js/pdf.worker.min.js`

Or use CDN by adding to your HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
```

#### jsPDF (for generating PDFs)

1. Visit: https://github.com/parallax/jsPDF
2. Download from: https://github.com/parallax/jsPDF/releases/latest
3. Extract `jspdf.umd.min.js` and place it in `js/jspdf.umd.min.js`

Or use CDN by adding to your HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

### 2. Get Google AI Studio API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy the generated key
5. Paste it into the website when converting PDFs

**Note**: The API has a generous free tier with rate limits (15 requests/minute for Gemini 1.5 Flash).

### 3. Deploy

#### Option A: Local Testing

1. Open `index.html` in a modern web browser
2. Note: Some browsers may block file:// protocol features. Use a local server instead:

    ```bash
    # Python 3
    python -m http.server 8000

    # Node.js
    npx http-server
    ```

3. Visit `http://localhost:8000`

#### Option B: Static Hosting

Deploy to any static hosting service:

-   **GitHub Pages**: Push to repo, enable Pages in settings
-   **Netlify**: Drag and drop folder or connerepo
-   **Vercel**: Import project from Git
-   **Cloudflare Pages**: Connect Git repo
-   **AWS S3**: Upload files, enable static website hosting

## File Structure

```
spokable-pdf-converter/
├── index.html              # Main page
├── about.html              # About page
├── faq.html                # FAQ page
├── settings.html           # Advanced settings
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── config.js           # Configuration management
│   ├── gemini-api.js       # Gemini API client
│   ├── pdf-processor.js    # PDF processing logic
│   ├── main.js             # Main app logic
│   ├── settings.js         # Settings page logic
│   ├── contact.js          # Contact form logic
│   ├── pdf.min.js          # PDF.js library (download required)
│   └── jspdf.umd.min.js    # jsPDF library (download required)
└── README.md               # This file
```

## Usage Guide

### Basic Conversion

1. Open the website
2. Enter your Google AI Studio API key (saved in browser)
3. Select a PDF file
4. Click "Convert PDF"
5. Wait for processing (progress bar shows status)
6. Download the converted PDF

### Advanced Settings

Visit the Settings page to customize:

-   **Prompt Templates**: Edit how AI transforms text
-   **Batch Processing**: Adjust batch size and overlap
-   **Model Parameters**: Temperature, Top P, Top K
-   **Transformation Rules**: Enable/disable specific features
-   **PDF Output**: Font size, line height, margins

### Tips for Best Results

1. **Choose the Right Model**:

    - Gemini 1.5 Flash: Fast, cost-effective, good for most documents
    - Gemini 1.5 Pro: Higher quality, better for complex technical content

2. **Adjust Batch Size**:

    - Larger batches = fewer API calls but more memory usage
    - Smaller batches = more API calls but better for rate limits

3. **Monitor API Usage**:

    - Free tier: 15 requests/minute
    - App automatically handles rate limiting
    - Check your usage at [Google AI Studio](https://aistudio.google.com/)

4. **For Large Books**:
    - Processing may take 20-40 minutes for 200+ page books
    - Keep browser tab open during processing
    - Don't close or refresh the page

## Troubleshooting

### "Invalid API Key" Error

-   Verify your API key at Google AI Studio
-   Make sure you copied the entire key
-   Check if API is enabled in your Google Cloud project

### "Rate Limit Exceeded" Error

-   Free tier: 15 requests/minute
-   App will automatically wait and retry
-   Consider upgrading to paid tier for higher limits

### "Failed to Load PDF" Error

-   Ensure PDF has extractable text (not scanned images)
-   Try a different PDF to test
-   Check file isn't corrupted

### Processing Stuck

-   Check browser console for errors (F12)
-   Verify internet connection
-   Try refreshing and starting over

### Large File Issues

-   Browser may run out of memory for very large files (100+ MB)
-   Try splitting PDF into smaller sections
-   Close other browser tabs to free memory

## API Costs

Google Gemini API pricing (as of 2025):

**Free Tier**:

-   Gemini 1.5 Flash: 15 RPM, 1 million TPM
-   Gemini 1.5 Pro: 2 RPM, 32,000 TPM

**Paid Tier** (Pay-as-you-go):

-   Gemini 1.5 Flash: $0.075 per 1M input tokens
-   Gemini 1.5 Pro: $1.25 per 1M input tokens

Typical costs:

-   50-page book: $0.01 - $0.05
-   200-page book: $0.05 - $0.20

Check current pricing: https://ai.google.dev/pricing

## Browser Compatibility

-   ✅ Chrome/Edge (recommended)
-   ✅ Firefox
-   ✅ Safari
-   ✅ Opera
-   ⚠️ Mobile browsers (may struggle with large files)

## Privacy & Security

-   **No Backend**: Everything runs in your browser
-   **No Data Collection**: We don't track or store anything
-   **API Key**: Stored locally in browser localStorage
-   **Your Files**: Never uploaded to our servers (we don't have any!)
-   **Direct API Calls**: Your browser talks directly to Google's API

## MCP Integration (Optional)

The app includes basic support for Model Context Protocol (MCP) servers:

1. Enable MCP in Settings
2. Configure your MCP server URL
3. Use MCP tools for enhanced functionality

Note: MCP integration is experimental and optional.

## Contributing

This is an open-source project. Contributions welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use, modify, and distribute.

## Support

-   📧 Email: support@spokablepdf.example.com
-   🐛 Issues: GitHub Issues
-   💬 Community: Discord
-   📖 Docs: FAQ page

## Acknowledgments

-   Google Gemini API for AI processing
-   Mozilla PDF.js for PDF reading
-   jsPDF for PDF generation
-   All contributors and users

## Changelog

### Version 1.0.0 (2025-11-18)

-   Initial release
-   Basic PDF to spokable PDF conversion
-   Multi-page website with settings
-   Automatic batching for large documents
-   Customizable prompts and parameters
-   Rate limiting and retry logic

---

Made with ❤️ for better accessibility and listening experiences
