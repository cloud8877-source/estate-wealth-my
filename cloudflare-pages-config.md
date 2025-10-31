# Cloudflare Pages Deployment Guide for Estate Wealth MY

## Build Settings for Cloudflare Pages

### Required Configuration

**Build Command:**
```
npm run build
```

**Build Output Directory:**
```
out
```

**Node Version:**
```
18.x
```

### Environment Variables (Required in Cloudflare Dashboard)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev

# For Production (when ready)
# NEXT_PUBLIC_SITE_URL=https://estatewealthmy.com

# Mailchimp (Optional - for future integration)
MAILCHIMP_API_KEY=your-mailchimp-api-key
MAILCHIMP_SERVER_PREFIX=us21
MAILCHIMP_AUDIENCE_ID=your-audience-id

# Google Sheets (Optional - for future integration)
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email
GOOGLE_SHEETS_PRIVATE_KEY=your-private-key
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id

# Email Configuration (Optional - for future integration)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=info@estatewealthmy.com
ADMIN_EMAIL=admin@estatewealthmy.com
```

### Deployment Steps

1. **Connect GitHub Repository**
   - Go to Cloudflare Pages dashboard
   - Connect your GitHub account
   - Select the `cloud8877-source/estate-wealth-my` repository

2. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node version:** 18

3. **Set Environment Variables**
   - Add the environment variables above in the Cloudflare dashboard
   - Start with just `NEXT_PUBLIC_SITE_URL` for initial deployment

4. **Deploy**
   - Cloudflare will automatically deploy from the main branch
   - Monitor the build logs for any issues

### Custom Domain Setup (After Deployment)

1. **Add Custom Domain in Cloudflare**
   - Go to your Pages project → Custom domains
   - Add `estatewealthmy.com` (or your preferred domain)

2. **Update DNS Records**
   - Add a CNAME record pointing to your Cloudflare Pages URL
   - Or use Cloudflare's nameservers for automatic configuration

### Build Performance Optimization

**Recommended Build Settings:**
- **Build timeout:** 30 minutes (default)
- **Build concurrency:** 1 (default)
- **Build resources:** Standard (included in free tier)

### Troubleshooting Common Issues

**Build Fails:**
- Check Node version compatibility (use 18.x)
- Verify all dependencies are in package.json
- Check build logs for specific error messages

**Static Assets Not Loading:**
- Ensure `next.config.js` has proper image domains
- Verify build output directory is `.next`

**Environment Variables:**
- All environment variables must be prefixed with `NEXT_PUBLIC_` for client-side access
- Server-side variables should be set in Cloudflare's environment variables

### Next.js Specific Configuration

Your `next.config.js` is already optimized for Cloudflare:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optional: Enable static exports if needed
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig
```

### Monitoring and Analytics

After deployment:
1. Set up Cloudflare Analytics in your dashboard
2. Consider adding Google Analytics 4 for detailed tracking
3. Monitor performance metrics in Cloudflare's analytics

### Security Headers (Optional)

Add these headers in Cloudflare Pages for enhanced security:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Quick Start Deployment

1. **Push current code to GitHub** (already done)
2. **Connect to Cloudflare Pages** using the settings above
3. **Set environment variables** in Cloudflare dashboard
4. **Deploy and test** the live site
5. **Add custom domain** once verified working

Your Next.js 14 estate planning website with quiz funnel is ready for Cloudflare Pages deployment!
