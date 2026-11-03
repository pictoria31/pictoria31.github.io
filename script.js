(()=>{'use strict';
  const cfg=window.PICTORIA_CONFIG||{};
  const $=(q,c=document)=>c.querySelector(q); const $$=(q,c=document)=>[...c.querySelectorAll(q)];
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang='ko';
  try {lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('pictoria-language')||'ko'} catch(_){lang='ko'}
  if(!['ko','en'].includes(lang))lang='ko';
  function setLang(next){lang=next;document.documentElement.lang=next;
    $$('[data-ko][data-en]').forEach(el=>{el.textContent=el.dataset[next]});
    const toggle=$('#lang-toggle'); if(toggle){toggle.textContent=next==='ko'?'EN':'KR';toggle.setAttribute('aria-label',next==='ko'?'Switch to English':'한국어로 전환')}
    const menu=$('#menu-toggle');if(menu)menu.setAttribute('aria-label',next==='ko'?'메뉴 열기':'Open menu');
    if(document.body.dataset.page==='support')document.title=(next==='ko'?'고객지원':'Support')+' | PICTORIA';
    else if(document.body.dataset.page==='privacy')document.title=(next==='ko'?'개인정보 안내':'Privacy Notice')+' | PICTORIA';
    else if(document.body.dataset.page==='game-privacy')document.title=(next==='ko'?'게임별 개인정보처리방침':'Game Privacy Policies')+' | PICTORIA';
    else document.title='PICTORIA — Stories Come Alive';
    try{localStorage.setItem('pictoria-language',next)}catch(_){ }
  }
  setLang(lang);
  $('#lang-toggle')?.addEventListener('click',()=>setLang(lang==='ko'?'en':'ko'));
  const header=$('#site-header'),topButton=document.createElement('button');
  topButton.className='to-top';topButton.type='button';topButton.setAttribute('aria-label','Back to top');
  topButton.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>';
  document.body.appendChild(topButton);topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduceMotion?'instant':'smooth'}));
  const progress=$('.scroll-progress');let ticking=false;
  function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=window.scrollY, max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    if(header)header.classList.toggle('scrolled',y>30);if(progress)progress.style.width=(Math.min(100,(y/max)*100))+'%';topButton.classList.toggle('visible',y>700);ticking=false})}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  const menu=$('#menu-toggle');
  function closeMenu(){document.body.classList.remove('nav-open');menu?.setAttribute('aria-expanded','false')}
  menu?.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open');menu.setAttribute('aria-expanded',String(open))});
  $$('#primary-nav a').forEach(a=>a.addEventListener('click',closeMenu));
  window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  window.addEventListener('resize',()=>{if(innerWidth>800)closeMenu()},{passive:true});
  if('IntersectionObserver' in window&&!reduceMotion){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.075,rootMargin:'0px 0px 45px 0px'});$$('.reveal').forEach(el=>observer.observe(el))}else{$$('.reveal').forEach(el=>el.classList.add('visible'))}
  const stars=$('#starfield');if(stars&&!reduceMotion){let seed=19239;const rand=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
    for(let i=0;i<72;i++){const el=document.createElement('i');el.className='star';el.style.left=rand()*100+'%';el.style.top=rand()*100+'%';el.style.width=el.style.height=(rand()*2+1)+'px';el.style.opacity=String(rand()*.55+.2);el.style.animationDelay=(-rand()*5)+'s';el.style.setProperty('--dur',(rand()*4+2.4)+'s');stars.appendChild(el)}
  }
  const showcase=$('#game-showcase'),empty=$('#empty-games');
  $$('.game-tab').forEach(tab=>tab.addEventListener('click',()=>{const filter=tab.dataset.filter;let visible=0;
    $$('.game-tab').forEach(t=>{const on=t===tab;t.classList.toggle('active',on);t.setAttribute('aria-pressed',String(on))});
    $$('.game-card').forEach(card=>{const show=filter==='all'||card.dataset.status===filter;card.hidden=!show;if(show)visible++});
    if(showcase){showcase.hidden=visible===0;showcase.classList.toggle('is-single',visible===1)}
    if(empty)empty.hidden=visible!==0;
  }));
  const dialog=$('#rebloom-modal');
  $$('[data-open-modal="rebloom"]').forEach(btn=>btn.addEventListener('click',()=>{if(dialog?.showModal){dialog.showModal();document.body.classList.add('modal-open')}else if(dialog){dialog.setAttribute('open','')}}));
  $$('[data-close-modal]').forEach(btn=>btn.addEventListener('click',()=>dialog?.close()));
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  dialog?.addEventListener('close',()=>document.body.classList.remove('modal-open'));
  const toast=document.createElement('div');toast.className='toast';toast.role='status';toast.setAttribute('aria-live','polite');document.body.appendChild(toast);let toastTimer;
  function notify(ko,en){toast.textContent=lang==='ko'?ko:en;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4000)}
  $$('[data-email-link]').forEach(a=>{const type=a.dataset.emailLink;const email=(type==='business'?cfg.businessEmail:cfg.supportEmail)||'';
    if(email){const subject=type==='business'?'Pictoria Business Inquiry':'Pictoria Player Support';a.href='mailto:'+encodeURIComponent(email)+'?subject='+encodeURIComponent(subject)}
    else{a.href='support.html'+(type==='business'?'#business':'#player')}
  });
  $$('[data-email-display]').forEach(el=>{const type=el.dataset.emailDisplay;const email=(type==='business'?cfg.businessEmail:cfg.supportEmail)||'';
    if(email){el.textContent=email;el.href='mailto:'+email;el.removeAttribute('aria-disabled')}
    else{el.textContent=lang==='ko'?'이메일 등록 예정':'Email address coming soon';el.removeAttribute('href');el.setAttribute('aria-disabled','true');el.dataset.ko='이메일 등록 예정';el.dataset.en='Email address coming soon'}
  });
  $$('[data-email-action]').forEach(a=>{const type=a.dataset.emailAction;const email=(type==='business'?cfg.businessEmail:cfg.supportEmail)||'';
    if(email){a.href='mailto:'+email+'?subject='+encodeURIComponent(type==='business'?'Pictoria Business Inquiry':'Pictoria Player Support')}
    else{a.addEventListener('click',e=>{e.preventDefault();notify('현재 공식 문의 이메일을 준비하고 있습니다.','Our official contact email will be published soon.');})}
  });
  const year=$('#year');if(year)year.textContent=String(new Date().getFullYear());
})();
