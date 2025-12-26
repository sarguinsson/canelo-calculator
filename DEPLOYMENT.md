# Azure Deployment Guide for Caneló Calculator

## Prerequisites
- Azure subscription: `2fee139e-3968-4ef0-8b60-5b05842d6c1b`
- Azure CLI installed

## Quick Deployment Steps

### Option 1: Using Azure CLI (Simplest)

1. **Login to Azure:**
   ```bash
   az login
   az account set --subscription 2fee139e-3968-4ef0-8b60-5b05842d6c1b
   ```

2. **Create Resource Group (if not exists):**
   ```bash
   az group create --name canelo-calculator-rg --location eastus
   ```

3. **Create App Service Plan:**
   ```bash
   az appservice plan create --name canelo-calculator-plan --resource-group canelo-calculator-rg --sku F1 --is-linux
   ```

4. **Create Web App:**
   ```bash
   az webapp create --name canelo-calculator --resource-group canelo-calculator-rg --plan canelo-calculator-plan --runtime "NODE:18-lts"
   ```

5. **Deploy the application:**
   ```bash
   az webapp up --name canelo-calculator --resource-group canelo-calculator-rg --html
   ```

### Option 2: Using Azure Portal

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new Web App
3. Select the subscription: `2fee139e-3968-4ef0-8b60-5b05842d6c1b`
4. Create or select a resource group
5. Configure:
   - Name: `canelo-calculator`
   - Publish: `Code`
   - Runtime stack: `HTML` or `Node.js`
   - Region: Choose closest to you
   - Pricing: `F1 (Free)` for testing
6. Deploy using:
   - FTP/WebDeploy
   - GitHub Actions (workflow included)
   - Local Git
   - Azure DevOps

### Option 3: GitHub Actions (Automated)

1. In Azure Portal, download the publish profile for your web app
2. Add it as a secret in GitHub:
   - Go to repository Settings > Secrets and variables > Actions
   - Create new secret: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Paste the publish profile content
3. Push to main branch - automatic deployment will trigger

## Files Included

- `index.html` - Main application
- `styles.css` - Christmas-themed styling
- `script.js` - Calculator logic
- `web.config` - IIS configuration for Azure
- `.github/workflows/azure-deploy.yml` - GitHub Actions workflow

## Application URL

After deployment, your app will be available at:
```
https://canelo-calculator.azurewebsites.net
```

(Replace `canelo-calculator` with your actual app name if different)

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
