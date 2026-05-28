# Diogel Website

The official website for [Diogel](https://diogel.io) — the Nostr key-protection suite.

Built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com), hosted on [Netlify](https://netlify.com).

## Site structure

- **Home** — Landing page at [diogel.io](https://diogel.io)
- **Porwr** — Browser extension product page
- **Android** — Android signer app product page
- **Bancwr** — Self-hosted Nostr bunker product page
- **Docs** — Getting started and reference documentation

## Development

Install dependencies:

```bash
pnpm install
```

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production build

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Deployment

Pushes to the main branch are automatically deployed to Netlify. See `netlify.toml` for build configuration.