# 04 - Accessibility (khả năng tiếp cận)

> Nguồn: HIG *Accessibility* https://developer.apple.com/design/human-interface-guidelines/accessibility và chuẩn WCAG công khai https://www.w3.org/TR/WCAG22/

## Rút ra điều gì (diễn đạt lại)

Giao diện accessible là **trực quan, nhận biết được và thích ứng được**.

**Thị giác**
- Cho phép phóng chữ ít nhất **200%**.
- Tương phản (WCAG AA): **4.5:1** cho chữ đến khoảng 17pt, **3:1** cho chữ lớn hoặc đậm. Cung cấp bản tương phản cao hơn nếu mặc định chưa đạt. Kiểm tra cả sáng và tối.
- Đừng truyền đạt trạng thái chỉ bằng màu; kèm hình dạng, biểu tượng hoặc nhãn.
- Mô tả giao diện cho trình đọc màn hình.

**Thính giác:** caption, phụ đề hoặc transcript cho âm thanh; kèm âm thanh bằng cue thị giác (và haptic).

**Vận động**
- Vùng chạm: iOS mặc định **44x44pt** (tối thiểu 28); desktop 28 (tối thiểu 20).
- Khoảng cách quan trọng ngang kích thước: khoảng 12pt quanh phần tử có nền, khoảng 24pt quanh phần tử không có.
- Giữ cử chỉ đơn giản và luôn có phương án bằng nút.
- Hỗ trợ dùng bàn phím và đừng ghi đè phím tắt hệ thống.

**Nhận thức:** giữ tác vụ đơn giản và nhất quán; tránh phần tử tự biến mất theo giờ; đừng tự phát âm thanh/video khi không có điều khiển; giảm chuyển động khi được yêu cầu (đổi chuyển động bằng mờ dần, tránh hoạt ảnh blur và chiều sâu); xác nhận hành động phá huỷ.

## Checklist cho web

| Ý của HIG | Trên web |
|---|---|
| chữ 200% | đơn vị `rem`, test bằng zoom trình duyệt |
| tương phản cao hơn | `@media (prefers-contrast: more)` |
| giảm chuyển động | `@media (prefers-reduced-motion: reduce)` hoặc `motion-reduce:` của Tailwind |
| vùng chạm 44pt | cao tối thiểu khoảng 44px trên màn chạm |
| không chỉ dùng màu | biểu tượng hoặc chữ cạnh mọi màu trạng thái |
| tương phản AA | 4.5:1 chữ thường, 3:1 chữ lớn/đậm và thành phần UI |
