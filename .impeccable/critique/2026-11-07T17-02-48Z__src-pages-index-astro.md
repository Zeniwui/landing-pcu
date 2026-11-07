---
target_identity: "file:X:\\CODING\\landing-cpu\\src\\pages\\index.astro"
target_fingerprint: "sha256:b9b601f88820506941c234fa349192558fc1355b44fd15c98bdff9c7f1844a55"
target_path: "X:\\CODING\\landing-cpu\\src\\pages\\index.astro"
timestamp: 2026-11-07T17-02-48Z
slug: src-pages-index-astro
---
# CRITIQUE: PCU UniOvi Landing Page
**Target:** `src/pages/index.astro`  
**Date:** 2026-11-07  
**Provenance:** Assessment A (Design Review) and Assessment B (Detector & Evidence) executed in isolated parallel subagent contexts.

---

### Executive Summary
The homepage of PCU UniOvi establishes strong domain specificity rooted in competitive programming and EPI Gijón. However, it suffers from information architecture duplication (contests collection leaking into general activities), artificial UI tropes (pulsing dots, redundant kickers above headings), heading hierarchy skips, and contrast weaknesses on emerald indicators.

### Scores
- **Nielsen Usability Heuristics Average:** 3.3 / 4.0
- **Implementation Integrity:** Pass with findings (33 rendered detector findings: 4 errors, 18 warnings, 11 advisories).

### Top Priority Issues
1. **Taxonomy Leakage:** `allActivities` mixes contests, trainings, and workshops in the "Concursos" section.
2. **Artificial Slop Patterns:** 4 infinite pulsing dots and 4 redundant kickers/eyebrows above headings.
3. **Accessibility & Contrast:** Emerald `#059669` fails 4.5:1 contrast against light backgrounds (3.6:1); heading hierarchy skips `<h2>` between hero and events widget.
4. **Onboarding Pathway & Discord:** No direct onboarding bridge for novice students and no visible Discord community link on the homepage.
