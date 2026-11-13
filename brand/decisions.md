# Brand decisions: Ewa Jabłońska — technical-writing.net

The latest human instruction wins. Record evidence and scope. Silence is not approval.

Decision statuses: proposed · approved for development · approved final · delegated · routine · rejected · superseded · unverified.
Rebranding plan: [rebranding-plan.md](rebranding-plan.md). Approval of a design is not its activation: nothing here is live on the site.

## Current index
| Component | Current choice | Decision status | Artefact status | Decision ID | Current files |
| --- | --- | --- | --- | --- | --- |
| Positioning | TW who connects technology, product and users; docs in the centre; directs AI and checks the result | approved final (Ewa: "Yes, correct") | working | D07 | brief.md |
| Name | Ewa Jabłońska; domain technical-writing.net | retained, not opened | — | D01 | — |
| Core message / tagline | Skipped. Ewa writes the hero message (SCRUM-146) | approved final | — | D05 | — |
| Voice | Describes Ewa's existing voice; Mixed rule (D19): Ewa writes narrative texts, AI drafts functional texts, Ewa approves all | approved final (D19, D20) | working | D05, D19, D20 | tone-of-voice.md |
| Creative direction | A · Junction | approved final (D18) | concept, selected | D06 | explorations/2026-11-12-directions/ |
| Logo | logo-01/A: three arcs with nodes, no centre | approved final (D18) | production | D02, D09 | logo/ |
| Lockup | Mark + "Ewa Jabłońska" in Inter 600 | routine | working | D11 | logo/source/lockup.html, logo/exports/lockup-*.png |
| Type | Inter only; system monospace for code only | approved final | production | D08 | typography.md, fonts/ |
| Palette | Colour as code: Technology blue, Product purple, Users aqua; dark first | approved final (D18) | production | D10 | tokens.css, palette.md |
| Composition / elements | Nodes, area labels, junction line, neutral status pills, Venn diagram | approved final (D18) | working (diagram text size on a phone open) | D12 | graphic-system.md, graphic/ |
| Applications | Site, docs header, CV header, LinkedIn banner + avatar, Confluence page | routine | mockup | D13 | applications/ |
| Brand book | Edition v1 | approved final (D18) | production | D18 | brand-book/ |

Artefact statuses: exploration · concept · mockup · working · production.

## Decision log
| ID / date | Source / exact words | Scope | Status | Decision and reason | Supersedes | Files |
| --- | --- | --- | --- | --- | --- | --- |
| D01 / 2026-11-12 | Ewa, intake: "Identity evolution (Recommended)" | Depth of change | approved final | Name, logo idea and blue/purple/aqua family stay; type, palette use, layout and graphic rules get a system | — | brief.md, rebranding-plan.md |
| D02 / 2026-11-12 | Ewa, intake: "I would do three arcs without what's in the centre" | Logo | approved for development | Vector mark: three arcs, no briefcase | Brainstorm 2026-11-05 "Logo stays" (for the centre element only) | public/logo.png (baseline) |
| D03 / 2026-11-12 | Ewa, intake: "Dark first, light too" | Colour mode | approved final | Dark is primary; light exists for docs, PDF, print | — | tokens.css |
| D04 / 2026-11-12 | Ewa, intake: all four channels selected | Channels | approved final | Portfolio site, docs sites, CV + LinkedIn, Confluence + diagrams | — | brief.md |
| D05 / 2026-11-05 | Brainstorm rule: "Ewa writes texts; AI only proofreads" | All copy | approved final | No tagline or hero-line options from AI. The voice guide describes Ewa's existing voice only. Mockups use current site text or placeholders | — | tone-of-voice.md |
| D06 / 2026-11-12 | Ewa, round directions-01: "A · Junction (Recommended)" | Creative direction | approved for development | Diagram-led; colour is a code for the three areas | — | explorations/2026-11-12-directions/ |
| D07 / 2026-11-12 | Ewa: "Yes, correct" | Positioning sentence and personality | approved final | As in brief.md | Old line "Technical writing is more than content" as positioning | brief.md |
| D08 / 2026-11-12 | Ewa: "Inter only (Recommended)" | Label type | approved final | No monospace labels: they can read "developer". Mono only for code | Direction board A showed JetBrains Mono labels | typography.md |
| D09 / 2026-11-12 | Ewa, round logo-01: "logo-01/A Arcs with nodes (Recommended)" | Logo construction | approved for development | Closest to the current logo; nodes are the junction points | — | logo/ |
| D10 / 2026-11-12 | Claude, routine | Exact colour values and roles | routine | Values in tokens.css; all text pairs pass 4.5:1 (contrast.mjs). Status pills are neutral so that area colours keep one meaning | theme.css scales (when the brand is applied) | tokens.css, palette.md |
| D11 / 2026-11-12 | Claude, routine | Lockup and small variant | routine | Lockup exported as PNG from HTML with local Inter (SVG with live text fell back to Segoe UI). Small variant for 16–31 px | — | logo/ |
| D12 / 2026-11-12 | Claude, routine; content from SCRUM-147 | Venn diagram and graphic rules | routine | Outlined circles, nodes at meeting points, labels outside | Old Venn PNG (Content / Process / Code) when applied | graphic/, graphic-system.md |
| D13 / 2026-11-12 | Claude, routine | Application mockups | routine | Five mockups for the four channels | — | applications/ |
| D20 / 2026-11-12 | Ewa, copy refresh thread: "oxford comma" | All English texts | approved final | Use the Oxford comma ("technology, product, and users") | — | tone-of-voice.md |
| D19 / 2026-11-12 | Ewa, copy refresh thread: "Mixed (Recommended)"; then "zróbmy teraz ten tone of voice, mixed i oxford comma" | All copy | approved final | Ewa writes narrative texts (hero, Concept, Process, blog intros, posts, case studies); AI proofreads them only. AI drafts functional texts (navigation, buttons, card descriptions, meta, alt text, 404, cookie banner); an independent AI review checks them. Ewa approves every text. Ewa can ask AI for a draft of a narrative text (done once: Process, SCRUM-150); the copy deck records it | D05 in part (D05 still holds for narrative texts) | tone-of-voice.md |
| D18 / 2026-11-12 | Ewa: "ok, myślę że mogę zatwierdzić ten nowy kierunek brandingowy" | Whole identity: direction, logo, palette, type, graphic system, brand book v1 | approved final | Final approval. Production status for files whose checks passed. Lockup (PNG only) and diagram (phone text size) stay working. Approval is not rollout: nothing is live | D06, D09 status "approved for development" | brand-book/, logo/, tokens.css |
| D17 / 2026-11-12 | Ewa: "english name for NieZamulaj is StickerStart" | Project name in English material | approved final | "StickerStart" in the diagram, mockups and brand docs. "NieZamulaj" only in Polish texts. Jira tickets keep their wording | — | graphic/, applications/, tone-of-voice.md |
| D16 / 2026-11-12 | Ewa, round venn-01: "venn-01/B Nazwy w środku (Rekomendacja)"; before: "za dużo jest kropek, kreski w dziwnych miejscach wypadają" | Diagram labelling | approved final | Project names inside the areas; no dots, no leader lines; centre is text only. Skill words move to the project cards | D12 (diagram drawing) | graphic/, explorations/2026-11-12-diagram/ |
| D15 / 2026-11-12 | Ewa: "w środku zrobiła nie Ewa tylko Technical (albo Tech) Writer + AI" | Diagram centre label | approved final | Centre label is "Technical Writer + AI" (three lines). Full form chosen: the voice guide avoids short forms like "Tech". SCRUM-147 updated on Ewa's request (2026-11-12) | SCRUM-147 centre text | graphic/ |
| D14 / 2026-11-12 | Ewa: "Yes, download Inter" | Font files | approved final | Inter Variable (OFL) from @fontsource-variable/inter 5.2.8 via jsDelivr: 2 woff2 files + licence. (The question named 4 static files; the variable font needs only 2.) | — | fonts/ |

