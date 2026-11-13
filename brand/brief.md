# Brand brief: Ewa Jabłońska — technical-writing.net

Date/version: 2026-11-12, v1
Status and decision source: scope approved by Ewa (intake, 2026-11-12); positioning taken from the brainstorm decisions of 2026-11-05 — waiting for Ewa's confirmation
Path: refresh-rebrand (identity evolution)
Rebranding plan link: [rebranding-plan.md](rebranding-plan.md)

Markers: `[owner]` said by the owner · `[source: URL, date]` research fact · `[assumption]` not verified.

## Selected scope
- Requested outcome and deliverables: identity evolution, brand book (HTML + PDF), tokens, delivery package. The live site does not change in this thread. `[owner]`
- Name: retain — "Ewa Jabłońska"; fixed domain technical-writing.net. `[owner]`
- Public descriptor: retain — "Technical Writing Portfolio" (kicker on the site). Ewa may rewrite it. `[assumption]`
- Tagline or branding line: skip in this thread. Ewa writes the hero message herself (SCRUM-146). AI only proofreads. `[owner]` (rule from the brainstorm: "Ewa writes texts; AI only proofreads")
- Choice mode: Ewa chooses from variants at every creative decision. `[owner]`

| Module | Action | Fixed inputs / open decision | Next output |
| --- | --- | --- | --- |
| Strategy | refine | Direction from the brainstorm 2026-11-05; Ewa confirms the positioning sentence | This brief |
| Naming | skip | Name and domain stay | — |
| Verbal identity | refine | Voice described from Ewa's own texts; no AI-written copy | tone-of-voice.md |
| Creative directions | develop | Hold fixed: name, three-arc logo idea, blue/purple/aqua family | 2–3 directions, comparison board |
| Logo | evolve | Ewa: "three arcs without what's in the centre"; vector master | logo/ SVG + exports |
| Colour and type | refine | Dark first, light too `[owner]`; existing palette is the baseline | tokens.css, palette.md, typography.md |
| Graphic system | develop | Venn (Technology / Product / Users) as the system element (SCRUM-147) | graphic rules, diagram style |
| Applications | develop | Portfolio site, docs sites, CV + LinkedIn, Confluence + diagrams `[owner]` | mockups |
| Brand book and delivery | develop | HTML + PDF, asset register, QA | brand-book/, delivery/ |

## Existing identity (baseline, commit 60b8994)
| Element | Current rule or file | Source | Authority / status |
| --- | --- | --- | --- |
| Positioning / promise | "Technical writing is more than content." Documentation, tooling and process together | src/pages/index.astro | superseded by the brainstorm 2026-11-05 |
| Voice traits, terms | Clear, direct, human, plain words, short sentences (blog posts) | src/pages/blog/*.mdx | Ewa's own voice — retain |
| Logo master | public/logo.png — AI-made raster, three arcs (aqua, purple, blue) with glow, briefcase in the centre | public/logo.png | evolve (Ewa: arcs without centre) |
| Palette | Blue #4464AD, purple #5944AD, aqua #4498AD + 7-step scales, neutrals | src/styles/theme.css | baseline for evolution |
| Type | Inter 300–700 (Google Fonts) | src/layouts/Layout.astro | baseline |
| Composition / imagery / icons | Dark page, gradient name, rounded cards, pills, thin rules; Lucide icons; Venn PNG (Content / Process / Code) | index.astro, public/ | Venn content superseded (SCRUM-147) |

## Product and audience
- Product in one sentence: a portfolio that shows Ewa Jabłońska as a technical writer who builds documentation for people and AI, and who connects technology, product and users. `[owner]` (brainstorm)
- Audience and use situation: a hiring manager or team lead at a company that builds documentation with AI. Reads the page fast, often on a laptop, sometimes on a phone from a LinkedIn link. `[owner]` audience; use situation `[assumption]`
- Need and benefit: they need a writer who can direct AI work and still own clarity and quality. Benefit: proof in real projects — docs for an AI skill, a product case study, a classic API sample. `[owner]`
- Current alternative: classic TW portfolios with writing samples only; or developers who write docs. `[assumption]`
- Practical limits: favicon 16–32 px; LinkedIn avatar (circle crop) and banner; CV PDF on A4; GitHub Pages docs themes; Confluence page headers. `[owner]` channels; sizes `[assumption]`

## Market context
Bounded scan not done with web research in this thread. The positioning was set in the brainstorm. Category codes below are `[assumption]` from general knowledge, not research.

- Category conventions to keep: a readable text-first page, clear project cards, links to real samples, contact.
- Conventions to break: generic "developer portfolio" template look (glassmorphism, emoji, gradient glow), pen/paper/quill metaphors.
- Gap: few TW portfolios show the AI-direction role (writer as the one who sets direction and checks AI work) as a system, not a claim.
- Scan limits: no competitor URLs checked. Ewa can add references.

## Positioning and platform
- Positioning sentence (internal): For teams that build documentation with AI, who need someone to keep it clear and correct for people and for models, Ewa Jabłońska is the technical writer who connects technology, product and users, because her projects show docs for an AI skill, a product she led with AI, and classic API docs. Unlike writers who only produce text, she sets the direction for AI work and checks the result. `[owner]` content (brainstorm); wording `[assumption]`
- Promise and its limits: clear documentation that people and AI can both use. Limit: no claims of years of AI experience, no client names, no metrics that do not exist.
- Proof points (evidence): Promo Video Skill docs + Ewa's Windows PR; StickerStart case study (brand, texts, AI supervision, Remotion videos); Quoteable Service API (UW course final project); Jira → Claude Code → GitHub process in Confluence. Aspiration: "bridge" role in a company.
- Personality (is / is not):
  - Clear, not cold.
  - Structured, not bureaucratic.
  - Curious about AI, not hyped.
  - Human, not casual.
  - In charge (sets direction), not loud.
- Desired feeling: "This person knows how the parts fit together, and I can trust her text."
- Message pillars: 1) Docs stay in the centre. 2) Technology, product and users connect through the writer. 3) The writer directs AI and checks the result. 4) Proof, not claims.

## Selection criteria
1. Reads as "technical writer" (not "developer" or "designer") in under 3 seconds on a laptop and a phone.
2. Shows connection of three areas (technology, product, users) without a text explanation.
3. Feels clear and in charge, not hyped or "AI-glow" generic.
4. Keeps recognition from the current site: three arcs and the blue/purple/aqua family.
5. Works on dark and light, and the mark works at 16 px and in one colour.
6. Easy to apply on GitHub Pages docs, a CV PDF and Confluence without a designer.

## References and exclusions
- References: current logo (three arcs), current palette, Ewa's blog voice.
- Likes and dislikes, in the owner's words: "I would do three arcs without what's in the centre" (logo, 2026-11-12).
- Exclusions and scope: no AI-written copy on the site or in voice examples presented as Ewa's text — voice examples in the brand book are quotes from Ewa's existing texts or are marked as placeholders. BrickPrice is not part of the portfolio. `[owner]`

## Channels and production
- Primary channels: portfolio site (Astro + Tailwind v4), docs sites (GitHub Pages), CV PDF + LinkedIn, Confluence + diagrams. `[owner]`
- Languages: English (site and brand). `[assumption]`
- Canonical asset and token location: `brand/` in this repo. Site tokens stay in src/styles/theme.css until the "apply brand" thread.

## Sharing
- Public vs private: the brand book may become public with the site; it contains no private data.
- Sources and licences: fonts must be open licence (OFL) to use on GitHub Pages and in PDF.
