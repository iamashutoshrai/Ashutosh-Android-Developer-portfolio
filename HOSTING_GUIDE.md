# Portfolio Hosting Guide

This guide covers multiple free hosting options for your portfolio website.

## 🚀 Option 1: Netlify (Recommended - Easiest)

Netlify is the easiest option with automatic deployments from GitHub.

### Steps:

1. **Create a GitHub repository:**
   ```bash
   cd /Users/ashutosh/Desktop/portfolio
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub (github.com)
   - Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login (free with GitHub)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your portfolio repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"
   - Your site will be live in 1-2 minutes!

4. **Custom Domain (Optional):**
   - In Netlify dashboard → Site settings → Domain management
   - Add your custom domain (e.g., ashutoshrai.dev)

**Pros:** Free, automatic deployments, custom domain support, HTTPS by default

---

## ⚡ Option 2: Vercel (Also Very Easy)

Vercel is great for React apps and offers similar features to Netlify.

### Steps:

1. **Push to GitHub** (same as Netlify steps 1-2)

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your portfolio repository
   - Settings (auto-detected):
     - Framework Preset: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"
   - Your site will be live instantly!

**Pros:** Free, fast, automatic deployments, great for React apps

---

## 📦 Option 3: GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Install gh-pages package:**
   ```bash
   cd /Users/ashutosh/Desktop/portfolio
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines to your `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Select "gh-pages" branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/portfolio`

**Pros:** Free, integrated with GitHub, easy updates

---

## 🌐 Option 4: Manual Deployment (Any Static Host)

If you prefer manual control:

1. **Build your site:**
   ```bash
   cd /Users/ashutosh/Desktop/portfolio
   npm install
   npm run build
   ```

2. **Upload the `build` folder:**
   - Upload contents of the `build` folder to any static hosting service:
     - Firebase Hosting
     - AWS S3 + CloudFront
     - Cloudflare Pages
     - Surge.sh
     - Any web hosting service

---

## 🔧 Quick Comparison

| Platform | Difficulty | Free Tier | Custom Domain | Auto Deploy |
|----------|-----------|-----------|---------------|-------------|
| **Netlify** | ⭐ Easy | ✅ Yes | ✅ Yes | ✅ Yes |
| **Vercel** | ⭐ Easy | ✅ Yes | ✅ Yes | ✅ Yes |
| **GitHub Pages** | ⭐⭐ Medium | ✅ Yes | ✅ Yes | ⚠️ Manual |
| **Firebase** | ⭐⭐ Medium | ✅ Yes | ✅ Yes | ⚠️ Manual |

---

## 📝 Recommended: Netlify or Vercel

Both are excellent choices. I recommend **Netlify** or **Vercel** because:
- ✅ Zero configuration needed
- ✅ Automatic deployments on every git push
- ✅ Free SSL/HTTPS
- ✅ Custom domain support
- ✅ Fast global CDN
- ✅ Free tier is very generous

---

## 🎯 Next Steps After Hosting

1. **Update social links** in `src/components/Header.jsx` with your actual URLs
2. **Add Google Analytics** (optional) for visitor tracking
3. **Set up a custom domain** for a professional look
4. **Share your portfolio** on LinkedIn, GitHub, etc.

---

## ❓ Troubleshooting

**Build fails?**
- Make sure all dependencies are in `package.json`
- Check that `npm install` runs without errors
- Verify Node.js version (14+)

**Site not updating?**
- Clear browser cache
- Check build logs in hosting dashboard
- Ensure latest code is pushed to GitHub

**Need help?**
- Check hosting platform documentation
- Review build logs for error messages

