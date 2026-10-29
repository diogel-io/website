# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

The official marketing/docs website for [Diogel](https://diogel.io), a Nostr key-protection suite. Built with Nuxt 4 + Nuxt UI (Pro components like `UPageHero`, `UPageSection`, `UPageCTA`), Nuxt Content v3, and Tailwind CSS v4. Hosted on Netlify with prerendering.

The site has marketing pages for three products (Porwr, Symudol, Bancwr) plus a docs section, all driven by structured content files rather than hardcoded markup.

## Commands

- `pnpm install` — install dependencies (pnpm is the required package manager)
- `pnpm dev` — start dev server at `http://localhost:3000`
- `pnpm build` — production build
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run ESLint (`eslint .`)
- `pnpm typecheck` — run `nuxt typecheck` (vue-tsc based)

CI (`.github/workflows/ci.yml`) runs `pnpm install`, `pnpm run lint`, and `pnpm run typecheck` on push. There is no test suite — verification is lint + typecheck (+ manual browser check for UI changes).

## Architecture

### Content-driven pages

The four product/landing pages (`/`, `/porwr`, `/symudol`, `/bancwr`) are all data-driven by a shared schema defined in `content.config.ts`:

- Each page is a YAML file in `content/` (`0.index.yml`, `1.porwr.yml`, `2.symudol.yml`, `3.bancwr.yml`), validated against `createPageSchema()`.
- The schema shape is: `hero` (links + optional image), `sections[]` (each with id, title, description, orientation, optional reverse/image, and `features[]`), `features` (title/description + `items[]`), and `cta` (title/description + `links[]`).
- The corresponding Vue page (`app/pages/index.vue`, `porwr.vue`, `symudol.vue`, `bancwr.vue`) loads its collection via `queryCollection('<name>').first()` and renders the same `UPageHero` / `UPageSection` / `UPageGrid` / `UPageCTA` structure.
- To change page copy, features, links, or images, edit the YAML content file — not the Vue template. To change layout/structure, the Vue page templates are nearly identical across the four pages, so changes typically need to be mirrored across all of them.

### Docs

- Docs content lives under `content/1.docs/**` (markdown files + `.navigation.yml` for ordering).
- Served via the catch-all route `app/pages/docs/[...slug].vue`, which queries the `docs` collection by path, renders with `ContentRenderer`, and shows surrounding-page navigation + table of contents.
- Docs pages use the `docs` layout (`app/layouts/docs.vue`), which adds a left sidebar (`UContentNavigation`) built from `queryCollectionNavigation('docs')`.
- `/docs` itself redirects to `/docs/getting-started` (see `routeRules` in `nuxt.config.ts`).

### Layouts and global app shell

- `app/app.vue` is the root: sets up `useHead`/`useSeoMeta` defaults, theme color based on color mode, loads docs navigation/search data via `provide('navigation', ...)`, and wires up `UContentSearch` (Cmd/Ctrl+K).
- `app/layouts/default.vue` — header + main + footer, used by marketing pages.
- `app/layouts/docs.vue` — header + sidebar nav + content + footer, used by docs pages.

### SEO

Each content YAML can define an optional `seo.title` / `seo.description`, which pages prefer over the plain `title`/`description` when calling `useSeoMeta`.

### Modules in use

- `@nuxt/content` (with native sqlite connector) for the YAML/markdown collections described above.
- `@nuxt/ui` (v4, Pro components) for all page-level UI primitives.
- `@nuxt/image` for images. Share images are static 1200×630 PNGs in `public/img/og/`, set by `usePageSeo` (no OG image generation).
- `@threenine/nuxt-fathom` for Fathom Analytics, configured via `fathom.siteId` from the `fathom_analytics_id` env var.
- `@vueuse/nuxt` and `@nuxt/eslint`.

### ESLint stylistic config

`nuxt.config.ts` sets `eslint.config.stylistic` to `commaDangle: 'never'` and `braceStyle: '1tbs'` — match this style in new code.