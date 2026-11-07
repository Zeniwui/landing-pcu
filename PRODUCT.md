# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Estudiantes universitarios (EPI Gijón / Universidad de Oviedo):** Principalmente de Grados en Ingeniería Informática, Tecnologías de Telecomunicación, Ciencia e Ingeniería de Datos, Matemáticas o Física. Buscan entrenar en resolución de problemas algorítmicos complejos, aprender estructuras de datos avanzadas y participar en competiciones oficiales por equipos (ICPC/SWERC, AdaByron).
- **Empresas e instituciones colaboradoras:** Empresas tecnológicas de Asturias y del ámbito nacional interesadas en conectar con perfiles técnicos de alto nivel (scouting de talento), organizar ponencias técnicas o retos conjuntos y patrocinar los viajes y equipaciones oficiales del equipo.
- **Centros de educación secundaria y bachillerato:** Colegios e institutos asturianos interesados en charlas informativas, orientación vocacional en ingenierías y fomento de la algoritmia.

## Product Purpose
Proporcionar el portal web oficial y la identidad digital de la Asociación de Programación Competitiva Universitaria (PCU) de la Universidad de Oviedo, centralizando la información sobre competiciones activas (SWERC, HDCPE, AdaByron), entrenamientos técnicos en la EPI de Gijón, dossier de patrocinio empresarial y vías de contacto directo.

## Positioning
PCU UniOvi es la única asociación universitaria en Asturias dedicada en exclusiva a la programación competitiva oficial de alto rendimiento (formato ICPC: 3 personas, 1 ordenador, 5 horas bajo límite estricto de tiempo y memoria). A diferencia de clubes generales de desarrollo o charlas genéricas, su foco es la excelencia algorítmica, la optimización extrema ($O(N \log N)$, STL avanzada) y la representación oficial de la Universidad de Oviedo en competiciones nacionales e internacionales.

## Operating Context
- **Sede física:** Escuela Politécnica de Ingeniería (EPI) de Gijón, Campus de Viesques (Gijón, Asturias).
- **Plataformas de competición:** Jueces automáticos oficiales (ICPC Domjudge, Kattis, Codeforces, LeetCode, jueces de AdaByron).
- **Comunicación y coordinación:** Servidor oficial de Discord para debates de problemas, simulaciones y avisos, complementado con correo oficial institucional (`asociacionuniovi@gmail.com`).
- **Canal web:** Sitio web estático/SSR desarrollado con Astro y desplegado en Vercel, optimizado para consulta rápida de actividades, reglas de competición y formulario directo con protección anti-bot y Web3Forms.

## Capabilities and Constraints
- **Capacidades:** Catálogo dinámico de actividades y concursos gestionado mediante colecciones de contenido en Markdown (Astro Content Collections), widget de eventos en curso (HDCPE, SWERC), ficha de hitos (clasificación a Final Nacional de AdaByron), dossier para empresas y formulario de contacto automatizado.
- **Restricciones técnicas:** Despliegue en Vercel con Node.js 22 runtime; entrega estática rápida en cliente; sin base de datos pesada ni CMS externo.
- **Restricciones operativas:** Los entrenamientos no tienen periodicidad semanal fija garantizada (se convocan por sesiones y simulaciones según el calendario de competiciones).

## Brand Commitments
- **Nombre:** Asociación de Programación Competitiva Universitaria (PCU) · Universidad de Oviedo.
- **Identidad institucional:** Vinculación directa con la Escuela Politécnica de Ingeniería (EPI) de Gijón y la Universidad de Oviedo.
- **Tono y voz:** Riguroso, técnico, deportivo y sin retórica artificial ("Editorial Técnico / Algorithmic Gazette"). Transmite pasión por la algoritmia y trabajo en equipo.
- **Colores institucionales:** Azul corporativo UniOvi (`#1d4ed8`), fondos limpios de alta legibilidad, acentos de estado de jueces automáticos (`Accepted` en verde esmeralda `#059669`).

## Evidence on Hand
- **Hito oficial contrastado:** Clasificación de un equipo representativo para la Final Nacional de AdaByron tras superar la Fase Regional frente a universidades de la zona.
- **Competiciones activas confirmadas:** Participación en curso en HDCPE y preparación para la fase regional europea ICPC SWERC.
- **Dossier de patrocinio:** Modalidades de colaboración definidas para empresas (Socio Colaborador y Socio Estratégico).

## Product Principles
1. **Verdad deportiva y técnica:** Reflejar fielmente la realidad del equipo; no prometer periodicidades que no se cumplen ni inventar patrocinadores no confirmados.
2. **Claridad algorítmica:** Explicar el funcionamiento de cada concurso (fases regionales, finales nacionales, formato de tres personas y un solo teclado) de forma comprensible tanto para novatos como para ingenieros veteranos.
3. **Foco en el impacto y el talento:** Presentar a los miembros de la asociación como perfiles de alto valor analítico para el ecosistema tecnológico regional e internacional.
4. **Accesibilidad y rigor visual:** Tipografías monoespaciadas y encabezados sólidos que evocan terminales y entornos de desarrollo, manteniendo contraste AA/AAA y rendimiento web impecable.
