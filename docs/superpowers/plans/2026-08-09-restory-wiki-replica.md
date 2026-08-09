# ReStory Wiki Replica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js App Router site that reproduces taskbarhero.org's information architecture and pixel-Wiki layout while replacing every game-specific value with verified ReStory research.

**Architecture:** Use shared server-rendered shell components for the sticky header, locale menu, sidebar, footer, and fixed taskbar. Keep page copy and article bodies in locale-aware data modules and MDX files; route metadata and article component selection live in `lib/` and `app/`.

**Tech Stack:** Next.js App Router, React, TypeScript, MDX via `@next/mdx`, `remark-gfm`, Vitest, CSS variables with HSL theme tokens.

## Global Constraints

- The old game name, old brand, old routes, old external links, and old legal copy must not appear anywhere in rendered site content.
- The game name is `ReStory: Chill Electronics Repairs`; Japanese localized name is `リ・ストーリー: 思い出修理屋`; Russian and German use the verified English Steam title.
- Homepage facts must use only the supplied research: Aug 6, 2026 launch, $17.99 current Steam price, 15+ hour story, 50 Steam Achievements, 97% positive reviews, and 9 interface/subtitle languages.
- Codes are not confirmed; all code surfaces render exactly `暂无`.
- Official links are the verified tinyBuild page, Steam store, `https://discord.gg/restory`, `https://www.youtube.com/@tinyBuildGAMES`, and `https://youtu.be/JrusjsK51Gw`.
- Default theme is light. Use HSL tokens `166 57% 37%` and `166 54% 50%`; dark theme uses `166 72% 54%` and `166 66% 65%`.
- Locales are `en`, `ru`, `de`, and `ja`; English keeps the root routes and localized routes are prefixed.

---

### Task 1: Establish the project contract and MDX-capable Next scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `next-env.d.ts`
- Create: `mdx.d.ts`
- Create: `vitest.config.ts`
- Create: `tests/site-data.test.ts`
- Create: `public/favicon.png` by copying the existing `/Users/yefeng/Code/restorytips/restory-favicon-512.png`

**Interfaces:**
- Produces npm scripts `dev`, `build`, `start`, `lint`, and `test`.
- Produces the MDX module declaration consumed by localized guide components.
- The first test imports `siteConfig` and `getLocaleCopy` from `lib/site-data`; it must fail before those production modules exist.

- [ ] **Step 1: Write the failing test**

Create `tests/site-data.test.ts` with assertions for the title, official URLs, locale set, and the exact `暂无` codes value:

