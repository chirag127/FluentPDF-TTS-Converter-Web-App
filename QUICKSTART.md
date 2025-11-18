# Quick Start Guide

Get up and running with Spokable PDF Converter in 5 minutes!

## ⚡ Super Quick Start

1. **Open the website** (locally or deployed)
2. **Get API key** from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. **Enter API key** on homepage
4. **Upload a PDF** (start with a small one, 1-5 pages)
5. **Click "Convert PDF"**
6. **Wait** for processing (watch the progress bar)
7. **Download** your spokable PDF!

That's it! 🎉

## 📋 Detailed Steps

### Step 1: Access the Website

**Option A: Test Locally**

```bash
# Navigate to project folder
cd spokable-pdf-converter

# Start a local server (choose one):
python -m http.server 8000
# OR
npx http-server
# OR
php -S localhost:8000

# Open browser to:
http://localhost:8000
```

**Option B: Deploy First**

-   See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options
-   Recommended: Netlify (drag & drop)

### Step 2: Get Your API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Get API Key" or "Create API Key"
4. Choose "Create API key in new project"
5. Copy the generated key (looks like: `AIzaSy...`)

**Important**: Keep this key private!

### Step 3: Configure the App

1. On the homepage, find the "Google AI Studio API Key" field
2. Paste your API key
3. Click the eye icon to verify it's correct
4. The key is automatically saved in your browser

### Step 4: Upload Your First PDF

**For Testing**: Use a small PDF (1-5 pages) first!

1. Click "Select PDF File"
2. Choose a PDF with extractable text (not scanned images)
3. File info will appear showing name and size

**Good Test PDFs**:

-   Technical blog posts (1-2 pages)
-   Short tutorials (3-5 pages)
-   Documentation pages

**Avoid for First Test**:

-   Scanned documents (no extractable text)
-   Very large files (100+ pages)
-   Image-only PDFs

### Step 5: Choose Options

**Basic Options** (on homepage):

-   ✅ Convert code examples to natural language
-   ✅ Convert figures/images to descriptions
-   ✅ Optimize for text-to-speech clarity

**Model Selection**:

-   **Gemini 1.5 Flash** (recommended for first test)
    -   Fastest
    -   Most cost-effective
    -   Good quality

**Advanced Options** (optional):

-   Click "⚙️ Advanced Settings" to customize
-   Or use defaults for now

### Step 6: Convert!

1. Click the blue "Convert PDF" button
2. Watch the progress bar
3. See status updates:
    - Loading PDF...
    - Extracting text...
    - Processing with AI... (this takes the longest)
    - Generating PDF...
    - Complete!

**What's Happening**:

-   Text is extracted from your PDF
-   Split into batches if needed
-   Each batch sent to Gemini API
-   AI transforms text to natural language
-   New PDF is generated

**Time Estimates**:

-   1-5 pages: 1-2 minutes
-   10-20 pages: 3-5 minutes
-   50 pages: 5-10 minutes
-   200+ pages: 20-40 minutes

### Step 7: Download & Test

1. Click "Download Spokable PDF"
2. Open in your TTS app (Moon+ Reader Pro, etc.)
3. Listen and compare with original
4. Adjust settings if needed

## 🎯 Tips for Best Results

### 1. Start Small

-   Test with 1-5 page PDFs first
-   Verify quality before processing large books
-   Adjust settings based on results

### 2. Choose the Right Model

-   **Gemini 1.5 Flash**: Fast, cheap, good for most content
-   **Gemini 1.5 Pro**: Slower, pricier, better for complex technical content

### 3. Monitor API Usage

-   Free tier: 15 requests/minute (Flash), 2 requests/minute (Pro)
-   Check usage at: https://aistudio.google.com/
-   Set up billing alerts if using paid tier

### 4. Optimize Settings

Visit Settings page to:

