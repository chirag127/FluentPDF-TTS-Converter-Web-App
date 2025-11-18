# File Structure Reference

Complete directory structure of the Spokable PDF Converter project.

```
spokable-pdf-converter/
│
├── 📄 index.html                    # Main conversion page (homepage)
├── 📄 about.html                    # About page - project info
├── 📄 faq.html                      # FAQ page with API key help
├── 📄 settings.html                 # Advanced settings page
├── 📄 contact.html                  # Contact form page
├── 📄 privacy.html                  # Privacy policy
├── 📄 terms.html                    # Terms of service
├── 📄 test.html                     # Library testing page
│
├── 📁 css/
│   └── 📄 styles.css                # All styles (responsive, modern)
│
├── 📁 js/
│   ├── 📄 config.js                 # Configuration & defaults
│   ├── 📄 gemini-api.js             # Gemini API client
│   ├── 📄 pdf-processor.js          # PDF processing logic
│   ├── 📄 main.js                   # Main app logic
│   ├── 📄 settings.js               # Settings page logic
│   └── 📄 contact.js                # Contact form logic
│
├── 📄 README.md                     # Main documentation
├── 📄 QUICKSTART.md                 # 5-minute quick start
├── 📄 SETUP.md                      # Setup instructions
├── 📄 DEPLOYMENT.md                 # Deployment guide
├── 📄 PROJECT_OVERVIEW.md           # Technical overview
├── 📄 SUMMARY.md                    # Project summary
├── 📄 FILE_STRUCTURE.md             # This file
│
├── 📄 .gitignore                    # Git ignore rules
├── 📄 package.json                  # NPM config (optional)
└── 📄 LICENSE                       # MIT License
```

## 📋 File Descriptions

### HTML Pages (8 files)

#### index.html (Main Page)

-   **Purpose**: Primary conversion interface
-   **Features**:
    -   API key input with visibility toggle
    -   PDF file upload
    -   Conversion options (code, figures, TTS)
    -   Model selection dropdown
    -   Progress tracking
    -   Download button
    -   Feature showcase
-   **Links to**: All other pages via navigation

#### about.html

-   **Purpose**: Project information
-   **Content**:
    -   Mission statement
    -   How it works (5 steps)
    -   Key features
    -   Privacy & security info
    -   Technology stack
    -   Use cases
-   **Audience**: New users wanting to learn more

#### faq.html

-   **Purpose**: Frequently asked questions
-   **Content**:
    -   How to get API key (detailed)
    -   Security information
    -   File size limits
    -   Scanned PDF support
    -   Cost information
    -   Model selection guide
    -   Customization options
    -   Processing times
    -   Error handling
    -   Offline usage
    -   Browser support
-   **Audience**: Users with questions

#### settings.html

-   **Purpose**: Advanced customization
-   **Features**:
    -   Prompt template editing (4 types)
    -   Batch processing settings
    -   Model parameters (temperature, topP, topK)
    -   Transformation rules toggles
    -   PDF output settings
    -   MCP integration config
    -   Save/reset/import/export buttons
-   **Audience**: Power users, developers

#### contact.html

-   **Purpose**: User communication
-   **Features**:
    -   Contact form (name, email, subject, message)
    -   Alternative contact methods
    -   Links to community resources
-   **Note**: Form is client-side only (no backend)

#### privacy.html

-   **Purpose**: Privacy policy
-   **Content**:
    -   Data collection (none)
    -   File handling
    -   API key storage
    -   Third-party services
    -   Cookies and localStorage
    -   Analytics (none)
    -   Security practices
-   **Compliance**: GDPR-friendly

#### terms.html

-   **Purpose**: Terms of service
-   **Content**:
    -   Service description
    -   User responsibilities
    -   Acceptable use policy
    -   Intellectual property
    -   Third-party services
    -   Disclaimers
    -   Liability limitations
    -   API costs
    -   Copyright notice
-   **Legal**: Standard terms

#### test.html

