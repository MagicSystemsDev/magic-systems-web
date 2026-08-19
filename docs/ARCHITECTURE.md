# Architecture

## Closed decisions

- Astro with strict TypeScript.
- Fully static output.
- Native CSS and semantic design tokens.
- Minimal vanilla JavaScript only when necessary.
- No UI framework, backend, database, or CMS.
- Single-page corporate V1 with typed project data.
- GitHub Pages is the planned deployment target; deployment is not configured yet.

These decisions are closed unless a real technical impossibility is found.

## Separation of concerns

- **Content:** Astro pages and responsibility-based Header, Hero, and What We Do components.
- **Presentation:** layouts, scoped component styles, and shared CSS foundations.
- **Brand assets:** approved local exports under `public/`; never runtime dependencies on other repositories.
- **Project data:** typed, centralized records in `src/data/projects.ts`.

## Typography

The approved system is Space Grotesk for display and headings, and Inter for body/UI. The V1.0 identity package does not include webfont binaries, so the site declares those approved families first and currently falls back to the native system sans stack. No unverified font files or external runtime dependency were introduced.

The V1 remains a corporate single page. The typed data and component boundaries may later support individual project pages without introducing those routes prematurely.

## SEO and deployment

Global metadata is owned by `BaseLayout.astro` and stable values by `site.ts`. Canonical URLs and sitemap generation remain pending until the official site URL is confirmed. Static output is compatible with a future GitHub Pages workflow.
