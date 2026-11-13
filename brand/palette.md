# Palette

Status: production (approved by Ewa, D18). Source of truth: [tokens.css](tokens.css). Dark is the primary mode (D03).

## The rule: colour is a code
| Area | Dark mode | Light mode | Meaning |
| --- | --- | --- | --- |
| Technology | `#6888D9` | `#4464AD` | Tools, code, AI, APIs |
| Product | `#8E7FE0` | `#6A58C4` | What the product is and why |
| Users | `#58C1DB` | `#2F8FA6` | People who use and choose it |
| Centre | `#FFFFFF` | `#162444` | Technical Writer + AI |

- Use an area colour only to say "this belongs to this area". A project that sits between two areas shows both colours (two nodes, or a two-colour line).
- Do not use area colours for status, links, buttons or decoration.
- Always put a text label next to the colour. Colour alone does not carry meaning.
- Status: "Finished" = filled neutral pill. "In progress" = outline neutral pill.

## Neutrals and actions
| Role | Dark | Light |
| --- | --- | --- |
| Background | `#0B1020` | `#F6F7FB` |
| Surface (cards) | `#121934` | `#FFFFFF` |
| Surface raised | `#1A2347` | `#FFFFFF` |
| Ink (text) | `#E8EBF7` | `#162444` |
| Muted text | `#AFB7D4` | `#4A5370` |
| Line (decorative) | `#26305A` | `#D0D7F2` |
| Functional line (needed to see a control) | `#5F70B0` | `#7A88B8` |
| Link | `#C5CEF0` | `#2C4376` |
| Button / on button | `#E8EBF7` / `#0B1020` | `#162444` / `#FFFFFF` |
| Area label text: Technology / Product / Users | `#9DAFE6` / `#B4A9EE` / `#7FD3E8` | `#3A589E` / `#5944AD` / `#25707F` |

## Contrast (calculated with contrast.mjs, 2026-11-12)
Thresholds: 4.5 normal text, 3 large text and needed lines.

| Pair | On background | On surface | Result |
| --- | --- | --- | --- |
| Dark: ink | 15.91 | 14.54 | pass |
| Dark: muted | 9.50 | 8.68 | pass |
| Dark: link | 12.13 | 11.08 | pass |
| Dark: Technology / Product / Users label text | 8.75 / 8.88 / 11.16 | 7.99 / 8.11 / 10.19 | pass |
| Dark: Technology / Product / Users (shapes, lines) | 5.51 / 5.64 / 9.07 | 5.03 / 5.15 / 8.28 | pass |
| Dark: functional line | 3.99 | 3.64 | pass for lines (3), not for text |
| Dark: decorative line | 1.49 | 1.36 | decoration only |
| Dark: button text on button | 15.91 | — | pass |
| Light: ink | 14.31 | 15.32 | pass |
| Light: muted | 7.10 | 7.60 | pass |
| Light: link | 9.03 | 9.67 | pass |
| Light: Technology / Product / Users label text | 6.39 / 6.87 / 5.29 | 6.84 / 7.35 / 5.67 | pass |
| Light: Technology / Product (shapes) | 5.34 / 5.15 | 5.71 / 5.51 | pass |
| Light: Users (shapes) | 3.50 | 3.74 | shapes and large text only; for small text use `#25707F` |
| Light: functional line | 3.24 | 3.47 | pass for lines |
| Light: decorative line | 1.33 | 1.43 | decoration only |

Forbidden: dark-mode area colours (`#6888D9`, `#8E7FE0`, `#58C1DB`) as text or thin lines on a light background.

Calculated contrast is not an accessibility audit.

## Relation to the old palette (src/styles/theme.css)
- Kept: blue `#6888D9`, `#4464AD`, `#9DAFE6`, `#2C4376`, `#162444`; aqua `#58C1DB`; line `#D0D7F2`; purple `#5944AD`.
- New: Product purple `#8E7FE0` (between the old purple-200 and purple-300), light purple `#6A58C4`, light aqua `#2F8FA6`, background `#0B1020` (was neutral black), surfaces, muted text.
- Retired when the brand is applied: the 7-step scales that have no role, the gradient on the name, the teal "Finished" card style.

## Print
RGB only. No CMYK values are defined. For a one-colour print use ink `#162444` or black.
