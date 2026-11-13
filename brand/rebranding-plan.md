# Ewa Jabłońska — technical-writing.net: rebranding plan

Date/version: 2026-11-12, v1
Owner and decision source: Ewa Jabłońska; decisions D01–D14 in [decisions.md](decisions.md)
Scope/status: design package approved by Ewa (D18); rollout not started
Current live identity: the site at commit 60b8994 (branch main)
Baseline source: `public/logo.png`, `public/Audience Engagement Venn Diagram smaller.png`, `src/styles/theme.css`, `src/pages/index.astro` at commit 60b8994
Proposed identity and working location: `brand/` (this folder), version 1

## Reason and desired result
- Why change now: the portfolio direction changed on 2026-11-05. The audience is now a company that hires for AI-assisted documentation.
- What is not working, with examples: the Venn diagram shows Content / Process / Code, not Technology / Product / Users. The logo is a raster file with a glow and a briefcase; it blurs at 16 px and has no light version. The palette has 28 values with no roles. The "Finished" card uses aqua, which now must mean "Users". The page template look (gradient name, glow) fits any developer portfolio.
- What changed: message = the technical writer is a bridge between technology, product and users; docs stay in the centre.
- What Ewa values: the three arcs, the blue / purple / aqua colours, the dark page, the Venn idea. "No rebuild."
- Desired outcome: one system that works on the site, docs sites, CV, LinkedIn and Confluence, and that shows the three-area connection without a text explanation.
- Evidence available: brainstorm decisions (2026-11-05), Jira SCRUM-146 to SCRUM-154, the live site.
- Missing evidence: no visitor data, no market scan.

## Depth of change
Route: identity evolution (D01).
In scope: logo (vector, no centre), palette roles, type rules, graphic system, diagram, mockups, brand book.
Out of scope: name, domain, site texts (Ewa writes them), changes to live pages, CV content.
Unresolved owner decisions: diagram label words.

## Component decisions
| Component | Current state/source | Decision | Reason / evidence | Decision source/status |
| --- | --- | --- | --- | --- |
| Name / identifiers | Ewa Jabłońska, technical-writing.net | retain | Not opened | D01 |
| Positioning / promise | "Technical writing is more than content" | replace | New direction | D07, approved final |
| Voice / messages | Ewa's blog voice | retain; described in a guide | Ewa writes texts | D05 |
| Logo | Raster, three arcs + glow + briefcase | evolve | Ewa: arcs without the centre; vector needed | D02, D09, D18, approved final |
| Palette | 28 values, no roles | evolve | Colour becomes a code; 9 old values kept | D03, D10 routine |
| Type | Inter 300–700 | retain, with rules | Inter only | D08 |
| Graphic system | Gradient name, glow, teal "Finished" cards, old Venn | replace | Direction A | D06 |

## Comparison findings
The baseline and the three logo constructions are on one board in the same placements (`explorations/2026-11-12-logo/renders/board-1500.png`). The old logo loses the briefcase and blurs at 16 px; the new mark stays readable at 16 px in the small variant. Recognition kept: three arcs, node at the start of each arc, colour order, dark page. Recognition given up: the glow and the briefcase. Not verified: reaction of real visitors.

## Asset and touchpoint transition
| Touchpoint / old source | Action | Replacement source | Design status | Live status | Dependencies / order | Who | Verification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `public/logo.png` (hero, 404) | replace | `brand/logo/exports/mark-colour-on-dark.svg` | working | old is live | After final approval | apply-brand thread | Local preview, then PR |
| `public/favicon.png` | replace | `brand/logo/exports/favicon.svg` + PNGs | working | old is live | Same | apply-brand thread | Browser tab check |
| `src/styles/theme.css`, hard-coded hex in `index.astro`, `global.css` | update | `brand/tokens.css` | working | old is live | Map old classes to roles | apply-brand thread | Contrast check, both modes |
| Venn PNG | replace on the home page; keep the old file for the blog post (SCRUM-151) | `brand/graphic/venn-on-dark.svg` (inline) | working | old is live | SCRUM-147; Ewa confirms label words | apply-brand thread | Phone and desktop check |
| Project cards | update | Card pattern in `graphic-system.md` | mockup | old is live | SCRUM-148 (order), SCRUM-149 | apply-brand thread | — |
| Gradient name in hero | retire | Plain ink H1 | mockup | old is live | SCRUM-146 (Ewa's text) | apply-brand thread | — |
| Google Fonts link for Inter | reuse or replace with local files | `brand/fonts/` | working | Google Fonts is live | Optional | apply-brand thread | — |
| Docs sites (Promo Video Skill, Quoteable API) | update header | Mockup 2 | mockup | not branded | After SCRUM-154 | later thread | — |
| CV | update | Mockup 3 | mockup | old CV | SCRUM-144 | later thread | — |
| LinkedIn banner and avatar | replace | Mockup 4; `avatar-800.png` | mockup | old | Ewa uploads herself | Ewa | — |
| Confluence space header | update | Mockup 5 | mockup | old | SCRUM-153 | later thread | — |
| `README.md` and `package.json` (template author's text) | not in scope | — | — | — | Noted as a follow-up | — | — |

## Rollout scope
- This thread: design-only handoff. No live page changed.
- Intended release: one PR for the site (logo, tokens, diagram, cards), after a local preview that Ewa checks. Docs sites, CV, LinkedIn and Confluence follow one by one. Mixed old and new material across channels is expected for a short time.
- External actions that need Ewa's authorization: any PR or deploy, LinkedIn upload, Confluence edits, Jira updates.
- Recovery: the old identity is at commit 60b8994.

## Completion and open items
- Design package and QA: [delivery/START-HERE.md](delivery/START-HERE.md), [delivery/qa.md](delivery/qa.md)
- Activation evidence: none (nothing is live).
- Remaining owner decisions: diagram label words.
- Next concrete action: Ewa reads the brand book; then the "apply brand to the site" thread.
