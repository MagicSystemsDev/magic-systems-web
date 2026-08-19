# Brand assets

Only approved exports required by this site are copied locally. Runtime code never depends on neighboring repositories.

| Brand         | Authoritative source                                          | Version                 | Asset copied                                | Intended use                                 |
| ------------- | ------------------------------------------------------------- | ----------------------- | ------------------------------------------- | -------------------------------------------- |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `magic-systems-lockup-horizontal-dark.svg`  | Desktop header lockup on Deep Graphite       |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `magic-systems-symbol-primary-gradient.svg` | Mobile header and Hero composition           |
| Magic Systems | `MagicSystemsDev/magic-systems`, `brand/visual-identity/v1.0` | 1.0                     | `assets/icons/favicon.svg`                  | Official Micro Mark favicon on Deep Graphite |
| Bank G        | `MagicSystemsDev/bank-g`, `brand/visual-identity/v1.0`        | 1.0                     | `bank-g-lockup-horizontal-white-live.svg`   | Primary identity in the Bank G showcase      |
| Bank G        | `MagicSystemsDev/bank-g`, `brand/visual-identity/v1.0`        | 1.0                     | `bank-g-mark-white.svg`                     | Secondary Perimeter G field                  |
| Black Rous    | `MagicSystemsDev/black-rous-web`, `public/brand`              | Current published asset | `black-rous.png`                            | Client identity in the Black Rous showcase   |

The Magic Systems files are unmodified approved exports. Source paths are `brand/visual-identity/v1.0/assets/logo/` for the lockup and symbol, and `brand/visual-identity/v1.0/assets/icons/favicon.svg` for the favicon.

Future flow: authoritative brand repository → approved export → `public/projects/{project}/`.

Bank G assets were copied without modification from `brand/visual-identity/v1.0/assets/logo/` to `public/projects/bank-g/`.

The Black Rous asset was copied without modification from `public/brand/black-rous.png` to `public/projects/black-rous/`. Its original 1536 × 1024 export is retained because it combines the client mark and wordmark in one responsive visual; it is loaded lazily below the fold.
