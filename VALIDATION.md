# Kiểm tra game 5 màn

Đã chạy kiểm tra tự động bằng Playwright với Chromium trong môi trường Linux, phục vụ bằng máy chủ tĩnh. JavaScript đã qua `node --check` cho `game.js`, `chapters.js`, `journey.js`. Không có bước build hoặc dependency sản xuất.

## Kiểm tra màn 1 — `tests/smoke.cjs`

- Tương tác bảy đồ vật, lời khuyên Lan/giáo viên, di chuyển bằng phím, khóa câu đố khi thiếu điều kiện.
- Hoàn thành luồng an toàn đạt 100/100, đủ ba manh mối và tiến trình 5/5.
- Tất cả lựa chọn hội thoại, hệ quả giả định, phản hồi và điểm tương ứng.
- Nhánh đồng ý gửi dừng trong mô phỏng, không có ô nhập dữ liệu thật.
- Sai câu đố rồi tải lại, thử lại đúng, ghi nhớ mức điểm giảm; lượt rủi ro đã kiểm tra đạt 67/100.
- Manh mối không cộng lặp; tải lại giữ điểm và trạng thái hoàn thành.
- Hủy/xác nhận chơi lại; bật/tắt âm thanh; thao tác cảm ứng và bố cục hẹp.
- Mất mạng sau khi tải trang vẫn tương tác được. Chặn localStorage vẫn chơi được trong phiên và có thông báo.

## Kiểm tra hành trình — `tests/journey.cjs`

- Đi thực tế bằng giao diện từ màn 1 tới màn 5, không mở khóa bằng cách sửa state trong lượt chính.
- Toàn bộ hành trình chọn an toàn đạt 100/100 từng màn và báo cáo trung bình 100/100.
- Mỗi lựa chọn tình huống ở màn 2–5 được chạy qua: an toàn, chưa đầy đủ và thiếu an toàn.
- Nút Điều chỉnh ghi nhận việc luyện lại; báo cáo phân biệt lựa chọn lần đầu và việc đã điều chỉnh. Điểm lần đầu được giữ.
- Cả bốn kiểu nhiệm vụ hoạt động: chọn nhiều đáp án, phân loại, lắp ranh giới và bảng thao tác an toàn.
- Chọn sai rồi thử lại mỗi bước, kiểm tra đúng mức giảm điểm, không khóa tiến trình.
- Thu thập lại manh mối không cộng lặp; chưa đủ manh mối/hỗ trợ chưa mở nhiệm vụ.
- Lưu và tải lại khi đang chọn tình huống, đang thực hiện bước chặn của màn 5, và sau khi xem báo cáo đầy đủ.
- Dùng bản lưu màn 1 tạo từ lượt chơi thực tế để kiểm tra chuyển tiếp: giữ điểm cũ và mở được màn 2.
- Màn chưa mở bị chặn; trạng thái lưu chọn màn 5 nhưng không có chuỗi mở khóa được đưa về màn 1.
- Xem lại màn 1 rồi màn 5 giữ nguyên điểm; hủy chơi lại giữ lượt, xác nhận xóa toàn bộ tiến trình 5 màn.
- Thao tác chạm ở kích thước 820 × 1180; kiểm tra không tràn ngang tại bề rộng 390, 820, 1024.
- Không có lỗi JavaScript, lỗi tải tài nguyên hoặc yêu cầu tới nguồn bên ngoài trong các lượt theo dõi.

## Hướng dẫn người mới — `tests/guide.cjs`

- Tự mở hướng dẫn lần đầu, đủ ba bước, có phần mở rộng giải thích cách chơi mỗi màn và ý nghĩa các nút.
- Nút Bắt đầu chơi mở tin nhắn; việc đọc hướng dẫn không tự chọn câu trả lời, lưu manh mối hoặc cộng điểm.
- Dùng các nút dẫn đường đi hết màn 1 và màn 2; kiểm tra đúng vị trí và manh mối còn thiếu được làm nổi bật.
- Sau lựa chọn, chuyển điểm tập trung tới lời giải thích mới trong hội thoại.
- Từ màn 2, dẫn đến cả hai tình huống, ba manh mối, lời khuyên và nhiệm vụ cuối màn; thao tác chấm điểm không đổi.
- Xem lại hoặc đóng hướng dẫn không sửa lượt chơi. Ghi nhớ đã đóng hướng dẫn, không tự hiện lại mỗi lần tải trang.
- Chơi lại vẫn có bước xác nhận riêng, không chèn nút dẫn đường gây nhầm vào cửa sổ xác nhận xóa.
- Thử chạm và xem lại hướng dẫn trên màn hình hẹp, không tràn ngang; kiểm tra không có lỗi JavaScript hoặc tài nguyên.
- Hai bộ kiểm tra màn 1 và toàn hành trình vẫn chạy, bao gồm trường hợp trình duyệt chặn lưu trữ.

Các kiểm tra này xác nhận chức năng chỉ dẫn hoạt động. Chưa thực hiện nghiên cứu trải nghiệm với nhóm người từ 30 tuổi trở lên; cần quan sát người dùng thật để đánh giá mức độ dễ hiểu trong thực tế.

## Giới hạn

- Các kiểm tra dùng Chromium. Mô phỏng kích thước và thao tác cảm ứng không thay thế kiểm tra trên các trình duyệt hoặc thiết bị thật khác.
- Chưa đánh giá âm thanh bằng tai trên loa thiết bị thật.
- Chromium được quản lý ở môi trường này chặn `file://` với `ERR_BLOCKED_BY_ADMINISTRATOR`. Cách nhấp đúp HTML được hướng dẫn dựa trên cấu trúc tệp tĩnh (không fetch, ES modules hoặc tài nguyên từ xa), chưa được xác nhận trực tiếp trên Windows. Có thể dùng GitHub Pages nếu thiết bị chặn tệp cục bộ.
- Kiểm tra tự động không thay thế việc giáo viên rà soát tình huống và tính phù hợp với học sinh trước khi sử dụng trong lớp.
- Chặn, báo cáo, lưu bằng chứng đều chỉ là trạng thái mô phỏng, không xác minh được hành vi của nền tảng bên ngoài.

## Chạy lại dành cho người phát triển

Cần Node.js, gói `playwright` và Chromium; không cần các công cụ này để chơi game.

1. Tại thư mục dự án: `python3 -m http.server 8080 --bind 0.0.0.0`.
2. Trong terminal khác: `node tests/smoke.cjs`, `node tests/journey.cjs` và `node tests/guide.cjs`.
3. Có thể đặt `BASE_URL`, `BROWSER_EXECUTABLE`, `ARTIFACT_DIR` để chọn máy chủ, trình duyệt và thư mục ảnh.

Các script ghi ảnh chụp ra ngoài repository theo mặc định, không sửa mã nguồn hoặc cài dependency vào game.
