(function(){
  const el = document.getElementById('timeline');
  const lb = document.getElementById('lightbox');
  const lbBody = lb.querySelector('.lightbox-body');
  const lbClose = lb.querySelector('.lightbox-close');

  function itemTpl(item){
    const media = (item.media||[]).map(m => {
      if(m.type==='img'){
        return `<img class="img" src="${m.src}" alt="${item.title}" data-view="img">`;
      }else if(m.type==='yt'){
        // Thumbnail click to open lightbox (avoid heavy iframes list)
        return `<div class="img" data-view="yt" data-src="${m.src}" style="display:grid;place-items:center;background:#000">
                  <span style="font-weight:900;letter-spacing:.08em">PLAY ▶</span>
                </div>`;
      }
      return '';
    }).join('');

    return `<div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-head">
          <span class="tl-date">${item.date}</span>
          <strong class="tl-title">${item.title}</strong>
        </div>
        ${ item.note ? `<p class="tl-note">${item.note}</p>` : ''}
        <div class="media">${media}</div>
      </div>
    </div>`;
  }

  function render(){
    el.innerHTML = (ROAD_TO_FINAL||[]).map(itemTpl).join('');
  }

  function openLightbox(html){
    lbBody.innerHTML = html;
    lb.hidden = false;
    document.body.style.overflow='hidden';
  }
  function closeLightbox(){
    lb.hidden = true;
    lbBody.innerHTML = '';
    document.body.style.overflow='';
  }

  el.addEventListener('click', (e) => {
    const target = e.target.closest('[data-view]');
    if(!target) return;
    const type = target.dataset.view;
    if(type==='img'){
      openLightbox(`<img src="${target.src}" alt="">`);
    }else if(type==='yt'){
      const src = target.dataset.src;
      // Allow fullscreen
      openLightbox(`<iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Video"></iframe>`);
    }
  });
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if(e.target===lb) closeLightbox(); });

  render();
})();