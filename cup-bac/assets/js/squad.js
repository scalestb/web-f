(function(){
  const grid = document.getElementById('squadGrid');
  const buttons = document.querySelectorAll('.filter-btn');

  function pad2(n){ return String(n).padStart(2,'0'); }
  function imgPath(no){ return `assets/images/players/${no}.png`; }

  function render(list){
    grid.innerHTML = list.map(p => {
      const file = p.img;
      return `
        <article class="player-card" data-pos="${p.pos}">
          <img class="player-img" src="${file}" alt="${p.name} - ${p.pos} - #${p.no}" onerror="this.style.opacity=.2">
          <div class="player-no">${p.no}</div>
          <div class="player-meta">
            <div class="player-row">
              <h3 class="player-name">${p.name}</h3>
              <span class="player-pos">${p.pos}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function applyFilter(pos){
    buttons.forEach(b => b.classList.toggle('active', b.dataset.pos===pos));
    if(pos==='ALL') return render(SQUAD);
    render(SQUAD.filter(p => p.pos===pos));
  }

  // Bind
  buttons.forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.pos)));

  // Initial (ALL) with 4-per-row handled by CSS grid
  render(SQUAD);
})();