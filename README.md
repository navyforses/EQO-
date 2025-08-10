# EQO+ - Echo of Ages: Georgian History Chat

This is an AI-powered chat application that allows users to interact with famous historical figures from Georgia's rich history.

## Features

- Chat with historical Georgian figures
- Bilingual support (Georgian and English)
- Interactive UI with animations
- Powered by Google Gemini AI

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to GitHub Pages

To deploy this app to GitHub Pages with API functionality:

1. **Get a Gemini API Key** from [Google AI Studio](https://makersuite.google.com/app/apikey)

2. **Add the API Key to GitHub Secrets**:
   - Go to your repository Settings
   - Navigate to Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `GEMINI_API_KEY`
   - Value: Your actual Gemini API key

3. **The GitHub Actions workflow will automatically deploy** your site with the API key configured.

## Live Demo

Visit: https://navyforses.github.io/EQO-/
