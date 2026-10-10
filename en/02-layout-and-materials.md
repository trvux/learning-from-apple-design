# 02 - Layout and materials

> Sources: HIG *Layout* and *Materials* (native-app guidance):
> https://developer.apple.com/design/human-interface-guidelines/layout
> https://developer.apple.com/design/human-interface-guidelines/materials

## Layout principles (paraphrased)

- **Order by importance.** People scan top-to-bottom and leading-to-trailing: put the most important thing top and leading.
- **Align** so content is easy to scan. Aligned items read as related; indented items read as children.
- **Group** related items with white space, containers or dividers.
- **Progressive disclosure:** show less first (menus, disclosure, nested views, scrolling sections).
- **Separate controls from content.** Navigation and controls float above the content layer instead of sitting on a solid band.
- Decide layout from **available space** (size classes), not device type or orientation. Keep functionality the same; change how much is visible.
- Plan for text-size changes: side-by-side items may need to stack, rows may need to grow, fewer columns at large sizes.
- Test the largest and smallest layouts first.
- Don't change an artwork's aspect ratio when resizing; scale it to fill.
- Don't put controls at the very bottom of a desktop window.
- Keep buttons far enough apart: on a spatial-computing headset the guideline asks for button centres at least 60pt apart.

## Materials (paraphrased)

- A material gives depth and hierarchy between foreground (text, controls) and background.
- The newer glass material is for the **controls/navigation layer** floating above content. **Don't use it inside the content layer.** Use it sparingly; many glass controls compete with the content.
- Two variants: *regular* (blurs and adjusts luminance to stay legible; use where there's lots of text) and *clear* (very translucent, for controls over photos/video; add a dimming layer when the content behind is bright).
- Standard materials (blur, vibrancy) structure the content layer. Choose by **purpose**, not by the colour you see; system settings can change appearance.
- Thicker (more opaque) = better contrast for fine text; thinner = keeps context. Avoid the lowest-contrast text level on the thinnest materials.

## On the web (our interpretation)

| Idea | Web equivalent |
|---|---|
| width-based adaptation | `@media (min-width: ...)` / container queries, not device sniffing |
| controls above content | a sticky nav with `backdrop-blur`; keep content tiles flat |
| progressive disclosure | `<details>`, menus, tabs, "show more" |
| text can grow | `rem` units, test 200% zoom |
