# Deployment Guide

This guide covers various deployment options for the Spokable PDF Converter.

## Prerequisites

-   All HTML, CSS, and JavaScript files
-   Libraries loaded via CDN (already configured)
-   No build process required
-   No server-side code needed

## Quick Deploy Options

### 1. GitHub Pages (Free, Recommended)

**Steps:**

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select branch (usually `main`) and root folder
6. Click Save
7. Wait 1-2 minutes for deployment
8. Access at: `https://yourusername.github.io/repository-name/`

**Pros:**

-   Free hosting
-   Automatic HTTPS
-   Easy updates via Git
-   Good performance

**Cons:**

-   Public repositories only (for free tier)
-   Limited to static sites

### 2. Netlify (Free, Very Easy)

**Steps:**

1. Sign up at https://netlify.com
2. Drag and drop your project folder onto the Netlify dashboard
3. Wait for deployment (usually < 1 minute)
4. Get a free subdomain: `yoursite.netlify.app`
5. (Optional) Add custom domain

**Pros:**

-   Extremely easy deployment
-   Automatic HTTPS
-   Continuous deployment from Git
-   Free tier is generous
-   Built-in forms (for contact page)

**Cons:**

-   None for this use case

**Alternative: Deploy from Git**

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Configure build settings (none needed)
4. Deploy automatically on every push

### 3. Vercel (Free, Fast)

**Steps:**

1. Sign up at https://vercel.com
2. Click "New Project"
3. Import from Git or upload files
4. Configure (no build settings needed)
5. Deploy
6. Get a free subdomain: `yoursite.vercel.app`

**Pros:**

-   Very fast CDN
-   Automatic HTTPS
-   Great performance
-   Easy Git integration

**Cons:**

-   None for this use case

### 4. Cloudflare Pages (Free, Global CDN)

**Steps:**

1. Sign up at https://pages.cloudflare.com
2. Connect your Git repository
3. Configure build settings:
    - Build command: (leave empty)
    - Build output directory: `/`
4. Deploy
5. Get a free subdomain: `yoursite.pages.dev`

**Pros:**

-   Cloudflare's global CDN
-   Excellent performance
-   Automatic HTTPS
-   DDoS protection

**Cons:**

-   Requires Git repository

### 5. Firebase Hosting (Free)

**Steps:**

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Select or create project
5. Set public directory to current folder
6. Configure as single-page app: No
7. Deploy: `firebase deploy`

**Pros:**

-   Google infrastructure
-   Fast global CDN
-   Free SSL
-   Good analytics

**Cons:**

-   Requires Firebase CLI
-   More complex setup

## Traditional Hosting

### Shared Hosting (cPanel, Plesk)

**Steps:**

1. Get hosting account (many providers available)
2. Access cPanel or file manager
3. Upload files to `public_html` or `www` folder
4. Access via your domain

**Popular Providers:**

-   Bluehost
-   HostGator
-   SiteGround
-   DreamHost
-   Namecheap

**Pros:**

-   Full control
-   Can add backend later
-   Often includes email

**Cons:**

-   Costs money ($3-10/month)
-   More complex management

### AWS S3 + CloudFront

**Steps:**

1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Set bucket policy for public read:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

5. (Optional) Create CloudFront distribution for HTTPS and CDN
6. Access via S3 URL or CloudFront URL

**Pros:**

-   Highly scalable
-   Pay only for what you use
-   Professional solution

**Cons:**

-   More complex setup
-   Costs money (usually < $1/month for low traffic)
-   Requires AWS knowledge

## Custom Domain Setup

### For Netlify/Vercel/Cloudflare Pages

1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. Go to your hosting dashboard
3. Add custom domain
4. Update DNS records at your registrar:
    - Add CNAME record pointing to hosting provider
    - Or use nameservers provided by hosting
5. Wait for DNS propagation (up to 48 hours, usually < 1 hour)
6. HTTPS certificate is automatically provisioned

### For GitHub Pages

1. Add CNAME file to repository root with your domain
2. Update DNS at registrar:
    - Add CNAME record: `www` → `yourusername.github.io`
    - Add A records for apex domain:
        - 185.199.108.153
        - 185.199.109.153
        - 185.199.110.153
        - 185.199.111.153
3. Enable HTTPS in GitHub Pages settings

## Post-Deployment Checklist

After deploying, verify:

-   ✅ All pages load correctly
-   ✅ Navigation works
-   ✅ CSS styles are applied
-   ✅ JavaScript files load without errors
-   ✅ PDF upload works
-   ✅ API key can be entered and saved
-   ✅ Test conversion with small PDF
-   ✅ Download works
-   ✅ Settings page functions
-   ✅ Mobile responsive design works
-   ✅ HTTPS is enabled
-   ✅ No console errors (F12)

