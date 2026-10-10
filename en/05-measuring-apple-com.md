# 05 - Measuring apple.com (method and results)

Apple publishes no design system for its website. The only way to learn its numbers is to **measure**. This note records how, what we found, and what we could not.

## Method

1. Download the homepage HTML and list its stylesheets: `curl -sL https://www.apple.com/ | grep -oE 'href="[^"]*\.css[^"]*"'`
2. Download the main stylesheets (here `main.built.css` and `homepage.built.css`).
3. Count values: `python3 tools/measure_css.py <css-file-or-url> ...`
4. Convert colours: `node tools/color.mjs "#1d1d1f"`.

Everything below is from **one page, one fetch (2026-10-11), the US edition**, reading the CSS (not the rendered page). Counts are occurrences in the CSS file, not on-screen usage. Apple may change any of it.

## Results

| Item | Finding |
|---|---|
| tile headline | 56px / 1.0714 / 600 / -0.005em |
| tile subhead | 28px / 1.1429 / 400 / +0.007em |
| tile callout | 19px / 1.2105 / 400 / +0.012em |
| font sizes in CSS | 12, 14, 17, 19, 21, 24, 28, 32, 40, 48 px |
| weights | 400, 500, 600 |
| letter-spacing | `0em` dominates; others between -0.022em and +0.012em |
| breakpoints | 734px, 1068px, 1440px |
| max content width | 1068px (most common), 734px |
| radius | 980px (pill), 12px, 10px, 8px, 5px |
| neutrals | `#1d1d1f` ink, `#6e6e73` / `#86868b` secondary text, `#f5f5f7` light surface, `#272729` / `#18181a` dark surfaces |
| accent | `#0071e3` (also `#0076df`, `#006edb` appear often; role unverified) |

Page structure: each product block is one **tile** = headline + one-line subhead + optional callout + two links ("Learn more", "Buy"). No prices or spec lists on the homepage.

## What we could not measure

- Tile height and spacing between tiles (not in the CSS values we counted).
- How the mobile/tablet sizes map to specific rules.
- Anything that depends on JavaScript at runtime.

Next step for anyone who wants more: open DevTools, select an element, read the **Computed** tab, and compare at several window widths.
