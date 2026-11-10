/* Dữ liệu tình huống giả lập; không có liên kết hay yêu cầu nhập dữ liệu thật. */
'use strict';
window.ESCAPE_CHAPTERS = {
  2: {
    title:'Chiếc bẫy lòng tin', room:'GÓC HỌC TẬP', time:'07:15', mood:'Sáng hôm sau · Cùng Lan xem lại', mission:'Sự quan tâm có điều kiện?',
    intro:'Sáng hôm sau, Minh cùng Lan xem lại những tin nhắn Shadow_88 đã gửi. Cả hai đọc lại cuộc trò chuyện để hiểu chuyện gì đang xảy ra.',
    clues:[
      ['Quan tâm quá nhanh','“Chỉ anh mới hiểu em. Kể anh nghe chuyện em buồn nhất nhé.”','Chưa quen bao lâu mà đã hỏi sâu vào chuyện riêng là điều đáng lưu ý. Thích cùng một trò chơi không có nghĩa là mình đã biết rõ người bên kia.'],
      ['Món quà thành món nợ','“Anh đã dành quà cho em, em phải tin anh chứ!”','Được tặng quà không có nghĩa là phải kể chuyện riêng hay làm theo mọi yêu cầu. Ở đây, Shadow_88 đang khiến Minh thấy mình mắc nợ.'],
      ['Lời từ chối không được tôn trọng','“Nếu thật sự coi anh là bạn, hãy gửi lịch học của em.”','Người tôn trọng Minh sẽ không ép cậu chứng minh tình bạn bằng chuyện riêng. Lịch học và nơi thường đến cũng là những thông tin cần giữ kín.']
    ],
    decisions:[
      {message:'“Anh cũng mê game giống em. Kể anh chuyện riêng nhé, anh hiểu em hơn các bạn ở lớp.”',question:'Nếu là Minh, bạn sẽ trả lời thế nào?',choices:[
        ['Mình chưa muốn kể chuyện riêng. Mình sẽ hỏi người mình tin tưởng trước.',15,'Dù nói chuyện có vẻ hợp nhau, Minh vẫn cần thời gian để hiểu người kia. Giữ lại chuyện riêng lúc này là lựa chọn thận trọng.','Shadow_88 đổi giọng trong tin nhắn tiếp theo: “Em không tin anh sao?”'],
        ['Hỏi người đó có thật sự cùng sở thích không.',5,'Hỏi thêm có thể giúp hiểu chuyện, nhưng chưa đủ để biết người kia có đáng tin không. Họ có thể đoán sở thích của Minh từ bài đăng công khai.','Đối phương kể thêm vài tên game rồi tiếp tục hỏi chuyện riêng.'],
        ['Kể hết chuyện buồn để chứng minh mình tin.',0,'Muốn có người lắng nghe là điều dễ hiểu. Tuy vậy, kể chuyện riêng quá sớm có thể khiến Minh bị gây áp lực về sau. Trong game, không có thông tin thật nào được gửi đi.','Nếu Minh kể hết, Shadow_88 có thể dựa vào chuyện đó để khẳng định rằng chỉ mình họ mới hiểu cậu.']
      ]},
      {message:'“Anh đã giúp em rồi. Gửi lịch học để anh biết lúc nào có thể nói chuyện nhé.”',question:'Lời hứa tặng quà có khiến Minh phải cung cấp lịch học không?',choices:[
        ['Không. Mình không chia sẻ lịch học hay nơi thường đến.',15,'Minh có quyền nói không. Một món quà không khiến cậu phải đánh đổi sự riêng tư.','Trong hồ sơ, yêu cầu tiếp theo của Shadow_88 là giữ kín mối quan hệ.'],
        ['Chỉ nói giờ tan học, không nói tên trường.',5,'Giờ tan học cũng cho biết thói quen của Minh. Cậu không cần tiết lộ điều đó để nhận quà hay giữ một tình bạn.','Đối phương tiếp tục hỏi nơi Minh thường chờ sau giờ học.'],
        ['Đồng ý vì đã được hứa tặng quà.',0,'Cảm ơn một món quà không đồng nghĩa với việc phải làm theo mọi yêu cầu. Không có thông tin thật nào được gửi trong lựa chọn này.','Khi thấy Minh đồng ý, Shadow_88 có thể tiếp tục hỏi sâu hơn về cuộc sống của cậu.']
      ]}
    ],
    support:'Lan: “Bạn tốt không dùng quà để buộc cậu làm theo. Mình cùng cậu nói với cô nếu cậu thấy áp lực.”',
    puzzle:{kind:'multi',title:'Chọn hai dấu hiệu thao túng',prompt:'Đọc cả ngữ cảnh. Hai câu nào dùng sự thân thiết để gây áp lực?',options:['“Anh đã cho quà, em phải gửi lịch học.”','“Cậu không muốn kể cũng được, mình tôn trọng.”','“Chỉ anh hiểu em. Đừng nghe bạn bè nữa.”','“Cậu có thể hỏi người lớn trước khi quyết định.”'],correct:[0,2],explain:'Mắc nợ vì quà và nghe lời “chỉ mình anh hiểu em” có thể khiến Minh khó nói không, dần xa những người thân quen. Người tôn trọng Minh sẽ chấp nhận lời từ chối và không ngăn cậu hỏi người khác.'},
    lesson:'Một tình bạn đáng tin cần thời gian và sự tôn trọng. Quà tặng hay lời khen không khiến mình phải kể chuyện riêng.',next:'Từ lời quan tâm, Shadow_88 chuyển sang yêu cầu giữ bí mật. Minh và Lan mang hồ sơ tới góc thư viện để phân tích.'
  },
  3: {
    title:'Bí mật nguy hiểm',room:'GÓC THƯ VIỆN',time:'09:40',mood:'Giờ ra chơi · Không giữ một mình',mission:'Vì sao phải giấu mọi người?',
    intro:'Ở góc thư viện, Lan giúp Minh xem các tin nhắn còn lưu. Càng đọc, cả hai càng thấy những lời “đừng kể ai” đang khiến Minh xa những người có thể giúp cậu.',
    clues:[
      ['Yêu cầu im lặng','“Đừng kể chuyện này với bố mẹ hay cô giáo, họ sẽ phá tình bạn của mình.”','Nếu một bí mật khiến Minh sợ hãi hoặc không dám nhờ giúp đỡ, cậu có quyền kể với người mình tin tưởng.'],
      ['Đổ lỗi để làm sợ','“Nếu có chuyện gì xảy ra thì là tại em đã kể với người khác.”','Người đưa ra lời đe dọa phải chịu trách nhiệm về lời nói và hành động của họ. Minh không có lỗi khi kể lại để tìm sự giúp đỡ.'],
      ['Cắt đứt người hỗ trợ','“Lan ghen tị thôi. Bỏ nhóm lớp đi, chỉ nói chuyện với anh.”','Khi Minh ít nói chuyện với bạn bè, gia đình và thầy cô hơn, cậu cũng khó hỏi ý kiến khi thấy bất an. Đó là điều Shadow_88 đang muốn.']
    ],
    decisions:[
      {message:'“Đây là bí mật giữa hai ta. Kể ra thì anh không còn quan tâm em nữa.”',question:'Minh có cần giữ lời hứa im lặng này không?',choices:[
        ['Mình thấy lo. Mình sẽ kể với người lớn mà mình tin tưởng.',15,'Lời hứa giữ bí mật không quan trọng hơn sự an toàn của Minh. Cậu có thể nói ra để được giúp đỡ.','Lan cùng Minh chuẩn bị nói chuyện với cô giáo, không tiếp tục nhắn cho Shadow_88.'],
        ['Chỉ kể với Lan rồi nhờ Lan cũng giấu người lớn.',5,'Có Lan bên cạnh sẽ giúp Minh bớt lo, nhưng cả hai không cần tự giải quyết một chuyện có lời đe dọa. Nhờ thêm người lớn là bước cần thiết.','Lan lo lắng và đề nghị cùng tìm người lớn thay vì giữ kín.'],
        ['Giữ kín vì sợ mất sự quan tâm.',0,'Sợ mất đi một người quan tâm mình là cảm giác dễ hiểu. Nhưng sự quan tâm không nên đi kèm yêu cầu im lặng khi mình đang lo sợ.','Nếu tiếp tục giữ kín, Minh sẽ phải lo lắng một mình. Bạn có thể giúp cậu thử một cách xử lý khác.']
      ]},
      {message:'“Lan đang hại em đấy. Rời nhóm lớp và đừng gặp cô giáo.”',question:'Minh nên làm gì để không mất liên lạc với những người có thể giúp mình?',choices:[
        ['Giữ liên lạc với Lan và tìm giáo viên hoặc người chăm sóc.',15,'Minh có quyền giữ những mối quan hệ khiến cậu thấy được lắng nghe. Người lạ không thể quyết định cậu được nói chuyện với ai.','Minh và Lan thống nhất tìm cô giáo ở phòng tư vấn.'],
        ['Không rời nhóm nhưng tự xử lý, không nói với ai.',5,'Không rời nhóm là một bước tốt. Nhưng khi vẫn bị ép buộc, Minh nên nói thêm với một người lớn mà cậu tin tưởng.','Lan nhận ra Minh vẫn căng thẳng và nhắc rằng cô giáo có thể giúp.'],
        ['Rời nhóm để tránh làm Shadow_88 giận.',0,'Shadow_88 có giận cũng không có nghĩa là Minh phải xa bạn bè. Một người tôn trọng cậu sẽ không bắt cậu chọn giữa họ và mọi người.','Rời nhóm có thể khiến Minh khó chia sẻ khi cần. Dù đã rời nhóm, cậu vẫn có thể liên lạc lại với Lan và cô giáo.']
      ]}
    ],support:'Giáo viên: “Cảm ơn em đã kể. Em không có lỗi vì tìm giúp đỡ. Nếu người đầu tiên chưa giúp được, hãy tìm người lớn đáng tin khác.”',
    puzzle:{kind:'classify',title:'Phân loại lời nhắn',steps:[
      {prompt:'“Giấu món quà sinh nhật tới chiều để tạo bất ngờ, em vẫn có thể hỏi bố mẹ.”',options:['Bất ngờ có giới hạn, không cản tìm trợ giúp.','Bắt buộc là đe dọa.'],correct:0,explain:'Bất ngờ có thời hạn và không ngăn tìm hỗ trợ khác với bí mật gây sợ hãi.'},
      {prompt:'“Không được kể cô giáo, nếu không em sẽ gặp rắc rối.”',options:['Bí mật vui, nên giữ.','Bí mật có đe dọa, cần tìm hỗ trợ.'],correct:1,explain:'Dùng nỗi sợ để giữ em im lặng là dấu hiệu nguy hiểm. Em không cần chờ bằng chứng hoàn hảo mới tìm người lớn.'},
      {prompt:'Nếu người đầu tiên không lắng nghe, Minh nên làm gì?',options:['Tìm một người lớn đáng tin khác và nói rõ mình cần giúp.','Bỏ cuộc vì không ai giúp được.'],correct:0,explain:'Tiếp tục tìm nguồn hỗ trợ khác: người chăm sóc, giáo viên hoặc người phụ trách bảo vệ học sinh.'}
    ]},lesson:'Không cần giữ một bí mật khiến mình sợ hãi. Kể với người đáng tin là cách tự bảo vệ, không phải phản bội ai.',next:'Cô giáo cùng Minh lập kế hoạch từ chối những yêu cầu tiếp theo. Cả hai chuyển sang phòng tư vấn.'
  },
  4: {
    title:'Ranh giới cuối cùng',room:'PHÒNG TƯ VẤN',time:'10:00',mood:'Có người đồng hành · Có quyền từ chối',mission:'Ranh giới thuộc về em',
    intro:'Trong phòng tư vấn, Minh cùng cô giáo diễn tập cách đáp lại yêu cầu nguy hiểm. Bạn sẽ chọn cách xử lý giúp Minh; game không gửi tin nhắn hay tổ chức cuộc gặp thật.',
    clues:[
      ['Cuộc gặp không an toàn','“Đến chỗ vắng một mình để nhận quà. Đừng mang điện thoại.”','Một cuộc gặp ở chỗ vắng, phải đi một mình và không được mang điện thoại sẽ khiến Minh khó nhờ giúp đỡ khi cần. Cậu không cần đi để chứng minh điều gì.'],
      ['Đe dọa bằng tin cũ','“Nếu em không làm theo, anh sẽ tung những gì em đã kể.”','Đừng trả tiền hoặc gửi thêm dữ liệu để đổi lấy im lặng. Lưu bằng chứng và nhờ người lớn hỗ trợ xử lý.'],
      ['Quyền đổi ý','“Em đã hứa rồi thì không được từ chối.”','Dù từng trả lời, nhận quà hay đồng ý, Minh vẫn có quyền đổi ý. Không lời hứa nào buộc cậu làm điều khiến mình thấy nguy hiểm.']
    ],
    decisions:[
      {message:'“Chiều nay ra chỗ vắng một mình. Nếu dẫn ai theo thì mất quà.”',question:'Minh sẽ chọn phương án nào trong buổi diễn tập?',choices:[
        ['Mình không đi. Mình sẽ nói với cô giáo hoặc người thân.',15,'Từ chối cuộc gặp và nói với người đáng tin giúp Minh tránh rơi vào tình huống khó tự bảo vệ.','Cô giáo cùng Minh lên kế hoạch ở nơi an toàn. Không có cuộc gặp nào được tổ chức.'],
        ['Nhờ Lan đi cùng để tự kiểm tra người đó.',5,'Có Lan đi cùng không làm cuộc gặp này trở nên an toàn. Cả hai không cần tự tìm gặp để kiểm tra tài khoản lạ.','Cô giáo đề nghị cả hai dừng kế hoạch gặp và để người lớn hỗ trợ.'],
        ['Đi một mình để giữ lời hứa.',0,'Giữ lời là điều đáng quý, nhưng an toàn quan trọng hơn. Minh vẫn có quyền đổi ý; không cuộc gặp nào diễn ra trong game.','Đi một mình mà không có điện thoại sẽ khiến Minh khó nhờ giúp đỡ. Bạn có thể giúp cậu thử lại cách từ chối.']
      ]},
      {message:'“Làm theo anh, nếu không anh sẽ tung tin nhắn cũ.”',question:'Trước sự đe dọa, cách xử lý nào bảo vệ Minh?',choices:[
        ['Không làm theo. Lưu lời đe dọa rồi nhờ người lớn giúp.',15,'Minh không phải tự tranh cãi hay thương lượng với người đang đe dọa mình. Nếu nguy hiểm đang xảy ra, cần đến nơi an toàn và nhờ giúp ngay.','Minh và cô giáo giữ bằng chứng để xử lý, không tranh cãi với tài khoản.'],
        ['Tranh cãi và đe dọa ngược lại.',5,'Bị đe dọa thì tức giận là điều dễ hiểu. Nhưng đe dọa lại có thể khiến mọi chuyện căng thẳng hơn. Tạm dừng và nhờ giúp sẽ tốt hơn cho Minh.','Cô giáo giúp Minh tạm đặt điện thoại xuống và chuyển sang kế hoạch bảo vệ.'],
        ['Gửi thêm thông tin để đối phương im lặng.',0,'Gửi thêm thông tin chưa chắc khiến người kia dừng lại, mà có thể cho họ thêm điều để gây sức ép. Trong game, không có dữ liệu nào được gửi đi.','Ngay cả khi Minh làm theo, đối phương vẫn có thể đòi hỏi thêm. Cậu không có lỗi vì bị đe dọa và vẫn có thể dừng lại.']
      ]}
    ],support:'Giáo viên: “Em có quyền không trả lời. Nếu cần câu từ chối, hãy ngắn gọn, rõ ràng; không phải giải thích hay thương lượng. Mình cùng lập kế hoạch bảo vệ em.”',
    puzzle:{kind:'boundary',title:'Nói không và bảo vệ mình',steps:[
      {prompt:'Minh nên bắt đầu lời từ chối thế nào?',options:['Mình không đồng ý gặp riêng hoặc gửi thêm thông tin.','Mình sẽ làm nếu bạn không giận.'],correct:0,explain:'Nói rõ điều mình không đồng ý giúp Minh giữ giới hạn của bản thân. Cậu không cần chờ người kia vui vẻ mới được từ chối.'},
      {prompt:'Chọn hành động tiếp theo khi vẫn bị ép buộc.',options:['Tiếp tục giải thích đến khi họ đồng ý.','Dừng tương tác; không cần xin phép để rời cuộc trò chuyện.'],correct:1,explain:'Minh không cần xin phép để kết thúc một cuộc trò chuyện khiến mình thấy không an toàn.'},
      {prompt:'Minh nên nhờ ai cùng xử lý chuyện này?',options:['Một tài khoản lạ khác hứa xử lý giúp.','Giáo viên hoặc người chăm sóc đáng tin, cùng xem bằng chứng.'],correct:1,explain:'Chọn người lớn đáng tin và kênh chính thức, không giao dữ liệu cho người lạ tự nhận hỗ trợ.'}
    ]},lesson:'Mình có thể nói không, đổi ý và dừng trò chuyện. Nếu bị đe dọa, hãy giữ lại bằng chứng và nhờ người đáng tin giúp.',next:'Ranh giới đã rõ. Minh cùng cô giáo chuyển đến trạm an toàn để thực hành xử lý tài khoản.'
  },
  5: {
    title:'Lối thoát an toàn',room:'TRẠM AN TOÀN SỐ',time:'10:20',mood:'Cùng cô giáo · Hoàn thành kế hoạch',mission:'Cùng Minh xử lý đến cùng',
    intro:'Minh đã ở nơi an toàn cùng cô giáo. Bạn sẽ giúp cậu giữ lại bằng chứng, chặn và báo cáo tài khoản trên bảng mô phỏng, rồi thống nhất cách nhờ hỗ trợ.',
    clues:[
      ['Bằng chứng cần giữ','Hồ sơ mẫu có tên Shadow_88, thời điểm, yêu cầu cung cấp thông tin và lời đe dọa.','Lưu nội dung liên quan và bối cảnh, không phát tán công khai. Trong game, bằng chứng chỉ là dữ liệu giả lập.'],
      ['Chặn và báo cáo','Bảng chức năng có “Chặn tài khoản” và “Báo cáo hành vi đe dọa”.','Chặn giúp hạn chế liên lạc. Báo cáo giúp nền tảng xem xét; không bảo đảm tài khoản bị xử lý ngay. Giao diện thực tế có thể khác.'],
      ['Kế hoạch hỗ trợ','Minh có thể nhờ người chăm sóc, giáo viên hoặc người phụ trách bảo vệ học sinh.','Không cần tự xử lý. Nếu lỡ lộ thông tin đăng nhập, cùng người lớn đổi mật khẩu, đăng xuất phiên lạ qua ứng dụng chính thức.']
    ],
    decisions:[
      {message:'Cô giáo: “Trước khi chặn tài khoản, mình muốn giữ lại gì để giải thích sự việc?”',question:'Minh sẽ xử lý bằng chứng thế nào?',choices:[
        ['Giữ tin liên quan, tên tài khoản và thời điểm; chỉ chia sẻ với người hỗ trợ.',15,'Giữ lại nội dung, tên tài khoản và thời điểm giúp người hỗ trợ hiểu được chuyện đã xảy ra. Chỉ chia sẻ với người cần giúp mình xử lý.','Cô giáo giúp Minh chọn những tin cần giữ mà không phát tán.'],
        ['Chỉ nhớ trong đầu rồi xóa tất cả.',5,'Chỉ nhớ trong đầu thì dễ quên mất chi tiết. Khi đang ở nơi an toàn, Minh có thể nhờ cô giáo giữ lại những tin cần thiết trước khi xóa.','Cô giáo hướng dẫn giữ lại các mẫu tin trong hồ sơ giả lập.'],
        ['Đăng toàn bộ chuyện riêng lên nhóm công khai.',0,'Đăng công khai có thể khiến chuyện riêng của Minh lan xa hơn. Trong game, không bài đăng nào được tạo.','Cô giáo đề nghị chia sẻ riêng với người hỗ trợ thay vì phát tán.']
      ]},
      {message:'Sau khi lưu bằng chứng, Minh cần một kế hoạch có người đồng hành.',question:'Minh nên nhờ ai cùng giúp mình lúc này?',choices:[
        ['Nhờ cô giáo và người chăm sóc cùng xử lý, báo lại nếu tài khoản khác tiếp cận.',15,'Có cô giáo và người chăm sóc cùng theo dõi, Minh sẽ không phải tự xoay xở nếu chuyện này tiếp diễn.','Cô giáo thống nhất cùng Minh báo cáo và kiểm tra an toàn tài khoản.'],
        ['Chỉ nhờ Lan giữ hộ, không cần người lớn.',5,'Lan có thể ở bên Minh, nhưng cả hai vẫn nên nhờ thêm người lớn khi có lời đe dọa.','Lan đề nghị cùng Minh trao đổi với cô giáo.'],
        ['Tìm dịch vụ lạ hứa lấy lại tài khoản và gửi mật khẩu.',0,'Người tự nhận giúp lấy lại tài khoản cũng không được biết mật khẩu hay mã xác nhận. Minh nên cùng người lớn dùng mục trợ giúp chính thức của ứng dụng.','Game dừng yêu cầu này mà không gửi mật khẩu. Minh quay lại nhờ cô giáo và người chăm sóc giúp.']
      ]}
    ],support:'Giáo viên: “Cô sẽ cùng em xử lý, không trách em vì đã trả lời. Chặn và báo cáo không thay thế việc tìm hỗ trợ nếu vẫn bị đe dọa.”',
    puzzle:{kind:'actions',title:'Bảng điều khiển thoát hiểm',steps:[
      {prompt:'Minh đang an toàn cùng cô giáo. Trên bảng mô phỏng, nên làm gì trước?',options:['Xóa hết tin nhắn ngay.','Lưu bằng chứng liên quan vào hồ sơ riêng.'],correct:1,explain:'Đã lưu bản ghi mẫu gồm tên tài khoản, nội dung và thời điểm vào hồ sơ mô phỏng. Không tải hoặc gửi dữ liệu thật.'},
      {prompt:'Bằng chứng đã được lưu. Làm gì để hạn chế liên lạc?',options:['Chặn Shadow_88 trên giao diện mô phỏng.','Thử thách đối phương tiếp tục nhắn.'],correct:0,explain:'Đã chặn tài khoản trong mô phỏng. Ngoài đời, tài khoản khác vẫn có thể tiếp cận; hãy báo người hỗ trợ.'},
      {prompt:'Chọn cách báo cáo phù hợp với hồ sơ.',options:['Báo cáo hành vi đe dọa/ép cung cấp thông tin và xác nhận kế hoạch với cô giáo.','Báo cáo sai lý do rồi tự xử lý tiếp.'],correct:0,explain:'Đã ghi nhận báo cáo và kế hoạch hỗ trợ trong mô phỏng. Nền tảng cần thời gian xem xét; em không cần chờ kết quả mới tìm trợ giúp.'}
    ]},lesson:'Dừng tương tác, lưu bằng chứng khi an toàn, chặn, báo cáo và tìm người hỗ trợ. Nếu nguy hiểm tức thời, ưu tiên đến nơi an toàn và nhờ trợ giúp ngay.',next:'Minh không còn phải lo lắng một mình. Cậu đã biết cách bảo vệ tài khoản, giữ lại bằng chứng và tìm người cùng giúp. Đó là lối thoát của câu chuyện này.'
  }
};
