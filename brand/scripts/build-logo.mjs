// Builds the arc mark as filled outlines. Run: node brand/scripts/build-logo.mjs (from repo root or brand/)
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'logo');
mkdirSync(join(root, 'exports'), { recursive: true }); mkdirSync(join(root, 'source'), { recursive: true });
const V = { T: [50, 17], R: [82, 72], L: [18, 72] }, RAD = 64, C0 = [50, 53.67];
const f = n => +n.toFixed(2);
function centre(p, q) {
  const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1];
  const d = Math.hypot(dx, dy), h = Math.sqrt(RAD * RAD - d * d / 4), nx = -dy / d, ny = dx / d;
  const a = [mx + nx * h, my + ny * h], b = [mx - nx * h, my - ny * h];
  return Math.hypot(a[0] - C0[0], a[1] - C0[1]) < Math.hypot(b[0] - C0[0], b[1] - C0[1]) ? a : b;
}
function arc(p, q, w, frac) {
  const c = centre(p, q), a0 = Math.atan2(p[1] - c[1], p[0] - c[0]);
  let a1 = Math.atan2(q[1] - c[1], q[0] - c[0]); if (a1 < a0) a1 += 2 * Math.PI;
  const ae = a0 + (a1 - a0) * frac, ro = RAD + w / 2, ri = RAD - w / 2;
  const pt = (r, a) => [f(c[0] + r * Math.cos(a)), f(c[1] + r * Math.sin(a))];
  const o0 = pt(ro, a0), o1 = pt(ro, ae), i1 = pt(ri, ae), i0 = pt(ri, a0), h = w / 2;
  return `M${o0}A${ro} ${ro} 0 0 1 ${o1}A${h} ${h} 0 0 1 ${i1}A${ri} ${ri} 0 0 0 ${i0}A${h} ${h} 0 0 1 ${o0}Z`.replace(/,/g, ' ');
}
function mark({ w, node, frac, cols }) {
  const [tech, prod, user] = cols;
  const seg = (p, q, col) => `<path fill="${col}" d="${arc(p, q, w, frac)}"/><circle fill="${col}" cx="${p[0]}" cy="${p[1]}" r="${node}"/>`;
  return seg(V.T, V.R, prod) + seg(V.R, V.L, tech) + seg(V.L, V.T, user);
}
const svg = (body, vb = '0 0 100 100', title = 'Ewa Jabłońska mark') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;
const STD = { w: 8, node: 8.5, frac: .8 }, SMALL = { w: 10.5, node: 10.5, frac: .74 };
const P = { dark: ['#6888D9', '#8E7FE0', '#58C1DB'], light: ['#4464AD', '#6A58C4', '#2F8FA6'], white: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], ink: ['#162444', '#162444', '#162444'] };
const out = (n, s) => writeFileSync(join(root, n), s);
out('source/mark-master.svg', svg(mark({ ...STD, cols: P.dark })));
for (const k of Object.keys(P)) {
  const name = { dark: 'colour-on-dark', light: 'colour-on-light', white: 'white', ink: 'ink' }[k];
  out(`exports/mark-${name}.svg`, svg(mark({ ...STD, cols: P[k] })));
  out(`exports/mark-small-${name}.svg`, svg(mark({ ...SMALL, cols: P[k] })));
}
// favicon / avatar tile: mark on the dark brand background
out('exports/favicon.svg', svg(`<rect width="100" height="100" rx="22" fill="#0B1020"/><g transform="translate(12 13.5) scale(.76)">${mark({ ...SMALL, cols: P.dark })}</g>`));
out('exports/avatar.svg', svg(`<rect width="100" height="100" fill="#0B1020"/><g transform="translate(24 25.5) scale(.52)">${mark({ ...STD, cols: P.dark })}</g>`));
console.log('logo files written');
