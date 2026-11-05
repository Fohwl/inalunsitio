# Inalun: identidad observada y propuesta inicial

Fecha: 2026-10-28. Estado: propuesta sin aprobación visual.
Fuente: https://centroinalun.webescuela.cl/ y /contact/Contacto.
Método: inspección visual y estilos calculados del DOM en navegador. No es una auditoría exhaustiva de todas las páginas o breakpoints.

## Valores comprobados
- Fondo exterior y bloque inferior: #82AD00.
- Navegación: #7B8400; enlaces blancos o #E7E7E7.
- Superficies: #FFFFFF; texto base #555555; títulos #000000.
- Seguir leyendo: fondo #E7E5E3, texto #100100, padding 4px 5px, radio 4px, fuente 14px.
- Enviar mensaje: negro con texto blanco, padding 4px 6px, radio 5px.
- Cuerpo: familia declarada Open Sans, Arial, Century gothic, sans-serif; 13px y peso 400. La declaración no confirma qué fuente se descargó o renderizó.
- Títulos de noticias y contacto: Helvetica, Arial, sans-serif; 32px, peso 400.
- Menú: 14px, padding 10px.
- Noticias: margen inferior 20px más padding inferior 20px.
- Contenedor: 768px en la vista inspeccionada; no representa un ancho universal.
- Banner: amarillo y naranja observados visualmente en una imagen; sin valores HEX originales verificados. Incluye un lazo y dedicatoria conmemorativa, no asumirlos permanentes.
- Logo: multicolor; no extraer una paleta oficial del CSS de la plantilla.
- WebClass: botones celestes/azules pertenecen a la integración, no asumir que sean colores institucionales.

## Estructura
Banner y logo → menú institucional → accesos Admisión/Contacto/Reglamento → noticias cronológicas con columna lateral WebClass → recursos, ubicación y contacto.
Menú observado: Inicio, Colegio, Departamentos, UTP, Galería y Admisión.
El formulario muestra mezcla de idiomas y estilos heredados.

## Propuesta inicial sustituida
La propuesta siguiente queda como histórico. La dirección vigente está en design-system.md: Modernización 2026, grid estricto, tipografía nueva y radios consistentes de 12px.
- Preservar logo, verde reconocible, fotografía comunitaria y calidez del banner.
- Utilizar el lima como acento y un verde más oscuro para acciones con texto blanco, tras comprobar contraste.
- Amarillo/naranja como acentos contenidos, pendientes de muestras originales.
- Cuerpo 16–18px, interlineado 1.5–1.65; títulos 32–48px según viewport. Familias pendientes de aprobación y verificación de recursos tipográficos.
- Escala de espacios 4/8/12/16/24/32/48/64px; secciones 48–64px y tarjetas 20–24px.
- Botones con altura mínima propuesta de 44px, padding horizontal 16–24px, radio 8px y foco visible.
- Contenedor fluido hasta 1120–1200px, márgenes móviles 16–24px; tarjetas de noticias y accesos prioritarios consistentes.
- No copiar el banner conmemorativo ni el estilo de terceros como identidad permanente sin confirmación.
- No se ha programado ni aprobado el rediseño.
