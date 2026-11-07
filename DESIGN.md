---
name: PCU UniOvi
description: Portal oficial de la Asociación de Programación Competitiva Universitaria de la Universidad de Oviedo
colors:
  primary: "#1d4ed8"
  primary-hover: "#1e40af"
  primary-tint: "#eff6ff"
  accent-cyan: "#38bdf8"
  verdict-ac: "#059669"
  verdict-ac-bg: "#ecfdf5"
  verdict-pending: "#d97706"
  verdict-pending-bg: "#fffbeb"
  neutral-bg: "#f8fafc"
  surface: "#ffffff"
  surface-elevated: "#f1f5f9"
  border-hairline: "#e2e8f0"
  border-strong: "#cbd5e1"
  ink-primary: "#0f172a"
  ink-secondary: "#334155"
  ink-muted: "#64748b"
typography:
  display:
    fontFamily: "Space Grotesk, -apple-system, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, -apple-system, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, -apple-system, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.65rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.65rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.65rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
---

# Design System: PCU UniOvi

## Overview

**Creative North Star: "Algorithmic Gazette / Editorial Técnico"**

El sistema visual de PCU UniOvi está diseñado como una publicación técnica de referencia que une la tradición académica y deportiva de la Universidad de Oviedo (Escuela Politécnica de Ingeniería de Gijón) con la alta competición algorítmica internacional (formato ICPC / AdaByron: 3 personas, 1 ordenador, 5 horas bajo límites estrictos de tiempo y memoria).

La atmósfera combina un lienzo limpio de papel técnico (`#f8fafc` a `#ffffff`) con tipografías de contraste rotundo: la solidez contemporánea de **Space Grotesk** para titulares de impacto, la claridad neutra y descansada de **Plus Jakarta Sans** para prosa densa, y la precisión quirúrgica de **JetBrains Mono** para código, datos, veredictos de jueces automáticos y metadatos de competiciones.

El diseño huye conscientemente de las convenciones de plantillas SaaS genéricas: no hay degradados decorativos de texto, no se usan emojis como sucedáneo de iconos ni adornos superficiales de cristal o desenfoque. Toda la jerarquía se apoya en el espacio en blanco deliberado, proporciones asimétricas, micro-interacciones nítidas y la verdad deportiva y técnica del equipo.

**Key Characteristics:**
- Estética editorial de alta densidad informativa y legibilidad cristalina.
- Contraste funcional derivado del ecosistema de jueces automáticos (`Accepted` esmeralda y `Pending` ámbar).
- Geometría técnica compacta con radios exactos (4px en insignias/botones, 8px en tarjetas/inputs, 12px en contenedores amplios).
- Identidad institucional ligada a la EPI de Gijón y la Universidad de Oviedo sin caer en la frialdad burocrática.

## Colors

Paleta sobria de fondo claro dominada por tonos pizarras de alta legibilidad, anclada en el azul institucional de la Universidad de Oviedo y puntuada por los colores funcionales de veredictos deportivos.

### Primary
- **UniOvi Blue** (`#1d4ed8`): El azul institucional del alma máter. Se utiliza con máxima disciplina para llamadas a la acción primarias, enlaces destacados, anillos de foco y bordes activos.
- **UniOvi Blue Hover** (`#1e40af`): Variante oscurecida para estados hover interactivos.
- **UniOvi Blue Tint** (`#eff6ff`): Fondo suave para badges de metadatos, selecciones de texto y contenedores de realce técnico.

### Secondary
- **Verdict Accepted Emerald** (`#059669`): Verde de veredicto positivo oficial en plataformas de programación competitiva (Domjudge / Kattis). Utilizado en puntos de estado activo (`.status-dot`), etiquetas de concursos en curso y fases superadas.
- **Verdict Accepted Tint** (`#ecfdf5`): Fondo sutil para chips de estado confirmado y soluciones aceptadas.

### Tertiary
- **Cyan Accent** (`#38bdf8`): Resplandor técnico derivado de entornos de desarrollo y analítica de datos en tiempo real, utilizado en pequeños destellos y gradientes lineales sutiles de cabecera.
- **Verdict Pending Amber** (`#d97706`): Color de advertencia y estado de espera para convocatorias en fase de inscripción o verificación.

### Neutral
- **Deep Slate Ink** (`#0f172a`): Tinta principal para titulares, números y elementos de máximo contraste. Cumple holgadamente el estándar de contraste WCAG AAA (>14:1 frente al fondo).
- **Secondary Slate** (`#334155`): Tinta secundaria para párrafos de lectura continuada y descripciones de problemas.
- **Muted Slate** (`#64748b`): Tinta atenuada para etiquetas monoespaciadas, migas de pan y notas explicativas.
- **Canvas Base** (`#f8fafc`): Fondo base de la página, un blanco cálido de papel técnico que previene la fatiga ocular.
- **Surface Elevation** (`#ffffff`): Fondo de tarjetas y bloques interactivos para destacar sutilmente sobre el lienzo.
- **Surface Muted** (`#f1f5f9`): Fondo alternativo para bandas secundarias, cabeceras de tablas y contenedores de datos.
- **Hairline Border** (`#e2e8f0`): Borde de 1px estructural para delimitación limpia de módulos.
- **Strong Border** (`#cbd5e1`): Borde de inputs y botones secundarios en reposo.

