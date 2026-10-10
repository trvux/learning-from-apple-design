# 06 - A checklist for a block of interface

1. **Hierarchy:** is the most important thing top and leading? Can you tell levels apart by size, weight and colour?
2. **Type:** at most two typefaces; weights 400/500/600; body about 16-17px; tight leading for big headlines (about 1.07-1.2), roomy for body (1.3+).
3. **Colour:** one colour, one meaning; greys share one hue; light, dark and increased-contrast variants; contrast 4.5:1 (text) and 3:1 (large/bold/UI).
4. **Controls:** about 44px tall on touch; roughly 12px of space around bordered buttons, 24px around borderless ones.
5. **Grouping:** white space first, dividers last.
6. **Scaling:** width-based media queries; `rem` for text; test 200% zoom.
7. **Motion:** honour `prefers-reduced-motion`; nothing disappears on a timer.
8. **Status:** never colour alone.
9. **Blur/glass:** only for floating navigation; content stays flat.
