# Learning from Apple's design guidance (for the web)

**English** | [Tiếng Việt](README.vi.md)

Notes, measurements and small tools from studying Apple's Human Interface Guidelines (HIG) and the CSS of apple.com, written for people building **web** interfaces. The HIG itself targets native Apple platforms, not the web; this repo is about what transfers, and how to find out the rest yourself.

> **Not affiliated with, endorsed by, or sponsored by Apple Inc.** Apple, SF Pro, San Francisco, iOS, macOS and other names are trademarks of Apple Inc. See [Sources and rights](#sources-and-rights).

## Findings at a glance

1. **Bigger type, tighter leading.** Line-height divided by font size falls as size grows, both in Apple's native type scale and in apple.com's CSS (about 1.29 for 17pt body, about 1.07 for a 56px headline).
2. **Text scaling squeezes hierarchy.** Small text grows more, in percentage, than large text, so size stops separating levels; weight has to. Test at 200% zoom.
3. **Neutrals are one hue.** Apple's grey ladder sits at one OKLCH hue (about 286) with tiny chroma (about 0.004-0.007); only lightness moves. Tinted greys beat pure greys next to an accent.
4. **One colour does not fit every context.** The iOS system blue is about 3.5:1 on white; the blue apple.com uses is darker (4.7:1). Dark mode needs its own, lighter accent.
5. **Increased contrast moves away from the background** (darker in light mode, lighter in dark mode). On the web: `prefers-contrast: more`.
6. **There is no public design system for apple.com.** The only way to learn its numbers is to measure them; the method and tools are here.

## Contents

| | English | Tiếng Việt |
|---|---|---|
| Typography | [en/01](en/01-typography.md) | [vi/01](vi/01-typography.md) |
| Layout and materials | [en/02](en/02-layout-and-materials.md) | [vi/02](vi/02-layout-and-materials.md) |
| Color | [en/03](en/03-color.md) | [vi/03](vi/03-color.md) |
| Accessibility | [en/04](en/04-accessibility.md) | [vi/04](vi/04-accessibility.md) |
| Measuring apple.com | [en/05](en/05-measuring-apple-com.md) | [vi/05](vi/05-measuring-apple-com.md) |
| Checklist | [en/06](en/06-checklist.md) | [vi/06](vi/06-checklist.md) |

## Tools

```sh
# hex -> OKLCH, plus WCAG contrast against a second colour
node tools/color.mjs "#0071e3" "#ffffff"

# most common design values in a stylesheet (file or URL)
python3 tools/measure_css.py https://example.com/main.css
```

No dependencies beyond Node and Python 3.

## Honest limits

- Measurements come from **one page, one fetch (2026-10-11), the US edition**, reading CSS rather than the rendered page. Counts are occurrences in the CSS, not on-screen usage.
- Items marked as interpretation are interpretation. Apple can change guidance and CSS at any time.
- Native point sizes are only roughly equal to CSS pixels.
- This is a learning project, not an official reference. Corrections are welcome (see below).

## Sources and rights

- Apple HIG: https://developer.apple.com/design/human-interface-guidelines/ (typography, layout, color, materials, accessibility pages). Apple's documentation remains © Apple Inc.; this repo paraphrases principles in its own words, quotes only a few facts needed for the analysis, and links to the originals. **Read the originals for full tables** (Dynamic Type sizes, tracking, system colours).
- Apple font licence: https://developer.apple.com/fonts/ (SF Pro is not licensed for use on websites).
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- apple.com stylesheets were read as publicly served; their values are reported as measurements, no stylesheet code is redistributed here.
- If you represent Apple and want something removed, please open an issue.

## License

The original text, analysis and tools in this repository are licensed under [CC BY 4.0](LICENSE): share and adapt, with attribution. This licence does **not** cover Apple's materials or trademarks.

## Contributing

Issues and pull requests are welcome: corrections with a source, measurements of other pages (say when and how), translations, and web-specific lessons. Please keep Apple's text out; paraphrase and link.
