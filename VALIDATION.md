# Kiểm tra màn 1

Đã thực thi kiểm tra bằng Playwright với Chromium trong môi trường Linux, phục vụ bằng máy chủ tĩnh. Không có bước build; đã kiểm tra cú pháp JavaScript bằng `node --check game.js`.

## Đã đạt

- Tương tác với đủ 7 đồ vật, xem lời khuyên của Lan và giáo viên, di chuyển Minh bằng phím mũi tên.
- Chưa đủ điều kiện thì câu đố chưa mở; nút gợi ý hướng dẫn bước còn thiếu.
- Luồng chọn an toàn → thu thập 3 manh mối → trả lời 3 câu đố → kết quả **100/100**, tiến trình **5/5**, mở khóa tên màn 2.
- Cả ba lựa chọn hội thoại ban đầu và cả ba lựa chọn về thông tin/OTP đều hoạt động, có điểm và phản hồi riêng.
- Nhánh đồng ý gửi thông tin dừng tại mô phỏng; không có ô nhập dữ liệu thật.
- Chọn sai câu đố, tải lại, chọn lại đúng: ghi nhớ lần sai và tính đúng điểm giảm. Lượt chọn hai phương án thiếu an toàn và sai một câu đố đạt **67/100** sau khi hoàn thành.
- Manh mối chỉ được tính điểm một lần.
- Tải lại giữ điểm, manh mối, tiến trình câu đố và trạng thái hoàn thành.
- Hủy chơi lại giữ nguyên lượt; xác nhận chơi lại xóa điểm, manh mối và tiến trình.
- Bật/tắt âm thanh thay đổi trạng thái nút; âm thanh tổng hợp không cần tệp bên ngoài. Chưa đánh giá âm thanh bằng tai trên loa thiết bị thật.
- Thao tác chạm trên Chromium với viewport 820 × 1180; kiểm tra bố cục hẹp 390 × 844 không tràn ngang toàn trang.
- Sau khi tải trang, ngắt mạng vẫn mở được điện thoại và hội thoại.
- Khi localStorage bị chặn, hiển thị thông báo không lưu được và vẫn chơi được trong phiên.
- Không có lỗi JavaScript, lỗi tải tài nguyên hoặc yêu cầu mạng ra bên ngoài trên trang kiểm tra máy tính.

## Giới hạn kiểm tra

- Mô phỏng viewport và thao tác cảm ứng bằng Chromium không thay thế kiểm tra Safari trên iPad thật. Chưa có kết quả trên thiết bị iPad hoặc Windows thật.
- Trình duyệt Chromium được quản lý trong môi trường này chặn điều hướng `file://` bằng `ERR_BLOCKED_BY_ADMINISTRATOR`. Vì vậy cách nhấp đúp `index.html` trên Windows được hướng dẫn dựa trên cấu trúc tệp tĩnh (không fetch, không ES modules, không tài nguyên từ xa), chưa được xác nhận trực tiếp trên máy Windows. Nếu máy trường học chặn mở tệp cục bộ, dùng bản GitHub Pages.
- Chưa xuất bản GitHub Pages hay đẩy mã nguồn lên GitHub; các bước thực hiện có trong README.
- Màn 2–5 chưa triển khai theo phạm vi được yêu cầu.

## Chạy lại kiểm tra dành cho người phát triển

Cần Node.js, gói `playwright` và trình duyệt Chromium. Không cần những công cụ này để chơi game.

1. Tại thư mục dự án, chạy `python3 -m http.server 8080 --bind 0.0.0.0`.
2. Trong terminal khác chạy `node tests/smoke.cjs`.
3. Khi cần, đặt `BASE_URL`, `BROWSER_EXECUTABLE` (đường dẫn Chromium) và `ARTIFACT_DIR` (thư mục ảnh chụp).

Trong môi trường cloud hiện tại, Playwright và Chromium đã có sẵn. Script tự tạo ảnh chụp minh họa ngoài repository. Kiểm tra có thể chạy lại mà không sửa mã nguồn hoặc cài dependency vào game.
