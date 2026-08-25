# VastuCraft AI Studio - User & Developer Guide

## 📚 Table of Contents
1. [System Architecture](#system-architecture)
2. [Folder Structure](#folder-structure)
3. [Customization Guide](#customization-guide)
    - [Changing the Logo](#changing-the-logo)
    - [Updating Images & Resolutions](#updating-images--resolutions)
    - [Modifying Colors & Fonts](#modifying-colors--fonts)
    - [Updating Contact Info & Socials](#updating-contact-info--socials)
    - [Animation Settings](#animation-settings)
4. [API Configuration](#api-configuration)
    - [Vastu Chatbot (Gemini)](#vastu-chatbot-gemini)
    - [Contact Form (Web3Forms)](#contact-form-web3forms)
5. [Security & Deployment](#security--deployment)

---

## 1. System Architecture

The application is built using a modern **Jamstack** architecture designed for security and performance.

```mermaid
graph TD
    User[End User] -->|HTTPS| CDN[Vercel Edge Network]
    CDN -->|Serves Static Assets| Frontend[React SPA]
    
    subgraph Frontend
        Router[React Router]
        Pages[Pages: Home, Services, etc.]
        Components[UI Components]
    end
    
    User -->|Interacts| Components
    
    subgraph Backend_Services
        ChatAPI[Serverless Function /api/chat]
        Gemini[Google Gemini AI]
        FormAPI[Web3Forms]
    end
    
    Frontend -->|POST /api/chat| ChatAPI
    ChatAPI -->|Secure Request (Server-side Key)| Gemini
    Frontend -->|Form Submit| FormAPI
```

*   **Frontend**: React 18 with TypeScript and Tailwind CSS.
*   **Routing**: Client-side routing via `react-router-dom`.
*   **AI Logic**: Proxied through a Serverless Function (`api/chat.js`) to protect the API key from browser inspection.

---

## 2. Folder Structure

```
/
├── api/                  # Serverless functions (Backend logic)
│   └── chat.js           # Google Gemini AI handler (Secure)
├── components/           # Reusable UI blocks
│   ├── Logo.tsx          # Centralized Logo configuration
│   └── ...
├── pages/                # Main route views
├── services/             # Client-side API integration logic
├── docs/                 # Documentation
├── constants.ts          # CENTRAL CONFIG: Text, Image paths, Resolutions, Contact Info
├── index.html            # Main HTML entry point (SEO Meta tags here)
├── tailwind.config.js    # Styling configuration
└── vite.config.ts        # Build configuration (Manual chunking)
```

---

## 3. Customization Guide

### Changing the Logo

We have created a centralized `Logo` component to make this easy.

1.  Open **`components/Logo.tsx`**.
2.  You will see two sections in the code comments: "OPTION 1: IMAGE LOGO" and "OPTION 2: TEXT / ICON LOGO".
3.  **To use an Image:**
    *   Place your logo files (`logo-dark.png` and `logo-white.png`) in the `public/` folder.
    *   Uncomment Option 1.
    *   Comment out Option 2.
4.  **To use Text (Default):**
    *   Simply edit the text "VastuCraft" and "AI Studio" inside the JSX in Option 2.

### Updating Images & Resolutions

All image paths are managed centrally in `constants.ts`. This file now contains detailed comments recommending the exact resolution and aspect ratio for each image slot.

**Example from `constants.ts`:**
```typescript
// HERO BANNERS (Recommended: 1920x1080px, 16:9 Aspect Ratio)
HERO_ARCH: 'https://...',
```

**How to Change:**
1.  Place new image in `public/` folder (e.g., `new-hero.jpg`).
2.  Open `constants.ts`.
3.  Update the path:
    ```typescript
    export const IMAGES = {
      HERO_ARCH: '/new-hero.jpg', 
      // ...
    }
    ```

### Modifying Colors & Fonts

Theme settings are in `tailwind.config.js`.

*   **Colors**: Modify the `colors` object.
    *   `primary`: Main dark shade (Navbar, Footer).
    *   `secondary`: Brand accent (Buttons, Highlights).
*   **Fonts**: The app uses 'Outfit' (Sans) and 'Syne' (Serif). To change this, update the `fontFamily` section and ensure you import the new fonts in `index.html`.

### Updating Contact Info & Socials

All contact details and social media links are centralized in `constants.ts`.

1. Open `constants.ts`.
2. Locate the `CONTACT_INFO` or `SOCIAL_LINKS` objects.
3. Update the values as needed.

```typescript
export const CONTACT_INFO = {
  ADDRESS_LINE_1: "Science City Road",
  ADDRESS_LINE_2: "Ahmedabad, Gujarat 380060",
  PHONE: "+91-9104518311",
  PHONE_DISPLAY: "+91-9104518311",
  WHATSAPP_LINK: "https://wa.me/919104518311",
  EMAIL: "hello@vastucraftai.com",
};
```

**Note:** For SEO purposes, you must also manually update the `telephone`, `email`, `address`, and `sameAs` (social links) fields in the `application/ld+json` script block located in **`index.html`**.

### Animation Settings

Animations are controlled globally to ensure consistency.

*   **Speed**: Open `tailwind.config.js` and look for `transitionDuration: '1000ms'`. Change this value to make animations faster or slower.
*   **Style**: Open `components/Reveal.tsx`. You can adjust the `translateY(40px)` value to change how far elements slide up when they appear.

---

## 4. API Configuration

### Vastu Chatbot (Gemini)

The Chatbot logic is split for security:
1.  **Backend (`api/chat.js`)**: Holds the secret key and communicates with Google.
2.  **Frontend (`services/geminiService.ts`)**: Sends user message to the backend.

**To Change the API Endpoint:**
If you deploy your backend elsewhere, update the `fetch('/api/chat', ...)` URL in `services/geminiService.ts`.

**To Configure Keys:**
In Vercel (or your host), set the Environment Variable:
*   Key: `API_KEY`
*   Value: `your_google_gemini_api_key`

### Contact Form (Web3Forms)

The contact page sends emails directly via Web3Forms API.

**To Alter the Logic:**
Open `pages/Contact.tsx`. You can modify the `handleSubmit` function to send data to a different API (e.g., EmailJS or a custom server) by changing the `fetch` URL and payload.

---

## 5. Security & Deployment

### Security Checklist
*   [x] **API Key Protection**: GenAI key is server-side only. Removed from Vite client bundle.
*   [x] **Input Sanitization**: React automatically escapes inputs to prevent XSS.
*   [x] **Headers**: `vercel.json` includes strict security headers (X-Content-Type-Options, X-Frame-Options).
*   [x] **Robots.txt**: Configured to block AI scrapers to protect your intellectual property.

### Local Development Note
Because the Chatbot uses a serverless function (`/api/chat`), it requires a proxy to work locally.
*   Run `vercel dev` to simulate the production environment (Recommended).
*   If running `npm run dev`, the Chatbot will not receive a response unless you configure a local proxy or mock the API.

---

© 2024 VastuCraft AI Studio. All Rights Reserved.