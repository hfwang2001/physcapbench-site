'use strict';
(() => {
  const wall=document.querySelector('#video-wall');
  if(!wall)return;
  const tiles=[...wall.querySelectorAll('.mosaic-tile')];
  const videos=tiles.map(tile=>tile.querySelector('video'));
  const toggle=wall.querySelector('#mosaic-toggle');
  const dialog=wall.querySelector('#clip-dialog');
  const player=wall.querySelector('#clip-player');
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let paused=motion.matches, visible=false, loadStarted=false, opener=null;
  function loadVideos(){
    if(loadStarted)return;
    loadStarted=true;
    videos.forEach(video=>{video.src=video.dataset.src;video.load()});
  }
  function update(){
    const playing=visible&&!paused&&!document.hidden&&!dialog.open;
    toggle.setAttribute('aria-pressed',String(paused));
    toggle.innerHTML=paused?'Play motion <span aria-hidden="true">▷</span>':'Pause motion <span aria-hidden="true">Ⅱ</span>';
    wall.classList.toggle('motion-paused',paused);
    if(playing)loadVideos();
    videos.forEach(video=>{
      if(playing)video.play().catch(()=>{});
      else video.pause();
    });
  }
  const observer=new IntersectionObserver(entries=>{
    visible=entries[0].isIntersecting;update();
  },{threshold:0.05});
  observer.observe(wall.querySelector('.mosaic-grid'));
  toggle.addEventListener('click',()=>{paused=!paused;update()});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)player.pause();update()});
  motion.addEventListener('change',e=>{paused=e.matches;update()});
  tiles.forEach(tile=>tile.addEventListener('click',()=>{
    opener=tile;
    wall.querySelector('#clip-title').textContent=tile.querySelector('strong').textContent;
    wall.querySelector('#clip-domain').textContent=tile.querySelector('small').textContent;
    player.poster=tile.querySelector('video').poster;
    player.src=tile.querySelector('video').dataset.src;
    dialog.showModal();
    update();
    player.play().catch(()=>{});
  }));
  wall.querySelector('#clip-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
  dialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load();update();opener?.focus({preventScroll:true})});
  update();
})();
