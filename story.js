'use strict';
(() => {
 const examples=window.PHYSCAP_EVENT_EXAMPLES,root=document.querySelector('.event-showcase');
 if(!root||!examples)return;
 const stages=root.querySelector('.domain-stages'),globalToggle=root.querySelector('#demo-motion');
 let paused=false,visible=false;const controllers=[];
 function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
 examples.forEach((example,domainIndex)=>{
  const records=example.events,card=el('article','domain-stage');card.dataset.domain=example.id;card.setAttribute('aria-label',`${example.label} event demo`);
  const heading=el('header','stage-header'),eyebrow=el('div','stage-eyebrow',example.level),title=el('h4','',example.label),subtitle=el('p','stage-subtitle',example.id==='third'?'Wire × droplet':example.id==='ego'?'Hands × bottle':'Grippers × textile');
  heading.append(eyebrow,title,subtitle);card.append(heading);
  const grid=el('div','stage-clips stage-card-deck');grid.setAttribute('aria-label',`${example.label}: six event cards`);let selected=domainIndex*2,timer,raiseTimer,returnTimer,rotationPaused=false;
  const clips=records.map((record,i)=>{
   const button=el('button','stage-clip');button.type='button';button.style.setProperty('--column',i%3);button.style.setProperty('--row',Math.floor(i/3));button.title=record.name;button.setAttribute('aria-label',`${example.label}: ${record.name} annotation`);
   const img=el('img');img.src=`assets/events/${record.media}.gif`;img.width=480;img.height=270;img.alt=record.evidence;
   const label=el('span','clip-label');label.append(el('small','',String(i+1).padStart(2,'0')),document.createTextNode(record.name));button.append(img,label);button.addEventListener('click',()=>{select(i);schedule()});grid.append(button);return button;
  });card.append(grid);
  const recordPanel=el('section','stage-record');recordPanel.setAttribute('aria-label',`${example.label} physical event annotation`);
  const recordHead=el('div','record-heading');recordHead.append(el('span','','EVENT RECORD'));const activeName=el('strong');recordHead.append(activeName);
  const progress=el('span'),track=el('div','stage-progress');track.setAttribute('aria-hidden','true');track.append(progress);
  const fields=el('dl','stage-fields');recordPanel.append(recordHead,track,fields);
  const controls=el('div','stage-controls');
  const prev=el('button','','←'),next=el('button','','→'),auto=el('button','stage-auto','Ⅱ'),counter=el('span','stage-counter');
  [prev,next,auto].forEach(b=>b.type='button');prev.setAttribute('aria-label',`${example.label}: previous event`);next.setAttribute('aria-label',`${example.label}: next event`);auto.setAttribute('aria-label',`${example.label}: pause annotations`);auto.setAttribute('aria-pressed','false');
  prev.addEventListener('click',()=>{select(selected-1);schedule()});next.addEventListener('click',()=>{select(selected+1);schedule()});auto.addEventListener('click',()=>{rotationPaused=!rotationPaused;auto.textContent=rotationPaused?'▶':'Ⅱ';auto.setAttribute('aria-pressed',String(rotationPaused));auto.setAttribute('aria-label',`${example.label}: ${rotationPaused?'resume':'pause'} annotations`);schedule()});
  controls.append(prev,counter,next,auto);recordPanel.append(controls);card.append(recordPanel);
  const details=el('details','stage-source');details.append(el('summary','','Physical caption & source ↗'));details.append(el('p','stage-caption',example.caption),el('p','stage-note',example.note));const source=el('a','',example.id==='umi'?'Watch all three camera views ↗':'Watch source video ↗');source.href=example.source;source.target='_blank';source.rel='noopener';details.append(source);card.append(details);stages.append(card);
  function select(index){selected=(index+records.length)%records.length;const r=records[selected];activeName.textContent=`${String(selected+1).padStart(2,'0')} / ${r.name}`;bringForward();fields.replaceChildren();for(const key of ['actor','motion','target','contact','state','order','interval','evidence'])fields.append(el('dt','',key),el('dd','',r[key]));clips.forEach((c,i)=>{c.classList.toggle('is-active',i===selected);c.setAttribute('aria-pressed',String(i===selected))});counter.textContent=`${selected+1} / ${records.length}`;}
  function bringForward(){
   clearTimeout(raiseTimer);clearTimeout(returnTimer);
   clips.forEach(c=>{c.classList.toggle('is-returning',c.classList.contains('is-front'));c.classList.remove('is-front')});
   returnTimer=setTimeout(()=>clips.forEach(c=>c.classList.remove('is-returning')),500);
   raiseTimer=setTimeout(()=>clips[selected].classList.add('is-front'),950);
  }
  function schedule(){
   clearTimeout(timer);progress.style.animation='none';
   if(paused||rotationPaused||!visible||document.hidden)return;
   void progress.offsetWidth;
   const duration=Math.max(4000,records[selected].replayMs||4000);
   progress.style.animation=`annotationCountdown ${duration}ms linear 1600ms forwards`;
   timer=setTimeout(()=>{select(selected+1);schedule()},duration+1600);
  }
  function motion(){clips.forEach((clip,i)=>{clip.querySelector('img').src=`assets/events/${records[i].media}.${paused?'jpg':'gif'}`});schedule()}
  select(selected);controllers.push({schedule,motion});
 });
 globalToggle.addEventListener('click',()=>{paused=!paused;root.classList.toggle('is-paused',paused);globalToggle.textContent=paused?'▶ Play demo':'Ⅱ Pause demo';globalToggle.setAttribute('aria-pressed',String(paused));controllers.forEach(c=>c.motion())});
 new IntersectionObserver(entries=>{const next=entries[0].isIntersecting;if(next!==visible){visible=next;controllers.forEach(c=>c.schedule())}},{threshold:0}).observe(root);
 document.addEventListener('visibilitychange',()=>controllers.forEach(c=>c.schedule()));
 root.addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;const rect=root.getBoundingClientRect();root.style.setProperty('--glow-x',`${event.clientX-rect.left}px`);root.style.setProperty('--glow-y',`${event.clientY-rect.top}px`)});
})();

(() => {
 const ruler=document.querySelector('.ruler-spectrum');if(!ruler)return;
 ruler.addEventListener('pointermove',event=>{const rect=ruler.getBoundingClientRect();const x=Math.max(18,Math.min(rect.width-18,event.clientX-rect.left));ruler.style.setProperty('--ruler-x',`${x}px`);ruler.style.setProperty('--ruler-light','1')});
 ruler.addEventListener('pointerleave',()=>ruler.style.setProperty('--ruler-light','0'));
})();
