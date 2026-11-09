# DIGITAL ESCAPE ROOM – THOÁT HIỂM SỐ

Game giáo dục tiếng Việt cho học sinh THCS, chạy trên trình duyệt. **Màn 1 đã có thể chơi từ đầu đến cuối**. Màn 2–5 chỉ có tên và giới thiệu trên bản đồ, chưa có phần chơi.

## Định hướng và phạm vi

Trò chơi mô phỏng hành trình nhận diện và thoát khỏi sự thao túng tâm lý trên không gian mạng. [Bản mô tả thống nhất](DINH_HUONG.md) là định hướng cho phiên bản đầy đủ.

Hành trình gồm: **Lời mời bí ẩn → Chiếc bẫy lòng tin → Bí mật nguy hiểm → Ranh giới cuối cùng → Lối thoát an toàn**.

Phiên bản hiện tại hoàn thiện màn 1; màn 2–5 và báo cáo kỹ năng cá nhân hóa sẽ được phát triển tiếp sau khi màn 1 được xác nhận. Mỗi màn dự kiến có không gian và nhiệm vụ riêng. Lựa chọn trong màn 1 ảnh hưởng đến lời thoại, phản hồi, điểm kỹ năng và một số tình tiết; các nhánh hiện hội tụ về cùng nhiệm vụ mở cửa. Người chơi có thể điều chỉnh cách ứng phó ở bước tiếp theo, thử lại câu đố hoặc chơi lại để chọn phương án hội thoại khác. Kết quả hiện có điểm màn 1 và bài học chung, chưa có báo cáo phân tích từng quyết định.

## Chạy thử trên Windows (không cần biết lập trình)

1. Mở thư mục `digitalescaperoom` có các tệp `index.html`, `style.css`, `game.js` và thư mục `assets`.
2. Nếu tải từ GitHub: ở trang repository, nhấp nút **Code** màu xanh → **Download ZIP**. Nhấp chuột phải vào ZIP → **Extract All… / Giải nén tất cả** → **Extract / Giải nén**.
3. Trong thư mục đã giải nén, nhấp đúp **index.html**. Game sẽ mở bằng trình duyệt mặc định. Nếu chưa mở được, nhấp chuột phải vào `index.html` → **Open with / Mở bằng** → **Microsoft Edge** hoặc **Google Chrome**.
4. Nhấp **Điện thoại** trên bàn hoặc **Đọc tin nhắn**. Đọc rồi chọn câu trả lời.
5. Trên điện thoại có ba tab **Tin nhắn**, **Hồ sơ**, **Phần thưởng**. Tìm dấu hiệu đáng ngờ và nhấp **Ghi nhận manh mối**. Có ba manh mối tất cả.
6. Trong tab **Tin nhắn**, chọn cách xử lý yêu cầu thông tin và mã xác nhận.
7. Đóng điện thoại bằng nút **×**. Nhấp **Mở khóa cánh cửa** hoặc **Cửa ra · Câu đố** và trả lời ba câu hỏi để xem kết quả.

Không cài phần mềm hay tài khoản, không cần Internet để chơi sau khi tải về. Giữ nguyên vị trí các tệp và thư mục `assets`; không chỉ tải riêng tệp HTML. Phím mũi tên di chuyển Minh; nhấp hoặc chạm đồ vật để Minh đi tới và tương tác.

Bạn cũng có thể chơi trực tuyến bằng cách mở địa chỉ GitHub Pages sau khi xuất bản.

## Nút hỗ trợ và lưu tiến trình

