# GMD Engineering Solutions V2

Sitio corporativo estático, modular y preparado para GitHub Pages.

## Estructura

```text
GMD_Engineering_Solutions_V2/
├── index.html
├── README.md
├── PENDIENTES_PARA_PUBLICAR.md
├── .nojekyll
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── img/
│       ├── gmd-logo-dark.png
│       ├── gmd-logo-light.png
│       └── machine-passport-plate-concept.webp
├── css/
│   ├── tokens.css       # Colores, tipografía, anchos y radios
│   ├── base.css         # Reset, contenedores y reglas globales
│   ├── components.css   # Navegación, botones, encabezados, estados
│   └── sections.css     # Maquetación de secciones y responsive
├── js/
│   ├── config.js        # Contacto, agenda, URL de demo y analítica
│   ├── main.js          # Menú, año y animaciones de entrada
│   └── contact.js       # WhatsApp, correo, teléfono y agenda
├── demo/
│   └── machine-passport/
│       ├── index.html   # Demo local, independiente del sitio principal
│       ├── styles.css
│       └── app.js
└── docs/
    └── ESTADO_GMD_Y_PENDIENTES.md
```

## Cómo visualizar antes de publicar

- Para abrir una vista previa directa sin instalar nada, abre `GMD_V2_PREVIEW.html` en Chrome, Edge o Firefox.
- Para revisar la demostración de Machine Passport de forma independiente, abre `GMD_Machine_Passport_Demo_Standalone.html`.
- Los dos archivos `*_Standalone.html` / `GMD_V2_PREVIEW.html` son copias autocontenidas para revisión. No son los archivos fuente que debes editar para actualizar la versión modular.
- Para modificar el sitio, trabaja sobre `index.html`, `css/`, `js/`, `assets/` y `demo/`.

## Cómo modificar sin desordenar el sitio

- **Datos de contacto, agenda y URLs:** `js/config.js`.
- **Colores, tipografías y medidas globales:** `css/tokens.css`.
- **Navegación y botones:** `css/components.css`.
- **Diseño de una sección:** `css/sections.css`.
- **Textos y estructura:** `index.html`.
- **Demostración Machine Passport:** archivos independientes en `demo/machine-passport/`.

No se requiere Node, npm, framework ni compilación. El sitio utiliza HTML, CSS y JavaScript nativos.

## Publicar en GitHub Pages

1. Haz una copia del repositorio y de la versión web actual antes de sustituir archivos.
2. Copia el contenido de esta carpeta a la raíz del repositorio que alimenta GitHub Pages. `index.html` debe quedar en la raíz, no dentro de otra carpeta.
3. Conserva la estructura `assets/`, `css/`, `js/` y `demo/`.
4. En GitHub, revisa **Settings → Pages** y confirma que la fuente de publicación sea la rama y carpeta correctas (normalmente `main` / `/root`).
5. Abre la dirección publicada y prueba todos los enlaces, especialmente la demo interna `demo/machine-passport/`.
6. No publiques un dominio personalizado hasta confirmar que el dominio, DNS y certificado HTTPS están configurados.

El proyecto está configurado para conservar como URL de referencia el repositorio actual:
`https://madmaxmind.github.io/GMD-Engineering-Solutions-2026/`

Si cambia el nombre del repositorio, actualiza `siteUrl` en `js/config.js`.

## Agenda de reuniones

La página **no simula una agenda**. Actualmente `bookingUrl` está vacío y el botón coordina por WhatsApp. Cuando exista un enlace público de Google Calendar Appointment Schedule, Calendly o Cal.com, colócalo en `bookingUrl` dentro de `js/config.js`. El módulo `contact.js` cambia automáticamente el botón a “Elegir fecha y hora”.

## Demo Machine Passport: alcance exacto

La demo incluida es una refactorización del archivo histórico `GMD_Machine_Passport_MVP_1_0.html`. Permite navegar por vistas de ejemplo, cambiar el perfil ilustrativo, simular un escaneo QR, seleccionar una observación y mostrar eventos en el historial de la sesión.

No implementa:

- autenticación real;
- permisos por usuario;
- base de datos ni persistencia;
- carga real de archivos;
- envío de alertas o escalamiento a mantenimiento;
- lectura de QR con la cámara;
- integración con CMMS;
- almacenamiento seguro de documentos.

Por esa razón el sitio y la demo dicen expresamente que se trata de una demostración con información ficticia. No utilizarla para operar maquinaria ni como registro de una instalación.

## Imágenes

`gmd-logo-light.png` y `gmd-logo-dark.png` son variantes transparentes extraídas del archivo de logotipo existente. `machine-passport-plate-concept.webp` es una representación conceptual, no una fotografía de una instalación real. La página lo identifica como tal.

Antes de la publicación comercial final, sustituirla por una fotografía real de la placa y el activo, o conservar la leyenda de concepto.

## Validaciones antes de publicar

Consulta `PENDIENTES_PARA_PUBLICAR.md` y `docs/ESTADO_GMD_Y_PENDIENTES.md`.


## Demostraciones integradas

- `demo/asset-integrity/index.html`: GMD Integrity System · escenario ilustrativo Hospital La Beneficencia Española. Se enlaza mediante la ruta explícita `demo/asset-integrity/index.html` para evitar abrir el directorio en lugar de la aplicación.
- Machine Passport prensa Miester: se muestra dentro de su bloque de producto desde `https://madmaxmind.github.io/Demo-Machine-Passport-Nov-2026/`.

Las demostraciones se presentan junto al texto de cada solución: Asset Integrity con enfoque de auditoría readiness y Machine Passport con la demo a la derecha. La demo Asset Integrity se conserva como archivo HTML independiente; Machine Passport continúa alojada en GitHub Pages y se incrusta mediante iframe.


Actualización visual: se sustituyó la imagen conceptual principal de Machine Passport por una fotografía de la placa física compartida por GMD y se añadió una galería con vistas frontal y posterior. El pie de imagen aclara que es una muestra física, no una instalación documentada en planta.
