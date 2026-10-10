# 01 - Typography (Chữ)

> Nguồn: Apple Human Interface Guidelines, mục *Typography* (HIG viết cho app native, không phải web) và CSS đo từ apple.com ngày 2026-10-11. Số liệu chỉ trích ít; muốn xem bảng đầy đủ hãy đọc bản gốc:
> https://developer.apple.com/design/human-interface-guidelines/typography

## Hướng dẫn dạy gì (diễn đạt lại)

- Tạo thứ bậc bằng **cỡ chữ, độ đậm và màu**, và giữ thứ bậc đó khi người dùng phóng to chữ.
- Dùng **ít kiểu chữ**. Trộn nhiều kiểu làm thứ bậc rối và giao diện thiếu nhất quán.
- Tránh nét mảnh. Regular, Medium, Semibold, Bold là bộ an toàn; chữ mảnh cần cỡ lớn hơn.
- Cỡ chữ thân mặc định trên iOS là 17pt (tối thiểu 11pt); macOS 13pt (tối thiểu 10pt).
- Khi chữ phóng to, ưu tiên nội dung quan trọng; không phải nhãn nào cũng cần to lên.
- Leading (khoảng cách dòng): thoáng hơn cho cột rộng và đoạn dài; chỉ siết khi chiều cao bị hạn chế, và không siết khi từ 3 dòng trở lên.
- Font hệ thống là variable font có **optical size**: nét chữ đổi nhẹ theo cỡ. Trục `opsz` của Inter làm việc tương tự trên web.

## Hai quy luật rút ra từ số liệu

**Quy luật 1 - chữ càng lớn, leading càng sát (leading / size).**

```
iOS Large Title   34pt / 41  = 1.21        apple.com headline  56px  line-height 1.07
iOS Body          17pt / 22  = 1.29        apple.com subhead   28px  line-height 1.14
iOS Footnote      13pt / 18  = 1.38        apple.com callout   19px  line-height 1.21
```

Bảng native và CSS web cùng một dốc: tiêu đề lớn gần như khít dòng, chữ thân cần thoáng.

**Quy luật 2 - phóng chữ làm nén thứ bậc.** Từ mức nhỏ nhất đến lớn nhất của Dynamic Type chuẩn, Body tăng 14 -> 21pt còn Large Title tăng 31 -> 38pt: số điểm tăng gần bằng nhau, nên chữ nhỏ tăng nhiều hơn hẳn theo phần trăm. Tỉ lệ Large Title / Body giảm từ 2.2 xuống 1.8, và ở cỡ accessibility lớn nhất còn khoảng 1.1. Cỡ chữ không còn gánh được thứ bậc, nên **độ đậm gánh** (Headline luôn Semibold ở mọi mức). Hãy test trang ở zoom 200%.

## Tracking đổi theo cỡ chữ

Hướng dẫn công bố bảng tracking cho font hệ thống. Hình dạng quan trọng hơn giá trị: chữ nhỏ được giãn **rộng** (dương), khoảng 13-23pt được **nén** (thấp nhất quanh 17pt, khoảng -0.026em), cỡ hiển thị lớn hơn lại **dương nhẹ**, và cỡ rất lớn về 0. CSS thật của apple.com dùng giá trị khác bảng native (ví dụ -0.005em ở 56px), nên coi tracking là "phụ thuộc cỡ chữ" chứ đừng coi là một con số cố định. Font có optical size giúp bớt phải chỉnh tay.

## Đo từ apple.com (trang chủ, tháng 10/2026)

| Vai trò | font-size | line-height | weight | letter-spacing |
|---|---|---|---|---|
| headline | 56px | 1.0714 | 600 | -0.005em |
| subhead | 28px | 1.1429 | 400 | +0.007em |
| callout | 19px | 1.2105 | 400 | +0.012em |

Weight dùng trong các file CSS đã đo: chỉ 400, 500, 600. Các cỡ cho breakpoint nhỏ hơn không ánh xạ được vào rule cụ thể (xem [05](05-measuring-apple-com.md)).

## Chuyện font

Giấy phép font của Apple không cho dùng SF Pro trên website (chỉ cho làm mockup phần mềm trên nền tảng Apple; đọc tại https://developer.apple.com/fonts/). Lựa chọn thay thế: **Inter** (miễn phí, variable, có trục `opsz`, hỗ trợ tiếng Việt) hoặc `font-family: system-ui`, trỏ tới font hệ thống của chính người dùng (SF trên thiết bị Apple) mà bạn không cần đóng gói.

## Đưa thang chữ vào code (Tailwind v4)

```css
@utility tile-headline {
  font-size: 2rem;            /* mobile: tự chọn, không đo */
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: -0.005em;
  @media (min-width: 735px)  { font-size: 3rem;   line-height: 1.0833; }
  @media (min-width: 1069px) { font-size: 3.5rem; line-height: 1.0714; }
}
```

Dùng `rem` để cài đặt cỡ chữ của người dùng và zoom vẫn hoạt động.
