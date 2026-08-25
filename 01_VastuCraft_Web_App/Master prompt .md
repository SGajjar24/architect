Below is a “drop-in” Cursor-style prompt pack.

Paste each block into a new Cursor chat (or any AI-codebase tool) in the
order shown.

Every block is self-contained, includes file-path hints, shell commands,
and git-ready diff snippets.

After the last block you will have a production-grade, launch-ready
VastuCraft AI Studio v1.0.

---

BLOCK 0 – Repo bootstrap & branch strategy

Prompt:

“Create the entire Next-14 (App Router) + TypeScript + Tailwind +
shadcn/ui starter inside ./vastucraft-ai-studio.

Use pnpm. Add the following scripts to package.json:

dev, build, start, lint, type-check, test:unit, test:e2e.

Commit message: ‘chore: scaffold Next-14 TS Tailwind shadcn’.

Branch: main.”

Shell (auto-run):

pnpm create next-app@latest vastucraft-ai-studio --typescript --tailwind
--eslint --app --src-dir --import-alias "@/"

cd vastucraft-ai-studio

pnpm dlx shadcn-ui@latest init -y

git init && git add . && git commit -m "chore: scaffold Next-14 TS
Tailwind shadcn"

---

BLOCK 1 – Global design tokens & theme

Prompt:

“Create a Vastu-aligned color palette file src/styles/vastu-theme.css
that exposes CSS variables for:

– Prithvi (earth): \#8B4513

– Surya (gold): \#D4AF37

– Akash (space): \#0F172A

– Vayu (air): \#F1F5F9

– Agni (energy accent): \#EA580C

Dark-mode counterparts too.

Inject these variables into Tailwind config so we can use classes like
bg-prithvi text-surya.

Add fontFamily: heading: \['var(--font-playfair)'\], body:
\['var(--font-inter)'\].

Commit: ‘feat: vastu design tokens’.”

Files:

src/styles/vastu-theme.css tailwind.config.ts

---

BLOCK 2 – Security & performance headers

Prompt:

“Create next.config.js with:

\- Strict CSP (no inline eval), HSTS 63072000, X-Frame-Options DENY,
X-Content-Type-Options nosniff, Referrer-Policy
strict-origin-when-cross-origin.

\- Enable SWC minify, gzip, and webpack splitChunks for three.js &
openai chunks. - Redirect http→https in production.

Commit: ‘feat: security & perf headers’.”

File: next.config.js

---

BLOCK 3 – SEO, i18n, metadata

Prompt:

“Create src/app/\[locale\]/layout.tsx with:

\- generateMetadata(): title, description, openGraph, twitter card,
robots, canonical. - JSON-LD Organization & WebSite schema.

\- Multi-locale support (en, hi, gu) using next-intl. - Add hreflang
alternate links.

Commit: ‘feat: SEO + i18n boilerplate’.”

---

BLOCK 4 – GDPR & cookie consent

Prompt:

“Add a cookie-banner component (shadcn Dialog) that: - Blocks GA &
Hotjar until consent.

\- Stores choice in localStorage + consent cookie (SameSite=Strict). -
Provides granular toggles (Necessary, Analytics, Marketing).

\- Auto-translates with next-intl.

Commit: ‘feat: GDPR consent manager’.”

---

BLOCK 5 – Database & ORM

Prompt:

“Install Prisma + PostgreSQL driver.

Create schema:

User, Project, FloorPlan, VastuScore, Payment.

Add enums: ProjectType (RESIDENTIAL, COMMERCIAL), VastuZone (NORTH, NE,
EAST…).

Expose relation: User 1-m Project 1-1 VastuScore.

Generate migration ‘init’.

Commit: ‘feat: prisma schema & migration’.”

---

BLOCK 6 – Auth (NextAuth v5)

Prompt:

“Implement NextAuth with:

\- Credentials (magic link) & Google OAuth.

\- JWT sessions, secure cookies, httpOnly, sameSite=lax. - Role: ADMIN,
ARCHITECT, CLIENT.

\- Protect /dashboard/ and /api/ routes.

Commit: ‘feat: auth with roles’.”

---

BLOCK 7 – AI service layer

Prompt:

“Create src/lib/ai/:

\- openai.ts: gpt-4-turbo for Vastu suggestions (system prompt includes
Vastu Purusha Mandala rules).

\- replicate.ts: sdxl-lightning for 3D-ish render from floor-plan PNG.

\- vastu-engine.ts: pure TS scorer that returns JSON {score, violations,
remedies} given room vertices.

Add zod schemas for prompt & response validation.

Expose /api/ai/vastu-score route (POST).

Commit: ‘feat: AI vastu engine’.”

---

BLOCK 8 – Interactive floor-plan canvas

Prompt:

“Create src/components/PlanCanvas/:

