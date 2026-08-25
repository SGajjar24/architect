---
name: project-data
description: >-
  Add, modify, or remove projects from the portfolio data layer in
  data/projectsData.ts. Use when the user wants to add new RERA-registered
  projects, update existing project information, fix developer names, or
  manage the 48-project statutory register.
---

# Project Data Management

## Overview
The source of truth for all portfolio projects is `data/projectsData.ts`.
It contains an array of `Project` objects exported as `ALL_VERIFIED_PROJECTS`
and aggregate statistics as `PROJECT_STATISTICS`.

## Adding a New Project

### 1. Gather Required Information
- RERA registration number (full string from GujRERA)
- Project name, developer, city, location
- Category: `Residential`, `Commercial`, or `Mixed Development`

### 2. Cross-Verify Architect Association
Before adding ANY project, verify that **Ar. Vidhi Satishbhai Gajjar** or
license **CA/2018/103740** is listed as the Project Architect by checking:
- ahmedabadpropertyexpo.com project page
- gandhinagarpropertyexpo.gujrera.com project page
- GujRERA Form 1 documents
- Web search for `"[RERA Number]" "Vidhi" OR "103740"`

### 3. Find Verification Link
Priority order:
1. `ahmedabadpropertyexpo.com/project/[slug]`
2. `gandhinagarpropertyexpo.gujrera.com/project/[slug]`
3. `gujrera.com/p/[project-name]`
4. `https://gujrera.gujarat.gov.in/` (fallback)

### 4. Add Entry to `data/projectsData.ts`
Follow this exact structure:
```typescript
{
  "id": "[next sequential number]",
  "title": "[Project Name]",
  "category": "Residential",
  "typology": "Apartments / Flats",
  "city": "[City]",
  "location": "[Area, City]",
  "developer": "[Developer Name]",
  "description": "[1-2 sentence architectural scope description]",
  "imageUrl": "https://images.unsplash.com/photo-[id]?auto=format&fit=crop&q=80&w=1000",
  "constructionStage": "Under Construction",
  "verificationLink": "[verified URL]",
  "linkStatus": "Live Project Portal",
  "coaRegistration": "CA/2018/103740",
  "reraNumber": "[Full RERA Registration String]"
}
```

### 5. Update Statistics
At the bottom of `data/projectsData.ts`, update `PROJECT_STATISTICS`:
- `cities` count if a new city is added
- City-specific counts will auto-calculate from the filter functions

### 6. Verify Build
Run `npm run build` (tsc && vite build) to ensure no TypeScript errors.

## Modifying Existing Projects
- Always preserve the `id` field (it's referenced by order)
- Always preserve the `coaRegistration` field as `CA/2018/103740`
- Update `linkStatus` when changing `verificationLink`

## Removing Projects
- Only remove if confirmed the architect is NOT associated with the project
- Update sequential IDs of all subsequent entries
- Recount `PROJECT_STATISTICS`
