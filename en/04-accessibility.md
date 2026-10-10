# 04 - Accessibility

> Source: HIG *Accessibility* https://developer.apple.com/design/human-interface-guidelines/accessibility and the public WCAG standard https://www.w3.org/TR/WCAG22/

## What to take from it (paraphrased)

An accessible interface is **intuitive, perceivable and adaptable**.

**Vision**
- Let people enlarge text at least **200%**.
- Contrast (WCAG AA): **4.5:1** for text up to about 17pt, **3:1** for larger or bold text. Provide a higher-contrast scheme if the default doesn't meet it. Check both light and dark.
- Don't use colour alone to convey state; pair it with a shape, icon or label.
- Describe the interface for screen readers.

**Hearing:** captions, subtitles or transcripts for audio; pair sounds with visual (and haptic) cues.

**Motor**
- Touch targets: iOS asks for **44x44pt** by default (28 minimum); desktop 28 (20 minimum).
- Space matters as much as size: roughly 12pt around elements with a background, roughly 24pt around ones without.
- Keep gestures simple and always offer a button alternative.
- Support keyboard-only use and don't override system shortcuts.

**Cognitive:** keep tasks simple and consistent; avoid things that disappear on a timer; don't autoplay audio/video without controls; reduce motion when asked (swap movement for fades, avoid animating blur and depth); confirm destructive actions.

## Web checklist

| HIG idea | On the web |
|---|---|
| 200% text | `rem` units, test with browser zoom |
| higher contrast | `@media (prefers-contrast: more)` |
| reduce motion | `@media (prefers-reduced-motion: reduce)` or Tailwind `motion-reduce:` |
| 44pt targets | minimum ~44px tall on touch screens |
| not colour alone | icon or text next to every status colour |
| contrast AA | 4.5:1 normal text, 3:1 large/bold text and UI components |
