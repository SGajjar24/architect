# VIDHI Architect Portfolio — AI Rules

## Project Identity
- **Brand:** Studio Vidhi Gajjar / VG Architects
- **Architect:** Ar. Vidhi Satishbhai Gajjar, CoA License: CA/2018/103740
- **Domain:** Architecture portfolio with 48+ RERA-registered projects across Gujarat
- **Repo:** https://github.com/SGajjar24/architect
- **Deployment:** Vercel (zero-config SPA)

## Tech Stack (Do NOT deviate)
- React 18 + Vite + TypeScript + Tailwind CSS 3.4
- Three.js for 3D WebGL scenes
- Lucide React for icons
- Vercel serverless functions (`api/`) for backend
- Gemini 2.5 Flash via `@google/genai` (server-side only via `api/chat.js`)
- Web3Forms for contact forms

## Data Integrity Rules
- **Source of truth:** `data/projectsData.ts` — all 48 projects with RERA numbers
- Never modify project data without cross-verifying against GujRERA or ahmedabadpropertyexpo.com
- Every project MUST have a `reraNumber` and `verificationLink`
- Verification links MUST either:
  1. Return HTTP 200 AND contain "103740" or "Vidhi" in page HTML, OR
  2. Point to `https://gujrera.gujarat.gov.in/` as fallback
- NEVER use 99acres.com, housing.com, or aurumproptech.in links (they block bots / don't show architect info)

## Security Rules
- API keys: NEVER in client-side code — only in `api/*.js` serverless functions
- `API_KEY` env var: server-side only, never prefixed with `VITE_`
- `VITE_WEB3FORMS_ACCESS_KEY`: client-side safe (public access key)
- Security headers: always maintain in `vercel.json`

## Code Conventions
- TypeScript strict mode — no `any` types
- All components in `components/`, pages in `pages/`, data in `data/`
- Dark theme first (slate-950 background, amber-600 accent, emerald verification badges)
- Font stack: Outfit (body), Syne (headings), Space Grotesk (mono/technical)
- Three.js scenes must have proper cleanup in useEffect return functions
- Always run `npm run build` (tsc && vite build) before committing

## Deployment
- Push to `main` branch → Vercel auto-deploys
- All app code at repository root (not in subdirectory)
- SPA routing handled by `vercel.json` rewrites
