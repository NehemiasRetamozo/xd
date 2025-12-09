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
