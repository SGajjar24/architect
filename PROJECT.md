# VastuCraft AI Studio
> Premium architecture studio web app — Vastu Shastra meets AI construction technology

## Status
| Field | Value |
|---|---|
| **Status** | 🟢 Production |
| **Version** | v1.0.0 |
| **Category** | client-projects |
| **Client** | Ar. Vidhi Gajjar & Swetang Gajjar |
| **Last Updated** | 2026-02 |

## Tech Stack
| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **AI** | Gemini 2.5 Flash (secure serverless proxy) |
| **Forms** | Web3Forms |
| **Deployment** | Vercel |

## Links
| Type | URL |
|---|---|
| **Live Site** | [betaversion1.vercel.app](https://betaversion1.vercel.app) |
| **GitHub** | TBD — fill in actual repo URL |
| **Vercel Dashboard** | https://vercel.com/sgajjar24 |

## Key Features
- Portfolio showcase + service pages (Architecture, Interiors, Vastu, AI Tech)
- Gemini 2.5 Flash Vastu chatbot (via secure API proxy)
- AI Construction Tech visualization (PPE detection, defect analysis)
- Digital business card with vCard download

## AI Conversation Log
| Date | Topic | Key Decisions |
|---|---|---|
| 2026-02 | Initial build + deployment | React 19 + Vite + Tailwind 4 stack chosen |
| 2026-02 | Content updates V1.4 | Updated with AI Studio code, deployed to Netlify |

## Environment Variables
```
API_KEY=                    # Gemini API key (server-side only)
VITE_WEB3FORMS_ACCESS_KEY=  # Contact form
```

## Notes
- Serverless proxy at `api/chat.js` — never expose API_KEY to client
- Security headers configured in `vercel.json`
- SEO optimized with robots.txt blocking AI scrapers
- Related: `_archive/Vastucraft/` = superseded older version
