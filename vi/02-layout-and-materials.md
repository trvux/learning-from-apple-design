# 02 - Layout và vật liệu (materials)

> Nguồn: HIG *Layout* và *Materials* (hướng dẫn cho app native):
> https://developer.apple.com/design/human-interface-guidelines/layout
> https://developer.apple.com/design/human-interface-guidelines/materials

## Nguyên tắc layout (diễn đạt lại)

- **Xếp theo độ quan trọng.** Người ta đọc từ trên xuống, từ đầu dòng sang cuối: đặt thứ quan trọng nhất ở trên và đầu dòng.
- **Căn thẳng hàng** để dễ quét. Mục thẳng hàng được coi là liên quan; mục thụt vào được coi là con.
- **Nhóm** các mục liên quan bằng khoảng trống, khung hoặc đường kẻ.
- **Progressive disclosure:** hiện ít trước (menu, mở rộng, view lồng, vùng cuộn).
- **Tách điều khiển khỏi nội dung.** Điều hướng và điều khiển nổi trên lớp nội dung thay vì nằm trên một dải nền đặc.
- Quyết định layout theo **không gian thực có** (size class), không theo loại thiết bị hay hướng xoay. Giữ chức năng; chỉ đổi lượng hiển thị.
- Chuẩn bị cho chữ đổi cỡ: mục cạnh nhau có thể phải xếp chồng, hàng có thể phải cao hơn, ít cột hơn ở cỡ lớn.
- Test layout lớn nhất và nhỏ nhất trước.
- Đừng đổi tỉ lệ ảnh nền khi co giãn; hãy scale cho phủ kín.
- Đừng đặt điều khiển ở sát đáy cửa sổ desktop.
- Giữ các nút đủ xa nhau: trên kính thực tế ảo hướng dẫn yêu cầu tâm hai nút cách nhau ít nhất 60pt.

## Vật liệu (diễn đạt lại)

- Vật liệu tạo chiều sâu và thứ bậc giữa tiền cảnh (chữ, điều khiển) và hậu cảnh.
- Vật liệu kính kiểu mới dành cho **lớp điều khiển/điều hướng** nổi trên nội dung. **Đừng dùng trong lớp nội dung.** Dùng tiết kiệm; nhiều điều khiển kính sẽ tranh chú ý với nội dung.
- Hai biến thể: *regular* (làm mờ và chỉnh độ sáng để dễ đọc; dùng chỗ nhiều chữ) và *clear* (rất trong, cho điều khiển trên ảnh/video; thêm lớp làm tối khi nền phía sau sáng).
- Vật liệu chuẩn (blur, vibrancy) tạo cấu trúc cho lớp nội dung. Chọn theo **mục đích**, không theo màu bạn nhìn thấy; cài đặt hệ thống có thể đổi diện mạo.
- Dày hơn (đặc hơn) = tương phản tốt hơn cho chữ nhỏ; mỏng hơn = giữ ngữ cảnh. Tránh cấp chữ tương phản thấp nhất trên vật liệu mỏng nhất.

## Trên web (cách diễn giải của repo này)

| Ý tưởng | Tương đương web |
|---|---|
| thích ứng theo chiều rộng | `@media (min-width: ...)` / container queries, không đoán thiết bị |
| điều khiển nổi trên nội dung | nav sticky có `backdrop-blur`; giữ tile nội dung phẳng |
| progressive disclosure | `<details>`, menu, tab, "xem thêm" |
| chữ có thể to lên | đơn vị `rem`, test zoom 200% |
