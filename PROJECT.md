# Studio Vidhi Gajjar — Architect Portfolio
> Premium 3D architectural portfolio website with statutory RERA verification

## Status
| Field | Value |
|---|---|
| **Status** | 🟢 Production |
| **Version** | v2.0.0 |
| **Category** | client-projects |
| **Client** | Ar. Vidhi Satishbhai Gajjar |
| **Last Updated** | 2026-08 |

## Tech Stack
| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 5 |
| **Language** | TypeScript 5.4 |
| **Styling** | Tailwind CSS 3.4 |
| **3D Engine** | Three.js (WebGL parametric scenes) |
| **AI** | Gemini 2.5 Flash (secure serverless proxy via `api/chat.js`) |
| **Icons** | Lucide React |
| **Forms** | Web3Forms |
| **Deployment** | Vercel (auto-deploy from `main`) |

## Links
| Type | URL |
|---|---|
| **GitHub** | [SGajjar24/architect](https://github.com/SGajjar24/architect) |
| **Vercel Dashboard** | https://vercel.com/sgajjar24 |

## Key Features
- 48+ RERA-verified projects with statutory cross-verification links
- Interactive Three.js 3D parametric skyscraper hero scene (Solid/Wireframe/X-Ray modes)
- 3D holographic Gujarat city map showing project geographic distribution
- CAD Blueprint drafting mode overlay toggle
- Dual portfolio view (grid gallery + statutory ledger table)
- Multi-dimensional filtering by typology and city
- One-click RERA ID copy + GujRERA portal verification
- VastuBot AI chatbot (Gemini 2.5 Flash, serverless proxy)
- Contact commission form via Web3Forms

## Architecture
```
├── api/chat.js              ← Vercel serverless Gemini proxy
├── components/              ← 14 React components (3D scenes, modals, navigation)
├── pages/                   ← 7 active routes (Home, Portfolio, Practice, About, Contact, Privacy, Terms)
├── projects/                ← 48 dedicated project directories with dossiers & plans
│   ├── 01-nb-parva/         ← PROJECT.md, project.json, plans/layout-schema.json
│   ├── ...                  ← Complete statutory & architectural dossiers
│   └── README.md            ← Master 48-project index
├── data/projectsData.ts     ← 48 RERA-verified projects + rich specs & floor plans
├── context/StudioContext.tsx ← Blueprint mode + 3D rendering state
├── services/geminiService.ts← Client-side chat API wrapper
├── constants.ts             ← Brand identity, images, contact info
└── types.ts                 ← TypeScript interfaces (Project, FloorPlanItem, ProjectSpecifications)
```

## AI Conversation Log
| Date | Topic | Key Decisions |
|---|---|---|
| 2026-02 | Initial build + deployment | React 19 + Vite + Tailwind 4 stack chosen |
| 2026-02 | Content updates V1.4 | Updated with AI Studio code |
| 2026-08 | Complete 3D rebuild | Three.js WebGL, blueprint mode, rebranded to Studio Vidhi Gajjar |
| 2026-08 | RERA link audit | Verified all 48 projects, replaced broken aurumproptech links |
| 2026-08 | Antigravity setup | Added GEMINI.md, .agents/ skills & hooks, model strategy |
| 2026-08 | Project Folders & Plans | Created 48 dedicated project folders with dossiers, floor plans, specs, & enhanced modal |
| 2026-08 | Public Data Harvester & Partners | Scraped local project cover images, harvested structural engineers & developer entities, built interactive Partners component, synchronized 48 dossiers |

## Environment Variables
```
API_KEY=                    # Gemini API key (server-side only, NEVER prefix with VITE_)
VITE_WEB3FORMS_ACCESS_KEY=  # Contact form (client-safe)
```

## Notes
- Serverless proxy at `api/chat.js` — never expose API_KEY to client
- Security headers configured in `vercel.json`
- SEO optimized with robots.txt blocking AI scrapers
- Verified link sources: ahmedabadpropertyexpo.com, gandhinagarpropertyexpo.gujrera.com
- Fallback verification: gujrera.gujarat.gov.in (official RERA portal)
