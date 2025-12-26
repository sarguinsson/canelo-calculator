# 🎄 Christmas Caneló Calculator 🍝

A festive web application to calculate the caloric content of your Christmas cannelloni (canelons)!

## Features

- 🥩 **Meat Canelons** - Traditional beef and pork filling (320 cal/unit)
- 🐟 **Fish Canelons** - Fresh seafood and white fish (250 cal/unit)
- 🥬 **Vegetable Canelons** - Spinach, ricotta, and mushrooms (180 cal/unit)
- 🎄 Christmas-themed design with animated snowflakes
- 📊 Real-time calorie tracking
- 📱 Responsive design for all devices

## Live Demo

The application is deployed on GitHub Pages and can be accessed at:
**https://sarguinsson.github.io/canelo-calculator/**

## Local Development

### Option 1: Direct Browser Access (Development)
Simply open `index.html` in your web browser - no build process required!

```bash
# Clone the repository
git clone https://github.com/sarguinsson/canelo-calculator.git
cd canelo-calculator

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 2: Simple HTTP Server (Production-like)
For a production-like environment, use any simple HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Access at http://localhost:8080
```

## Deployment to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed GitHub Pages deployment instructions.

### Quick Deploy

The site automatically deploys to GitHub Pages when you push to the `main` branch. Just ensure GitHub Pages is enabled in your repository settings (Settings > Pages > Source: GitHub Actions).

Your site will be available at: `https://sarguinsson.github.io/canelo-calculator/`

## Technology Stack

- Pure HTML5, CSS3, and Vanilla JavaScript for the frontend
- CSS3 with animations
- Vanilla JavaScript (no frameworks)
- GitHub Pages for hosting

## Project Structure

```
canelo-calculator/
├── index.html          # Main application page
├── styles.css          # Christmas-themed styling
├── script.js           # Calculator logic
├── DEPLOYMENT.md       # GitHub Pages deployment guide
└── .github/
    └── workflows/
        └── github-pages.yml  # GitHub Actions workflow for deployment
```

## Usage

1. Select the type of canelon you want to add
2. Click the "Add" button to add it to your plate
3. View real-time calorie calculations
4. Remove individual items or clear all at once

## License

MIT

## Merry Christmas! 🎅🎄
