# Inalun — Modernización 2026

Estado: dirección visual aprobada; Inter seleccionada; revisión visual pendiente.
Fuente histórica: identidad-observada.md. Este documento define la nueva interfaz; los valores observados no son reglas que debamos copiar.

## Dirección de arte
Institución académica profesional, contemporánea, cercana y accesible. Conservar logo, reconocimiento del verde y fotografía comunitaria. El carácter premium procede de jerarquía, alineación y legibilidad.

## Grid y espacio obligatorio
- Escala única: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80 y 96px. Usar utilidades estándar Tailwind; no introducir márgenes arbitrarios para corregir alineaciones.
- Grid desktop de 12 columnas; tablet de 8; móvil de 4. Gaps de 24px en desktop y 16px en móvil.
- Contenedor compartido Header/Hero/secciones: ancho máximo 1200px, centrado; gutters 24px en móvil y 32px desde tablet. El contenedor siempre debe caber en el viewport.
- Secciones: padding vertical 48px móvil, 80px desktop; tarjetas 24px; grupos de contenido separados 24/32px y título-descripción 16px.
- CSS Grid para composición; Flexbox para navegación y grupos de controles. Alineación por contenedores y baseline; sin offsets manuales, alturas fijas para texto ni posicionamiento absoluto estructural.
- Espacio en blanco generoso, sin huecos artificiales ni texto forzado a un número de líneas.

## Dos opciones tipográficas
- A, recomendada: Inter en títulos, navegación y cuerpo. Neutral y precisa; prioriza sobriedad académica y lectura.
- B: Plus Jakarta Sans en títulos, navegación y cuerpo. Geométrica y con una expresión más cálida; alternativa institucional contemporánea.
- Se selecciona Inter para toda la interfaz; Plus Jakarta Sans queda como alternativa descartada. Google Fonts se carga con respaldo system-ui.
- Excluir Open Sans y las familias antiguas como dirección tipográfica del nuevo diseño; mantener fallback genérico system-ui, sans-serif.
- Pesos 400 cuerpo, 500 controles, 600 títulos; 700 solo para énfasis puntual.
- Cuerpo 16px/24px, entradilla 20px/32px; H1 36px/44px móvil y 56px/64px desktop; H2 28px/36px móvil y 40px/48px desktop; navegación 16px/24px.
- Texto corrido hasta 65 caracteres aproximados por línea; evitar mayúsculas extensas y tracking exagerado.
- Referencias: https://fonts.google.com/specimen/Inter y https://fonts.google.com/specimen/Plus+Jakarta+Sans.

## Color
- Heredado comprobado: lima #82AD00. Reservarlo para acentos y reconocimiento, no texto blanco pequeño.
- Propuestas nuevas: verde de acción #365314, hover #25400F, texto #17211B, texto secundario #47534A, fondo suave #F7F9F5, superficie #FFFFFF, borde #E2E8DF.
- Los colores propuestos no se presentan como colores originales del colegio. Verificar contraste en sus combinaciones y estados antes de aprobar el prototipo.
- Amarillo/naranja: acentos secundarios opcionales pendientes de muestreo; no rellenar grandes áreas por defecto.
- No reproducir la franja conmemorativa ni adoptar el celeste WebClass como color institucional.

## Componentes y acabados
- Radio estándar 12px, equivalente a rounded-xl, en botones, tarjetas, campos e imagen Hero; excepciones solo por geometría del logo o iconos.
- Sombras opcionales y discretas: 0 2px 8px rgb(23 33 27 / 0.04). Bordes de 1px; evitar sombras acumuladas.
- Botones: alto mínimo 48px, padding horizontal 24px, separación 16px, etiquetas claras y foco visible. El contenido puede aumentar su altura.
- Primario verde oscuro/blanco; secundario blanco/verde oscuro con borde; hover sin desplazar el layout.
- Foco contrastante de 2px con offset 4px; navegación por teclado, objetivo táctil mínimo 44×44px, contraste de texto normal al menos 4.5:1.
- Sin gradientes ornamentales, carruseles automáticos, stickers, emojis como iconos, bloques flotantes ni animaciones decorativas. Respetar reducción de movimiento.

## Primer prototipo: Header y Hero
- Frames 1440px desktop y 390px móvil; revisar también adaptación a 768px y ausencia de overflow desde 320px.
- Header blanco en flujo normal: logo original, nombre institucional, navegación Colegio/Comunidad/Noticias/Contacto y CTA Admisión. Arquitectura de información provisional para prototipo, pendiente de validar con Gemini/usuario.
- Altura mínima orientativa 96px desktop y 80px móvil; permitir crecimiento. Móvil con menú accesible y estado abierto diseñado.
- Hero desktop: texto en 6 columnas e imagen en 6; gap 48px. En móvil: texto, acciones y fotografía apilados con gap 32px.
- Texto provisional: eyebrow «Inalún · Castro»; H1 «Aprender, crecer y construir comunidad»; descripción «Conoce nuestra comunidad educativa y encuentra la información que necesitas para acompañar cada etapa escolar.»
- Acciones: «Conoce el colegio» y «Información de admisión»; no inventar fechas, acreditaciones, cifras ni promesas.
- Fotografía real de la comunidad si se aporta un recurso autorizado; mientras tanto, placeholder claramente identificado. No generar rostros ni sustituir el logo.
- Header y contenido del Hero comparten los mismos límites del contenedor. Una sola imagen principal, sin texto sobre fotografía.
- Aprobar composición, familia elegida y estados responsive antes de implementar.