-   **Purpose**: Library verification
-   **Features**:
    -   PDF.js loading test
    -   jsPDF loading test
    -   Configuration test
    -   Optional API connection test
    -   Visual pass/fail indicators
-   **Audience**: Developers, troubleshooting

### CSS (1 file)

#### styles.css

-   **Size**: ~500 lines
-   **Features**:
    -   CSS custom properties (variables)
    -   Responsive grid layouts
    -   Mobile-first design
    -   Smooth animations
    -   Modern card-based UI
    -   Form styling
    -   Button variants
    -   Progress bars
    -   Tooltips
    -   Footer styling
-   **Breakpoints**: 768px (mobile/tablet)

### JavaScript (6 files)

#### config.js

-   **Size**: ~200 lines
-   **Classes**:
    -   `ConfigManager` - Settings management
    -   `ApiKeyManager` - API key storage
-   **Functions**:
    -   `estimateTokens()` - Token counting
    -   `splitTextIntoBatches()` - Text batching
-   **Exports**: Global instances

#### gemini-api.js

-   **Size**: ~150 lines
-   **Classes**:
    -   `GeminiAPI` - API client
    -   `RateLimiter` - Rate limiting
    -   `ProgressTracker` - Progress updates
-   **Features**:
    -   REST API calls
    -   Retry with backoff
    -   Rate limiting
    -   Error handling

#### pdf-processor.js

-   **Size**: ~200 lines
-   **Classes**:
    -   `PDFProcessor` - PDF handling
    -   `PDFGenerator` - PDF creation
-   **Features**:
    -   Text extraction
    -   Batch processing
    -   Batch combining
    -   PDF generation

#### main.js

-   **Size**: ~250 lines
-   **Purpose**: Main application logic
-   **Features**:
    -   UI event handlers
    -   Conversion workflow
    -   Progress updates
    -   Error handling
    -   State management

#### settings.js

-   **Size**: ~150 lines
-   **Purpose**: Settings page logic
-   **Features**:
    -   Load/save settings
    -   Reset to defaults
    -   Import/export
    -   Form validation
    -   UI updates

#### contact.js

-   **Size**: ~50 lines
-   **Purpose**: Contact form handling
-   **Features**:
    -   Form submission
    -   Validation
    -   User feedback
-   **Note**: Client-side only

### Documentation (7 files)

#### README.md

-   **Size**: ~400 lines
-   **Audience**: All users
-   **Content**:
    -   Project overview
    -   Features
    -   Setup instructions
    -   Usage guide
    -   API information
    -   Troubleshooting
    -   FAQ
    -   Contributing

#### QUICKSTART.md

-   **Size**: ~300 lines
-   **Audience**: New users
-   **Content**:
    -   5-minute setup
    -   Step-by-step guide
    -   Tips for success
    -   Troubleshooting
    -   Example workflow

#### SETUP.md

-   **Size**: ~350 lines
-   **Audience**: Developers
-   **Content**:
    -   Library installation
    -   CDN vs self-hosted
    -   API key setup
    -   Local testing
    -   Troubleshooting

#### DEPLOYMENT.md

-   **Size**: ~400 lines
-   **Audience**: Developers
-   **Content**:
    -   Deployment options
    -   Platform guides
    -   Custom domains
    -   Testing checklist
    -   Monitoring

#### PROJECT_OVERVIEW.md

-   **Size**: ~500 lines
-   **Audience**: Developers
-   **Content**:
    -   Architecture
    -   Technical details
    -   Data flow
    -   API integration
    -   Performance
    -   Security

#### SUMMARY.md

-   **Size**: ~300 lines
-   **Audience**: All
-   **Content**:
    -   What's included
    -   Features implemented
    -   File statistics
    -   Deployment status
    -   Next steps

#### FILE_STRUCTURE.md

-   **Size**: This file
-   **Audience**: Developers
-   **Content**: Directory structure reference

### Configuration Files

#### .gitignore

