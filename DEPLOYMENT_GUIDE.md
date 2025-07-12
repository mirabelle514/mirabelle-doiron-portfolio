# GoDaddy cPanel Deployment Guide

## Prerequisites

- GoDaddy hosting account with cPanel access
- Domain name configured
- File Manager access in cPanel

## Deployment Steps

### 1. Prepare Your Files

The production build is ready in the `build/` folder. This contains:

- `index.html` - Main HTML file
- `static/` - CSS and JavaScript files
- `.htaccess` - Apache configuration for React routing
- `manifest.json` - PWA manifest
- `robots.txt` - SEO configuration

### 2. Access cPanel

1. Log into your GoDaddy account
2. Navigate to your hosting control panel
3. Click on "cPanel" or "Web Hosting Control Panel"

### 3. Upload Files via File Manager

1. In cPanel, find and click "File Manager"
2. Navigate to the `public_html` folder (or your domain's root directory)
3. **Important**: If you have existing files, backup them first
4. Upload all contents from the `build/` folder to `public_html/`

### 4. Alternative: Upload via FTP

If File Manager is slow, use FTP:

1. In cPanel, go to "FTP Accounts"
2. Create or use existing FTP credentials
3. Use an FTP client (FileZilla, Cyberduck, etc.)
4. Connect to your server and upload build contents to `public_html/`

### 5. Verify .htaccess File

Ensure the `.htaccess` file is uploaded and contains the React routing rules. This file is crucial for:

- Handling React Router navigation
- Enabling compression for better performance
- Setting security headers
- Configuring browser caching

### 6. Test Your Site

1. Visit your domain name in a browser
2. Test navigation between sections
3. Verify all links work properly
4. Check mobile responsiveness

## Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**: Ensure `.htaccess` file is uploaded
2. **Slow Loading**: Check if compression is enabled in `.htaccess`
3. **Broken Links**: Verify all files uploaded to correct location
4. **Styling Issues**: Clear browser cache and check CSS files

### Performance Optimization:

- The build includes minified CSS and JavaScript
- `.htaccess` enables gzip compression
- Browser caching is configured for static assets
- Security headers are set for protection

## File Structure on Server

```jsx
public_html/
├── index.html
├── .htaccess
├── manifest.json
├── robots.txt
├── logo192.png
├── logo512.png
└── static/
    ├── css/
    │   └── main.[hash].css
    └── js/
        ├── main.[hash].js
        └── [chunk].[hash].js
```

## Support

If you encounter issues:

1. Check cPanel error logs
2. Verify file permissions (644 for files, 755 for folders)
3. Ensure all files uploaded completely
4. Contact GoDaddy support if needed

Your portfolio should now be live and accessible at your domain! 