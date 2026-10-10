#!/usr/bin/env python3
"""Count the most common design values in one or more CSS files (local path or URL).

Usage: python3 tools/measure_css.py https://example.com/main.css other.css
Prints the top values for font-size, line-height, letter-spacing, font-weight,
colours, border-radius, max-width and @media breakpoints.
Counts are occurrences in the CSS file, not how much a value is used on screen.
"""
import collections, re, sys, urllib.request

def load(src):
    if src.startswith("http"):
        req = urllib.request.Request(src, headers={"User-Agent": "Mozilla/5.0"})
        return urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
    return open(src, encoding="utf-8", errors="replace").read()

PATTERNS = {
    "font-size": r"font-size:\s*([0-9.]+(?:px|rem|em))",
    "line-height": r"line-height:\s*([0-9.]+(?:px|rem|em)?)",
    "letter-spacing": r"letter-spacing:\s*(-?[0-9.]+(?:px|rem|em))",
    "font-weight": r"font-weight:\s*(\d+)",
    "colour (hex)": r"(#[0-9a-fA-F]{3,6})\b",
    "border-radius": r"border-radius:\s*([0-9.]+(?:px|%|rem)?)",
    "max-width": r"max-width:\s*([0-9.]+(?:px|rem))",
    "breakpoint": r"@media[^{]*?(?:min|max)-width:\s*([0-9.]+(?:px|em))",
}

css = "\n".join(load(s) for s in sys.argv[1:]) if len(sys.argv) > 1 else sys.exit(__doc__)
for name, pat in PATTERNS.items():
    top = collections.Counter(re.findall(pat, css)).most_common(10)
    print(f"{name:15} " + ", ".join(f"{v} ({n})" for v, n in top))
