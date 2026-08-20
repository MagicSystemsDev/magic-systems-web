# Magic Systems Web

Corporate website for Magic Systems. The Home now presents the complete V1 narrative: corporate positioning, featured projects, working approach, technology principles, company, founder, contact destination, and footer.

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

## Deployment

Planned production URL: `https://magicsystemsdev.github.io/magic-systems-web/`

Deployment uses GitHub Pages through the dedicated GitHub Actions workflow. In repository settings, Pages must use **GitHub Actions** as its source. Local production validation is available with `npm run build` followed by `npm run preview`.

## Architecture

Pages and layouts live in `src/`, stable typed content in `src/data/`, shared foundations in `src/styles/`, and approved static assets in `public/`. See `docs/ARCHITECTURE.md` and `docs/BRAND_ASSETS.md`.

## Status

Delivery 5 production readiness. The V1 Home, production metadata, project base path, sitemap, and deployment workflow are ready for the final checkpoint and first push.