```ts
import { describe, expect, it } from "vitest";
import { getLocaleCopy, siteConfig } from "../lib/site-data";

describe("ReStory site contract", () => {
  it("uses the researched game identity and official links", () => {
    expect(siteConfig.gameName).toBe("ReStory: Chill Electronics Repairs");
    expect(siteConfig.official.discord).toBe("https://discord.gg/restory");
    expect(siteConfig.official.youtube).toBe("https://www.youtube.com/@tinyBuildGAMES");
    expect(siteConfig.sidebarCodes).toEqual(["暂无"]);
  });

  it("exposes the four researched locales without the old game label", () => {
    expect(siteConfig.locales).toEqual(["en", "ru", "de", "ja"]);
    expect(getLocaleCopy("ja").gameName).toBe("リ・ストーリー: 思い出修理屋");
    expect(JSON.stringify(siteConfig)).not.toContain("TBH");
  });
});
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run `npm test -- --run tests/site-data.test.ts` after creating the package scripts. Expected result: FAIL because `lib/site-data` does not exist yet.

- [ ] **Step 3: Add the minimal project configuration**

Use Next 15 with React 19, TypeScript, MDX loader packages, `remark-gfm`, and Vitest. Configure `next.config.mjs` with `createMDX({ options: { remarkPlugins: [remarkGfm] } })`.

- [ ] **Step 4: Copy the existing favicon and rerun the contract test**

Copy the already generated ReStory favicon into `public/favicon.png`; do not generate a replacement asset.

- [ ] **Step 5: Record the scaffold state**

Run `npm install` and `npm test -- --run tests/site-data.test.ts`; the test remains expected to fail until Task 2 adds `lib/site-data.ts`.

---

### Task 2: Add researched site data, locales, navigation, and MDX content

**Files:**
- Create: `lib/site-data.ts`
- Create: `lib/mdx.tsx`
- Create: `content/en/guides/beginner-guide.mdx`
- Create: `content/en/guides/cleaning-repair-workflow.mdx`
- Create: `content/en/guides/known-issues.mdx`
- Create: `content/ru/guides/beginner-guide.mdx`
- Create: `content/de/guides/beginner-guide.mdx`
- Create: `content/ja/guides/beginner-guide.mdx`

**Interfaces:**
- `siteConfig` exports `gameName`, `locales`, `official`, `sidebarCodes`, `homepage`, `legal`, and `guideMeta`.
- `getLocaleCopy(locale: Locale)` returns translated navigation, CTA, footer, legal, and page labels.
- `getGuide(locale, slug)` returns `{ meta, Component }`, falling back to English only for a missing localized body.
- `guideMeta` contains only verified guide topics and marks uncertain details as `待确认` in copy.

- [ ] **Step 1: Implement the smallest data module that makes Task 1 pass**

Add the exact verified identity, official URLs, locales, theme HSL values, homepage metadata, hero stats, start cards, about-game stats, final CTA, footer strings, and `sidebarCodes: ["暂无"]`. Do not add guessed code values or game inventory counts.

- [ ] **Step 2: Run the contract test and confirm it passes**

Run `npm test -- --run tests/site-data.test.ts`; expected result is two passing tests.

- [ ] **Step 3: Add the guide metadata and localized MDX component map**

Define the three guide cards and map `beginner-guide`, `cleaning-repair-workflow`, and `known-issues` to MDX components. Include the localized beginner-guide bodies and leave the other two English-only with explicit fallback behavior.

- [ ] **Step 4: Keep article facts within the research boundary**

Use only the researched repair loop, Y2K browser/parts, customer choices, branching story, achievements, launch issues, and official link references. For hidden ending details, complete part catalogs, controller support, or unverified in-game interactions, use `待确认` instead of inventing facts.

---

### Task 3: Build the target-style shell, theme, and shared navigation

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `components/site-header.tsx`
- Create: `components/theme-toggle.tsx`
- Create: `components/site-footer.tsx`
- Create: `components/taskbar.tsx`
- Create: `components/wiki-sidebar.tsx`
- Create: `components/mdx-components.tsx`

**Interfaces:**
- `SiteHeader` accepts `locale` and `currentPath` and renders the ReStory brand, nav links, locale menu, and theme toggle.
- `WikiSidebar` accepts `locale` and `activeSlug` and always renders the researched `暂无` codes card.
- `MdxLayout` styles headings, tables, callouts, links, and ordered repair steps consistently with the target site.

- [ ] **Step 1: Add target-style CSS tokens and layout primitives**

Implement the 1140px `.wrap`, dashed borders, pixel fonts, sticky header, responsive menu, panel/card/grid primitives, breadcrumb, table styling, and fixed bottom taskbar. The default `:root` is light; `[data-theme="dark"]` switches to the supplied dark HSL accent values.

- [ ] **Step 2: Add shared server components**

Build the header, footer, sidebar, and taskbar with ReStory-only labels and official links. Reuse the existing favicon file in the brand and taskbar.

- [ ] **Step 3: Add client-only theme switching**

Implement a button that toggles `document.documentElement.dataset.theme` and persists `restory-theme` in localStorage. Default to light without introducing hydration-dependent content.

- [ ] **Step 4: Add MDX presentation components**

Render `Callout`, `RepairStep`, links, headings, tables, and code-like labels with the target site's compact information-dense treatment.

---

### Task 4: Implement homepage, guide index, article detail, locale routes, and legal pages

**Files:**
- Create: `app/page.tsx`
- Create: `app/[locale]/page.tsx`
- Create: `app/guides/page.tsx`
- Create: `app/guides/[slug]/page.tsx`
- Create: `app/[locale]/guides/page.tsx`
- Create: `app/[locale]/guides/[slug]/page.tsx`
- Create: `app/privacy/page.tsx`
- Create: `app/terms/page.tsx`
- Create: `app/[locale]/privacy/page.tsx`
- Create: `app/[locale]/terms/page.tsx`

**Interfaces:**
- Root pages call the same locale-aware page components used by localized pages, with `en` as default.
- `generateStaticParams` covers `en`, `ru`, `de`, and `ja` for localized routes and all guide slugs for the article routes.
- Every page exports metadata using the researched SEO title, description, and keywords; localized pages use translated UI labels while preserving verified game identity.

- [ ] **Step 1: Build the homepage from the supplied JSON content**

Render Hero, quick lookup, Start Here four cards, What is ReStory paragraphs/stats, official gameplay link, Codes/兑换码 panel with `暂无`, and final CTA to Steam. Use the supplied home metadata and do not recreate target-game database totals.

- [ ] **Step 2: Build `/guides` as the list/navigation page**

Render breadcrumb, page banner, guide cards, category chips, and sidebar. The page must link to each MDX slug and to the official sources where relevant.

- [ ] **Step 3: Build `/guides/[slug]` as the MDX article page**

Render breadcrumb, article header, two-column content/sidebar layout, MDX body, related guides, official source CTA, and the `暂无` sidebar code box.

- [ ] **Step 4: Add localized route wrappers**

Mirror the same structure under `/ru`, `/de`, and `/ja`; set `lang`, localized navigation labels, localized theme name where confirmed, and correct language switch links.

- [ ] **Step 5: Add privacy and terms pages**

Use concise, clearly labeled independent fan-wiki legal copy containing only ReStory and the site identity. Ensure no old target-game name or target-site link appears.

---

### Task 5: Verify content, build, routes, and visual parity

**Files:**
- Modify: any file required by verification failures only.

- [ ] **Step 1: Run content residue checks**

Run `rg -n "TBH|Task Bar Hero|taskbarhero\.org|Nugem|Tesseract" app components content lib public` and require no matches. Run `rg -n "sidebarCodes|暂无|ReStory" lib app components content` and confirm all required surfaces use the ReStory identity and the unconfirmed-code fallback.

- [ ] **Step 2: Run automated checks**

Run `npm test`, `npm run lint`, and `npm run build`; all commands must exit 0.

- [ ] **Step 3: Run the local app and check all required URLs**

Start with `npm run dev -- --hostname 127.0.0.1`, then request `/`, `/guides`, `/guides/beginner-guide`, `/ru/guides`, `/ja/guides/beginner-guide`, `/privacy`, and `/terms`; each must return HTTP 200 with the correct page title.

- [ ] **Step 4: Perform visual browser QA**

Inspect desktop and narrow widths for the header, hero, cards, guide detail, language menu, theme toggle, fixed taskbar, legal pages, and no horizontal overflow. Confirm the default appearance is light and dark mode preserves readable contrast.

- [ ] **Step 5: Fix only evidence-backed regressions and rerun the full checks**

After any correction, rerun `npm test`, `npm run lint`, `npm run build`, and the route checks before reporting the result.
