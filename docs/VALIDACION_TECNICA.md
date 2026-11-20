# Validación técnica — GMD V2

## Comprobaciones realizadas en el paquete

- Estructura modular verificada.
- Rutas locales de CSS, JavaScript, logotipo, imagen conceptual y favicon verificadas.
- Enlaces internos a secciones comprobados contra los IDs del HTML.
- Sintaxis JavaScript revisada con `node --check` en los cuatro archivos JS.
- El sitio no requiere instalación, compilación ni dependencias npm.
- La demo Machine Passport se mantiene separada del sitio corporativo.
- El enlace de agenda no está fingido: sin `bookingUrl`, el botón dirige a coordinación por WhatsApp e informa que la agenda automática no está conectada.

## Pruebas que deben realizarse después de subir a GitHub Pages

1. Abrir la URL publicada en escritorio y en teléfono.
2. Confirmar que se cargan ambos logotipos, favicon e imagen conceptual.
3. Probar menú móvil y todos los enlaces internos.
4. Abrir `/demo/machine-passport/` y probar pestañas, selección de perfil, simulación QR, revisión y reinicio.
5. Probar WhatsApp, correo y teléfono desde un dispositivo móvil.
6. Cuando se configure una URL pública de agenda, probar selección y confirmación de cita.
7. Confirmar que la URL canónica y el dominio corresponden al repositorio publicado.

## Limitación de esta validación

No se considera una prueba de aceptación en producción. El entorno de ejecución disponible bloqueó la navegación de Chromium automatizada, por lo que no se certifica el renderizado visual real en navegador. Se realizaron comprobaciones estáticas de rutas, anchors y sintaxis JavaScript. La revisión final debe hacerse después del despliegue de GitHub Pages en navegador de escritorio y móvil.
