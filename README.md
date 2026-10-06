# Diogel Website

The public marketing and documentation site for [Diogel](https://diogel.io), the Nostr key-protection suite.

Built with [Nuxt 4](https://nuxt.com), [Nuxt UI 4](https://ui.nuxt.com), [Nuxt Content 3](https://content.nuxt.com) and [Tailwind CSS 4](https://tailwindcss.com). Pages are prerendered and hosted on [Netlify](https://netlify.com).

## Site structure

| Page | URL | Content |
|------|-----|---------|
| Home | [/](https://diogel.io) | `content/0.index.yml` |
| Porwr, the browser extension signer | [/porwr](https://diogel.io/porwr) | `content/1.porwr.yml` |
| Symudol, the mobile signer | [/symudol](https://diogel.io/symudol) | `content/2.symudol.yml` |
| Bancwr, the self-hosted team bunker | [/bancwr](https://diogel.io/bancwr) | `content/3.bancwr.yml` |
| Docs | [/docs](https://diogel.io/docs) | `content/1.docs/` |

## Prerequisites

- **Node.js 22 or newer.** CI runs on Node 22 and Netlify builds with Node 24.7.0.
- **pnpm 11.1.3.** `package.json` pins it, so enable it through Corepack:

```bash
corepack enable
```

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

## Environment variables

Copy `.env.example` to `.env` for local overrides. Nothing is required to run the site.

| Variable | Purpose |
|----------|---------|
| `fathom_analytics_id` | Fathom Analytics site ID. Without it, no analytics script is loaded. Production sets it in Netlify. |

## Commands

| Command | What it does |
|---------|--------------|
| `pnpm dev` | Dev server with hot reload on port 3000 |
| `pnpm build` | Production build |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | ESLint over the whole repository |
| `pnpm typecheck` | Type-check with `nuxt typecheck` |

## Editing content

Page copy lives in `content/`, not in the Vue templates.

- **Home and product pages:** edit the YAML file for the page (see [Site structure](#site-structure)). Each file is validated against the schema in `content.config.ts`, so the dev server and build report a field that doesn't fit.
- **Docs:** Markdown files under `content/1.docs/<section>/`, one folder per section. The number prefix sets the order. Each section's `.navigation.yml` sets its sidebar title and icon.
- **Images and screenshots:** `public/img/`, with product screenshots in `public/img/screenshots/<product>/` and logos in `public/img/logo/`.
- **Explainer videos:** `public/video/`. Netlify caches `/video/*` permanently, so a new render needs a new file name, not a replacement under the same name.

Changing page layout or structure means editing `app/pages/`. The product pages share the same template, so a layout change usually needs mirroring across them. See [`CLAUDE.md`](CLAUDE.md) for the architecture.

## Checking a change

CI (`.github/workflows/ci.yml`) runs on every push:

```bash
pnpm lint
pnpm typecheck
```

Run them before opening a pull request, along with `pnpm build`. There is no test suite, so check UI changes in the browser in both light and dark themes.

## Branches and pull requests

- Work on a short-lived branch from `master`, following the Diogel branching strategy: `feature/`, `fix/`, `docs/`, `chore/` and so on, with the issue number at the end, e.g. `fix/website-logo-system-theme-19`.
- Open a pull request into `master` and link the issue it fixes.
- Netlify builds a deploy preview for each pull request and links it on the PR.

## Deployment

Merging to `master` deploys to production on Netlify. Build settings, cache headers and redirects are in `netlify.toml`. Route redirects such as `/android` → `/symudol` are in `nuxt.config.ts`.

## Related

- [`CLAUDE.md`](CLAUDE.md): architecture and conventions in more depth.
- Planning, copy, design and release notes live in the Diogel workspace repository, [`diogel-io/workspace`](https://github.com/diogel-io/workspace), under `60-marketing/websites/diogel/`.
- Work is tracked on the [Diogel Product Board](https://github.com/orgs/diogel-io/projects/1).

## License

MIT. See [`LICENSE`](LICENSE).
