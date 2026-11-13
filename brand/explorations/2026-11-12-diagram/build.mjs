// Board venn-01: same circles, different labelling. Run from this folder.
import { writeFileSync } from 'node:fs';
const c = { tech:'#6888D9', prod:'#8E7FE0', user:'#58C1DB', techT:'#9DAFE6', prodT:'#B4A9EE', userT:'#7FD3E8', ink:'#E8EBF7', muted:'#AFB7D4', line:'#5F70B0' };
const circles = `<g stroke-width="2"><circle cx="450" cy="210" r="170" fill="${c.tech}" fill-opacity=".14" stroke="${c.tech}"/><circle cx="352" cy="370" r="170" fill="${c.prod}" fill-opacity=".14" stroke="${c.prod}"/><circle cx="548" cy="370" r="170" fill="${c.user}" fill-opacity=".14" stroke="${c.user}"/></g>
<g font-size="26" font-weight="600" text-anchor="middle"><text x="450" y="118" fill="${c.techT}">Technology</text><text x="275" y="450" fill="${c.prodT}">Product</text><text x="625" y="450" fill="${c.userT}">Users</text></g>`;
const centre = (y=312) => `<g font-size="15" font-weight="600" text-anchor="middle" fill="${c.ink}"><text x="450" y="${y}">Technical</text><text x="450" y="${y+18}">Writer</text><text x="450" y="${y+36}">+ AI</text></g>`;
const svg = (body, h=630) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${h}" font-family="Inter, sans-serif">${body}</svg>`;
// B: project names inside the lenses, no dots, no lines
const inside = (x, y, l1, l2) => `<g text-anchor="middle" fill="${c.ink}"><text x="${x}" y="${y}" font-size="15" font-weight="600">${l1}</text>${l2?`<text x="${x}" y="${y+18}" font-size="15" font-weight="600">${l2}</text>`:''}</g>`;
const B = svg(circles + centre() + inside(352,262,'Promo Video','Skill') + inside(548,262,'Quoteable','Service API') + inside(450,430,'NieZamulaj'), 560);
// C: numbers in the lenses + a legend under the diagram
const num = (x,y,n) => `<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${c.ink}" stroke-width="1.5"/><text x="${x}" y="${y+5}" font-size="15" font-weight="600" fill="${c.ink}" text-anchor="middle">${n}</text>`;
const leg = (y,n,a,b) => `<g font-size="18"><circle cx="190" cy="${y-6}" r="13" fill="none" stroke="${c.ink}" stroke-width="1.5"/><text x="190" y="${y}" font-size="14" font-weight="600" fill="${c.ink}" text-anchor="middle">${n}</text><text x="218" y="${y}" font-weight="600" fill="${c.ink}">${a}</text><text x="218" y="${y+24}" fill="${c.muted}">${b}</text></g>`;
const C = svg(circles + centre() + num(358,262,1) + num(542,262,2) + num(450,430,3) + leg(600,1,'Technology + Product: docs for people and AI','Promo Video Skill') + leg(664,2,'Technology + Users: tutorials, training','Quoteable Service API') + leg(728,3,'Product + Users: brand, marketing, adoption','NieZamulaj'), 770);
// D: project name + skill inside the lenses (two sizes), no dots, no lines
const inside2 = (x,y,p1,p2,s1,s2) => `<g text-anchor="middle"><text x="${x}" y="${y}" font-size="15" font-weight="600" fill="${c.ink}">${p1}</text>${p2?`<text x="${x}" y="${y+18}" font-size="15" font-weight="600" fill="${c.ink}">${p2}</text>`:''}<text x="${x}" y="${y+(p2?40:22)}" font-size="12" fill="${c.muted}">${s1}</text><text x="${x}" y="${y+(p2?55:37)}" font-size="12" fill="${c.muted}">${s2}</text></g>`;
const D = svg(circles + centre() + inside2(350,240,'Promo Video','Skill','Docs for','people and AI') + inside2(550,240,'Quoteable','Service API','Tutorials,','training') + inside2(450,420,'NieZamulaj','','Brand, marketing,','adoption'), 560);
const A = '<img src="../../graphic/venn-on-dark.png" alt="" style="width:100%">';
const col = (id, t, d, body) => `<section><h2>${id} · ${t}</h2><p>${d}</p><div class="tile">${body}</div></section>`;
writeFileSync('board.html', `<!doctype html><meta charset="utf-8"><title>Board venn-01</title><link rel="stylesheet" href="../../fonts/fonts.css">
<style>body{margin:0;background:#ececea;font:15px/1.5 Inter,sans-serif;color:#1d1d1b}.b{max-width:1500px;margin:auto;padding:28px 20px}h1{font-size:22px;margin:0 0 6px}.q{background:#fff;border-left:4px solid #1d1d1b;padding:10px 14px;margin:0 0 20px}.g{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}h2{font-size:17px;margin:0}section>p{font-size:13px;color:#3b3b37;margin:2px 0 10px;min-height:80px}.tile{background:#0B1020;border-radius:8px;padding:10px;display:flex;align-items:flex-start}.tile svg{width:100%;height:auto}.st{display:inline-block;padding:2px 8px;border:1px solid #1d1d1b;border-radius:999px;font-size:12px;text-transform:uppercase}</style>
<div class="b"><h1>Round venn-01: how to label the meeting points</h1><p><span class="st">exploration</span> · fixed: circles, colours, centre "Technical Writer + AI"</p>
<p class="q"><strong>Question:</strong> which way of labelling the three projects is clearer? Recommendation: venn-01/B, because the project sits where it belongs, with no extra marks. The skill words move to the project cards below the diagram.</p>
<div class="g">${col('Baseline','current','Two dots on each meeting point, leader lines to labels outside. Lines cross circle edges.',A)}
${col('venn-01/B','Names inside','Only the project name inside its area. No dots, no lines. Skill words ("docs for people and AI") are on the cards, not in the diagram.',B)}
${col('venn-01/C','Numbers + legend','A number in each area, a legend under the diagram with the skill and the project. Most information, but the eye must jump to the legend.',C)}
${col('venn-01/D','Name + skill inside','Project name and skill words, both inside the area, in two sizes. No dots, no lines. Denser; small text at 12 px.',D)}</div></div>`);
console.log('board written');
