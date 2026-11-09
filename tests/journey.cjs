const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base=process.env.BASE_URL||'http://127.0.0.1:8080';
const artifacts=process.env.ARTIFACT_DIR||'/tmp/escape-tests';fs.mkdirSync(artifacts,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const failures=[];let originalSave;
 const watch=p=>{p.on('pageerror',e=>failures.push(e.message));p.on('response',r=>{if(r.status()>=400)failures.push(r.status()+' '+r.url());});p.on('request',r=>{if(!r.url().startsWith(base))failures.push('External: '+r.url());});};
 const page=await browser.newPage({viewport:{width:1440,height:1050}});watch(page);await page.goto(base);
 const click=(p,a,id)=>p.locator(`[data-action="${a}"]${id===undefined?'':`[data-id="${id}"]`}`).click();
 const close=p=>p.locator('#close-modal').click();
 await page.locator('[data-stage="5"]').click();assert.match(await page.locator('#modal-title').innerText(),/chưa mở/);await close(page);
 await page.locator('#open-phone').click();await click(page,'reply','safe');await click(page,'collect','private');await click(page,'data-reply','refuse');await click(page,'phone-tab','profile');await click(page,'collect','profile');await click(page,'phone-tab','offer');await click(page,'collect','link');await close(page);await page.locator('#final-puzzle').click();
 for(const [i,answer] of [0,1,2].entries()){await click(page,'answer',answer);await click(page,i===2?'complete':'next-quiz');}
 originalSave=await page.evaluate(()=>localStorage.getItem('thoat-hiem-so.level1.v1'));
 await click(page,'jc-next');assert.match(await page.locator('h1').innerText(),/Chiếc bẫy/);
 async function finishChapter(p,n,choice=0,wrong=false,reload=false){
  assert(await p.locator('#final-puzzle').isDisabled());await p.locator('#open-phone').click();await click(p,'jc-choice',`0:${choice}`);
  if(reload){await p.reload();assert.match(await p.locator('h1').innerText(),new RegExp({2:'Chiếc bẫy',3:'Bí mật',4:'Ranh giới',5:'Lối thoát'}[n]));await p.locator('#open-phone').click();assert.match(await p.locator('#modal-body').innerText(),/Đã chọn|điểm lần đầu/);}
  if(choice!==0){await click(p,'jc-adjust','0');assert.match(await p.locator('#modal-body').innerText(),/Đã luyện lại/);}
  await click(p,'jc-choice',`1:${choice}`);if(choice!==0)await click(p,'jc-adjust','1');await close(p);
  for(const [i,id] of ['laptop','notebook','poster'].entries()){await p.locator(`[data-object="${id}"]`).click();await click(p,'jc-collect',i);const score=await p.locator('#score').innerText();await close(p);await p.locator(`[data-object="${id}"]`).click();assert.equal(await p.locator('[data-action="jc-collect"]').count(),0);assert.equal(await p.locator('#score').innerText(),score);await close(p);}
  await p.locator('[data-object="bag"]').click();assert.match(await p.locator('#modal-body').innerText(),/Lan|Giáo viên/);await close(p);assert(await p.locator('#final-puzzle').isEnabled());
  if(choice===0)await p.screenshot({path:`${artifacts}/chapter-${n}.png`,fullPage:true});
  await p.locator('#final-puzzle').click();
  if(n===2){
   if(wrong){await click(p,'jc-toggle',1);await click(p,'jc-check');assert.match(await p.locator('.feedback').innerText(),/Mắc nợ/);await click(p,'jc-toggle',1);}
   await click(p,'jc-toggle',0);assert.equal(await p.locator('[data-action="jc-toggle"][data-id="0"]').getAttribute('aria-pressed'),'true');await click(p,'jc-toggle',2);await click(p,'jc-check');await click(p,'jc-puzzle');
  }else{
   const answers={3:[0,1,0],4:[0,1,1],5:[1,0,0]}[n];
   for(let i=0;i<3;i++){
    if(wrong){await click(p,'jc-answer',1-answers[i]);assert(await p.locator('.feedback.warning').isVisible());}
    await click(p,'jc-answer',answers[i]);
    if(reload&&n===5&&i===0){await p.reload();await p.locator('#final-puzzle').click();assert.match(await p.locator('.quiz-count').innerText(),/2 \/ 3/);}
    else await click(p,'jc-puzzle');
   }
  }
  const expected=45+5+(choice===0?30:choice===1?10:0)+20-(wrong?(n===2?2:6):0);assert.equal(await p.locator('#score').innerText(),String(expected));assert.equal(await p.locator('#progress-text').innerText(),'5 / 5');
  await click(p,'jc-next');
 }
 for(let n=2;n<=5;n++)await finishChapter(page,n,0,false,true);
 assert.match(await page.locator('#modal-title').innerText(),/Minh đã tìm được/);assert.equal(await page.locator('.result-score').innerText(),'100 / 100');assert.match(await page.locator('#journey-status').innerText(),/5 \/ 5/);await page.screenshot({path:`${artifacts}/journey-report.png`,fullPage:true});
 await close(page);await page.reload();assert.match(await page.locator('h1').innerText(),/Lối thoát/);await page.locator('#journey-report').click();assert.equal(await page.locator('.result-score').innerText(),'100 / 100');await close(page);
 await page.locator('[data-stage="1"]').click();assert.equal(await page.locator('#score').innerText(),'100');await page.locator('[data-stage="5"]').click();assert.equal(await page.locator('#score').innerText(),'100');
 await page.locator('#restart').click();await click(page,'close');assert.equal(await page.locator('#score').innerText(),'100');await page.locator('#restart').click();await click(page,'confirm-restart');assert.match(await page.locator('h1').innerText(),/Lời mời/);assert.equal(await page.locator('#score').innerText(),'0');assert.equal(await page.locator('#journey-status').innerText(),'HÀNH TRÌNH 0 / 5 MÀN');
 for(const choice of [1,2]){
  const p=await browser.newPage();watch(p);
  await p.addInitScript(saved=>{if(!localStorage.getItem('seeded')){localStorage.setItem('thoat-hiem-so.level1.v1',saved);localStorage.setItem('seeded','yes');}},originalSave);
  await p.goto(base);assert.equal(await p.locator('#score').innerText(),'100');await p.locator('[data-stage="2"]').click();
  for(let n=2;n<=5;n++)await finishChapter(p,n,choice,true,false);
  assert.match(await p.locator('#modal-body').innerText(),/Đã điều chỉnh sau phản hồi/);assert.match(await p.locator('#modal-body').innerText(),/Đã luyện lại bước/);await p.close();
 }
 const touch=await browser.newContext({viewport:{width:820,height:1180},hasTouch:true,isMobile:true});const t=await touch.newPage();watch(t);await t.addInitScript(saved=>localStorage.setItem('thoat-hiem-so.level1.v1',saved),originalSave);await t.goto(base);await t.locator('[data-stage="2"]').tap();await t.locator('#open-phone').tap();await t.locator('[data-action="jc-choice"][data-id="0:0"]').tap();await t.locator('#close-modal').tap();await t.screenshot({path:`${artifacts}/journey-touch.png`,fullPage:true});
 for(const width of [390,820,1024]){await t.setViewportSize({width,height:1000});assert(await t.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 const corrupt=await browser.newPage();watch(corrupt);await corrupt.addInitScript(()=>localStorage.setItem('thoat-hiem-so.journey.v2','{"version":2,"active":5,"levels":{}}'));await corrupt.goto(base);assert.match(await corrupt.locator('h1').innerText(),/Lời mời/);
 assert.deepEqual(failures,[]);console.log('PASS: actual UI 1→5, 100/100 report, every chapter dialogue option, corrective choices, all puzzle types, wrong/retry scoring, legacy save migration, locked stages, reload in chapter/puzzle/report, unique clue points, stage navigation, full reset/cancel, touch and narrow layouts; no runtime/network errors.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
