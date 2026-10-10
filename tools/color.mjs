#!/usr/bin/env node
// Usage: node tools/color.mjs "#0071e3" ["#ffffff"]
// Prints OKLCH of a hex colour and, if a second colour is given, the WCAG contrast ratio.
const hex = (h) => {
  h = h.replace("#", "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};
const lin = (v) => ((v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const oklch = ([r, g, b]) => {
  [r, g, b] = [r, g, b].map(lin);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(a, bb), (Math.atan2(bb, a) * 180) / Math.PI + (Math.atan2(bb, a) < 0 ? 360 : 0)];
};
const luminance = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const [fg, bg] = process.argv.slice(2);
if (!fg) { console.error('usage: node tools/color.mjs "#rrggbb" ["#rrggbb"]'); process.exit(1); }
const f = hex(fg);
const [L, C, H] = oklch(f);
console.log(`${fg} -> oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)})`);
if (bg) {
  const a = luminance(f), b = luminance(hex(bg));
  const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  console.log(`contrast vs ${bg}: ${ratio.toFixed(2)}:1  (AA text 4.5, AA large/UI 3, AAA text 7)`);
}
