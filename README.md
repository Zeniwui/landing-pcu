# 🚀 PCU UniOvi - Portal Web Oficial (Astro)

Bienvenido al repositorio de la página web de la **Asociación de Programación Competitiva Universitaria (PCU)** de la Universidad de Oviedo.

Este portal sirve como carta de presentación corporativa, directorio de actividades y concursos de algoritmia, blog de crónicas y canal de contacto para patrocinadores y estudiantes.

🌍 **Web oficial:** [https://asociacionpcu.vercel.app](https://asociacionpcu.vercel.app)

---

## 🛠️ Stack Tecnológico: Astro + Markdown + CSS Nativo

Hemos migrado el portal a **[Astro](https://astro.build/)** para permitir múltiples páginas, catálogo de actividades y noticias sin perder la velocidad extrema del HTML estático:

* **0 KB de JavaScript innecesario:** Astro compila a HTML y CSS puro. Máxima puntuación en rendimiento y SEO.
* **Content Collections (Markdown):** Las noticias y las actividades se redactan en archivos `.md` dentro de `src/content/`.
* **Diseño Editorial Técnico:** Paleta inspirada en la Universidad de Oviedo (`#1D4ED8`), tipografías `Space Grotesk`, `JetBrains Mono` y `Plus Jakarta Sans`.
* **Marcador ICPC en Vivo:** Componente con telemetría de competición y globos oficiales.

---

## 📁 Estructura del Proyecto

```text
├── public/                 # Archivos estáticos directos (imágenes, scripts)
│   ├── images/logo.png
│   └── contact-handler.js  # Script interactivo de envío automático
├── src/
│   ├── components/         # Componentes modulares (Navbar, Footer, Scoreboard, Cards)
│   ├── content/            # ¡Aquí se redacta el contenido!
│   │   ├── actividades/    # Fichas individuales de concursos y talleres (.md)
│   │   └── noticias/       # Artículos y crónicas de certámenes (.md)
│   ├── layouts/            # Plantilla base (Layout.astro)
│   ├── pages/              # Rutas del portal
│   │   ├── index.astro     # Portada principal
│   │   ├── actividades/    # Directorio y páginas dinámicas (/actividades/[slug])
│   │   └── noticias/       # Blog y crónicas (/noticias/[slug])
│   └── styles/
│       └── global.css      # Estilos globales y tokens de diseño
├── astro.config.mjs        # Configuración de Astro
└── package.json
```

---

## ✍️ Cómo añadir una nueva Actividad o Concurso

Cualquier miembro del equipo puede publicar una nueva actividad simplemente creando un archivo en `src/content/actividades/nombre-actividad.md`:

```markdown
---
titulo: "AdaByron Norte 2026"
descripcion: "Competición interuniversitaria de 3 personas por equipo y 1 ordenador."
tipo: "concurso" # Opciones: concurso | entrenamiento | taller | divulgacion
ambito: "Nacional / Regional"
estado: "Próxima Fase"
formato: "3 Personas · 1 PC · 5 Horas"
lugar: "Fase Regional Norte"
fecha: "Marzo 2026"
destacado: true
---

## Descripción y Requisitos
Aquí se escribe el contenido en formato Markdown estándar con fotos, tablas o enlaces...
```

Astro se encarga automáticamente de crear la tarjeta en `/actividades` y la página detallada en `/actividades/nombre-actividad`.

---

## 💻 Desarrollo en Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver los cambios en tiempo real.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## ⚡ Despliegue en Vercel

El repositorio está configurado para desplegarse automáticamente en Vercel. Cada commit en GitHub dispara la compilación estática instantánea sin coste alguno.