\- Uses React-Konva for drag-drop rooms (rectangles). - Snap-to-grid 1
ft.

\- Auto-compute areas, centroid, facing direction.

\- Real-time VastuScore via fetch to /api/ai/vastu-score (debounced 600
ms). - Toolbar: add room, delete, rotate, export PNG.

Commit: ‘feat: konva floor-plan canvas’.”

---

BLOCK 9 – 3D viewer (Three.js)

Prompt:

“Create src/components/Vastu3D/:

\- Three.js scene, orthographic camera, ambient + directional light. -
Extrude walls from canvas JSON.

\- Color rooms by Vastu score (green ≥ 80, orange 50-79, red \< 50). -
OrbitControls, floor shadows, export GLB.

Lazy-load three to keep first bundle \< 200 kB.

Commit: ‘feat: three.js vastu viewer’.”

---

BLOCK 10 – Pricing & payments (Stripe)

Prompt:

“Install Stripe @stripe/stripe-js.

Create Products & Prices in Stripe dashboard (test mode): - FREE: 1 plan
/ month

\- PRO: ₹1,499 / mo – 10 plans + HD render

\- ENTERPRISE: ₹4,999 / mo – unlimited + API

Create /api/stripe/checkout-session (POST) with authenticated user,
price id, success_url & cancel_url.

Webhook /api/stripe/webhook to update User.subscriptionStatus.

Commit: ‘feat: stripe pricing’.”

---

BLOCK 11 – Client dashboard

Prompt:

“Build /\[locale\]/dashboard:

\- Sidebar: Projects, Billing, Team, API Keys.

\- Data table (TanStack) with sort, filter, row actions (View, Delete,
Download). - Empty state CTA directs to canvas.

\- Role-based guards: CLIENT sees only own projects, ADMIN sees all.

Commit: ‘feat: client dashboard’.”

---

BLOCK 12 – Admin back-office

Prompt:

“Create /\[locale\]/admin:

\- Moderate user projects, toggle visibility.

\- Analytics cards: MAU, revenue, avg Vastu score. - CRUD for blog posts
(MDX editor).

\- Support ticket inbox (simple Prisma model Ticket).

Commit: ‘feat: admin panel’.”

---

BLOCK 13 – API reference & rate-limit

Prompt:

“Create /api/doc route with Swagger-UI via swagger-jsdoc.

Expose:

GET /api/v1/vastu-score (api-key header)

POST /api/v1/vastu-score body {rooms\[\]}

Rate-limit: 30 req/min IP, 500 req/min api-key (Redis via Upstash).

Commit: ‘feat: public API & rate-limit’.”

---

BLOCK 14 – PWA offline support

Prompt:

“Generate public/sw.js with Workbox: - Precache static shell, pages,
fonts.

\- Runtime cache API responses (StaleWhileRevalidate 5 min).

\- Add manifest.json: name, icons (192, 512), theme-color \#D4AF37.

Trigger update via skipWaiting in install event.

Commit: ‘feat: PWA offline mode’.”

---

BLOCK 15 – e2e tests (Playwright)

Prompt:

“Install @playwright/test.

Write specs:

\- landing.spec.ts: i18n switch, cookie banner, CTA navigation. -
auth.spec.ts: sign-up, login, role redirect.

\- canvas.spec.ts: drag room, score update, export PNG. -
payment.spec.ts: checkout flow (Stripe test clock).

Run pnpm test:e2e in CI (GitHub Actions).

Commit: ‘test: playwright e2e suite’.”

---

BLOCK 16 – CI/CD & preview deployments

Prompt:

“Create .github/workflows/ci.yml:

\- pnpm install, lint, type-check, test:unit, test:e2e (headed false). -
Build & deploy to Vercel preview for every PR.

\- Production deploy only on main after e2e pass.

Add status badges to README.

Commit: ‘ci: github actions + vercel deploy’.”

---

BLOCK 17 – Final polish & launch checklist

Prompt:

“Run pnpm lint:fix && pnpm type-check.

Update README:

\- One-command setup (pnpm i && pnpm db:push && pnpm dev). - ENV
template (.env.example).

\- Tech stack badges.

\- Link to live demo & API docs.

Generate CHANGELOG.md (follow keep-a-changelog).

Bump version 1.0.0 in package.json.

Tag: git tag -a v1.0.0 -m 'GA launch'.

Commit: ‘chore: v1.0.0 release’.”

---

Post-launch optional blocks (cursor prompts)

BLOCK 18 – Blog (contentlayer + mdx)

BLOCK 19 – Referral program (Redis + unique codes)

BLOCK 20 – Webhook marketplace (Zapier, Make)

BLOCK 21 – White-label embed (iframe SDK)

BLOCK 22 – Advanced analytics (PostHog feature flags)

---

Use these blocks verbatim in Cursor; each produces runnable, reviewable,
and merge-ready code.
