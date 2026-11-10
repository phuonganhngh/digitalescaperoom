const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base=process.env.BASE_URL||'http://127.0.0.1:8080';
const artifacts=process.env.ARTIFACT_DIR||'/tmp/escape-tests';fs.mkdirSync(artifacts,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
  const action=(a,id)=>p.locator(`[data-action="${a}"]${id===undefined?'':`[data-id="${id}"]`}`).click();
  const close=()=>p.locator('#close-modal').click();
  const guided=()=>p.locator('#modal[open]').count().then(open=>open?action('guide-next'):p.locator('#next-step-button').click());
  await p.goto(base);assert.match(await p.locator('#modal-title').innerText(),/Cùng Minh/);assert.equal(await p.locator('#score').innerText(),'0');assert.equal(await p.locator('.guide-steps li').count(),3);assert(await p.locator('[data-object="phone"]').evaluate(e=>e.classList.contains('guide-target')));
  await p.screenshot({path:`artifacts/guide-welcome.png`.replace('artifacts',artifacts),fullPage:true});
  await p.locator('.guide-details summary').click();assert.match(await p.locator('.guide-details').innerText(),/không bắt buộc/);await action('guide-start');assert.match(await p.locator('#modal-title').innerText(),/Tin nhắn/);assert.equal(await p.locator('#score').innerText(),'0');
  await action('reply','safe');await p.waitForFunction(()=>document.activeElement?.classList.contains('reply-feedback'));assert.match(await p.locator('#next-step-title').innerText(),/Lưu yêu cầu/);
  await guided();assert(await p.locator('[data-action="collect"][data-id="private"]').isVisible());assert.equal(await p.locator('#score').innerText(),'15');await action('collect','private');
  await guided();await action('data-reply','refuse');await p.waitForFunction(()=>document.activeElement?.classList.contains('data-feedback'));assert.match(await p.locator('#next-step-title').innerText(),/Kiểm tra/);
  await guided();assert.match(await p.locator('#modal-title').innerText(),/Kiểm tra hồ sơ/);await action('collect','profile');await guided();assert.match(await p.locator('#modal-title').innerText(),/phần thưởng/);await action('collect','link');assert.equal(await p.locator('#score').innerText(),'75');await guided();
  for(const [i,answer] of [0,1,2].entries()){await action('answer',answer);await action(i===2?'complete':'next-quiz');}assert.equal(await p.locator('#score').innerText(),'100');
  await action('jc-next');await p.reload();assert.equal(await p.locator('[data-action="guide-start"]').count(),0);assert.match(await p.locator('h1').innerText(),/Chiếc bẫy/);
  await p.locator('#how-to-play').click();assert.equal(await p.locator('[data-action="guide-start"]').innerText(),'Tiếp tục màn 2 →');await action('guide-start');assert.equal(await p.locator('#score').innerText(),'0');
  await action('jc-choice','0:2');await p.waitForFunction(()=>document.activeElement?.classList.contains('decision-feedback-0'));await guided();assert.equal(await p.locator('#score').innerText(),'0');await action('jc-choice','1:0');
  for(let i=0;i<3;i++){await guided();assert(await p.locator(`[data-object="${['laptop','notebook','poster'][i]}"]`).evaluate(e=>e.classList.contains('guide-target')));assert.match(await p.locator('#modal-body').innerText(),/Lưu manh mối/);await action('jc-collect',i);assert.equal(await p.locator('#score').innerText(),String(15+(i+1)*15));}
  assert(await p.locator('#final-puzzle').isDisabled());await guided();assert.match(await p.locator('#modal-body').innerText(),/Lan/);assert.equal(await p.locator('#score').innerText(),'65');assert(await p.locator('#final-puzzle').isEnabled());await guided();assert.match(await p.locator('#modal-body').innerText(),/Bấm chọn hai câu/);await action('jc-toggle',0);await action('jc-toggle',2);await action('jc-check');await action('jc-puzzle');assert.equal(await p.locator('#score').innerText(),'85');await close();
  // Xem hướng dẫn không sửa lượt chơi, điểm hoặc trạng thái nhiệm vụ.
  const before=await p.evaluate(()=>[localStorage.getItem('thoat-hiem-so.level1.v1'),localStorage.getItem('thoat-hiem-so.journey.v2')]);
  await p.locator('#how-to-play').click();await p.keyboard.press('Escape');const after=await p.evaluate(()=>[localStorage.getItem('thoat-hiem-so.level1.v1'),localStorage.getItem('thoat-hiem-so.journey.v2')]);assert.deepEqual(after,before);
  await p.locator('#restart').click();assert.equal(await p.locator('.dialog-next').count(),0);await action('close');
  await p.screenshot({path:`${artifacts}/guide-next-step.png`,fullPage:true});
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const t=await context.newPage();t.on('pageerror',e=>errors.push(e.message));await t.goto(base);assert(await t.locator('[data-action="guide-start"]').isVisible());await t.screenshot({path:`${artifacts}/guide-touch.png`,fullPage:true});await t.locator('[data-action="guide-start"]').tap();await t.locator('#close-modal').tap();assert(await t.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await t.locator('#how-to-play').tap();await t.locator('#close-modal').tap();await t.reload();assert.equal(await t.locator('[data-action="guide-start"]').count(),0);assert.equal(await t.locator('#score').innerText(),'0');
  assert.deepEqual(errors,[]);console.log('PASS: automatic first guide; detailed instructions; guided UI from level 1 through level 2; no auto-answers/auto-clues; contextual highlights; focus on new feedback; replay preserves progress; remembered dismissal; mobile touch; no runtime errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
