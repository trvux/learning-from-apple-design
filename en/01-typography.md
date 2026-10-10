# 01 - Typography

> Sources: Apple Human Interface Guidelines, *Typography* (the HIG is written for native apps, not the web) and CSS measured from apple.com on 2026-10-11. Numbers are quoted sparingly; read the original for full tables:
> https://developer.apple.com/design/human-interface-guidelines/typography

## What the guideline teaches (paraphrased)

- Build hierarchy from **size, weight and colour**, and keep that hierarchy when users enlarge text.
- Use **few typefaces**. Mixing many makes hierarchy muddy and the interface feel inconsistent.
- Avoid thin weights. Regular, Medium, Semibold and Bold are the safe set; thin text needs a larger size.
- Default body size on iOS is 17pt (minimum 11pt); on macOS 13pt (minimum 10pt).
- When text grows, prioritise important content; not every label has to grow.
- Leading: open it up for wide columns and long passages; tighten it only where height is constrained, and never for 3+ lines.
- The system font is a variable font with **optical sizes**: letterforms change subtly with size. Inter's `opsz` axis does the same job on the web.

## Two rules we derived from the numbers

**Rule 1 - the bigger the type, the tighter the leading (leading / size).**

```
iOS Large Title   34pt / 41  = 1.21        apple.com headline  56px  line-height 1.07
iOS Body          17pt / 22  = 1.29        apple.com subhead   28px  line-height 1.14
iOS Footnote      13pt / 18  = 1.38        apple.com callout   19px  line-height 1.21
```

Native table and web CSS both slope the same way: large headlines sit almost solid, body copy needs air.

**Rule 2 - text scaling squeezes the hierarchy.** Moving from the smallest to the largest standard Dynamic Type setting, Body grows 14 -> 21pt while Large Title grows 31 -> 38pt: nearly the same number of points, so small text grows far more in percentage. The Large Title / Body ratio falls from 2.2 to 1.8, and at the largest accessibility size it is about 1.1. Size can no longer carry hierarchy, so **weight does** (Headline stays Semibold at every setting). Test your pages at 200% zoom.

## Tracking changes with size

The guideline publishes a tracking table for its system font. The shape matters more than the values: small text is tracked **open** (positive), roughly 13-23pt is tracked **tight** (lowest near 17pt, about -0.026em), larger display sizes go slightly **positive** again, and very large sizes return to 0. apple.com's own CSS uses different values than the native table (e.g. -0.005em at 56px), so treat tracking as "size-dependent", not as a fixed number. Optical-size fonts reduce how much you need to tune by hand.

## Measured on apple.com (homepage, Oct 2026)

| Role | font-size | line-height | weight | letter-spacing |
|---|---|---|---|---|
| headline | 56px | 1.0714 | 600 | -0.005em |
| subhead | 28px | 1.1429 | 400 | +0.007em |
| callout | 19px | 1.2105 | 400 | +0.012em |

Weights used in the measured stylesheets: 400, 500, 600 only. Smaller-breakpoint sizes could not be mapped to specific rules (see [05](05-measuring-apple-com.md)).

## The font question

Apple's font licence does not allow using SF Pro on websites (it allows mock-ups for Apple-platform software; read it: https://developer.apple.com/fonts/). Alternatives: **Inter** (free, variable with an `opsz` axis, supports Vietnamese) or `font-family: system-ui`, which resolves to the user's own system font (SF on Apple devices) without you shipping it.

## Putting a scale into code (Tailwind v4)

```css
@utility tile-headline {
  font-size: 2rem;            /* mobile: our choice, not measured */
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: -0.005em;
  @media (min-width: 735px)  { font-size: 3rem;   line-height: 1.0833; }
  @media (min-width: 1069px) { font-size: 3.5rem; line-height: 1.0714; }
}
```

Use `rem` so user font-size settings and zoom keep working.
