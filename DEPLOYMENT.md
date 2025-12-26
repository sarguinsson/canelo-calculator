# GitHub Pages Deployment Guide for Caneló Calculator

## Automatic Deployment (Recommended)

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click on **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch:**
   ```bash
   git push origin main
   ```

3. **That's it!** GitHub Actions will automatically build and deploy your site.

### Accessing Your Site

After deployment, your app will be available at:
```
https://sarguinsson.github.io/canelo-calculator/
```

(Replace `sarguinsson` with your GitHub username if different)

## Manual Deployment

You can also trigger a deployment manually:

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** button
5. Select the branch (usually `main`)
6. Click **Run workflow**

## Files Included

- `index.html` - Main application
- `styles.css` - Christmas-themed styling
- `script.js` - Calculator logic
- `.github/workflows/github-pages.yml` - GitHub Actions workflow for automatic deployment

## Deployment Workflow

The GitHub Pages workflow (`.github/workflows/github-pages.yml`) automatically:
1. Checks out your code
2. Configures GitHub Pages
3. Uploads the site as an artifact
4. Deploys to GitHub Pages

## Local Development

No build process is required! Simply open `index.html` in your browser:

```bash
# Clone the repository
git clone https://github.com/sarguinsson/canelo-calculator.git
cd canelo-calculator

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## Benefits of GitHub Pages

- ✅ **Free hosting** for public repositories
- ✅ **Automatic HTTPS** with SSL certificate
- ✅ **Fast CDN delivery** worldwide
- ✅ **Zero configuration** for static sites
- ✅ **Integrated with GitHub** workflow
- ✅ **Automatic deployments** on push to main

## Features

- ✨ Christmas-themed design
- 🍝 Three types of canelons (Meat, Fish, Vegetable)
- 📊 Real-time calorie calculation
- 🎄 Animated snowflakes
- 📱 Responsive design

## Nutritional Values

- Meat Canelons: 320 cal/unit
- Fish Canelons: 250 cal/unit
- Vegetable Canelons: 180 cal/unit
