// Builds the Venn diagram (Technology / Product / Users) for dark and light.
// Variant venn-01/B (Ewa, 2026-11-12): project names inside their areas; no dots, no leader lines.
// Live text (Inter): use the PNG exports or inline the SVG in a page that loads Inter.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'graphic'); mkdirSync(dir, { recursive: true });
const T = {
  dark: { tech: '#6888D9', prod: '#8E7FE0', user: '#58C1DB', techT: '#9DAFE6', prodT: '#B4A9EE', userT: '#7FD3E8', ink: '#E8EBF7', op: .14 },
  light: { tech: '#4464AD', prod: '#6A58C4', user: '#2F8FA6', techT: '#3A589E', prodT: '#5944AD', userT: '#25707F', ink: '#162444', op: .10 },
};
const lines = (x, y, arr, size = 15) => arr.map((t, i) => `<text x="${x}" y="${y + i * (size + 3)}">${t}</text>`).join('');
const venn = c => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 900 530" role="img" aria-labelledby="t d" font-family="Inter, system-ui, sans-serif">
<title id="t">Technology, Product and Users: where each skill meets a project</title>
<desc id="d">Three overlapping circles. Promo Video Skill is where Technology and Product meet. Quoteable Service API is where Technology and Users meet. StickerStart is where Product and Users meet. A technical writer working with AI is in the centre.</desc>
<g stroke-width="2">
<circle cx="450" cy="210" r="170" fill="${c.tech}" fill-opacity="${c.op}" stroke="${c.tech}"/>
<circle cx="352" cy="370" r="170" fill="${c.prod}" fill-opacity="${c.op}" stroke="${c.prod}"/>
<circle cx="548" cy="370" r="170" fill="${c.user}" fill-opacity="${c.op}" stroke="${c.user}"/>
</g>
<g font-size="26" font-weight="600" text-anchor="middle">
<text x="450" y="118" fill="${c.techT}">Technology</text>
<text x="275" y="450" fill="${c.prodT}">Product</text>
<text x="625" y="450" fill="${c.userT}">Users</text>
</g>
<g font-size="15" font-weight="600" text-anchor="middle" fill="${c.ink}">
${lines(352, 262, ['Promo Video', 'Skill'])}
${lines(548, 262, ['Quoteable', 'Service API'])}
${lines(450, 430, ['StickerStart'])}
${lines(450, 312, ['Technical', 'Writer', '+ AI'])}
</g>
</svg>
`;
writeFileSync(join(dir, 'venn-on-dark.svg'), venn(T.dark));
writeFileSync(join(dir, 'venn-on-light.svg'), venn(T.light));
writeFileSync(join(dir, 'venn-export.html'), `<!doctype html><meta charset="utf-8"><title>Venn export</title><link rel="stylesheet" href="../fonts/fonts.css"><style>body{margin:0}div{width:900px}svg{display:block}</style><div id="dark" style="background:#0B1020">${venn(T.dark)}</div><div id="light" style="background:#F6F7FB">${venn(T.light)}</div>`);
console.log('graphics written');
