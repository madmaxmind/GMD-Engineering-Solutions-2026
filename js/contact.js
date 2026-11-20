(() => {
  const config = window.GMD_CONFIG || {};
  const contact = config.contact || {};
  const waNumber = contact.whatsappNumber || '524444148560';
  const defaultMessage = 'Hola GMD, quiero conversar sobre una necesidad de ingeniería.';
  const waUrl = (message) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  const mainWhatsApp = document.getElementById('whatsapp-main');
  if (mainWhatsApp) mainWhatsApp.href = waUrl(defaultMessage);

  const emailMain = document.getElementById('email-main');
  const emailDetail = document.getElementById('email-detail');
  if (contact.email) {
    if (emailMain) emailMain.href = `mailto:${contact.email}`;
    if (emailDetail) {
      emailDetail.href = `mailto:${contact.email}`;
      emailDetail.textContent = contact.email;
    }
  }

  const phoneLink = document.getElementById('phone-link');
  if (phoneLink) {
    phoneLink.href = `tel:${contact.phoneE164 || '+524444148560'}`;
    phoneLink.textContent = contact.phoneDisplay || '+52 444 414 8560';
  }

  const bookingLink = document.getElementById('booking-link');
  const bookingStatus = document.getElementById('booking-status');
  if (bookingLink) {
    if (config.bookingUrl && /^https:\/\//i.test(config.bookingUrl)) {
      bookingLink.href = config.bookingUrl;
      bookingLink.target = '_blank';
      bookingLink.rel = 'noopener';
      bookingLink.innerHTML = 'Elegir fecha y hora <span aria-hidden="true">↗</span>';
      if (bookingStatus) bookingStatus.textContent = 'Consulta la disponibilidad publicada y selecciona el horario que te funcione.';
    } else {
      bookingLink.href = waUrl('Hola GMD, quiero coordinar una reunión para revisar una necesidad técnica.');
      bookingLink.target = '_blank';
      bookingLink.rel = 'noopener';
      bookingLink.innerHTML = 'Solicitar una fecha <span aria-hidden="true">→</span>';
      if (bookingStatus) bookingStatus.textContent = 'La agenda automática todavía no está conectada. Solicita una fecha por WhatsApp y confirma directamente con GMD.';
    }
  }
})();
