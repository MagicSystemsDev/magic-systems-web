# Brand assets

Only approved exports required by this site are copied locally. Runtime code never depends on neighboring repositories.

| Brand         | Authoritative source                                          | Version                 | Asset copied                                | Intended use                                 |
| ------------- | ------------------------------------------------------------- | ----------------------- | ------------------------------------------- | -------------------------------------------- |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `magic-systems-lockup-horizontal-dark.svg`  | Desktop header lockup on Deep Graphite       |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `magic-systems-symbol-primary-gradient.svg` | Mobile header and Hero composition           |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `assets/icons/favicon.svg`                  | Official Micro Mark favicon on Deep Graphite |
| Bank G        | `MagicSystemsDev/bank-g`, `brand/visual-identity/v1.0`        | 1.0                     | `bank-g-lockup-horizontal-white-live.svg`   | Primary identity in the Bank G showcase      |
| Bank G        | `MagicSystemsDev/bank-g`, `brand/visual-identity/v1.0`        | 1.0                     | `bank-g-mark-white.svg`                     | Secondary Perimeter G field                  |
| Black Rous    | `MagicSystemsDev/black-rous-web`, `public/brand`              | Current published asset | `black-rous.webp`                           | Lossless web delivery of the client identity |

The Magic Systems files are unmodified approved exports. Source paths are `brand/visual-identity/v1.0/assets/logo/` for the lockup and symbol, and `brand/visual-identity/v1.0/assets/icons/favicon.svg` for the favicon.

Future flow: authoritative brand repository → approved export → `public/projects/{project}/`.

Bank G assets were copied without modification from `brand/visual-identity/v1.0/assets/logo/` to `public/projects/bank-g/`.

The Black Rous source is `public/brand/black-rous.png` (1536 × 1024, 1,595,437 bytes). Runtime uses a lossless WebP conversion at the same dimensions and with alpha preserved (677,152 bytes). Pixel comparison after compositing on the section background produced zero difference across 4,718,592 color samples. The source remains preserved in the authoritative Black Rous repository rather than duplicated here.
