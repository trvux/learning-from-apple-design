# 03 - Color

> Sources: HIG *Color*: https://developer.apple.com/design/human-interface-guidelines/color and CSS measured on apple.com (2026-10-11). System colour values are Apple's and change between OS versions; the guideline itself says **don't hard-code them**. This page keeps only the analysis.

## Principles (paraphrased)

- **One colour, one meaning.** If the brand colour means "tappable", don't also use it for non-interactive text.
- Every colour needs **light, dark and increased-contrast** variants, even if the app ships in one appearance.
- Test in different lighting and on different displays.
- **Don't rely on colour alone**: add icons, shapes or labels. Consider colour blindness and cultural meaning (red is danger in some cultures, luck or "up" in others).
- System colours are **named by purpose** (label, secondary label, separator, link), not by hue. Don't redefine their meaning (e.g. don't use a separator colour for text).
- Backgrounds come in levels (primary, secondary, tertiary) and text in levels (primary to quaternary): a small vocabulary of "how important is this surface/text".
- Use colour sparingly on translucent controls; put the accent on the *background* of the one primary action, not on every symbol.

## What we found in the numbers

**1. The neutral ladder is one hue.** Converting the six iOS system greys to OKLCH, all of them sit at hue **286.2-286.3** with chroma **0.006-0.007**, and only lightness changes. apple.com's text colour (`#1d1d1f`) is hue 286.1, chroma 0.004. So the "greys" are one slightly violet-blue hue at tiny chroma stepping along lightness. Recipe:

```css
--ink:      oklch(0.232 0.004 286.1);   /* text    (#1d1d1f on apple.com) */
--surface:  oklch(0.971 0.003 286.4);   /* surface (#f5f5f7)              */
--muted-fg: oklch(0.540 0.008 286.1);   /* #6e6e73                        */
```

Pure grey (chroma 0) next to a coloured accent looks like two different design systems; a tinted grey ties them together.

**2. System blue is not the web blue.** The iOS system blue on white is about **3.5:1** contrast, below the 4.5:1 needed for normal text. The blue used on apple.com for the web (`#0071e3`) is darker and reaches **4.7:1**. One colour does not fit every context.

**3. Increased contrast moves away from the background.** In the four-variant tables, light-mode colours get **darker** and dark-mode colours get **lighter** in the increased-contrast version. On the web:

```css
@media (prefers-contrast: more) {
  :root  { --muted-foreground: oklch(0.44 0.008 286.1); }
  .dark  { --muted-foreground: oklch(0.765 0.007 286.2); }
}
```

**4. Dark mode needs its own accent.** `#0071e3` on black is 4.47:1 and on a dark card 3.58:1. A lighter blue (about `oklch(0.65 0.17 256.2)`) with dark text reaches 6.5:1.

## Tools

`node tools/color.mjs "#0071e3" "#ffffff"` prints OKLCH and the WCAG contrast ratio.
