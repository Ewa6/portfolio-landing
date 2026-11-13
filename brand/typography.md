# Typography

Status: production (approved by Ewa, D18). Decision: Inter only (Ewa, 2026-11-12, D08). Source of truth: [tokens.css](tokens.css).

## Family
| Item | Value |
| --- | --- |
| Family | Inter (variable, weights 100–900; the brand uses 400, 500, 600) |
| Licence | SIL Open Font License 1.1 — `fonts/OFL.txt`. Free for web, PDF and print. |
| Source | `@fontsource-variable/inter` 5.2.8 via jsDelivr, downloaded 2026-11-12 with Ewa's permission |
| Files | `fonts/inter-latin-wght-normal.woff2`, `fonts/inter-latin-ext-wght-normal.woff2`, `fonts/fonts.css` |
| Languages | Latin and Latin Extended. Polish letters (ą ć ę ł ń ó ś ź ż) checked in the name "Jabłońska". |
| Fallback | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` |
| Code | System monospace stack (`ui-monospace, "Cascadia Mono", "SF Mono", Menlo, Consolas`). Only for code samples, never for labels. |

No italic file is bundled. Do not use italics for emphasis; use weight 600.

## Roles
| Role | Size | Weight | Line height | Other |
| --- | --- | --- | --- | --- |
| H1 (name, page title) | `clamp(2rem, 5vw, 3rem)` | 600 | 1.15 | tracking −0.01em |
| H2 (section) | 1.5rem | 600 | 1.15 | followed by a thin rule on the site |
| H3 (card title) | 1.25rem | 600 | 1.15 | |
| Lead | 1.125rem | 400 | 1.6 | max 68 characters per line |
| Body | 1rem | 400 | 1.6 | max 68 characters per line |
| Small | 0.875rem | 400 | 1.6 | card text, captions |
| Label / kicker | 0.75rem | 600 | 1.4 | upper case, tracking 0.12em, max 4 words |
| Area label | 0.75rem | 600 | 1.4 | normal case, with one or two nodes before it |

Print (CV): body 10 pt, small 8.5 pt, H1 24 pt, margins 16 mm.

## Rules
- Sentence case for headings and buttons.
- Left-aligned text. No justified text. No centred paragraphs.
- Two weights on one screen are enough: 400 and 600. Use 500 only for navigation.
- No gradient text.
