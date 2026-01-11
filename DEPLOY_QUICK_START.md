# Quick Deploy Guide - 5 Minutes

## Fastest Way: Netlify

### Step 1: Push to GitHub (2 minutes)
```bash
cd /Users/ashutosh/Desktop/portfolio

# Initialize git (if not already done)
git init
git add .
git commit -m "Portfolio website"

# Create repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify (3 minutes)
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your `portfolio` repository
4. Click "Deploy site" (settings auto-detected)
5. Wait 1-2 minutes - your site is live! 🎉

**Your portfolio will be at:** `https://random-name-12345.netlify.app`

### Step 3: Custom Domain (Optional)
- In Netlify dashboard → Site settings → Domain management
- Add your custom domain

---

## Alternative: Vercel (Also 5 minutes)

1. Push to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy" - Done! ✅

---

That's it! Your portfolio is live and will auto-update whenever you push to GitHub.

For more details, see [HOSTING_GUIDE.md](./HOSTING_GUIDE.md)

