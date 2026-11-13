# Logo: usage

Status: mark = production (logo-01/A, final approval by Ewa, 2026-11-12, D18). Lockup = working (PNG exports; lettering is live Inter text, not outlined).
Baseline (old logo): `public/logo.png` at commit 60b8994. It stays live on the site until the "apply brand" thread.

## The mark
Three arcs with nodes. Each arc starts at a node and stops before the next node. No element in the centre (D02).
- Top node and right arc: Product (purple).
- Right node and bottom arc: Technology (blue).
- Left node and left arc: Users (aqua).

Rebuild all SVG files: `node brand/scripts/build-logo.mjs`. The shapes are filled outlines (no strokes, no text, no raster).

## Files
| File | Use |
| --- | --- |
| `source/mark-master.svg` | Master (colours for dark background) |
| `exports/mark-colour-on-dark.svg` / `-512.png` | Default: on `#0B1020` and `#121934` |
| `exports/mark-colour-on-light.svg` / `-512.png` | On `#F6F7FB` and white |
| `exports/mark-white.svg`, `mark-ink.svg` | One colour: on photos, on a colour field, in print |
| `exports/mark-small-*.svg` | Sizes 16–31 px (thicker arcs, larger nodes) |
| `exports/favicon.svg`, `favicon-16/32/180/512.png` | Browser tab, touch icon |
| `exports/avatar.svg`, `avatar-800.png` | Round profile pictures (LinkedIn, GitHub) |
| `source/lockup.html` → `exports/lockup-on-dark.png`, `lockup-on-light.png` | Mark + name |

## Rules
- Minimum size: standard mark 32 px. Below 32 px use the small variant. Smallest size: 16 px (checked on the test sheet, `test-sheet.png`). Proposed minimum for print: 8 mm (not tested on paper).
- Clear space: one node diameter on each side.
- Lockup: mark height 56 for text size 36 (ratio 1.55), gap = a quarter of the mark width, Inter 600, tracking −0.01em. Write the name with Polish letters.
- Backgrounds: brand dark, brand surface, brand light, white. On other colours use the one-colour version.

## Do not
- Do not put an icon or text in the centre.
- Do not add glow, shadow or gradient.
- Do not change which colour is on which arc. The colours are a code.
- Do not rotate, stretch or close the gaps.
- Do not use the dark-background colours on a light background (contrast is too low).

## Checks done
- `check-assets.mjs`: 0 errors.
- Test sheet inspected at 96–16 px on dark and light.
- Resemblance search: not done. This is not legal clearance.