## Testing Checklist

### Functionality Tests

1. **Homepage**

    - [ ] API key input works
    - [ ] API key visibility toggle works
    - [ ] File upload works
    - [ ] File info displays
    - [ ] Options checkboxes work
    - [ ] Model selection works
    - [ ] Convert button enables/disables correctly

2. **Conversion Process**

    - [ ] Progress bar updates
    - [ ] Status messages display
    - [ ] Batch processing works
    - [ ] Error handling works
    - [ ] Success message shows
    - [ ] Download button works

3. **Settings Page**

    - [ ] All settings load correctly
    - [ ] Settings can be modified
    - [ ] Save settings works
    - [ ] Reset to defaults works
    - [ ] Export settings works
    - [ ] Import settings works

4. **Other Pages**
    - [ ] About page loads
    - [ ] FAQ page loads
    - [ ] Contact form works
    - [ ] Privacy policy loads
    - [ ] Terms page loads

### Browser Tests

Test in multiple browsers:

-   [ ] Chrome/Edge
-   [ ] Firefox
-   [ ] Safari
-   [ ] Mobile Chrome
-   [ ] Mobile Safari

### Performance Tests

-   [ ] Small PDF (1-5 pages) converts quickly
-   [ ] Medium PDF (50 pages) converts successfully
-   [ ] Large PDF (200+ pages) handles batching
-   [ ] No memory leaks during long processing
-   [ ] Rate limiting works correctly

## Monitoring & Maintenance

### Monitor API Usage

1. Visit Google AI Studio: https://aistudio.google.com/
2. Check usage dashboard
3. Set up billing alerts if using paid tier
4. Monitor for unusual activity

### Update Libraries

Periodically check for updates:

-   PDF.js: https://github.com/mozilla/pdf.js/releases
-   jsPDF: https://github.com/parallax/jsPDF/releases

Update CDN links in HTML files if needed.

### User Feedback

-   Monitor contact form submissions
-   Check for common issues
-   Gather feature requests
-   Update FAQ based on questions

## Troubleshooting Deployment

### Site Not Loading

1. Check DNS settings
2. Verify files uploaded correctly
3. Check for index.html in root
4. Clear browser cache
5. Check hosting service status

### JavaScript Errors

1. Open browser console (F12)
2. Check for 404 errors (missing files)
3. Verify CDN links are accessible
4. Check for CORS issues
5. Ensure all files are uploaded

### API Not Working

1. Verify API key is valid
2. Check Google AI Studio status
3. Test API directly with curl
4. Check browser network tab for errors
5. Verify HTTPS is enabled (required for some APIs)

### Performance Issues

1. Enable CDN if not already
2. Optimize images (if any added)
3. Enable compression on server
4. Use browser caching
5. Consider upgrading hosting

## Security Considerations

### Client-Side Security

-   ✅ No sensitive data stored on server
-   ✅ API keys stored in localStorage only
-   ✅ Direct API calls to Google
-   ✅ No backend to secure
-   ✅ HTTPS enforced

### Best Practices

1. Always use HTTPS
2. Keep libraries updated
3. Validate user input
4. Handle errors gracefully
5. Don't expose API keys in code
6. Use Content Security Policy headers (optional)

## Scaling Considerations

This is a client-side app, so scaling is mostly about:

1. **CDN**: Use hosting with good CDN (Netlify, Vercel, Cloudflare)
2. **Caching**: Enable browser caching for static assets
3. **API Limits**: Users manage their own API quotas
4. **Bandwidth**: Minimal since processing is client-side

## Cost Estimates

### Hosting Costs

-   **GitHub Pages**: Free
-   **Netlify**: Free (100GB bandwidth/month)
-   **Vercel**: Free (100GB bandwidth/month)
-   **Cloudflare Pages**: Free (unlimited bandwidth)
-   **Firebase**: Free (10GB storage, 360MB/day transfer)
-   **Shared Hosting**: $3-10/month
-   **AWS S3**: ~$0.50-2/month for low traffic

### API Costs (User Pays)

-   **Free Tier**: Sufficient for personal use
-   **Typical Usage**: $0.01-0.20 per book
-   **Heavy Usage**: Consider paid tier

## Support & Updates

### Keeping Users Informed

1. Add changelog to website
2. Announce updates on homepage
3. Email list for major changes (optional)
4. GitHub releases for version tracking

### Handling Issues

1. Monitor contact form
2. Check GitHub issues
3. Respond to user feedback
4. Update FAQ with common questions

---

## Quick Reference

**Easiest Deploy**: Netlify (drag & drop)
**Best Free Option**: GitHub Pages or Netlify
**Best Performance**: Cloudflare Pages or Vercel
**Most Control**: AWS S3 + CloudFront

Choose based on your needs and technical comfort level!
