# Setup Guide - Spokable PDF Converter

This guide will help you set up the Spokable PDF Converter website.

## Quick Start (Using CDN)

The easiest way to get started is to use CDN links for the required libraries. Update your `index.html` to include these scripts:

### Option 1: CDN Links (Recommended for Quick Start)

Add these script tags to your HTML files before the closing `</body>` tag:

```html
<!-- PDF.js for reading PDFs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
    // Configure PDF.js worker
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
</script>

<!-- jsPDF for generating PDFs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<!-- Your app scripts -->
<script src="js/config.js"></script>
<script src="js/gemini-api.js"></script>
<script src="js/pdf-processor.js"></script>
<script src="js/main.js"></script>
```

## Manual Setup (Self-Hosted Libraries)

If you prefer to host the libraries yourself:

### Step 1: Download PDF.js

**Method A: Direct Download**

1. Go to: https://github.com/mozilla/pdf.js/releases/latest
2. Download `pdfjs-X.XX.XXX-dist.zip` (where X.XX.XXX is the version)
3. Extract the zip file
4. Copy these files to your `js/` folder:
    - `build/pdf.min.js` → `js/pdf.min.js`
    - `build/pdf.worker.min.js` → `js/pdf.worker.min.js`

**Method B: Using npm**

```bash
npm install pdfjs-dist
# Then copy from node_modules/pdfjs-dist/build/
```

### Step 2: Download jsPDF

**Method A: Direct Download**

1. Go to: https://github.com/parallax/jsPDF/releases/latest
2. Download the release zip
3. Extract and find `dist/jspdf.umd.min.js`
4. Copy to `js/jspdf.umd.min.js`

**Method B: Using npm**

```bash
npm install jspdf
# Then copy from node_modules/jspdf/dist/
```

### Step 3: Configure PDF.js Worker

If using self-hosted files, add this to your HTML after loading PDF.js:

```html
<script src="js/pdf.min.js"></script>
<script>
    pdfjsLib.GlobalWorkerOptions.workerSrc = "js/pdf.worker.min.js";
</script>
```

## Get Google AI Studio API Key

### Step-by-Step Instructions

1. **Visit Google AI Studio**

    - Go to: https://aistudio.google.com/app/apikey
    - Or search for "Google AI Studio" in Google

2. **Sign In**

    - Use your Google account
    - Accept terms of service if prompted

3. **Create API Key**

    - Click "Get API Key" or "Create API Key"
    - Choose "Create API key in new project" (recommended)
    - Or select an existing Google Cloud project

4. **Copy Your Key**

    - Copy the generated API key
    - Store it securely (you'll need it to use the app)

5. **Important Notes**
    - Free tier includes generous quotas
    - Gemini 1.5 Flash: 15 requests per minute
    - Gemini 1.5 Pro: 2 requests per minute
    - Monitor usage at: https://aistudio.google.com/

### API Key Security

-   ✅ Store in browser localStorage (automatic in our app)
-   ✅ Never commit to version control
-   ✅ Don't share publicly
-   ❌ Don't hardcode in source files
-   ❌ Don't expose in client-side code (except for direct API calls)

## Testing Your Setup

### 1. Test Locally

**Using Python:**

```bash
cd spokable-pdf-converter
python -m http.server 8000
```

**Using Node.js:**

```bash
npx http-server
```

**Using PHP:**

```bash
php -S localhost:8000
```

Then open: http://localhost:8000

### 2. Test the Application

1. Open the website in your browser
2. Enter your API key
3. Select a small test PDF (1-5 pages)
4. Click "Convert PDF"
5. Wait for processing
6. Download the result

### 3. Verify Libraries Loaded

Open browser console (F12) and check for errors:

-   No "pdfjsLib is not defined" errors
-   No "jsPDF is not defined" errors
-   No CORS errors (if using local files)

## Deployment Options

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch and folder
5. Save and wait for deployment
6. Access at: `https://yourusername.github.io/repo-name/`

### Netlify

1. Sign up at: https://netlify.com
2. Drag and drop your folder, or
3. Connect your Git repository
4. Deploy automatically
5. Get a free subdomain: `yoursite.netlify.app`

### Vercel

1. Sign up at: https://vercel.com
2. Import your Git repository
3. Configure build settings (none needed for static site)
4. Deploy
5. Get a free subdomain: `yoursite.vercel.app`

### Cloudflare Pages

1. Sign up at: https://pages.cloudflare.com
2. Connect your Git repository
3. Configure build settings
4. Deploy
5. Get a free subdomain: `yoursite.pages.dev`

### AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Set bucket policy for public read
5. (Optional) Add CloudFront for HTTPS and CDN

### Traditional Web Hosting

Upload files via FTP/SFTP to any web host:

-   Shared hosting (cPanel, Plesk)
-   VPS or dedicated server
-   Any hosting that serves static files

## Troubleshooting Setup

### Libraries Not Loading

**Problem**: "pdfjsLib is not defined" or "jsPDF is not defined"

**Solutions**:

1. Check script tags are in correct order
2. Verify file paths are correct
3. Check browser console for 404 errors
4. Try using CDN links instead
5. Clear browser cache

### CORS Errors

**Problem**: "Cross-Origin Request Blocked"

**Solutions**:

1. Don't open HTML files directly (file://)
2. Use a local web server
3. Check server CORS headers if deployed

### PDF.js Worker Issues

**Problem**: "Setting up fake worker"

**Solutions**:

1. Set workerSrc correctly:
    ```javascript
    pdfjsLib.GlobalWorkerOptions.workerSrc = "path/to/pdf.worker.min.js";
    ```
2. Ensure worker file is accessible
3. Check browser console for errors

### API Key Issues

**Problem**: "Invalid API key"

**Solutions**:

1. Verify key at Google AI Studio
2. Check for extra spaces when copying
3. Ensure API is enabled in Google Cloud
4. Try generating a new key

### Rate Limit Errors

**Problem**: "Rate limit exceeded"

**Solutions**:

1. Wait 60 seconds and retry
2. App automatically handles this
3. Consider upgrading to paid tier
4. Reduce batch size in settings

## Environment-Specific Notes

### Development

-   Use CDN links for quick setup
-   Use browser dev tools for debugging
-   Test with small PDFs first

### Production

-   Consider self-hosting libraries for reliability
-   Enable HTTPS (required for some features)
-   Set up proper error tracking
-   Monitor API usage and costs

### Mobile

-   Test on actual devices
-   Large files may cause memory issues
-   Consider file size warnings
-   Optimize for touch interfaces

## Next Steps

After setup:

1. ✅ Test with a sample PDF
2. ✅ Customize settings to your needs
3. ✅ Adjust prompts for your use case
4. ✅ Share with users
5. ✅ Monitor API usage
6. ✅ Gather feedback

## Getting Help

If you encounter issues:

1. Check browser console (F12) for errors
2. Review this setup guide
3. Check the FAQ page
4. Search GitHub issues
5. Contact support

## Additional Resources

-   **PDF.js Documentation**: https://mozilla.github.io/pdf.js/
-   **jsPDF Documentation**: https://github.com/parallax/jsPDF
-   **Gemini API Docs**: https://ai.google.dev/docs
-   **Google AI Studio**: https://aistudio.google.com/

---

Happy converting! 🎉
