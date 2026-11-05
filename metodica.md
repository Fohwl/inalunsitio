# Memoria de Proyecto — metodica.md

Fuente de la verdad. Actualización: 2026-11-03.

## 1. Proyecto
- Nombre de trabajo: Inalun.
- Propósito: modernizar la web de Inalun preservando su identidad institucional.
- Referencia principal: https://centroinalun.webescuela.cl/.
- Alcance B/C: colores, tipografías, composición y rediseño de componentes; detalle funcional pendiente.
- Fase inicial: web estática con HTML5 semántico y Tailwind CSS v4.

## 2. Stack tecnológico
- Node.js 22.12+ o una versión LTS posterior compatible con Vite; npm.
- HTML5, Tailwind CSS 4 y plugin oficial @tailwindcss/vite.
- Vite como herramienta de desarrollo y compilación; sin framework en runtime.
- Astro y React son objetivos futuros, todavía no se instalan.
- Sin backend, base de datos ni proveedor de despliegue definidos.

## 3. Arquitectura y carpetas
- src/pages: documentos HTML completos; index.html es la entrada inicial.
- src/components: fragmentos HTML de referencia para futura reutilización.
- src/layouts: plantillas HTML de referencia para la futura migración.
- Los fragmentos y layouts no se componen automáticamente: HTML y Vite no ofrecen includes nativos. No añadir fetch para montar contenido esencial.
- src/styles/global.css: entrada de Tailwind y futuros tokens CSS.
- public/site.js: comportamiento compartido de menú, modal y formulario de demostración.
- public/images, public/fonts y public/icons: recursos copiados sin transformación, referidos desde /images, /fonts y /icons.
- dist: salida generada para publicar; no editar.
- Al añadir páginas, declarar sus entradas en la configuración de Vite antes de compilar.

## 4. Convenciones
- Documentación en español; identificadores técnicos en inglés.
- HTML semántico, idioma declarado, un h1 por página y navegación accesible.
- Archivos de páginas y recursos en kebab-case; componentes y layouts en PascalCase.
- Indentación de dos espacios, UTF-8, saltos LF.
- Clases Tailwind completas y literales; evitar concatenaciones dinámicas.
- No editar CSS generado ni introducir librerías sin registrar su propósito.
- Mantener package-lock.json versionado; npm ci para instalaciones reproducibles.

## 5. Flujo obligatorio
1. Leer metodica.md antes de proponer soluciones, escribir código o ejecutar cambios.
2. Resolver contradicciones y definiciones necesarias antes del trabajo dependiente.
3. Cada decisión de arquitectura, librería o dinámica de trabajo actualiza este documento.
4. Entregar su versión completa actualizada en un bloque Markdown con cada cambio de ese tipo.
5. Validar con npm run build; revisar las páginas afectadas antes de publicar.
6. No registrar secretos. No confundir suposiciones con decisiones aprobadas.
- Ramas, revisión, despliegue y pruebas funcionales: pendientes de acordar.

## 6. Dependencias aprobadas
- vite: servidor local, compilación y vista previa.
- tailwindcss (major 4): estilos utilitarios.
- @tailwindcss/vite (major 4): integración de compilación.
- Versiones exactas resueltas: package-lock.json tras instalar.

## 7. Decisiones
- D-001, 2026-10-28: adoptar esta memoria para preservar contexto.
- D-002, 2026-10-28: HTML estático y Tailwind v4 con carpetas inspiradas en Astro, por solicitud del usuario.
- D-003, 2026-10-28: Vite y plugin oficial; evitar compiladores de plantillas transitorios. Fragmentos reservados hasta Astro.
- D-005, 2026-10-28: Modernización 2026 aprobada: grid estricto, espacios en múltiplos de 4/8px, whitespace abundante, tipografía nueva y UI limpia. Reglas en design-system.md.
- D-006, 2026-10-28: Inter como tipografía institucional mediante Google Fonts, con respaldo system-ui; elegida por su legibilidad y carácter sobrio.
- D-007, 2026-10-28: contenidos y fotografías de noticias se sirven localmente; accesos escolares apuntan a secciones propias. WebClass permanece como servicio externo; el acceso institucional directo está pendiente de verificar.
- D-008, 2026-10-28: arquitectura prevista de cinco páginas: Inicio, Nosotros, Admisión, Noticias y Contacto. Esta fase entrega únicamente Inicio; las demás no se publican hasta implementarse. WebClass se muestra en un modal interno de demostración, sin recepción de credenciales, mientras se verifica la integración real.
- D-009, 2026-10-28: isotipo SVG nuevo y transparente solicitado por el usuario; sustituye temporalmente el logo original en la interfaz. Se implementan Nosotros y Noticias como páginas HTML independientes; Vite compila explícitamente sus entradas. Admisión y Contacto siguen como secciones de Inicio hasta la siguiente fase.
- D-010, 2026-10-28: usar el logo real proporcionado por el usuario en sustitución del isotipo. Se incorporan Admisión y Contacto como páginas HTML independientes y entradas de Vite; la autenticación WebClass sigue pendiente.
- D-011, 2026-10-28: retirar el logo de las páginas por solicitud del usuario; conservar el nombre institucional como texto.
- D-012, 2026-11-03: incorporar barra institucional, navegación accesible e interacciones compartidas en public/site.js. Contacto y WebClass son demostraciones explícitas sin envío de datos ni autenticación.

