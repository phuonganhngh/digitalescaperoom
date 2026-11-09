/* Dữ liệu tình huống giả lập; không có liên kết hay yêu cầu nhập dữ liệu thật. */
'use strict';
window.ESCAPE_CHAPTERS = {
  2: {
    title:'Chiếc bẫy lòng tin', room:'GÓC HỌC TẬP', time:'07:15', mood:'Sáng hôm sau · Cùng Lan xem lại', mission:'Sự quan tâm có điều kiện?',
    intro:'Sáng hôm sau, Minh cùng Lan xem lại những tin nhắn Shadow_88 đã gửi. Không cần trả lời tài khoản để tiếp tục điều tra.',
    clues:[
      ['Quan tâm quá nhanh','“Chỉ anh mới hiểu em. Kể anh nghe chuyện em buồn nhất nhé.”','Thân thiết rất nhanh rồi yêu cầu chuyện riêng là dấu hiệu cần thận trọng. Cùng sở thích không xác minh được danh tính.'],
      ['Món quà thành món nợ','“Anh đã dành quà cho em, em phải tin anh chứ!”','Quà tặng không tạo nghĩa vụ chia sẻ bí mật hay làm theo yêu cầu. Gây cảm giác mắc nợ là một cách thao túng.'],
      ['Giới hạn bị thử thách','“Nếu thật sự coi anh là bạn, hãy gửi lịch học của em.”','Một người tôn trọng Minh sẽ chấp nhận lời từ chối. Lịch học, nơi thường đến và chuyện riêng có thể bị dùng để khai thác.']
    ],
    decisions:[
      {message:'“Anh cũng mê game giống em. Kể anh chuyện riêng nhé, anh hiểu em hơn các bạn ở lớp.”',question:'Khi xem lại tin nhắn này, Minh nên chọn cách ứng phó nào?',choices:[
        ['Giữ chuyện riêng và kiểm chứng qua người đáng tin.',15,'Em đã tách cảm giác thân thiết khỏi bằng chứng về sự tin cậy.','Shadow_88 đổi giọng trong tin nhắn tiếp theo: “Em không tin anh sao?”'],
        ['Hỏi người đó có thật sự cùng sở thích không.',5,'Hỏi thêm chưa đủ để kiểm chứng: sở thích có thể được đoán từ bài đăng công khai.','Đối phương kể thêm vài tên game rồi tiếp tục hỏi chuyện riêng.'],
        ['Kể hết chuyện buồn để chứng minh mình tin.',0,'Mô phỏng không gửi dữ liệu. Chuyện riêng có thể bị dùng để gây áp lực. Em vẫn có thể đổi cách ứng phó.','Trong kịch bản giả định, đối phương dùng chuyện buồn để nói rằng chỉ mình họ hiểu Minh.']
      ]},
      {message:'“Anh đã giúp em rồi. Gửi lịch học để anh biết lúc nào có thể nói chuyện nhé.”',question:'Lời hứa tặng quà có khiến Minh phải cung cấp lịch học không?',choices:[
        ['Không. Mình không chia sẻ lịch học hay nơi thường đến.',15,'Em có quyền từ chối mà không mắc nợ vì món quà.','Trong hồ sơ, yêu cầu tiếp theo của Shadow_88 là giữ kín mối quan hệ.'],
        ['Chỉ nói giờ tan học, không nói tên trường.',5,'Giờ tan học vẫn là thông tin về sinh hoạt. Không cần cung cấp để nhận quà hoặc giữ tình bạn.','Đối phương tiếp tục hỏi nơi Minh thường chờ sau giờ học.'],
        ['Đồng ý vì đã được hứa tặng quà.',0,'Không thông tin thật nào được gửi. Lòng biết ơn không bắt buộc em làm điều khiến mình thiếu an toàn.','Kịch bản giả định cho thấy một nhượng bộ dẫn đến yêu cầu riêng tư hơn.']
      ]}
    ],
    support:'Lan: “Bạn tốt không dùng quà để buộc cậu làm theo. Mình cùng cậu nói với cô nếu cậu thấy áp lực.”',
    puzzle:{kind:'multi',title:'Chọn hai dấu hiệu thao túng',prompt:'Đọc cả ngữ cảnh. Hai câu nào dùng sự thân thiết để gây áp lực?',options:['“Anh đã cho quà, em phải gửi lịch học.”','“Cậu không muốn kể cũng được, mình tôn trọng.”','“Chỉ anh hiểu em. Đừng nghe bạn bè nữa.”','“Cậu có thể hỏi người lớn trước khi quyết định.”'],correct:[0,2],explain:'Mắc nợ vì quà và tự nhận là người duy nhất thấu hiểu để tách em khỏi người khác là dấu hiệu thao túng. Tôn trọng lời từ chối và khuyến khích tìm trợ giúp là hành vi lành mạnh.'},
    lesson:'Sự tin cậy cần thời gian, bằng chứng và tôn trọng ranh giới; không được đánh đổi bằng quà hoặc lời khen.',next:'Từ lời quan tâm, Shadow_88 chuyển sang yêu cầu giữ bí mật. Minh và Lan mang hồ sơ tới góc thư viện để phân tích.'
  },
  3: {
    title:'Bí mật nguy hiểm',room:'GÓC THƯ VIỆN',time:'09:40',mood:'Giờ ra chơi · Không giữ một mình',mission:'Bí mật hay sự cô lập?',
    intro:'Ở góc thư viện, Lan giúp Minh xem các tin nhắn còn lưu. Những lời “đừng kể ai” đang cố tách Minh khỏi nguồn hỗ trợ.',
    clues:[
      ['Yêu cầu im lặng','“Đừng kể chuyện này với bố mẹ hay cô giáo, họ sẽ phá tình bạn của mình.”','Bí mật khiến em lo sợ hoặc ngăn em tìm hỗ trợ không phải điều em có nghĩa vụ giữ.'],
      ['Đổ lỗi để làm sợ','“Nếu có chuyện gì xảy ra thì là tại em đã kể với người khác.”','Đối phương chịu trách nhiệm về hành vi đe dọa của họ. Tìm trợ giúp không khiến em có lỗi.'],
      ['Cắt đứt người hỗ trợ','“Lan ghen tị thôi. Bỏ nhóm lớp đi, chỉ nói chuyện với anh.”','Yêu cầu xa lánh bạn bè, gia đình hoặc giáo viên là cách cô lập để dễ kiểm soát.']
    ],
    decisions:[
      {message:'“Đây là bí mật giữa hai ta. Kể ra thì anh không còn quan tâm em nữa.”',question:'Minh có cần giữ lời hứa im lặng này không?',choices:[
        ['Không giữ bí mật gây lo sợ; kể với người lớn đáng tin.',15,'Em có thể phá bỏ lời hứa giữ bí mật để bảo vệ sự an toàn.','Lan cùng Minh chuẩn bị nói chuyện với cô giáo, không tiếp tục nhắn cho Shadow_88.'],
        ['Chỉ kể với Lan rồi nhờ Lan cũng giấu người lớn.',5,'Có bạn đồng hành là tốt, nhưng hai học sinh không nên tự gánh tình huống đe dọa.','Lan lo lắng và đề nghị cùng tìm người lớn thay vì giữ kín.'],
        ['Giữ kín vì sợ mất sự quan tâm.',0,'Mô phỏng giúp em nhận ra áp lực. Sự quan tâm có điều kiện không buộc em im lặng.','Trong giả định, việc giữ kín khiến Minh phải tự chịu lo lắng. Em có thể chọn lại cách ứng phó.']
      ]},
      {message:'“Lan đang hại em đấy. Rời nhóm lớp và đừng gặp cô giáo.”',question:'Minh bảo vệ mạng lưới hỗ trợ bằng cách nào?',choices:[
        ['Giữ liên lạc với Lan và tìm giáo viên hoặc người chăm sóc.',15,'Không để người lạ quyết định ai được hỗ trợ em.','Minh và Lan thống nhất tìm cô giáo ở phòng tư vấn.'],
        ['Không rời nhóm nhưng tự xử lý, không nói với ai.',5,'Giữ bạn bè là một bước tốt. Khi có ép buộc, hãy tìm thêm hỗ trợ từ người lớn.','Lan nhận ra Minh vẫn căng thẳng và nhắc rằng cô giáo có thể giúp.'],
        ['Rời nhóm để tránh làm Shadow_88 giận.',0,'Giận dỗi không cho người khác quyền cắt đứt các mối quan hệ của em.','Trong giả định, Minh ít người để hỏi ý kiến hơn. Mạng lưới hỗ trợ vẫn có thể được nối lại.']
      ]}
    ],support:'Giáo viên: “Cảm ơn em đã kể. Em không có lỗi vì tìm giúp đỡ. Nếu người đầu tiên chưa giúp được, hãy tìm người lớn đáng tin khác.”',
    puzzle:{kind:'classify',title:'Phân loại lời nhắn',steps:[
      {prompt:'“Giấu món quà sinh nhật tới chiều để tạo bất ngờ, em vẫn có thể hỏi bố mẹ.”',options:['Bất ngờ có giới hạn, không cản tìm trợ giúp.','Bắt buộc là đe dọa.'],correct:0,explain:'Bất ngờ có thời hạn và không ngăn tìm hỗ trợ khác với bí mật gây sợ hãi.'},
      {prompt:'“Không được kể cô giáo, nếu không em sẽ gặp rắc rối.”',options:['Bí mật vui, nên giữ.','Bí mật có đe dọa, cần tìm hỗ trợ.'],correct:1,explain:'Dùng nỗi sợ để giữ em im lặng là dấu hiệu nguy hiểm. Em không cần chờ bằng chứng hoàn hảo mới tìm người lớn.'},
      {prompt:'Nếu người đầu tiên không lắng nghe, Minh nên làm gì?',options:['Tìm một người lớn đáng tin khác và nói rõ mình cần giúp.','Bỏ cuộc vì không ai giúp được.'],correct:0,explain:'Tiếp tục tìm nguồn hỗ trợ khác: người chăm sóc, giáo viên hoặc người phụ trách bảo vệ học sinh.'}
    ]},lesson:'Bí mật gây sợ hãi và ngăn tìm trợ giúp có thể được chia sẻ để bảo vệ bản thân.',next:'Cô giáo cùng Minh lập kế hoạch từ chối những yêu cầu tiếp theo. Cả hai chuyển sang phòng tư vấn.'
  },
  4: {
    title:'Ranh giới cuối cùng',room:'PHÒNG TƯ VẤN',time:'10:00',mood:'Có người đồng hành · Có quyền từ chối',mission:'Ranh giới thuộc về em',
    intro:'Trong phòng tư vấn, Minh cùng cô giáo diễn tập cách đáp lại yêu cầu nguy hiểm. Các lựa chọn chỉ là diễn tập, không gửi tin và không tổ chức cuộc gặp thật.',
    clues:[
      ['Cuộc gặp không an toàn','“Đến chỗ vắng một mình để nhận quà. Đừng mang điện thoại.”','Đòi gặp riêng, tránh người hỗ trợ và bỏ phương tiện liên lạc là các dấu hiệu nguy hiểm đi cùng nhau.'],
      ['Đe dọa bằng tin cũ','“Nếu em không làm theo, anh sẽ tung những gì em đã kể.”','Đừng trả tiền hoặc gửi thêm dữ liệu để đổi lấy im lặng. Lưu bằng chứng và nhờ người lớn hỗ trợ xử lý.'],
      ['Quyền đổi ý','“Em đã hứa rồi thì không được từ chối.”','Đã trả lời, nhận quà hoặc đồng ý trước đó không làm mất quyền đổi ý. An toàn luôn quan trọng hơn lời hứa bị ép buộc.']
    ],
    decisions:[
      {message:'“Chiều nay ra chỗ vắng một mình. Nếu dẫn ai theo thì mất quà.”',question:'Minh sẽ chọn phương án nào trong buổi diễn tập?',choices:[
        ['Không đi; báo người lớn và giữ liên lạc với người hỗ trợ.',15,'Từ chối cuộc gặp bí mật và tìm hỗ trợ giúp giảm rủi ro.','Cô giáo cùng Minh lên kế hoạch ở nơi an toàn. Không có cuộc gặp nào được tổ chức.'],
        ['Nhờ Lan đi cùng để tự kiểm tra người đó.',5,'Đi cùng bạn vẫn có thể nguy hiểm; học sinh không cần tự điều tra tài khoản đáng ngờ.','Cô giáo đề nghị cả hai dừng kế hoạch gặp và để người lớn hỗ trợ.'],
        ['Đi một mình để giữ lời hứa.',0,'Mô phỏng dừng trước mọi hành động nguy hiểm. Em có thể đổi ý dù đã hứa.','Trong giả định, Minh sẽ thiếu hỗ trợ và liên lạc. Hãy luyện lại cách từ chối.']
      ]},
      {message:'“Làm theo anh, nếu không anh sẽ tung tin nhắn cũ.”',question:'Trước sự đe dọa, cách xử lý nào bảo vệ Minh?',choices:[
        ['Dừng đáp ứng, lưu lời đe dọa và nhờ người lớn hỗ trợ.',15,'Không cần đối đầu hoặc thương lượng một mình. Nếu có nguy hiểm tức thời, đến nơi an toàn và nhờ hỗ trợ khẩn cấp.','Minh và cô giáo giữ bằng chứng để xử lý, không tranh cãi với tài khoản.'],
        ['Tranh cãi và đe dọa ngược lại.',5,'Phản ứng khi tức giận là dễ hiểu nhưng có thể làm căng thẳng tăng. Hãy dừng và tìm hỗ trợ.','Cô giáo giúp Minh tạm đặt điện thoại xuống và chuyển sang kế hoạch bảo vệ.'],
        ['Gửi thêm thông tin để đối phương im lặng.',0,'Gửi thêm không bảo đảm hết đe dọa và có thể tạo thêm thứ để bị khai thác. Không có dữ liệu nào được gửi trong mô phỏng.','Trong giả định, đối phương đòi hỏi tiếp. Em không có lỗi và có thể dừng lại ngay.']
      ]}
    ],support:'Giáo viên: “Em có quyền không trả lời. Nếu cần câu từ chối, hãy ngắn gọn, rõ ràng; không phải giải thích hay thương lượng. Mình cùng lập kế hoạch bảo vệ em.”',
    puzzle:{kind:'boundary',title:'Lắp một ranh giới rõ ràng',steps:[
      {prompt:'Chọn câu mở đầu đặt ranh giới.',options:['Mình không đồng ý gặp riêng hoặc gửi thêm thông tin.','Mình sẽ làm nếu bạn không giận.'],correct:0,explain:'Ranh giới rõ ràng diễn tả điều em không đồng ý, không phụ thuộc việc đối phương có vui hay không.'},
      {prompt:'Chọn hành động tiếp theo khi vẫn bị ép buộc.',options:['Tiếp tục giải thích đến khi họ đồng ý.','Dừng tương tác; không cần xin phép để rời cuộc trò chuyện.'],correct:1,explain:'Em không phải thuyết phục người gây áp lực cho phép em bảo vệ bản thân.'},
      {prompt:'Chọn nguồn hỗ trợ cho kế hoạch của Minh.',options:['Một tài khoản lạ khác hứa xử lý giúp.','Giáo viên hoặc người chăm sóc đáng tin, cùng xem bằng chứng.'],correct:1,explain:'Chọn người lớn đáng tin và kênh chính thức, không giao dữ liệu cho người lạ tự nhận hỗ trợ.'}
    ]},lesson:'Em có quyền từ chối, đổi ý và dừng tương tác. Lưu bằng chứng và nhờ hỗ trợ khi bị đe dọa.',next:'Ranh giới đã rõ. Minh cùng cô giáo chuyển đến trạm an toàn để thực hành xử lý tài khoản.'
  },
  5: {
    title:'Lối thoát an toàn',room:'TRẠM AN TOÀN SỐ',time:'10:20',mood:'Cùng cô giáo · Hoàn thành kế hoạch',mission:'Biến nhận biết thành hành động',
    intro:'Minh đã ở nơi an toàn cùng cô giáo. Trên bảng điều khiển mô phỏng, hãy lưu bằng chứng, chặn, báo cáo tài khoản và kết nối nguồn hỗ trợ.',
    clues:[
      ['Bằng chứng cần giữ','Hồ sơ mẫu có tên Shadow_88, thời điểm, yêu cầu cung cấp thông tin và lời đe dọa.','Lưu nội dung liên quan và bối cảnh, không phát tán công khai. Trong game, bằng chứng chỉ là dữ liệu giả lập.'],
      ['Chặn và báo cáo','Bảng chức năng có “Chặn tài khoản” và “Báo cáo hành vi đe dọa”.','Chặn giúp hạn chế liên lạc. Báo cáo giúp nền tảng xem xét; không bảo đảm tài khoản bị xử lý ngay. Giao diện thực tế có thể khác.'],
      ['Kế hoạch hỗ trợ','Minh có thể nhờ người chăm sóc, giáo viên hoặc người phụ trách bảo vệ học sinh.','Không cần tự xử lý. Nếu lỡ lộ thông tin đăng nhập, cùng người lớn đổi mật khẩu, đăng xuất phiên lạ qua ứng dụng chính thức.']
    ],
    decisions:[
      {message:'Cô giáo: “Trước khi chặn tài khoản, mình muốn giữ lại gì để giải thích sự việc?”',question:'Minh sẽ xử lý bằng chứng thế nào?',choices:[
        ['Giữ tin liên quan, tên tài khoản và thời điểm; chỉ chia sẻ với người hỗ trợ.',15,'Lưu bằng chứng có ngữ cảnh, bảo vệ riêng tư của người liên quan.','Cô giáo giúp Minh chọn những tin cần giữ mà không phát tán.'],
        ['Chỉ nhớ trong đầu rồi xóa tất cả.',5,'Nhớ lại có thể thiếu chi tiết. Nếu an toàn và được hỗ trợ, giữ bằng chứng trước khi xóa.','Cô giáo hướng dẫn giữ lại các mẫu tin trong hồ sơ giả lập.'],
        ['Đăng toàn bộ chuyện riêng lên nhóm công khai.',0,'Công khai có thể làm dữ liệu riêng tư lan rộng. Không bài đăng nào được tạo trong mô phỏng.','Cô giáo đề nghị chia sẻ riêng với người hỗ trợ thay vì phát tán.']
      ]},
      {message:'Sau khi lưu bằng chứng, Minh cần một kế hoạch có người đồng hành.',question:'Minh sẽ chọn nguồn hỗ trợ nào?',choices:[
        ['Nhờ cô giáo và người chăm sóc cùng xử lý, báo lại nếu tài khoản khác tiếp cận.',15,'Kế hoạch có người hỗ trợ và theo dõi tiếp giúp em không phải tự gánh tình huống.','Cô giáo thống nhất cùng Minh báo cáo và kiểm tra an toàn tài khoản.'],
        ['Chỉ nhờ Lan giữ hộ, không cần người lớn.',5,'Lan có thể đồng hành nhưng không nên chịu trách nhiệm xử lý một mình.','Lan đề nghị cùng Minh trao đổi với cô giáo.'],
        ['Tìm dịch vụ lạ hứa lấy lại tài khoản và gửi mật khẩu.',0,'Không đưa mật khẩu hoặc mã cho người tự nhận cứu hộ. Dùng kênh hỗ trợ chính thức cùng người lớn.','Trong mô phỏng, yêu cầu bị dừng. Minh quay lại nguồn hỗ trợ đã biết.']
      ]}
    ],support:'Giáo viên: “Cô sẽ cùng em xử lý, không trách em vì đã trả lời. Chặn và báo cáo không thay thế việc tìm hỗ trợ nếu vẫn bị đe dọa.”',
    puzzle:{kind:'actions',title:'Bảng điều khiển thoát hiểm',steps:[
      {prompt:'Minh đang an toàn cùng cô giáo. Bước đầu tiên trên hồ sơ giả lập?',options:['Xóa hết tin nhắn ngay.','Lưu bằng chứng liên quan vào hồ sơ riêng.'],correct:1,explain:'Đã lưu bản ghi mẫu gồm tên tài khoản, nội dung và thời điểm vào hồ sơ mô phỏng. Không tải hoặc gửi dữ liệu thật.'},
      {prompt:'Bằng chứng đã được lưu. Làm gì để hạn chế liên lạc?',options:['Chặn Shadow_88 trên giao diện mô phỏng.','Thử thách đối phương tiếp tục nhắn.'],correct:0,explain:'Đã chặn tài khoản trong mô phỏng. Ngoài đời, tài khoản khác vẫn có thể tiếp cận; hãy báo người hỗ trợ.'},
      {prompt:'Chọn cách báo cáo phù hợp với hồ sơ.',options:['Báo cáo hành vi đe dọa/ép cung cấp thông tin và xác nhận kế hoạch với cô giáo.','Báo cáo sai lý do rồi tự xử lý tiếp.'],correct:0,explain:'Đã ghi nhận báo cáo và kế hoạch hỗ trợ trong mô phỏng. Nền tảng cần thời gian xem xét; em không cần chờ kết quả mới tìm trợ giúp.'}
    ]},lesson:'Dừng tương tác, lưu bằng chứng khi an toàn, chặn, báo cáo và tìm người hỗ trợ. Nếu nguy hiểm tức thời, ưu tiên đến nơi an toàn và nhờ trợ giúp ngay.',next:'Minh đã có một kế hoạch an toàn và người đồng hành. Hành trình kết thúc bằng sự chủ động tìm trợ giúp, không phải tự đối đầu với Shadow_88.'
  }
};
