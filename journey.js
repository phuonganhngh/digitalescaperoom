'use strict';
window.createEscapeJourney = function (ui) {
  const $ = s => document.querySelector(s);
  const chapters = window.ESCAPE_CHAPTERS;
  const KEY = 'thoat-hiem-so.journey.v2';
  const empty = () => ({read:false,clues:[],choices:[],adjusted:[],support:false,puzzleStep:0,puzzleWrong:[],completed:false});
  let active=1, levels={}, storageOK=true, selected=[], note='';
  try {
    const saved=JSON.parse(localStorage.getItem(KEY));
    if(saved?.version===2){
      for(let n=2;n<=5;n++){
        const s=saved.levels?.[n];if(!s)continue;
        levels[n]={...empty(),read:s.read===true,clues:[0,1,2].filter(i=>s.clues?.includes(i)),choices:[0,1].map(i=>Number.isInteger(s.choices?.[i])&&s.choices[i]>=0&&s.choices[i]<3?s.choices[i]:null),adjusted:[0,1].map(i=>s.adjusted?.[i]===true),support:s.support===true,puzzleStep:Number.isInteger(s.puzzleStep)?Math.max(0,Math.min(chapters[n].puzzle.kind==='multi'?1:3,s.puzzleStep)):0,puzzleWrong:[0,1,2].filter(i=>s.puzzleWrong?.includes(i)),completed:s.completed===true};
      }
      if(Number.isInteger(saved.active)&&saved.active>=1&&saved.active<=5)active=saved.active;
    }
  } catch {storageOK=false;}
  function level(n=active){return levels[n] ||= empty();}
  function unlocked(n){return n===1 || (n===2?ui.level1().completed:level(n-1).completed);}
  // Chỉ khôi phục các màn có chuỗi mở khóa hợp lệ.
  for(let n=2;n<=5;n++)if(!unlocked(n))delete levels[n];
  if(!unlocked(active))active=1;
  function persist(){try{localStorage.setItem(KEY,JSON.stringify({version:2,active,levels}));storageOK=true;}catch{storageOK=false;}ui.render();}
  function total(n){if(n===1)return Math.min(100,Object.values(ui.level1().rewards).reduce((a,b)=>a+b,0));const s=level(n),d=chapters[n];let value=s.clues.length*15+(s.support?5:0);for(let i=0;i<2;i++)if(Number.isInteger(s.choices[i]))value+=d.decisions[i].choices[s.choices[i]][1];const points=d.puzzle.kind==='multi'?[20]:[7,7,6];for(let i=0;i<s.puzzleStep;i++)value+=points[i]-(s.puzzleWrong.includes(i)?2:0);return Math.min(100,value);}
  function ready(){const s=level();return s.read&&s.choices.filter(Number.isInteger).length===2&&s.clues.length===3&&s.support;}
  function render(){
    const n=active,d=chapters[n];
    document.querySelectorAll('[data-stage]').forEach(b=>{const k=Number(b.dataset.stage),done=k===1?ui.level1().completed:level(k).completed;b.classList.toggle('active',k===n);b.classList.toggle('locked',!unlocked(k));b.querySelector('i').textContent=done?'ĐÃ HOÀN THÀNH':k===n?'ĐANG KHÁM PHÁ':unlocked(k)?'ĐÃ MỞ KHÓA':'CHƯA MỞ KHÓA';b.setAttribute('aria-current',k===n?'step':'false');});
    $('.page-heading h1').innerHTML=(d?.title||'Lời mời bí ẩn')+'<span>.</span>';
    $('.page-heading p').textContent=d?.intro||'Phần thưởng hấp dẫn… hay bước đầu của một chiếc bẫy?';
    $('.chapter-label').innerHTML=`<span class="live-dot"></span> HỒ SƠ 0${n} <span class="muted">/ ${d?.title.toLocaleUpperCase('vi')||'LỜI MỜI BÍ ẨN'}</span>`;
    $('#open-phone').textContent=n===1?'Đọc tin nhắn ↗':'Mở hồ sơ ↗';
    $('.score-box small').textContent='ĐIỂM KỸ NĂNG · MÀN '+n;
    $('.room-art').src=n===1?'assets/bedroom.svg':`assets/room-${n}.svg`;
    $('.room-art').alt=n===1?'Phòng ngủ của Minh':d.room+' với các vật thể và hồ sơ tương tác';
    $('.room-card').setAttribute('aria-label',d?.room||'Phòng ngủ của Minh');
    $('#room').setAttribute('aria-label',(d?.room||'Phòng ngủ')+'. Chạm đồ vật để khám phá hoặc dùng phím mũi tên di chuyển Minh.');
    $('.room-toolbar>div').innerHTML=`<span class="live-dot"></span>${d?.room||'PHÒNG CỦA MINH'}<span class="room-time">${d?.time||'20:30'}</span>`;
    $('.night-label').textContent=d?.mood||'☾ Một tối bình thường';
    $('.mission-card>.eyebrow').textContent='NHIỆM VỤ MÀN 0'+n;
    $('.mission-card>h2').textContent=d?.mission||'Đừng vội tin!';
    $('.mission-card>p').textContent=n===1?'Khám phá căn phòng và kiểm chứng lời mời từ Shadow_88.':'Khám phá ba dữ kiện, luyện hai lựa chọn và tìm người hỗ trợ để mở nhiệm vụ cuối màn.';
    const names=n===1?['Điện thoại','Máy tính','Sổ tay an toàn','Bảng ghi nhớ','Cửa sổ','Cặp sách · Lan','Cửa ra · Câu đố']:['Hồ sơ tin nhắn','Dữ kiện 01','Dữ kiện 02','Dữ kiện 03','Khoảng dừng','Người hỗ trợ','Cửa ra · Nhiệm vụ'];
    document.querySelectorAll('.hotspot .object-label').forEach((b,i)=>b.textContent=names[i]);
    const completed=[ui.level1().completed,...[2,3,4,5].map(k=>level(k).completed)].filter(Boolean).length;
    $('#journey-status').textContent=`HÀNH TRÌNH ${completed} / 5 MÀN`;
    $('#journey-report').hidden=!ui.level1().completed;
    if(n>1){
      const s=level();$('#score').textContent=total(n);$('#clue-count').textContent=s.clues.length+' / 3';
      const tasks=[['Xem hồ sơ tình huống',s.read],['Luyện hai cách ứng phó',s.choices.filter(Number.isInteger).length===2],['Thu thập 3 manh mối',s.clues.length===3],['Kết nối người hỗ trợ',s.support],['Hoàn thành nhiệm vụ cuối màn',s.completed]];
      $('#tasks').innerHTML=tasks.map(([t,done])=>`<li class="${done?'done':''}"><span class="task-check">${done?'✓':''}</span>${t}</li>`).join('');const done=tasks.filter(t=>t[1]).length;$('#progress').value=done;$('#progress-text').textContent=done+' / 5';$('#progress').setAttribute('aria-label','Tiến trình màn '+n);
      $('#inventory').innerHTML=d.clues.map((c,i)=>`<button class="clue-slot ${s.clues.includes(i)?'found':''}" data-jclue="${i}"><span class="clue-symbol">${s.clues.includes(i)?'✓':'?'}</span><span><strong>${s.clues.includes(i)?c[0]:'Manh mối 0'+(i+1)}</strong><small>${s.clues.includes(i)?'Đã lưu · Nhấp để xem':'Tìm ở Dữ kiện 0'+(i+1)}</small></span></button>`).join('');
      $('#final-puzzle').disabled=!ready();$('#final-puzzle').textContent=s.completed?'Xem kết quả':'Thực hiện nhiệm vụ →';$('#puzzle-lock-note').textContent=s.completed?'Đã hoàn thành màn '+n:ready()?'Đã đủ điều kiện. Hãy mở cánh cửa!':'Xem hồ sơ, tìm đủ dữ kiện và gặp người hỗ trợ.';
    } else $('#progress').setAttribute('aria-label','Tiến trình màn 1');
    if(!storageOK)$('#save-status').textContent='Không thể tự lưu hành trình · Giữ trang mở';
  }
  function enter(n){if(!unlocked(n)){ui.info('Cánh cửa chưa mở','<p>Hoàn thành màn trước để tiếp tục câu chuyện.</p>','BẢN ĐỒ CÂU CHUYỆN');return;}active=n;selected=[];note='';$('#modal').close();ui.render();ui.narrate(n===1?'Mình có thể xem lại hồ sơ lời mời đầu tiên.':chapters[n].intro);ui.emotion('…','đang suy nghĩ');persist();document.querySelector(`[data-stage="${n}"]`).scrollIntoView({block:'nearest',inline:'nearest'});}
  function clue(i){const d=chapters[active],s=level(),c=d.clues[i];ui.info(c[0],`<div class="bubble">${c[1]}</div><p>${c[2]}</p>`,'DỮ KIỆN 0'+(i+1),s.clues.includes(i)?ui.btn('Đã lưu · Quay lại khám phá','close'):ui.btn('Ghi nhận manh mối · +15 điểm','jc-collect','primary-button',`data-id="${i}"`));}
  function dossier(){const s=level(),d=chapters[active];s.read=true;persist();let body=`<h2 id="modal-title">Hồ sơ · ${d.title}</h2><p class="modal-copy">${d.intro}</p><p class="safety-note">Các câu dưới đây là lựa chọn diễn tập với hồ sơ đã lưu, không gửi tới Shadow_88.</p>`;
    if(active===2)body+=`<div class="feedback">Từ màn 1: ${ui.level1().dataReply==='refuse'?'Minh đã từ chối gửi dữ liệu. Cả nhóm xem lại các tin còn lưu, không tiếp tục liên lạc.':'Dù đã từng do dự hoặc đồng ý trong mô phỏng, Minh vẫn có quyền dừng lại. Lan cùng Minh xem hồ sơ để luyện cách bảo vệ mình.'}</div>`;
    let pending=s.choices.findIndex(v=>!Number.isInteger(v));if(pending<0&&s.choices.length<2)pending=s.choices.length;
    for(let i=0;i<2;i++){
      const q=d.decisions[i],choice=s.choices[i];
      if(i>pending&&pending>=0)break;
      body+=`<div class="modal-card"><span class="eyebrow">TÌNH HUỐNG ${i+1} / 2</span><div class="bubble">${q.message}</div><h3>${q.question}</h3>`;
      if(Number.isInteger(choice)){
        const c=q.choices[choice];body+=`<div class="bubble you">${c[0]}</div><div class="feedback ${c[1]<15?'warning':''}">+${c[1]} điểm lần đầu. ${c[2]}</div><p class="modal-copy">${c[3]}</p>`;
        if(c[1]<15)body+=s.adjusted[i]?`<div class="feedback">✓ Đã luyện lại: ${q.choices[0][0]} Điểm lần đầu được giữ để phản ánh quá trình học.</div>`:ui.btn('Điều chỉnh: '+q.choices[0][0],'jc-adjust','secondary-button',`data-id="${i}"`);
      }else body+=`<div class="modal-actions">${q.choices.map((c,j)=>ui.btn(c[0],'jc-choice','choice-button',`data-id="${i}:${j}"`)).join('')}</div>`;
      body+='</div>';
    }
    body+=`<div class="modal-actions">${ready()?ui.btn('Đến nhiệm vụ cuối màn →','jc-puzzle'):''}${ui.btn('Trở về không gian khám phá','close','secondary-button')}</div>`;
    ui.open('HỒ SƠ ĐIỀU TRA · MÀN 0'+active,body,'journey-dossier');
  }
  function support(){const s=level();if(!s.support){s.support=true;ui.ping();persist();}ui.emotion('♡','cảm thấy được hỗ trợ');ui.info('Không phải đối mặt một mình',`<div class="bubble">${chapters[active].support}</div><p>✓ Đã kết nối người hỗ trợ · +5 điểm lần đầu.</p><p>Nếu đang gặp nguy hiểm tức thời ngoài đời, ưu tiên đến nơi an toàn và nhờ người lớn hoặc dịch vụ khẩn cấp tại nơi em sống. Không cần hoàn thành một trình tự trong game trước khi tìm trợ giúp.</p>`,'NGƯỜI ĐỒNG HÀNH');}
  function hint(){const s=level();let text=!s.read?'Mở “Hồ sơ tin nhắn” để đọc tình huống.':s.choices.filter(Number.isInteger).length<2?'Trong hồ sơ, chọn cách ứng phó cho hai tình huống.':s.clues.length<3?'Khám phá “Dữ kiện 01”, “Dữ kiện 02” và “Dữ kiện 03”, rồi ghi nhận manh mối.':!s.support?'Chạm “Người hỗ trợ” để tìm người đồng hành.':'Chạm “Cửa ra · Nhiệm vụ” để áp dụng điều vừa học. Các lựa chọn chưa an toàn có thể được điều chỉnh trong hồ sơ.';ui.info('Một gợi ý nhỏ',`<p>${text}</p><p>Gợi ý không trừ điểm.</p>`,'MÀN 0'+active);}
  function object(id){const locations={phone:[39,73],laptop:[26,72],notebook:[18,77],poster:[13,68],window:[56,68],bag:[73,86],door:[88,70]};ui.move(...locations[id]);if(id==='phone')dossier();else if(['laptop','notebook','poster'].includes(id))clue(['laptop','notebook','poster'].indexOf(id));else if(id==='bag')support();else if(id==='door')puzzle();else ui.info('Dừng lại để lấy lại bình tĩnh','<p>Hít thở chậm. Em không phải quyết định ngay vì lời thúc giục hay đe dọa. Có thể đóng hồ sơ, tìm người đáng tin và quay lại khi sẵn sàng.</p>');}
  function puzzle(){if(!ready()){hint();return;}const s=level();if(s.completed){result();return;}const p=chapters[active].puzzle,count=p.kind==='multi'?1:3;if(s.puzzleStep>=count){s.completed=true;persist();result();return;}
    const step=s.puzzleStep,q=p.kind==='multi'?p:p.steps[step];
    let body=`<h2 id="modal-title">${p.title}</h2><div class="quiz-count">${p.kind==='multi'?'CHỌN ĐỦ HAI DẤU HIỆU':'BƯỚC '+(step+1)+' / 3'}</div><h3 class="quiz-question">${q.prompt}</h3>`;
    if(active===5)body+=`<ol class="action-track">${['Lưu bằng chứng','Chặn tài khoản','Báo cáo & kết nối hỗ trợ'].map((t,i)=>`<li class="${i<step?'done':''}">${i<step?'✓':'○'} ${t}</li>`).join('')}</ol>`;
    body+=note?`<div class="feedback warning" role="status">${note}</div>`:'';
    body+=`<div class="modal-actions">${q.options.map((t,i)=>ui.btn((p.kind==='multi'?(selected.includes(i)?'☑ ':'☐ '):'')+t,p.kind==='multi'?'jc-toggle':'jc-answer','choice-button',`data-id="${i}" ${p.kind==='multi'?`aria-pressed="${selected.includes(i)}"`:''}`)).join('')}${p.kind==='multi'?ui.btn('Xác nhận hai dấu hiệu','jc-check'):''}</div><p class="safety-note">Có thể thử lại. Lần trả lời chưa đúng làm giảm 2 điểm của bước đó, không khóa tiến trình.</p>`;
    ui.open('NHIỆM VỤ ÁP DỤNG · MÀN 0'+active,body,'journey-puzzle');
  }
  function answer(index){const s=level(),p=chapters[active].puzzle,k=s.puzzleStep,q=p.kind==='multi'?p:p.steps[k];if(!q)return;const correct=p.kind==='multi'?selected.length===q.correct.length&&q.correct.every(i=>selected.includes(i)):index===q.correct;
    if(!correct){if(!s.puzzleWrong.includes(k))s.puzzleWrong.push(k);note=q.explain;ui.emotion('?','đang cân nhắc lại');persist();puzzle();return;}
    s.puzzleStep++;selected=[];note='';ui.ping();persist();ui.emotion('✓','tự tin hơn');ui.open('ĐÃ THỰC HIỆN',`<h2 id="modal-title">✓ ${active===5?['Đã lưu bằng chứng','Đã chặn tài khoản','Đã báo cáo & kết nối hỗ trợ'][k]:'Đã mở chốt '+(k+1)}</h2><div class="feedback">${q.explain}</div><div class="modal-actions">${ui.btn(s.puzzleStep===(p.kind==='multi'?1:3)?'Hoàn thành màn · Xem kết quả':'Bước tiếp theo →','jc-puzzle')}</div>`,'journey-success');
  }
  function decisionReport(n){const d=chapters[n],s=level(n);return d.decisions.map((q,i)=>{const c=q.choices[s.choices[i]];return c?`<li><strong>${q.question}</strong><p>Đã chọn: ${c[0]}</p><p>${c[1]===15?'✓ Đã thể hiện cách ứng phó an toàn.':(s.adjusted[i]?'✓ Đã điều chỉnh sau phản hồi. ':'Cần luyện thêm: ')+c[2]}</p></li>`:'';}).join('');}
  function result(){const d=chapters[active];ui.open('HOÀN THÀNH MÀN 0'+active,`<div class="result-center"><img class="result-emblem" src="assets/shield.svg" alt="Huy hiệu an toàn"><h2 id="modal-title">${d.title}</h2><div class="result-score">${total(active)}<small> / 100</small></div></div><div class="feedback">${d.lesson}</div><ul class="learning-list decision-report">${decisionReport(active)}</ul><p class="modal-copy">${d.next}</p><div class="modal-actions">${ui.btn(active<5?'Tiếp tục màn '+(active+1)+' →':'Xem báo cáo toàn hành trình','jc-next')}${ui.btn('Xem lại không gian vừa khám phá','close','secondary-button')}</div>`,'journey-result');}
  function report(){const l1=ui.level1(),done=[l1.completed,...[2,3,4,5].map(n=>level(n).completed)].filter(Boolean).length;const average=Math.round([1,2,3,4,5].reduce((a,n)=>a+total(n),0)/5);let body=`<div class="result-center"><img class="result-emblem" src="assets/shield.svg" alt="Huy hiệu hành trình"><h2 id="modal-title">${done===5?'Minh đã tìm được lối thoát an toàn.':'Báo cáo hành trình đang học'}</h2><p>Đã hoàn thành ${done} / 5 màn</p><div class="result-score">${average}<small> / 100</small></div><p class="safety-note">Điểm toàn hành trình = trung bình điểm 5 màn (màn chưa chơi tính 0). Đây là điểm luyện tập, không phải chẩn đoán năng lực.</p></div>`;
    body+=`<div class="modal-card"><h3>Màn 1 · Lời mời bí ẩn · ${total(1)}/100</h3><ul class="learning-list"><li>${l1.reply==='safe'?'✓ Biết kiểm chứng lời mời.':l1.reply?'Cần kiểm chứng qua kênh chính thức thay vì chỉ hỏi người lạ hoặc nhận ngay.':'Chưa có lựa chọn lời mời.'}</li><li>${l1.dataReply==='refuse'?'✓ Đã từ chối cung cấp thông tin và OTP.':l1.dataReply?'Cần giữ kín thông tin, OTP và tìm người lớn hỗ trợ.':'Chưa có lựa chọn về dữ liệu.'}</li><li>${l1.quizWrong.length?'Đã cần phản hồi để sửa câu đố: '+l1.quizWrong.map(i=>i+1).join(', ')+'.':'Chưa có câu đố trả lời sai được ghi nhận.'}</li></ul></div>`;
    for(let n=2;n<=5;n++){const s=level(n);body+=`<div class="modal-card"><h3>Màn ${n} · ${chapters[n].title} · ${total(n)}/100</h3><p class="safety-note">${s.completed?'Đã hoàn thành':unlocked(n)?'Đang mở · chưa hoàn thành':'Chưa mở khóa'}</p><ul class="learning-list decision-report">${decisionReport(n)||'<li>Chưa ghi nhận quyết định.</li>'}</ul><p class="safety-note">${s.puzzleWrong.length?'Đã luyện lại bước: '+s.puzzleWrong.map(i=>i+1).join(', '):'Chưa có bước nhiệm vụ trả lời sai được ghi nhận.'}</p></div>`;}
    body+=`<div class="feedback">Em luôn có quyền dừng lại, đổi ý và tìm trợ giúp. Không ai phải tự chịu đe dọa một mình. Không đổ lỗi cho người bị thao túng.</div><div class="modal-actions">${ui.btn('Trở về hành trình','close')}${ui.btn('Chơi lại toàn bộ hành trình','restart','secondary-button')}</div>`;ui.open('ĐIỂM · LỰA CHỌN · BÀI HỌC',body,'journey-report');}
  function handle(a,id){if(a==='jc-next'){if(active===1)enter(2);else if(active<5)enter(active+1);else report();return true;}if(!a.startsWith('jc-'))return false;if(active===1)return true;const s=level();
    if(a==='jc-collect'){const i=Number(id);if(i>=0&&i<3&&!s.clues.includes(i)){s.clues.push(i);ui.ping();persist();ui.toast('+15 điểm · Đã ghi nhận manh mối');}clue(i);}
    else if(a==='jc-choice'){const [i,j]=id.split(':').map(Number);if(i>=0&&i<2&&j>=0&&j<3&&!Number.isInteger(s.choices[i])&&(i===0||Number.isInteger(s.choices[0]))){s.choices[i]=j;ui.ping();persist();}dossier();}
    else if(a==='jc-adjust'){const i=Number(id);if(Number.isInteger(s.choices[i])&&s.choices[i]!==0){s.adjusted[i]=true;persist();ui.toast('Đã luyện cách ứng phó an toàn hơn.');}dossier();}
    else if(a==='jc-puzzle')puzzle();
    else if(a==='jc-toggle'){const i=Number(id);selected=selected.includes(i)?selected.filter(v=>v!==i):[...selected,i];note='';puzzle();}
    else if(a==='jc-check')answer();
    else if(a==='jc-answer')answer(Number(id));
    return true;
  }
  function inventory(b){if(active===1)return false;const i=Number(b.dataset.jclue);if(Number.isInteger(i)&&i>=0&&i<3){if(level().clues.includes(i))clue(i);else ui.info('Manh mối chưa tìm thấy',`<p>Khám phá “Dữ kiện 0${i+1}” trong không gian hiện tại.</p>`);}return true;}
  return {get active(){return active;},render,enter,object,hint,puzzle,handle,inventory,report,reset(){active=1;levels={};selected=[];note='';persist();}};
};