-   **Purpose**: Git exclusions
-   **Excludes**:
    -   OS files (.DS_Store, Thumbs.db)
    -   Editor files (.vscode, .idea)
    -   Logs
    -   Dependencies (if using npm)
    -   Temporary files
    -   User PDFs

#### package.json

-   **Purpose**: NPM configuration (optional)
-   **Scripts**:
    -   `start` - Run local server
    -   `test` - Test instructions
-   **Note**: No dependencies required

#### LICENSE

-   **Type**: MIT License
-   **Permissions**: Free to use, modify, distribute
-   **Conditions**: Include license and copyright

## 📊 Statistics

### By Type

-   **HTML**: 8 files (~2,000 lines)
-   **CSS**: 1 file (~500 lines)
-   **JavaScript**: 6 files (~1,000 lines)
-   **Markdown**: 7 files (~2,500 lines)
-   **Config**: 3 files (~50 lines)

### Total

-   **Files**: 25
-   **Lines of Code**: ~6,000+
-   **Size**: < 500 KB (excluding libraries)

## 🔗 File Dependencies

### HTML Dependencies

```
index.html
├── css/styles.css
├── js/config.js
├── js/gemini-api.js
├── js/pdf-processor.js
└── js/main.js

settings.html
├── css/styles.css
├── js/config.js
└── js/settings.js

contact.html
├── css/styles.css
└── js/contact.js

test.html
├── css/styles.css
├── js/config.js
└── js/gemini-api.js
```

### JavaScript Dependencies

```
main.js
├── config.js (ConfigManager, ApiKeyManager)
├── gemini-api.js (GeminiAPI, RateLimiter, ProgressTracker)
└── pdf-processor.js (PDFProcessor, PDFGenerator)

settings.js
└── config.js (ConfigManager)

contact.js
└── (no dependencies)
```

### External Dependencies (CDN)

```
All HTML pages
├── PDF.js (v3.11.174)
│   ├── pdf.min.js
│   └── pdf.worker.min.js
└── jsPDF (v2.5.1)
    └── jspdf.umd.min.js
```

## 📝 File Naming Conventions

### HTML Files

-   Lowercase with hyphens (kebab-case)
-   Descriptive names
-   `.html` extension

### CSS Files

-   Lowercase with hyphens
-   Descriptive names
-   `.css` extension

### JavaScript Files

-   Lowercase with hyphens
-   Module-based naming
-   `.js` extension

### Documentation Files

-   UPPERCASE for main docs
-   `.md` extension
-   Descriptive names

## 🎯 Quick Reference

### Need to...

**Modify UI?**
→ Edit HTML files + `css/styles.css`

**Change functionality?**
→ Edit `js/*.js` files

**Update settings?**
→ Edit `js/config.js` (defaults) or use Settings page

**Add documentation?**
→ Create new `.md` file or edit existing

**Deploy?**
→ Upload all files to hosting (see DEPLOYMENT.md)

**Test?**
→ Open `test.html` in browser

**Customize prompts?**
→ Use Settings page or edit `js/config.js`

## 🔍 Finding Things

### Looking for...

**API integration?**
→ `js/gemini-api.js`

**PDF processing?**
→ `js/pdf-processor.js`

**Configuration?**
→ `js/config.js`

**Main logic?**
→ `js/main.js`

**Styling?**
→ `css/styles.css`

**Setup help?**
→ `SETUP.md` or `QUICKSTART.md`

**Deployment help?**
→ `DEPLOYMENT.md`

**Technical details?**
→ `PROJECT_OVERVIEW.md`

## ✅ Checklist for Modifications

When modifying files:

-   [ ] Update related documentation
-   [ ] Test in multiple browsers
-   [ ] Check mobile responsiveness
-   [ ] Verify no console errors
-   [ ] Update version in package.json
-   [ ] Update changelog (if exists)
-   [ ] Test with sample PDF
-   [ ] Verify API still works

---

**This structure is designed for easy navigation and maintenance!**
