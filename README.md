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

The application is deployed on Azure App Service and can be accessed at your Azure deployment URL.

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

### Option 2: Node.js Server (Production-like)
Run the built-in Node.js server to simulate the Azure deployment:

```bash
# Install dependencies (none required, but npm start will work)
npm start

# Access at http://localhost:8080
```

## Deployment to Azure

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed Azure deployment instructions.

### Quick Deploy

```bash
az login
az account set --subscription 2fee139e-3968-4ef0-8b60-5b05842d6c1b
az webapp up --name canelo-calculator --resource-group canelo-calculator-rg --html
```

## Technology Stack

- Pure HTML5, CSS3, and Vanilla JavaScript for the frontend
- Node.js HTTP server for Azure App Service deployment
- CSS3 with animations
- Vanilla JavaScript (no frameworks)
- Azure App Service for hosting

## Project Structure

```
canelo-calculator/
├── index.html          # Main application page
├── styles.css          # Christmas-themed styling
├── script.js           # Calculator logic
├── server.js           # Node.js server for Azure deployment
├── package.json        # Node.js project configuration
├── web.config          # Azure App Service IIS configuration
├── DEPLOYMENT.md       # Deployment guide
└── .github/
    └── workflows/
        └── azure-deploy.yml  # GitHub Actions workflow
```

## Usage

1. Select the type of canelon you want to add
2. Click the "Add" button to add it to your plate
3. View real-time calorie calculations
4. Remove individual items or clear all at once

## License

MIT

## Merry Christmas! 🎅🎄
