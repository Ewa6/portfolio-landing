# Ewa Jabłońska — technical-writing.net: start here

Version/date: v1, 2026-11-12
Package status: **production edition v1, approved by Ewa (D18)**
Owner approval: Ewa chose the depth (identity evolution), the positioning, the creative direction (A · Junction), the logo construction (logo-01/A) and the type (Inter only). Colour values, the lockup, the diagram drawing and the mockups are routine choices by Claude inside those decisions. Ewa gave final approval on 12 November 2026 (D18).

## Open first
- Brand book: [../brand-book/index.html](../brand-book/index.html) (dark, screen) and [../brand-book/brand-book.pdf](../brand-book/brand-book.pdf) (light, 15 pages, A4)
- Voice guide: [../tone-of-voice.md](../tone-of-voice.md)
- Logo files and rules: [../logo/usage.md](../logo/usage.md)
- Asset list: [asset-register.csv](asset-register.csv)
- Decisions: [../decisions.md](../decisions.md)

## Package
| Folder / file | Content | Status |
| --- | --- | --- |
| `brief.md` | Scope, audience, positioning, personality, selection criteria | working |
| `tone-of-voice.md` | Voice of Ewa's texts; proofreading check for AI | working |
| `logo/` | Mark (SVG outlines, PNG), small variant, favicon, avatar, lockup PNG, test sheet, usage rules | production (lockup: working) |
| `tokens.css`, `palette.md` | Colours with roles, dark and light, contrast table | production |
| `typography.md`, `fonts/` | Inter Variable with OFL licence, roles and sizes | production |
| `graphic-system.md`, `graphic/` | Nodes, area labels, junction line, Venn diagram (SVG + PNG, dark and light) | working |
| `applications/` | Five mockups: site, docs header, CV header, LinkedIn, Confluence | mockup |
| `brand-book/` | The book, HTML and PDF | production |
| `rebranding-plan.md` | What changes on each touchpoint, and in what order | working |
| `scripts/` | `build-logo.mjs`, `build-graphics.mjs`: rebuild the SVG files | — |
| `explorations/` | The two comparison boards (history; not in the ZIP) | exploration / concept |

## Current standards
- Positioning: the technical writer connects technology, product, and users; docs stay in the centre (D07).
- Who writes what (D19, "Mixed"): Ewa writes narrative texts, and AI only proofreads them. AI drafts functional texts, and an independent AI review checks them. Ewa approves every text.
- English lists use the Oxford comma (D20).
- Direction: Junction. Colour is a code: Technology blue, Product purple, Users aqua (D06).
- Mark: three arcs with nodes, empty centre (D02, D09).
- Type: Inter only (D08). Dark mode first (D03).

## Use and edit
- Colours and sizes: use the variables in `tokens.css`. Light mode: `data-theme="light"`.
- Fonts: link `fonts/fonts.css`. Licence: `fonts/OFL.txt`.
- Logo: use the files in `logo/exports/`. To change the geometry, edit `scripts/build-logo.mjs` and run `node brand/scripts/build-logo.mjs`.
- Diagram: to change the label words, edit `scripts/build-graphics.mjs` and run it. The SVG has live text: inline it in a page that loads Inter, or use the PNG.
- Lockup: `logo/source/lockup.html` is the source; the PNG files are the exports.

## Transition
The old identity is live (site at commit 60b8994). Nothing in this package is applied. The map of old to new files and the order are in [../rebranding-plan.md](../rebranding-plan.md). Applying the brand is a separate thread, with a local preview before a PR.

## Verification
See [qa.md](qa.md). In short: asset check 0 errors; book check 0 errors; PDF 15 pages with Inter embedded, each page inspected; contrast calculated for all text pairs; logo inspected at 16–96 px on dark and light.

## Remaining items
| Item | Status | Needed action/evidence | Effect on use |
| --- | --- | --- | --- |
| Final approval of the book | done (D18) | — | — |
| Diagram label words | open | Ewa confirms or changes them (SCRUM-147) | Diagram is not final |
| Vector lockup | deferred: no font tool installed | Permission to install a tool, or keep PNG | Use the PNG lockup |
| Print test | not done | Print `logo/test-sheet.png` and a CV page | Print minimum size is a proposal |
| Resemblance search for the mark | not done | Web / image search | No legal clearance |
| Market scan | not done | Optional | Category notes are assumptions |
| Phone-size check of the site mockup | not done (mockup is desktop width) | Do it in the apply-brand thread | — |
| Apply the brand to the site, docs, CV, LinkedIn, Confluence | not started | Separate threads | Old identity stays live |

## Sharing
The package has no private data. It is not published. Publishing the book or the files needs Ewa's permission.
