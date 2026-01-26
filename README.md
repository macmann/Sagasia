# Next.js App Router + TypeScript + Tailwind + MDX Scaffold

This repository is a ready-to-push scaffold for:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX-powered **Insights** section (content stored in `content/insights/*.mdx`)

## Local development

```bash
npm install
npm run dev
```

Open:
- Home: http://localhost:3000
- Insights: http://localhost:3000/insights
- Contact: http://localhost:3000/contact

## Build + start

```bash
npm run build
npm run start
```

By default, the app will serve at http://localhost:3000.

## Deployment (Vercel recommended)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **New Project**, import the repo, and accept the defaults.
3. Ensure the **Framework Preset** is set to **Next.js**.
4. Deploy. Vercel will run `npm run build` automatically.

**Optional:** Configure a custom domain in Vercel and set any environment variables (none required for the current build).

### Vercel install hardening

This repo includes a `vercel.json` install command that uses `npm ci` and an ephemeral `/tmp/npm-cache` to avoid reusing a corrupted cache across builds. The lockfile (`package-lock.json`) must be present for `npm ci` to work, and it is committed in this repo. The root `.npmrc` also pins the registry and increases fetch retry timeouts for more resilient installs.

## Playwright smoke tests

Install the Playwright browser binaries once:

```bash
npx playwright install --with-deps
```

Run the smoke tests:

```bash
npm run test:e2e
```

## QA checklist

- **Responsive**: Verify layout at mobile (375px), tablet (768px), and desktop (1280px) widths.
- **Link checks**: Confirm primary nav, footer links, and CTA buttons route to expected pages.
- **Form validation**: Submit the contact form with missing/invalid fields; confirm inline errors appear.
- **Lighthouse basics**: Run Lighthouse on Home and Contact to confirm no critical performance, SEO, or best-practice regressions.
- **Accessibility**: Validate headings hierarchy, focus states, and form labels using browser dev tools or an axe audit.

## Add a new MDX post

Create a file in:

`content/insights/<your-slug>.mdx`

Example frontmatter:

```mdx
---
title: "My Post"
date: "2026-01-24"
summary: "Short summary"
tags: ["tag1", "tag2"]
published: true
---
```

Then it will appear on `/insights`.

## Notes

- MDX rendering is handled via `next-mdx-remote/rsc` (server components-friendly).
- Post listing and detail pages read files from disk on the server.
