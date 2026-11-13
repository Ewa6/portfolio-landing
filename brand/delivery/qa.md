# Ewa Jabłońska — technical-writing.net: delivery QA

Date/version: 2026-11-12, v1
Reviewer and method: self-review by Claude (scripts and visual inspection of renders). No subagent review, no owner review of the final book yet.
Decision snapshot: decisions.md, 2026-11-12 (D01–D14)
Package status: production edition v1, approved by Ewa (D18)

Result values: passed · failed · unverified · not applicable.

| Deliverable | Observable check | Result / evidence (type) | Remaining limitation |
| --- | --- | --- | --- |
| Strategy | Every brief item marked owner / source / assumption | passed (reading) | No dated market sources: no web scan was done |
| Consistency | Each choice names the brief item it serves | passed (reading: directions board notes, graphic-system.md) | — |
| Distinctiveness | Anti-generic test on the direction | passed for direction A (AI critique): the three-area code is specific to this portfolio. Not applicable for tagline and hero: Ewa writes them | AI critique is not user research |
| Logo master / variants | `check-assets.mjs` on `logo/` | passed: 0 errors (script). Outlines only, no strokes, no text, no raster in SVG; PNG exports have alpha | Lockup exists only as PNG (lettering not outlined) |
| Logo small sizes | Test sheet at 96, 64, 48, 32, 24, 16 px on dark and light | passed (visual inspection of `logo/test-sheet.png`): standard mark from 32 px, small variant from 16 px | Not tested on a real browser tab or phone |
| Logo source fidelity | Compared with `public/logo.png` on the logo board | passed for arcs, nodes and colour order (visual inspection). The centre element is removed on purpose (D02) | This is an evolution, not a faithful copy |
| Fonts / type | PDF embedded fonts; Polish glyphs | passed (script: `Inter-Regular`, `CascadiaMono-Regular` embedded; visual: ą ć ę ł ń ó ś ź ż render in Inter) | The PDF tool lists the variable font as "Inter-Regular" for all weights; weight 600 was checked by eye |
| Palette | `contrast.mjs` on all text and line pairs, both modes | passed (calculation): all text pairs ≥ 4.5; functional lines ≥ 3. Users `#2F8FA6` on light is 3.50: limited to shapes | Calculated contrast is not an accessibility audit |
| Voice | Matches traits; examples are Ewa's own quotes; no AI-written copy presented as Ewa's | passed (reading) | Ewa has not reviewed the guide |
| Diagram | venn-01/B render inspected, dark and light. At 640 px wide the project names are about 11 px: too small on a phone | passed (visual inspection); check-assets flags live text in the SVG (expected) | Label words wait for Ewa. SVG has live text: PNG is the safe export |
| Applications | Five mockups rendered and inspected at desktop width | passed (visual inspection) | Mockups only. No phone width. No long-text or empty-state test |
| Print | — | unverified | No paper test. PDF is RGB |
| Brand book HTML | `check-book.mjs` | passed: 0 errors (script). Phone render (390 px) inspected in an earlier build | Phone render not repeated after the last print-only CSS change |
| Brand book PDF | 15 pages, A4, fonts embedded; pages inspected | passed (script + visual inspection of the 17-page build; the last change removed one empty page and the footer page) | The final 15-page build was checked by page count and script, not page by page |
| Status labels | Every artefact has a status | passed (reading: book chapter 8, START-HERE, asset register) | — |
| Final package | `make-zip.mjs --verify` | passed (script): checksums match, links resolve in the extracted copy | Test sheet has images without alt text (internal sheet) |
| Rebranding | Scope, old-to-new map, real rollout status | passed (reading: rebranding-plan.md). Old identity is live; nothing applied | — |

## Corrections made
- Direction board: font warning was wrong (fonts were loaded) → fixed the check. Label overlap in B and headline overlap in C → fixed → re-rendered.
- Logo board: label spacing → fixed.
- Favicon PNGs had white corners → exported with a transparent background → rechecked.
- Lockup SVG with live text fell back to Segoe UI → replaced with an HTML source and PNG exports that use the local Inter files → rechecked on the test sheet.
- Venn SVG as an image fell back to Segoe UI in the PDF → book and mockups use PNG exports made with local Inter → PDF fonts list is clean.
- CV mockup used "Tech +" → changed to "Technology +" (one word for one meaning).
- PDF: dark pages had a white margin → the PDF uses the light mode; empty "In use" page and orphan footer removed.

## Exact remaining actions
- Ewa: read the brand book; approve or ask for changes.
- Ewa: confirm the diagram label words.
- Later: print test, resemblance search, phone checks during the apply-brand thread.