### Named Rules
**The One Voice Rule.** El azul corporativo UniOvi (`#1d4ed8`) se reserva con moderación estricta para ≤10% de la superficie visible en reposo. Su escasez es lo que garantiza su jerarquía e impacto.

**The Semantic Verdict Rule.** El verde (`#059669`) y el ámbar (`#d97706`) nunca se utilizan como mera decoración o relleno visual; señalan exclusivamente estados reales de competición o veredictos de problemas.

## Typography

**Display / Heading Font:** Space Grotesk (con fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Body Font:** Plus Jakarta Sans (con fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Code / Label Font:** JetBrains Mono (con fallback `monospace`)

**Character:** La tensión estética entre la geometría rotunda y técnica de Space Grotesk y la legibilidad humanista de Plus Jakarta Sans transmite el equilibrio exacto entre la exigencia algorítmica matemática y la comunicación divulgativa abierta.

### Hierarchy
- **Display** (Bold 700, clamp(2.8rem, 5vw, 3.8rem), line-height 1.08, letter-spacing -0.035em): Titulares de gran impacto en cabeceras de portada (`hero-title`).
- **Headline** (Bold 700, clamp(2rem, 3.5vw, 2.5rem), line-height 1.15, letter-spacing -0.025em): Títulos de sección (`section-title`) y cabeceras de páginas interiores (`page-headline`).
- **Title** (Bold 700, 1.25rem a 1.45rem, line-height 1.3, letter-spacing -0.015em): Títulos de tarjetas de concursos, pilares y acordeones.
- **Body** (Regular 400 y SemiBold 600, 1rem a 1.18rem, line-height 1.65): Texto corrido de artículos, descripciones y documentación técnica. Medida óptima fijada en 65–70ch.
- **Label / Meta** (SemiBold 600, 0.72rem a 0.8rem, line-height 1.2, letter-spacing 0.05em, mayúsculas): Insignias institucionales, veredictos, coordenadas de competición y migas de pan monoespaciadas.

### Named Rules
**The Heading Integrity Rule.** Queda estrictamente prohibido colocar etiquetas ornamentales o "kickers/eyebrows" por encima de los títulos principales. El encabezado (`<h1>` o `<h2>`) debe sostenerse por su propio peso semántico.

**The Authentic Monospace Rule.** JetBrains Mono se emplea únicamente para metadatos genuinos (tiempo, memoria, complejidad temporal $O(N)$, jueces, fechas, formatos), nunca como disfraz decorativo en párrafos ordinarios.

## Layout

El layout opera sobre una rejilla fluida con contenedor máximo delimitado y márgenes laterales generosos para garantizar la compostura editorial tanto en terminales portátiles como en pantallas de ultra-alta definición.

- **Contenedor Máximo:** 1240px (`--container-max`), centrado horizontalmente con `padding: 0 2rem` (reducido a `1.25rem` en móviles).
- **Ritmo Vertical:** Secciones delimitadas por `padding: 6.5rem 0` (`4rem 0` en páginas interiores), acompañadas de una línea de separación `border-bottom: 1px solid var(--border-hairline)`.
- **Estructura Grid:** 
  - Concursos y actividades: Rejilla adaptativa con `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))` y `gap: 1.5rem`.
  - Formularios y contacto: Composición asimétrica `1fr / 1.35fr` para balancear las coordenadas directas del equipo frente al formulario interactivo.
  - Portada Hero: Disposición `1.15fr / 0.85fr` que equilibra el bloque editorial con el widget de eventos de competición en directo (`ActiveEvents.astro`).

## Elevation & Depth

La profundidad se construye a través de estratificación tonal y contraste de superficie, no mediante sombras pesadas. En reposo, las superficies yacen a ras del lienzo con bordes de 1px hairline. La elevación emerge de forma dinámica únicamente como respuesta a la interacción del usuario o para destacar hitos competitivos confirmados.

### Shadow Vocabulary
- **Subtle Surface** (`box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`): Profundidad mínima para separar tarjetas de datos del fondo base.
- **Card Interactive Rest** (`box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.04), 0 2px 4px -2px rgba(15, 23, 42, 0.03)`): Estado base de tarjetas de concurso y contenedores elevados.
- **Card Elevated Hover** (`box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.08)`): Elevación física de `-2px` o `-3px` en el eje vertical al interactuar con el puntero, combinada con el tintado del borde en azul UniOvi.
- **Primary Button Glow** (`box-shadow: 0 2px 4px rgba(29, 78, 216, 0.2)`): Sombras de foco cromático suaves bajo botones de llamada a la acción principal.

### Named Rules
**The Flat-At-Rest Rule.** Toda superficie reposa plana por defecto. Las sombras volumétricas son un reflejo de interactividad y foco, nunca un adorno estático.

## Shapes

El lenguaje de formas es sobrio, estructurado y de inspiración ingenieril, priorizando radios compactos que recuerdan a interfaces de terminal, editores de código y cajas de herramientas de desarrollo.

- **Micro / Chips / Botones:** Radio de 4px (`--radius-sm`). Mantiene la solidez visual y el corte profesional sin dureza excesiva.
- **Tarjetas / Inputs:** Radio de 8px (`--radius-md`). Aporta confort táctil en superficies medianas delimitadas por bordes finos de 1px.
- **Contenedores Mayores:** Radio de 12px (`--radius-lg`). Reservado para la caja de patrocinadores (`.sponsors-box`), el widget de eventos activos y bloques modales.
- **Píldoras Circulares:** Radio de 999px. Exclusivo para pastillas de estado (`.detail-status-pill`) o avatares de redes.

## Components

### Buttons
- **Shape:** Radio compacto de 4px (`--radius-sm`), tipografía seminegrita de 0.95rem a 0.98rem.
- **Primary (`.btn-primary`):** Fondo azul UniOvi (`#1d4ed8`), texto blanco, padding `0.85rem 1.65rem`. Al hover transiciona a `#1e40af` con desplazamiento vertical de `-1px` y sombra de acento.
- **Secondary (`.btn-secondary`):** Fondo de superficie blanco (`#ffffff`), borde sólido de 1px (`#cbd5e1`), texto pizarra `#0f172a`. Al hover pasa a `#f1f5f9` oscureciendo el borde.
- **Submit (`.btn-submit`):** Variante de formulario con icono SVG de envío integrado, padding `0.9rem 1.8rem`.

### Contest Cards (`ContestCard.astro`)
- **Structure:** Encabezado con ámbito en monoespaciado y píldora semántica de estado (punto pulsante si está activo), título enlazable en Space Grotesk, descripción de medida contenida y pie de tarjeta con metadatos técnicos (formato, sede, fechas) acompañados de iconos SVG.
- **Action:** Botón sutil en el pie ("Ficha y detalles →") con desplazamiento de flecha al hover.

### Achievement Card (`.achievement-card`)
- **Signature Component:** Contenedor de hito deportivo con fondo en degradado tonal tenue (`linear-gradient(135deg, rgba(239, 246, 255, 0.7) 0%, #ffffff 100%)`), borde azul sutil de 1px, icono de trofeo vectorial en caja elevada y tira de metadatos de la competición oficial.

### Inputs / Form Fields
- **Fields (`.form-input`, `.form-select`, `.form-textarea`):** Fondo base `#f8fafc`, borde de 1px `#cbd5e1`, radio de 4px, tipografía en 0.95rem.
- **Focus:** Anillo accesible con `box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12)`, borde `#1d4ed8` y fondo blanco puro. Caret teñido en azul UniOvi.

### Navigation (`Navbar.astro`)
- **Bar:** Barra fija con `position: sticky`, altura de 76px, fondo semitransparente con desenfoque de cristal (`backdrop-filter: blur(14px)`) y borde inferior de 1px.
- **Links:** Enlaces de texto con transición suave al azul corporativo y pastilla de estado activo con fondo sutil y borde de color primario.

### Footer (`Footer.astro`)
- **Palette:** Superficie profunda (`#090d16`) con texto slate de alto contraste (`#94a3b8`).
- **Social Strip:** Botones circulares con iconos vectoriales SVG para Discord, Instagram y GitHub con estados hover reactivos.

## Do's and Don'ts

### Do:
- **Do** verificar siempre un contraste mínimo de 4.5:1 en texto estándar y 3:1 en encabezados grandes.
- **Do** utilizar iconos vectoriales SVG con grosor de trazo consistente (`stroke-width="2"`), nunca emojis como sustitutos de interfaz.
- **Do** emplear siempre las variables CSS nativas (`var(--uniovi-blue)`, `var(--ink-primary)`, `var(--radius-md)`) en nuevos componentes.
- **Do** mantener el diseño responsive mediante rejillas `repeat(auto-fit, minmax(...))` y flexbox fluido.
- **Do** respetar la verdad deportiva y técnica del equipo: no inventar patrocinadores no confirmados ni prometer periodicidades de entrenamiento que no se cumplen.

### Don't:
- **Don't** colocar etiquetas ornamentales ("kickers/eyebrows") por encima de los encabezados principales.
- **Don't** aplicar degradados de color en textos de lectura continua o títulos secundarios.
- **Don't** utilizar bordes gruesos de color en el lateral izquierdo (`border-left > 1px`) en tarjetas o llamadas informativas.
- **Don't** emplear tipografía monoespaciada de manera puramente cosmética en párrafos largos de prosa.
- **Don't** usar sombras duras sin desenfoque (`box-shadow: 4px 4px 0`) ajenas a la identidad editorial técnica.