-   Adjust batch size (larger = fewer API calls)
-   Modify prompts for your content type
-   Change temperature for more/less creativity
-   Customize PDF output format

### 5. Handle Large Books

-   Be patient (200-page book = 20-40 minutes)
-   Keep browser tab open
-   Don't refresh during processing
-   Consider splitting very large books

## 🔧 Troubleshooting

### "Invalid API Key"

-   ✅ Copy entire key from Google AI Studio
-   ✅ Remove any spaces before/after
-   ✅ Try generating a new key
-   ✅ Check API is enabled in Google Cloud

### "Failed to Load PDF"

-   ✅ Ensure PDF has extractable text (not scanned)
-   ✅ Try a different PDF
-   ✅ Check file isn't corrupted
-   ✅ Verify file is actually a PDF

### "Rate Limit Exceeded"

-   ✅ Wait 60 seconds (app does this automatically)
-   ✅ Free tier: 15 requests/minute
-   ✅ Consider upgrading to paid tier
-   ✅ Reduce batch size in settings

### Processing Stuck

-   ✅ Check browser console (F12) for errors
-   ✅ Verify internet connection
-   ✅ Refresh and try again
-   ✅ Try a smaller file first

### Download Not Working

-   ✅ Check browser's download settings
-   ✅ Allow pop-ups for the site
-   ✅ Try a different browser
-   ✅ Check available disk space

## 📱 Mobile Usage

**Works on mobile but with limitations**:

-   ✅ Small PDFs (< 10 pages) work well
-   ⚠️ Large PDFs may cause memory issues
-   ⚠️ Processing may be slower
-   💡 Tip: Use desktop for large books

## 🎓 Example Workflow

### Converting a Programming Book

1. **Prepare**

    - Get API key
    - Open website
    - Have book PDF ready

2. **Test First**

    - Convert just Chapter 1 (5-10 pages)
    - Listen to result
    - Adjust settings if needed

3. **Customize**

    - Go to Settings
    - Increase temperature if output too rigid
    - Adjust code description prompt
    - Save settings

4. **Convert Full Book**

    - Upload complete PDF
    - Start conversion
    - Go do something else (20-40 min)
    - Come back to download

5. **Use Result**
    - Load into Moon+ Reader Pro
    - Enable TTS
    - Listen while reading physical book
    - Enjoy comprehensible audio!

## 💰 Cost Estimate

**Free Tier** (sufficient for testing):

-   15 requests/minute (Flash)
-   Plenty for personal use

**Typical Costs** (if exceeding free tier):

-   50-page book: $0.01 - $0.05
-   200-page book: $0.05 - $0.20
-   500-page book: $0.10 - $0.50

**Check current pricing**: https://ai.google.dev/pricing

## 🎉 Success Checklist

After your first successful conversion:

-   ✅ API key saved and working
-   ✅ PDF converted successfully
-   ✅ Output is readable and natural
-   ✅ TTS sounds comprehensible
-   ✅ Settings adjusted to preference
-   ✅ Ready for larger documents

## 📚 Next Steps

1. **Explore Settings**

    - Customize prompts
    - Adjust parameters
    - Fine-tune output

2. **Try Different Content**

    - Technical books
    - Research papers
    - Documentation

3. **Share Feedback**

    - What works well?
    - What could be better?
    - Feature requests?

4. **Read Documentation**
    - [README.md](README.md) - Full documentation
    - [FAQ](faq.html) - Common questions
    - [SETUP.md](SETUP.md) - Detailed setup

## 🆘 Need Help?

-   📖 Check [FAQ page](faq.html)
-   🧪 Run [test.html](test.html) to verify setup
-   📧 Contact via [contact page](contact.html)
-   🐛 Report issues on GitHub

## 🎊 You're Ready!

You now know everything needed to convert PDFs to spokable format. Start with a small test file and work your way up to full books. Happy listening! 🎧

---

**Pro Tip**: Bookmark the website and keep your API key saved for quick access next time!
