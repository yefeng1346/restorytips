# ReStory Keyword Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn all 20 researched ReStory keywords into one source-backed English MDX page each, with exact routes and SEO metadata.

**Architecture:** Extend the existing `guideMeta` registry with the exact keyword, slug, SEO title, and meta description; map every slug to a dedicated MDX component; keep the existing shared page shell and localized routes, using English article bodies as the fallback for non-English routes.

**Tech Stack:** Next.js App Router, TypeScript, React Server Components, MDX, Vitest, TypeScript compiler.

## Global Constraints

- Create exactly one article route for each of the 20 strings in `keywords.json`.
- Every article title must include its exact keyword and be 40–60 characters long.
- Every meta description must include its exact keyword and be 140–160 characters long.
- Each article opens with a direct answer, uses H2 sections, and is approximately 1200 words/characters in compact paragraphs.
- Use only facts from `关键词素材.md`; mark unsupported details as `待确认`.
- Do not invent numbers, character names, redemption codes, device inventories, route conditions, or controller/settings claims.
- Keep official source links only; do not add competitor websites or competitor guide links.

---

### Task 1: Expand the metadata contract and exact routes

**Files:**
- Modify: `lib/site-data.ts`
- Modify: `app/guides/[slug]/page.tsx`
- Modify: `app/[locale]/guides/[slug]/page.tsx`
- Modify: `components/pages.tsx`
- Modify: `components/site-header.tsx`
- Modify: `components/wiki-sidebar.tsx`
- Modify: `components/site-footer.tsx`
- Modify: `components/taskbar.tsx`
- Test: `tests/site-data.test.ts`

**Interfaces:**
- `GuideMeta` exposes `keyword`, `seoTitle`, and `metaDescription` in addition to the existing card fields.
- `guideMeta` contains 20 entries in the same order as `keywords.json`.
- Article metadata uses `seoTitle`, `metaDescription`, and the exact keyword.

- [ ] **Step 1: Run the existing failing contract test**

Run: `npm test -- --run tests/site-data.test.ts`

Expected: the new 20-keyword test fails because the registry still contains five entries.

- [ ] **Step 2: Add the 20 metadata entries and exact keyword slugs**

Use the slug form `restory-chill-electronics-repairs-<topic>` for every entry, keeping the exact keyword in `keyword` and the researched facts in `metaDescription`.

- [ ] **Step 3: Point every existing navigation surface at the new slugs**

Update homepage cards, quick links, header navigation, sidebar, footer, taskbar, and CTA links so none of the old short guide routes are presented as the keyword pages.

- [ ] **Step 4: Make route metadata use the contract fields**

Return `guide.seoTitle`, `guide.metaDescription`, and `[guide.keyword, ...guide.tags]` from both English and localized article metadata functions.

- [ ] **Step 5: Run the contract test again**

Run: `npm test -- --run tests/site-data.test.ts`

Expected: all metadata and title/description length assertions pass.

---

### Task 2: Map all MDX components

**Files:**
- Modify: `lib/mdx.tsx`
- Create: `content/en/guides/restory-chill-electronics-repairs-*.mdx` (20 files)

**Interfaces:**
- `getGuideComponent(locale, slug)` resolves every exact keyword slug.
- A missing localized body falls back to the English body without changing the route metadata.

- [ ] **Step 1: Add the 20 exact MDX imports and English registry entries**

Keep imports explicit and manually authored; do not generate the content or registry with a script.

- [ ] **Step 2: Write each article from the matching source section**

Each article must start with the direct answer, include source notes from at least two registered sources, and mark all unsupported details as `待确认`.

- [ ] **Step 3: Run a route/component coverage test**

Run: `npm test -- --run`

Expected: all tests pass and each metadata entry has a component for its slug through the page build.

---

### Task 3: Verify content boundaries, build, and all routes

**Files:**
- Modify: only files required by verification failures.

- [ ] **Step 1: Check old-brand and competitor-link residue**

Run: `rg -n "TBH|Task Bar Hero|taskbarhero\\.org|Nugem|Tesseract" app components content lib public`

Expected: no matches.

- [ ] **Step 2: Run automated checks**

Run: `npm test -- --run`

Run: `npm run lint`

Expected: all tests pass and TypeScript exits 0.

- [ ] **Step 3: Build the complete static route set**

Run: `npm run build`

Expected: the Next.js build exits 0 and includes the 20 English article routes plus localized wrappers.

- [ ] **Step 4: Check every keyword URL locally**

Start the app with `npm run dev -- --hostname 127.0.0.1`, then request each exact keyword slug and the homepage/guide index. Every route must return HTTP 200.

- [ ] **Step 5: Re-run metadata length checks after build**

Inspect generated article titles and descriptions and confirm the exact keyword is present in both fields; report any remaining `待确认` items as editorial boundaries, not as facts.
