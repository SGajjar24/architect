# VIDHI — Architectural Portfolio & Digital Studio Ecosystem

> Master workspace uniting Ar. Vidhi Gajjar's statutory RERA portfolio, forensic verification register, and the VastuCraft AI Studio web application.

---

## 📌 Project Overview

| Field | Value |
|---|---|
| **Principal Architect** | Ar. Vidhi S. Gajjar (COA Registration: `CA/2018/103740`) |
| **Technology Lead** | Swetang Gajjar |
| **Primary Base** | Ahmedabad, Gujarat, India |
| **Status** | 🟢 Production / Active Development |
| **Category** | `client-projects` |
| **Last Updated** | 2026-08-25 |

---

## 🗂️ Workspace Architecture

```
VIDHI/
├── PROJECT.md                              ← Master workspace documentation & AI log
├── README.md                               ← Developer overview & navigation guide
│
├── 01_VastuCraft_Web_App/                  ← React 19 + TypeScript + Tailwind CSS Web App
│   ├── api/                                ← Secure serverless Gemini 2.5 Flash proxy (api/chat.js)
│   ├── components/                         ← 3D Canvas, 3D Tilt Cards, Modal, Navigation, Reveal
│   ├── data/                               ← 48-Project Typed Statutory Dataset (projectsData.ts)
│   ├── pages/                              ← Home, Portfolio, Services, Vastu, AI Construction, Contact
│   ├── services/                           ← Gemini AI service & Chat client
│   ├── constants.ts                        ← Studio data, team bios, projects, contact info
│   ├── App.tsx, index.tsx, index.html
│   └── package.json, vite.config.ts, vercel.json
│
├── 02_Evidence_Website_Static/             ← 48-Project Forensic Multi-Page Static Site
│   ├── index.html                          ← Homepage & Executive Overview
│   ├── projects.html                       ← 48-Project Searchable & Filterable Register
│   ├── evidence.html                       ← Forensic Methodology
│   ├── experience.html                     ← Typologies & Case Study Framework
│   ├── records.html                        ← 48 Verified Live GujRERA / Property Expo URLs
│   └── assets.css                          ← Editorial Architectural Design System
│
├── 03_Portfolio_Documents/                 ← Statutory Portfolios & Master Compiled Database
│   ├── master_compiled_database.json       ← Master 48-Project JSON Database
│   ├── Vidhi_Gajjar_Architect_Portfolio.docx
│   ├── Vidhi_Gajjar_Architect_Portfolio.pdf
│   └── Vidhi_Gajjar_RERA_Detailed_Index.docx
│
└── 04_Identity_and_Credentials/            ← Official Identity & Profile Verification
    └── LinkedIn_Profile_Vidhi_Gajjar.jpeg  ← Verified LinkedIn Credential Snapshot
```

---

## 🛠️ Tech Stack & Key Technologies

| Layer | Technology |
|---|---|
| **VastuCraft Web App** | React 19 + Vite · TypeScript · Tailwind CSS |
| **3D & Visual Physics** | Custom Canvas 3D Particle/Wireframe Engine · GPU 3D Perspective Tilt Physics |
| **AI Integration** | Gemini 2.5 Flash (`@google/genai`) via secure serverless proxy |
| **Static Evidence Site** | Semantic HTML5 · Vanilla CSS3 (Custom Variables) · Vanilla JavaScript |
| **Form Handling** | Web3Forms (`VITE_WEB3FORMS_ACCESS_KEY`) |
| **Deployment** | Vercel (Production: [betaversion1.vercel.app](https://betaversion1.vercel.app)) |
| **Licence Key** | Council of Architecture `CA/2018/103740` |

---

## 🏛️ Statutory Evidence Register (48 Verified Projects)

1. **48/48 Projects Corroborated:** 100% verified against statutory Council of Architecture registration `CA/2018/103740`, official developer portals (*Shilp Group, Shaligram, Swati Procon, Goyal & Co., Vishwanath Builders, Ratnaakar*), and certified GujRERA registration numbers / Form 1 certificates across 6 cities (Ahmedabad, Gandhinagar, Surat, Palanpur, Surendranagar, Mehsana).

---

## 📋 AI Conversation Log

| Date | Topic | Key Actions & Decisions |
|---|---|---|
| 2026-08-25 | Code & File Audit | Conducted complete forensic and technical audit of statutory projects, HTML/CSS/JS files, DOCX/PDF portfolios, and verified external GujRERA URLs. |
| 2026-08-25 | Deep-Dive RERA Discovery | Discovered 12 additional statutory projects (Sahjanand S+, Imperial Building, S9 Imperial, Viola, Shilp Ananta, Veritas, Antara, Sahajanand Swarg, S9 Landmark, S9 Sarvoday, Shoolin Square, Shilp Business Gateway) and pruned 11 mismatched attributions, locking in 48 verified projects. |
| 2026-08-25 | 3D Interactive Portfolio Build | Created `projectsData.ts`, `Card3D.tsx`, `ArchitecturalCanvas3D.tsx`, and `ProjectModal.tsx`. Upgraded `Portfolio.tsx` with instant search, multi-faceted filtering, dual Grid/Table modes, and verified production build with zero errors. |

---

## 🔒 Security & Compliance

- **COA Code of Ethics:** Clear distinction maintained between personal design authorship, certifying Architect of Record (Form 1), and firm-level practice (ADS Architect Pvt. Ltd.).
- **Serverless API Proxy:** Gemini API key is isolated server-side at `api/chat.js` and never exposed client-side.
- **Environment Variables:** Documented in `01_VastuCraft_Web_App/.env.example`.
