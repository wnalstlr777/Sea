"""Run server:dev and Vite on port 5173 with VITE_MULTIPLAYER_URL first.
Uses Python Playwright and system Chromium. Mobile is emulated, not a real device.
"""
from playwright.sync_api import sync_playwright

INSTRUMENT=r'''
window.__packets=[];window.__sent=[];window.__sockets=[];
const NativeSocket=WebSocket;
window.WebSocket=class extends NativeSocket{
 constructor(...args){super(...args);__sockets.push(this);this.addEventListener('message',e=>{try{__packets.push(JSON.parse(e.data));}catch{}});}
 send(data){try{const p=JSON.parse(data);if(p.type==='state')__sent.push({at:performance.now(),...p});}catch{}return super.send(data);}
};
'''
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
 contexts=[];pages=[];errors=[]
 try:
  for i in range(6):
   context=browser.new_context(viewport={'width':390 if i==1 else 640,'height':844 if i==1 else 480},is_mobile=i==1,has_touch=i==1,device_scale_factor=.25)
   contexts.append(context);context.add_init_script(INSTRUMENT)
   # Only the first two windows render; extra capacity clients need no GPU loop.

   page=context.new_page();pages.append(page)
   page.on('pageerror',lambda e:errors.append(str(e)))
   print('connecting browser',i+1,flush=True)
   page.goto('http://127.0.0.1:5173/',wait_until='commit')
   page.wait_for_function('!!window.oceanCruise',timeout=60000)
   if i<2:page.evaluate('oceanCruise.renderer.setPixelRatio(.25)')
   else:page.evaluate('oceanCruise.renderer.setAnimationLoop(null)')
   if i<5:
    page.wait_for_function("document.querySelector('.multiplayer-status').textContent.includes('함께 항해')")
    if i<2:
     page.locator('#cloud-cover').evaluate('e=>{e.value=0;e.dispatchEvent(new Event("input"));}')
     page.locator('#reflection-resolution').evaluate('e=>{e.value=64;e.dispatchEvent(new Event("change"));}')
   else:page.wait_for_function("document.querySelector('.multiplayer-status').textContent.includes('정원 초과')")
  first,second=pages[:2]
  snapshot=pages[4].evaluate('__packets.find(p=>p.type===\'welcome\').players')
  assert len(snapshot)==5 and len({p['id'] for p in snapshot})==5
  assert len({p['characterId'] for p in snapshot})<=2
  first.wait_for_function("oceanCruise.scene.children.filter(c=>c.name.startsWith('remote-')).length===4")
  assert first.locator('.player-name').count()==5
  first.wait_for_timeout(300);before=first.evaluate('__sent.length');first.wait_for_timeout(600)
  assert first.evaluate('__sent.length')==before,'idle state repeated'
  print('PASS 5 clients, duplicate characters, unique IDs, overhead names, sixth rejection, idle suppression',flush=True)
  first_id=first.evaluate('oceanCruise.player.userData.playerId')
  start=first.evaluate('oceanCruise.player.position.toArray()')
  first.keyboard.down('w')
  second.wait_for_function("arg=>{const p=oceanCruise.scene.getObjectByName('remote-'+arg.id);return p&&Math.hypot(p.position.x-arg.start[0],p.position.z-arg.start[2])>.1;}",arg={'id':first_id,'start':start},timeout=20000)
  first.keyboard.up('w')
  second.wait_for_function("id=>__packets.some(p=>p.type==='state'&&p.player.id===id&&!p.player.moving)",arg=first_id,timeout=20000)
  intervals=first.evaluate('__sent.slice(1).map((p,i)=>p.at-__sent[i].at)')
  assert all(dt>75 for dt in intervals),intervals
  print('PASS two real browser windows render movement/idle with <=10Hz updates',flush=True)
  # Exercise touch input in an emulated mobile browser and observe it on desktop.
  mobile_id=second.evaluate('oceanCruise.player.userData.playerId');start=second.evaluate('oceanCruise.player.position.toArray()')
  rect=second.locator('#joystick').bounding_box();session=second.context.new_cdp_session(second)
  session.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':rect['x']+rect['width']/2+26,'y':rect['y']+rect['height']/2}]})
  first.wait_for_function("arg=>{const p=oceanCruise.scene.getObjectByName('remote-'+arg.id);return p&&Math.hypot(p.position.x-arg.start[0],p.position.z-arg.start[2])>.1;}",arg={'id':mobile_id,'start':start},timeout=20000)
  session.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
  print('PASS emulated mobile touch movement is visible on desktop',flush=True)
  old=first.evaluate('oceanCruise.player.userData.playerId')
  first.evaluate('__sockets.at(-1).close(4000,"test reconnect")')
  first.wait_for_function("old=>oceanCruise.player.userData.playerId!==old&&document.querySelector('.multiplayer-status').textContent.includes('함께 항해')",arg=old,timeout=20000)
  second.wait_for_function("old=>!oceanCruise.scene.getObjectByName('remote-'+old)",arg=old)
  print('PASS automatic reconnect and stale-avatar removal',flush=True)
  contexts[1].close()
  first.wait_for_function("oceanCruise.scene.children.filter(c=>c.name.startsWith('remote-')).length===3")
  pages[5].get_by_role('button',name='다시 접속',exact=True).click()
  pages[5].wait_for_function("document.querySelector('.multiplayer-status').textContent.includes('함께 항해')")
  first.wait_for_function("oceanCruise.scene.children.filter(c=>c.name.startsWith('remote-')).length===4")
  print('PASS leave cleanup and full-room retry after a seat opens',flush=True)
  assert not errors,errors
 finally:
  for context in contexts:
   try:context.close()
   except Exception:pass
  browser.close()