- **?** (góc trên): gợi ý bước tiếp theo, không trừ điểm.
- **♪**: bật/tắt âm thanh tạo bằng trình duyệt, mặc định tắt.
- **↺**: chơi lại; có bước xác nhận trước khi xóa lượt hiện tại.
- Túi manh mối: nhấp một manh mối để đọc lại hoặc một ô trống để xem vị trí gợi ý.
- Game tự lưu trong localStorage trên trình duyệt hiện tại. Chế độ riêng tư, chặn lưu trữ, xóa dữ liệu trang hoặc chuyển trình duyệt/địa chỉ có thể làm mất lượt. Nếu không thể lưu, game sẽ báo ở chân trang và vẫn chơi được trong phiên hiện tại. Với tệp mở trực tiếp, khả năng giữ dữ liệu phụ thuộc trình duyệt; dùng cùng trình duyệt và cùng tệp khi quay lại. GitHub Pages là cách chạy ổn định hơn.

## Điểm kỹ năng màn 1: tối đa 100

| Hoạt động | Điểm |
|---|---:|
| Ghi nhận ba manh mối | 15 × 3 = 45 |
| Trả lời lời mời: kiểm chứng / hỏi danh tính / nhận ngay | 15 / 10 / 0 |
| Ứng phó yêu cầu dữ liệu: từ chối / hỏi lại / đồng ý | 15 / 5 / 0 |
| Ba chốt câu đố cuối màn | 8 + 8 + 9 = 25 |

Mỗi hoạt động chỉ tính điểm một lần. Mỗi chốt câu đố chọn sai ít nhất một lần nhận ít hơn 3 điểm, vẫn được thử lại để hoàn thành. Mọi lựa chọn hội thoại đều có phản hồi và diễn biến riêng. Lựa chọn chưa an toàn không khóa đường học tiếp; muốn thử hướng khác có thể chơi lại.

## An toàn và quyền riêng tư

Không có ô nhập thông tin cá nhân, không có API, backend, theo dõi hay tài nguyên từ bên thứ ba. Không có dữ liệu nào được gửi đi. Đường dẫn dùng đuôi `.invalid` (dành cho mô phỏng), được hiển thị dưới dạng văn bản không thể nhấp. Tiến trình được lưu trên thiết bị. Khi chơi thật ngoài đời, học sinh nên tìm người lớn đáng tin hỗ trợ nếu bị đe dọa hoặc đã lỡ chia sẻ thông tin.

## Xuất bản miễn phí bằng GitHub Pages

Sau khi mã nguồn đã có trên nhánh `main` của GitHub:

1. Mở repository → **Settings** → ở cột trái chọn **Pages**.
2. Trong **Build and deployment**, chọn **Source: Deploy from a branch**.
3. Chọn nhánh **main**, thư mục **/ (root)** → nhấp **Save**.
4. Đợi GitHub hoàn tất triển khai. Tại trang **Pages**, nhấp **Visit site** khi nút xuất hiện.
5. Mở địa chỉ trang đó bằng trình duyệt để chơi game.

Nếu chưa tải mã lên: ở trang repository chọn **Add file → Upload files**, kéo thả `index.html`, `style.css`, `game.js`, `README.md` và cả thư mục `assets` vào vùng tải lên, rồi nhấp **Commit changes**. Nếu repository còn trống, GitHub có thể hiển thị đường dẫn **uploading an existing file** thay cho **Add file**. Không tải lên `.git`.

## Phát triển và kiểm tra

HTML/CSS/JavaScript thuần, không cần bước build và không có dependency sản xuất. Tài nguyên SVG do dự án tự tạo.

Có thể dùng máy chủ tĩnh thay cho mở tệp: từ thư mục dự án chạy `python3 -m http.server 8080 --bind 0.0.0.0` (Windows dùng `py -m http.server 8080`). Sau đó mở trang ở cổng 8080 trên máy của bạn.

Kiểm tra thủ công: khám phá cả bảy đồ vật; thử các lựa chọn hội thoại; thu thập đủ ba manh mối; thử chọn sai rồi sửa ở câu đố; hoàn thành màn; tải lại trang để kiểm tra lưu tiến trình; bật/tắt âm thanh; hủy và xác nhận chơi lại. Chơi trên màn hình hẹp để kiểm tra bố cục cảm ứng.

Chi tiết kiểm tra tự động trong `VALIDATION.md`.
