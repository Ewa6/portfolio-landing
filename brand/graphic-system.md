# Graphic system: "Junction"

Status: working. Direction A selected by Ewa on 2026-11-12 (D06).

## Idea
The writer stands where technology, product and users meet. The brand shows the meeting points. Each area has one colour. A node marks a point. An arc or a line joins points.

## Elements
| Element | What it is | Where to use |
| --- | --- | --- |
| Node | A filled circle, 8 px on screen (`--node-size`) | Before an area label. Two nodes that overlap = a project between two areas. |
| Area label | Node(s) + the area name in text | Project cards, docs header, CV project list, diagram legend |
| Junction line | A 3 px line on the left edge of a card, from colour A to colour B | Project cards only |
| Active line | A 3 px line in one area colour | Active item in docs navigation |
| Rule | A 1 px neutral line | After section headings, between sections |
| Venn diagram | Three outlined circles with a light fill; the project name inside the area where two circles meet; no dots, no lines (venn-01/B) | Concept section, Confluence, blog post. Files: `graphic/venn-on-dark.svg`, `venn-on-light.svg` (+ PNG) |
| Centre | The words "Technical Writer + AI", in ink colour, no node | Only in the diagram |

## Composition
- One column of text, max 68 characters per line. The site content width is about 820 px.
- Cards: surface colour, 1 px line, radius 10 px. No shadow, no glow, no glass effect.
- Pills: tags have a 1 px line and muted text. Status pills are neutral.
- Dark page: background `#0B1020`, cards `#121934`.
- Space scale: 4, 8, 16, 24, 40, 64 px.

## Area map for the projects (from SCRUM-147)
| Project | Areas | Label |
| --- | --- | --- |
| Promo Video Skill | Technology + Product | Docs for people and AI |
| StickerStart | Product + Users | Brand, marketing, adoption |
| Quoteable Service API | Technology + Users | Tutorials, training |

The diagram shows only project names. The skill words (label column) go on the project cards. Ewa can change the words. To change them, edit `scripts/build-graphics.mjs` and run it.

## Icons and imagery
- Icons: Lucide (already in the site), 1.5–2 px stroke, in ink or muted colour. Never in an area colour unless the icon stands for that area.
- No stock photos. No AI-made decorative images. Screenshots of real work are the imagery; show them in a card with a 1 px line.
- No emoji.

## Do not
- Do not use an area colour for decoration.
- Do not use gradients, except the two-colour junction line on a card.
- Do not show the old Venn (Content / Process / Code) except in the blog post about the change.
