# 05 - Đo apple.com (phương pháp và kết quả)

Apple không công bố design system cho website của họ. Cách duy nhất để biết số liệu là **đo**. Ghi chú này ghi lại cách đo, kết quả, và những gì chưa đo được.

## Phương pháp

1. Tải HTML trang chủ và liệt kê stylesheet: `curl -sL https://www.apple.com/ | grep -oE 'href="[^"]*\.css[^"]*"'`
2. Tải các stylesheet chính (ở đây là `main.built.css` và `homepage.built.css`).
3. Đếm giá trị: `python3 tools/measure_css.py <file-hoặc-url-css> ...`
4. Đổi màu: `node tools/color.mjs "#1d1d1f"`.

Mọi thứ dưới đây lấy từ **một trang, một lần tải (2026-10-11), bản US**, đọc CSS (không phải trang đã render). Số đếm là lần xuất hiện trong file CSS, không phải mức dùng trên màn hình. Apple có thể đổi bất cứ lúc nào.

## Kết quả

| Mục | Phát hiện |
|---|---|
| headline của tile | 56px / 1.0714 / 600 / -0.005em |
| subhead của tile | 28px / 1.1429 / 400 / +0.007em |
| callout của tile | 19px / 1.2105 / 400 / +0.012em |
| cỡ chữ trong CSS | 12, 14, 17, 19, 21, 24, 28, 32, 40, 48 px |
| weight | 400, 500, 600 |
| letter-spacing | `0em` áp đảo; còn lại từ -0.022em đến +0.012em |
| breakpoint | 734px, 1068px, 1440px |
| bề rộng nội dung tối đa | 1068px (phổ biến nhất), 734px |
| bo góc | 980px (pill), 12px, 10px, 8px, 5px |
| xám | `#1d1d1f` chữ, `#6e6e73` / `#86868b` chữ phụ, `#f5f5f7` bề mặt sáng, `#272729` / `#18181a` bề mặt tối |
| màu nhấn | `#0071e3` (`#0076df`, `#006edb` cũng xuất hiện nhiều; vai trò chưa kiểm chứng) |

Cấu trúc trang: mỗi khối sản phẩm là một **tile** = headline + một dòng subhead + callout tuỳ chọn + hai link ("Learn more", "Buy"). Trang chủ không có giá hay danh sách thông số.

## Chưa đo được

- Chiều cao tile và khoảng cách giữa các tile (không nằm trong các giá trị CSS đã đếm).
- Các cỡ mobile/tablet ánh xạ vào rule cụ thể nào.
- Bất cứ thứ gì phụ thuộc JavaScript lúc chạy.

Bước tiếp cho ai muốn đo thêm: mở DevTools, chọn một phần tử, đọc tab **Computed**, và so ở nhiều độ rộng cửa sổ.
