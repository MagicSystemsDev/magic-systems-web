# Magic Systems Web

Corporate website for Magic Systems. The current delivery includes the V1 corporate shell and the featured project universes for Bank G and Black Rous.

## Stack

- Astro with strict TypeScript
- Static HTML/CSS/JS output
- Native CSS with design tokens
- ESLint and Prettier

## Requirements and setup

Use the Node.js version declared in `.nvmrc`.

```bash
npm ci
npm run dev
```

## Quality and build

```bash
npm run validate
npm run build
npm run preview
```

`validate` runs formatting, lint, Astro/TypeScript checks, and the production build.

## Architecture

Pages and layouts live in `src/`, stable typed content in `src/data/`, shared foundations in `src/styles/`, and approved static assets in `public/`. See `docs/ARCHITECTURE.md` and `docs/BRAND_ASSETS.md`.

## Status

Delivery 3 projects. Remaining corporate sections, final contact/footer, public URLs, and deployment are intentionally pending.
