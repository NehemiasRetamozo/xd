// ===== Drawer / menú lateral =====
const drawer  = document.getElementById('drawer');
const scrim   = document.getElementById('scrim');
const btnMenu = document.getElementById('btnMenu');
const btnClose= document.getElementById('btnClose');

const openDrawer = () => {
  if (!drawer || !scrim) return;
  drawer.classList.add('open');
  scrim.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeDrawer = () => {
  if (!drawer || !scrim) return;
  drawer.classList.remove('open');
  scrim.classList.remove('open');
  document.body.style.overflow = '';
};

btnMenu?.addEventListener('click', openDrawer);
btnClose?.addEventListener('click', closeDrawer);
scrim?.addEventListener('click', closeDrawer);
drawer?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', closeDrawer)
);

// ===== GALERÍA con LOAD MORE =====
const grid    = document.getElementById('grid');
const btnMore = document.getElementById('btnMore');

// Seeds demo (cámbialos por tus URLs reales de Oml America)
const seeds = Array.from({ length: 200 }, (_, i) =>
  `https://picsum.photos/1200/800?seed=gal_${i + 1}`
);

let cursor = 0;
const CHUNK = 12; // cantidad de imágenes por click

function addTiles(n = CHUNK) {
  if (!grid || !btnMore) return;

  const frag = document.createDocumentFragment();

  for (let i = 0; i < n && cursor < seeds.length; i++, cursor++) {
    const tile = document.createElement('figure');
    tile.className = 'tile';

    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.src = seeds[cursor];

    tile.appendChild(img);
    frag.appendChild(tile);
  }

  grid.appendChild(frag);

  if (cursor >= seeds.length) {
    btnMore.style.display = 'none';
  }
}

// Primer bloque al cargar
addTiles();

// Click en "Cargar más"
btnMore?.addEventListener('click', () => addTiles());
