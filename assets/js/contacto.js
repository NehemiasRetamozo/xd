// ========== DRAWER (menú móvil) ==========
const drawer   = document.getElementById('drawer');
const scrim    = document.getElementById('scrim');
const btnMenu  = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');

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
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

// ========== BOT FLOTANTE ==========
const botFloat      = document.getElementById('botFloat');
const botPanel      = document.getElementById('botPanel');
const botPanelClose = document.getElementById('botPanelClose');

botFloat?.addEventListener('click', () => {
  botPanel?.classList.add('open');
});

botPanelClose?.addEventListener('click', () => {
  botPanel?.classList.remove('open');
});

// ========== FORMULARIO DE CONTACTO ==========
const form = document.getElementById('contactForm');
const msg  = document.getElementById('formMessage');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!msg) return;

  msg.textContent = '';
  msg.className = 'form-message';

  const data = {
    nombre:   form.nombre.value.trim(),
    email:    form.email.value.trim(),
    telefono: form.telefono.value.trim(),
    asunto:   form.asunto.value.trim(),
    mensaje:  form.mensaje.value.trim()
  };

  if (!data.nombre || !data.email || !data.asunto || !data.mensaje) {
    msg.textContent = 'Por favor completa todos los campos obligatorios.';
    msg.classList.add('error');
    return;
  }

  try {
    const res = await fetch('http://localhost:3001/api/contacto', {
      // si en app.js usas puerto 3000, cambia 3001 por 3000
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    console.log('Respuesta backend (status):', res.status);

    if (!res.ok) {
      console.error('Respuesta NO OK del backend:', res.status);
      msg.textContent = 'Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.';
      msg.classList.add('error');
      return;
    }

    const json = await res.json();
    console.log('Respuesta backend JSON:', json);

    if (json.ok) {
      msg.textContent = 'Gracias por contactarnos. Nos pondremos en contacto con usted en breve.';
      msg.classList.add('ok');
      form.reset();
    } else {
      msg.textContent = 'No se pudo enviar el mensaje. Inténtalo nuevamente.';
      msg.classList.add('error');
    }
  } catch (error) {
    console.error('Error en el envío del formulario:', error);
    msg.textContent = 'Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.';
    msg.classList.add('error');
  }
});