## 8. Migración prevista
- Convertir páginas, layouts y fragmentos reutilizables a .astro y componer con imports y slot.
- Mantener public y src/styles; importar CSS desde el layout Astro.
- Sustituir configuración y scripts de Vite por los de Astro; reutilizar el plugin Tailwind mediante su configuración Vite.
- Incorporar React solo para interacciones que lo requieran mediante integración oficial y directivas client:* cuando corresponda.
- La estructura reduce reorganización, pero no elimina la conversión de plantillas.

## 9. Estado y pendientes
- Base técnica creada y dependencias instaladas; npm run build verificado correctamente.
- Pendiente: requisitos funcionales, diseño, contenido, despliegue y estrategia de revisión.
- Identidad inicial analizada en identidad-observada.md; especificación visual vigente en design-system.md.
- Primera página implementada a solicitud del usuario; revisión visual y validación de contenidos pendientes.
- Noticias locales y acceso informativo a WebClass implementados; pendientes el reglamento vigente y la URL de inicio de sesión institucional de WebClass.
- Cinco páginas implementadas sin logo; navegación y demos compartidas. Formulario de contacto simulado, sin envío. Textos institucionales, datos de admisión, WebClass real y reglamento requieren validación.

## 10. Stack de IA y Flujo de Trabajo
- Figma: organizar referencias, sistema visual y prototipos revisables.
- Stitch: explorar variantes y prototipar rápidamente la nueva interfaz antes de programar.
- Gemini (vía chat): analizar la URL y materiales de marca, extraer identidad y proponer arquitectura y lógica. Sus propuestas requieren revisión y aprobación; el chat no modifica este repositorio.
- Codex: ejecutar la implementación y refactorización en HTML5/Tailwind v4 según los diseños y decisiones aprobados; verificar compilación, semántica y adaptación responsive.
- Flujo: analizar referencia → proponer sistema visual → aprobar → prototipar en Figma/Stitch → aprobar → implementar con Codex → verificar.
- El usuario aprueba los diseños y decisiones; ninguna herramienta sustituye esa aprobación.
- Todas las herramientas deben recibir la versión vigente de metodica.md y las mismas referencias aprobadas.
- Diferenciar valores observados en la web, inferencias y propuestas nuevas. No presentar estimaciones como tokens originales.
- Los prototipos y código exportados son referencias que deben adaptarse al stack y convenciones vigentes.
- Registrar aquí las decisiones aprobadas; no introducir dependencias ni migrar a Astro/React por iniciativa de una herramienta.
- D-004, 2026-10-28: adoptar Figma, Stitch, Gemini chat y Codex con las responsabilidades y aprobaciones anteriores, por solicitud del usuario.

## 11. Modernización visual 2026
- design-system.md rige el nuevo diseño; identidad-observada.md conserva la evidencia histórica.
- Grid/Flexbox y contenedor compartido; espaciado matemático en múltiplos de 4/8px, con espacio en blanco generoso.
- Sustituir Open Sans y la dirección tipográfica antigua por Inter, cargada desde Google Fonts con respaldo system-ui.
- rounded-xl (12px) como radio estándar; sombras muy sutiles y eliminación de ruido visual.
- Mostrar el nombre institucional sin logo, por solicitud del usuario, y mantener el verde institucional.
- Validar legibilidad, contraste, foco y composición responsive antes de aprobar el prototipo.
