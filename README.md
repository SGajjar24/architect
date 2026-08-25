# VastuCraft AI Studio 🏗️✨

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://betaversion1.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)

> **Where Ancient Wisdom Meets Future Tech.**
> A modern React application for a hybrid architecture studio that blends Vastu Shastra principles with AI-driven construction monitoring.

---

## 📖 Documentation

We have prepared detailed documentation for developers and content managers:

*   👉 **[User & Developer Guide](docs/USER_GUIDE.md)**: Includes diagrams, customization instructions (Logo, Images, Colors), and API setup.

---

## 🌟 Key Features

### 🏛️ Architectural Excellence
- **Portfolio Showcase**: Filterable gallery of high-resolution project images.
- **Service Breakdowns**: Detailed pages for Architecture, Interior Design, and Facade works.

### 🔮 Vastu Shastra Integration
- **Educational Content**: Interactive 5-Elements guide.
- **AI-Powered Chat**: Integrated **Gemini 2.5 Flash** chatbot via secure serverless proxy.

### 🤖 AI Construction Tech
- **Computer Vision Demos**: Visualization of safety gear detection (PPE) and defect analysis.
- **Performance**: Optimized with Vite manual chunking for fast load times.

---

## 🚀 Quick Start

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/vastucraft-ai.git
    cd vastucraft-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file:
    ```env
    # For Local Dev (Serverless functions require Vercel CLI or similar proxy locally)
    API_KEY=your_gemini_key
    VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

## 📦 Deployment

This project is optimized for **Vercel**.

1.  Connect your repository to Vercel.
2.  Add Environment Variables in the Vercel Dashboard.
3.  Deploy.

See [docs/USER_GUIDE.md](docs/USER_GUIDE.md) for full deployment details.

---

## 🛡️ Security

*   **Headers**: Security headers configured in `vercel.json`.
*   **API Security**: The Chatbot API key is never exposed to the client; it lives in a serverless function (`api/chat.js`).
*   **Bot Protection**: `robots.txt` is configured to allow SEO bots but block AI scrapers.

---

© 2024 VastuCraft AI Studio. All Rights Reserved.