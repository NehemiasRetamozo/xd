// JS específico para index.html (ejemplo)

// JS de navegación (drawer móvil)
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');
const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const btnSub = document.getElementById('btnSub');
const sub = document.getElementById('sub');

const openDrawer = () => {
  drawer?.classList.add('open');
  scrim?.classList.add('open');
};

const closeDrawer = () => {
  drawer?.classList.remove('open');
  scrim?.classList.remove('open');
};

btnMenu?.addEventListener('click', openDrawer);
btnClose?.addEventListener('click', closeDrawer);
scrim?.addEventListener('click', closeDrawer);
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
btnSub?.addEventListener('click', () => sub?.classList.toggle('open'));

// JS del video modal
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const videoClose = document.getElementById('videoClose');
const videoPlayBtn = document.querySelector('.asus-video-play');
const videoCover = document.querySelector('.asus-video-cover');

const openVideo = (url) => {
  if (!videoModal || !videoFrame) return;
  videoFrame.src = url + '?autoplay=1&rel=0';
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
};

const closeVideo = () => {
  if (!videoModal || !videoFrame) return;
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  videoFrame.src = '';
};

videoPlayBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const url = videoPlayBtn.dataset.video;
  openVideo(url);
});

videoCover?.addEventListener('click', (e) => {
  if (e.target.closest('.asus-video-play')) return;
  const url = videoPlayBtn?.dataset.video;
  if (url) openVideo(url);
});

videoClose?.addEventListener('click', (e) => {
  e.preventDefault();
  closeVideo();
});

videoModal?.addEventListener('click', (e) => {
  if (e.target === videoModal || e.target.classList.contains('video-modal__backdrop')) {
    closeVideo();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideo();
  }
});
