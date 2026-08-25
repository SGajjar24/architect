---
name: rera-audit
description: >-
  Audit and verify all project URLs in data/projectsData.ts to ensure they
  are live (HTTP 200), display the architect's license number (CA/2018/103740)
  or name (Vidhi), and are not broken. Use when the user asks to check links,
  verify projects, or fix broken URLs.
---

# RERA Link Audit Procedure

## Overview
This skill ensures all 48 project verification links in the portfolio are valid,
live, and provably connected to architect Vidhi Satishbhai Gajjar (CA/2018/103740).

## Steps

### 1. Extract All URLs
Read `data/projectsData.ts` and extract every `verificationLink` along with
the project `id`, `title`, and `reraNumber`.

### 2. HTTP Verification
For each URL, make an HTTP GET request with browser-like User-Agent headers:
- **PASS:** HTTP 200 AND response body contains "103740" or "Vidhi" or "VIDHI"
- **ACCEPTABLE:** URL is `https://gujrera.gujarat.gov.in/` (official fallback)
- **FAIL:** HTTP 403/404/timeout, or 200 but no license/name match

### 3. Fix Failed Links
For each failed project, search for a replacement URL in this priority order:
1. `ahmedabadpropertyexpo.com/project/[slug]` (best — shows architect in Form 1)
2. `gandhinagarpropertyexpo.gujrera.com/project/[slug]` (for Gandhinagar projects)
3. `gujrera.com/p/[project-name]` (project-specific GujRERA pages)
4. `https://gujrera.gujarat.gov.in/` (last resort — official homepage)

**NEVER use:** `99acres.com`, `housing.com`, `aurumproptech.in`, `a2zproperty.in`
— these sites block bots (HTTP 403) or don't display architect credentials.

### 4. Update & Verify
1. Update `verificationLink` and `linkStatus` in `data/projectsData.ts`
2. Run `npm run build` to ensure TypeScript compilation passes
3. Report summary: X passed, Y fixed, Z remaining as GujRERA fallback

## Validation
After completing the audit, the agent should verify at least 3 random links
from the "PASS" category by fetching them and confirming the license number
appears in the HTML.
