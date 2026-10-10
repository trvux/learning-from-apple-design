# Học từ hướng dẫn thiết kế của Apple (cho web)

[English](README.md) | **Tiếng Việt**

Ghi chú, số đo và vài công cụ nhỏ từ việc nghiên cứu Human Interface Guidelines (HIG) của Apple và CSS của apple.com, viết cho người làm giao diện **web**. Bản thân HIG nhắm tới các nền tảng native của Apple, không phải web; repo này nói về phần nào áp dụng được, và cách tự đo phần còn lại.

> **Không liên kết, không được Apple Inc. chứng thực hay tài trợ.** Apple, SF Pro, San Francisco, iOS, macOS và các tên khác là nhãn hiệu của Apple Inc. Xem [Nguồn và bản quyền](#nguồn-và-bản-quyền).

## Tóm tắt phát hiện

1. **Chữ càng lớn, leading càng sát.** Line-height chia cho cỡ chữ giảm dần khi cỡ chữ tăng, cả trong thang chữ native của Apple lẫn CSS apple.com (khoảng 1.29 cho chữ thân 17pt, khoảng 1.07 cho tiêu đề 56px).
2. **Phóng chữ làm nén thứ bậc.** Chữ nhỏ tăng nhiều hơn chữ lớn theo phần trăm, nên cỡ chữ không còn phân biệt các cấp; độ đậm phải làm việc đó. Hãy test ở zoom 200%.
3. **Thang trung tính là một hue.** Thang xám của Apple nằm ở một hue OKLCH (khoảng 286) với chroma rất nhỏ (khoảng 0.004-0.007); chỉ độ sáng đổi. Xám ám màu đẹp hơn xám thuần cạnh một màu nhấn.
4. **Một màu không vừa mọi ngữ cảnh.** Xanh hệ thống iOS trên nền trắng khoảng 3.5:1; xanh apple.com dùng tối hơn (4.7:1). Dark mode cần một màu nhấn riêng, sáng hơn.
5. **Tăng tương phản là rời xa nền** (đậm hơn ở giao diện sáng, sáng hơn ở giao diện tối). Trên web: `prefers-contrast: more`.
6. **Apple không công bố design system cho apple.com.** Cách duy nhất để biết số là đo; phương pháp và công cụ nằm ở đây.

## Nội dung

| | English | Tiếng Việt |
|---|---|---|
| Typography | [en/01](en/01-typography.md) | [vi/01](vi/01-typography.md) |
| Layout và vật liệu | [en/02](en/02-layout-and-materials.md) | [vi/02](vi/02-layout-and-materials.md) |
| Màu | [en/03](en/03-color.md) | [vi/03](vi/03-color.md) |
| Accessibility | [en/04](en/04-accessibility.md) | [vi/04](vi/04-accessibility.md) |
| Đo apple.com | [en/05](en/05-measuring-apple-com.md) | [vi/05](vi/05-measuring-apple-com.md) |
| Checklist | [en/06](en/06-checklist.md) | [vi/06](vi/06-checklist.md) |

## Công cụ

```sh
# hex -> OKLCH, kèm tương phản WCAG với màu thứ hai
node tools/color.mjs "#0071e3" "#ffffff"

# các giá trị thiết kế phổ biến nhất trong một stylesheet (file hoặc URL)
python3 tools/measure_css.py https://example.com/main.css
```

Không cần thư viện nào ngoài Node và Python 3.

## Giới hạn (nói thẳng)

- Số đo lấy từ **một trang, một lần tải (2026-10-11), bản US**, đọc CSS chứ không phải trang đã render. Số đếm là số lần xuất hiện trong CSS, không phải mức dùng trên màn hình.
- Phần được ghi là diễn giải thì là diễn giải. Apple có thể đổi hướng dẫn và CSS bất cứ lúc nào.
- Cỡ point native chỉ xấp xỉ pixel CSS.
- Đây là dự án học, không phải tài liệu chính thức. Hoan nghênh chỉnh sửa (xem bên dưới).

## Nguồn và bản quyền

- Apple HIG: https://developer.apple.com/design/human-interface-guidelines/ (các trang typography, layout, color, materials, accessibility). Tài liệu của Apple thuộc bản quyền © Apple Inc.; repo này diễn đạt lại nguyên tắc bằng lời riêng, chỉ trích vài số liệu cần cho phần phân tích, và dẫn link về bản gốc. **Hãy đọc bản gốc cho các bảng đầy đủ** (cỡ Dynamic Type, tracking, màu hệ thống).
- Giấy phép font của Apple: https://developer.apple.com/fonts/ (SF Pro không được cấp phép dùng trên website).
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Stylesheet của apple.com được đọc như khi được phục vụ công khai; giá trị trong đó được ghi lại như số đo, không phân phối lại code stylesheet.
- Nếu bạn đại diện Apple và muốn gỡ nội dung nào, hãy mở một issue.

## Giấy phép

Văn bản gốc, phân tích và công cụ trong repo được cấp phép [CC BY 4.0](LICENSE): chia sẻ và chỉnh sửa, kèm ghi nguồn. Giấy phép này **không** bao gồm tài liệu hay nhãn hiệu của Apple.

## Đóng góp

Hoan nghênh issue và pull request: chỉnh sửa có nguồn, số đo từ các trang khác (ghi rõ thời điểm và cách đo), bản dịch, và bài học riêng cho web. Xin đừng đưa văn bản của Apple vào; hãy diễn đạt lại và dẫn link.
