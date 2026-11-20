(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const toast = $('#toast');
  let toastTimer = null;
  let hasStartedReview = false;

  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  function addHistory(title, detail) {
    const timeline = $('#timeline');
    if (!timeline) return;
    const item = document.createElement('li');
    const heading = document.createElement('b');
    const note = document.createElement('small');
    heading.textContent = title;
    note.textContent = detail;
    item.append(heading, note);
    timeline.append(item);
  }

  // Tabs are local navigation only; no data is read from a server.
  $$('.tab').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      $$('.tab').forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      $$('.tab-panel').forEach((panel) => {
        const active = panel.id === `tab-${target}`;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });

  // Role selection only changes the explanatory text; it is not access control.
  const roleMessages = {
    operador: 'Vista de ejemplo: información contextual del activo y opciones de observación.',
    mantenimiento: 'Vista de ejemplo: antecedentes, documentos pendientes y contexto de una observación.',
    gerencia: 'Vista de ejemplo: estado general, brechas identificadas y prioridades por atender.',
    auditor: 'Vista de ejemplo: fuente, evidencia y estado de revisión de los datos asociados.'
  };
  $$('.role-button[data-role]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.role-button[data-role]').forEach((item) => item.classList.toggle('is-active', item === button));
      notify(roleMessages[button.dataset.role] || 'Vista de demostración seleccionada.');
    });
  });

  $('#simulate-scan')?.addEventListener('click', () => {
    notify('Simulación: QR-HP600-01 vinculado al activo GMD-DEMO-001. No se abrió la cámara del dispositivo.');
    addHistory('Escaneo QR simulado', 'QR-HP600-01 · acción local de demostración.');
  });

  $('#start-review')?.addEventListener('click', () => {
    hasStartedReview = true;
    $('#review-start').hidden = true;
    $('#review-flow').hidden = false;
    addHistory('Revisión iniciada (demo)', 'Se abrió un flujo de captura ilustrativo en este navegador.');
  });

  $$('.observation-choice').forEach((button) => {
    button.addEventListener('click', () => {
      $('#selected-observation').hidden = false;
      $('#observation-text').textContent = button.dataset.observation || '';
      addHistory('Observación seleccionada (demo)', button.dataset.observation || '');
    });
  });

  $('#escalate-event')?.addEventListener('click', () => {
    addHistory('Escalamiento simulado', 'La observación se muestra como antecedente de mantenimiento; no se envió ninguna notificación.');
    notify('Simulación local: la observación quedó agregada al historial visible de esta sesión.');
  });

  $('#reset-demo')?.addEventListener('click', () => {
    window.location.reload();
  });
})();