## Variant selections
| Round / component | Variant IDs and comparison file | Selection / exact feedback | Constraints for next round | Decision ID |
| --- | --- | --- | --- | --- |
| directions-01 / creative direction | A Junction, B Manual, C Signal — explorations/2026-11-12-directions/renders/board-1500.png | "A · Junction (Recommended)" | Hold: name, three arcs, colour family, dark first | D06 |
| logo-01 / mark construction | A arcs with nodes, B closed loop, C open arcs + baseline — explorations/2026-11-12-logo/renders/board-1500.png | "logo-01/A Arcs with nodes (Recommended)" | No element in the centre | D09 |
| venn-01 / diagram labelling | baseline, B names inside, C numbers + legend, D name + skill inside — explorations/2026-11-12-diagram/renders/board-1500.png | "venn-01/B Nazwy w środku (Rekomendacja)" | — | D16 |
| type-01 / labels | Inter only vs Inter + JetBrains Mono (shown on directions board A) | "Inter only (Recommended)" | — | D08 |

## Current art-direction paragraph
Junction. The writer stands where technology, product and users meet, and the brand shows the meeting points. Dark navy page (`#0B1020`) with slightly lighter cards; one text column; Inter in two weights. Three colours are a code, not decoration: Technology blue, Product purple, Users aqua; the centre (Technical Writer + AI) is white. Nodes mark points on cards and labels; a project between two areas shows two nodes and a two-colour line. The diagram itself has no nodes: project names sit inside their areas. The mark is three arcs with nodes and an empty centre. No glow, no gradient text, no glass effect, no emoji. Status and links are neutral.

## Open items
| Item | Why it matters | Blocks what | Evidence or action needed | Who |
| --- | --- | --- | --- | --- |
| Lettering of the lockup is not outlined | A vector lockup needs paths | Vector lockup (SVG) | Permission to install a font tool (for example opentype.js), or use PNG | Ewa |
| Diagram label words | They come from SCRUM-147; Ewa writes texts | Final diagram | Ewa confirms or changes the words | Ewa |
| Print test | Minimum print size is a proposal | Print use of the mark | Print the test sheet | Ewa |
| Resemblance search for the mark | Not legal clearance | Trademark-level confidence | Web / image search | later thread |
| Apply the brand to the site | The old identity is live | Rollout | Separate thread; local preview before a PR | later thread |
