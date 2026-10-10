# 03 - Màu

> Nguồn: HIG *Color*: https://developer.apple.com/design/human-interface-guidelines/color và CSS đo từ apple.com (2026-10-11). Giá trị màu hệ thống là của Apple và đổi theo từng bản hệ điều hành; chính hướng dẫn dặn **đừng hard-code**. Trang này chỉ giữ phần phân tích.

## Nguyên tắc (diễn đạt lại)

- **Một màu, một nghĩa.** Nếu màu thương hiệu nghĩa là "bấm được" thì đừng dùng nó cho chữ không bấm được.
- Mỗi màu cần biến thể **sáng, tối và tăng tương phản**, kể cả khi app chỉ chạy một giao diện.
- Test ở nhiều điều kiện ánh sáng và nhiều màn hình.
- **Đừng chỉ dựa vào màu**: thêm biểu tượng, hình dạng hoặc nhãn. Cân nhắc mù màu và ý nghĩa văn hoá (đỏ là nguy hiểm ở nơi này, may mắn hoặc "tăng" ở nơi khác).
- Màu hệ thống được **đặt tên theo mục đích** (label, secondary label, separator, link), không theo hue. Đừng định nghĩa lại nghĩa của chúng (ví dụ đừng dùng màu separator cho chữ).
- Nền có các cấp (primary, secondary, tertiary) và chữ có các cấp (primary đến quaternary): một bộ từ vựng nhỏ cho "bề mặt/chữ này quan trọng cỡ nào".
- Dùng màu tiết kiệm trên điều khiển trong suốt; đặt màu nhấn ở **nền** của hành động chính duy nhất, không phải ở mọi biểu tượng.

## Điều tìm thấy trong số liệu

**1. Thang xám trung tính là một hue.** Đổi 6 xám hệ thống iOS sang OKLCH, tất cả nằm ở hue **286.2-286.3** với chroma **0.006-0.007**, chỉ độ sáng đổi. Màu chữ của apple.com (`#1d1d1f`) là hue 286.1, chroma 0.004. Tức "xám" là một hue xanh tím rất nhẹ ở chroma cực nhỏ, bước dọc theo độ sáng. Công thức:

```css
--ink:      oklch(0.232 0.004 286.1);   /* chữ      (#1d1d1f trên apple.com) */
--surface:  oklch(0.971 0.003 286.4);   /* bề mặt   (#f5f5f7)                */
--muted-fg: oklch(0.540 0.008 286.1);   /* #6e6e73                           */
```

Xám thuần (chroma 0) cạnh một màu nhấn trông như hai hệ thiết kế khác nhau; xám ám màu gắn chúng lại.

**2. Xanh hệ thống không phải xanh của web.** Xanh hệ thống iOS trên nền trắng đạt khoảng **3.5:1**, dưới mức 4.5:1 cần cho chữ thường. Xanh dùng trên apple.com cho web (`#0071e3`) tối hơn và đạt **4.7:1**. Một màu không vừa mọi ngữ cảnh.

**3. Tăng tương phản là rời xa nền.** Trong các bảng 4 biến thể, màu giao diện sáng thành **đậm hơn** và màu giao diện tối thành **sáng hơn** ở bản tăng tương phản. Trên web:

```css
@media (prefers-contrast: more) {
  :root  { --muted-foreground: oklch(0.44 0.008 286.1); }
  .dark  { --muted-foreground: oklch(0.765 0.007 286.2); }
}
```

**4. Dark mode cần màu nhấn riêng.** `#0071e3` trên nền đen là 4.47:1 và trên card tối là 3.58:1. Một xanh sáng hơn (khoảng `oklch(0.65 0.17 256.2)`) với chữ tối đạt 6.5:1.

## Công cụ

`node tools/color.mjs "#0071e3" "#ffffff"` in OKLCH và tỉ lệ tương phản WCAG.
