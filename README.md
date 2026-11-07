# PCU UniOvi - Web de la asociación

Repositorio de la página web de la Asociación de Programación Competitiva Universitaria (PCU) de la Universidad de Oviedo.

El sitio reúne información sobre la asociación, avisos de actividades y concursos de programación, artículos del blog y vías de contacto para estudiantes y patrocinadores.

Web: [https://asociacionpcu.vercel.app](https://asociacionpcu.vercel.app)

## Stack

La web está construida con [Astro](https://astro.build/) y genera páginas estáticas a partir de plantillas y archivos Markdown:

* Generación de HTML y CSS estático sin sobrecargar con JavaScript en el navegador.
* Colecciones de contenido (Content Collections) en `src/content/` para noticias y actividades.
* Estilos con CSS nativo y paleta corporativa (`#1D4ED8`), usando las fuentes Space Grotesk, JetBrains Mono y Plus Jakarta Sans.
* Componente interactivo de marcador estilo ICPC con globos y tabla de posiciones.

## Estructura del proyecto

```text
├── public/                 # Archivos estáticos directos (imágenes, scripts)
│   ├── images/logo.png
│   └── contact-handler.js  # Script de envío de formularios
├── src/
│   ├── components/         # Componentes (Navbar, Footer, Scoreboard, Cards)
│   ├── content/            # Contenido en Markdown
│   │   ├── actividades/    # Fichas de concursos y talleres (.md)
│   │   └── noticias/       # Artículos y crónicas (.md)
│   ├── layouts/            # Plantilla base (Layout.astro)
│   ├── pages/              # Rutas del portal
│   │   ├── index.astro     # Portada principal
│   │   ├── actividades/    # Listado y páginas individuales (/actividades/[slug])
│   │   └── noticias/       # Blog y crónicas (/noticias/[slug])
│   └── styles/
│       └── global.css      # Estilos globales y variables de diseño
├── astro.config.mjs        # Configuración de Astro
└── package.json
```

## Cómo añadir una actividad o concurso

Para publicar una nueva actividad, crea un archivo `.md` en `src/content/actividades/nombre-actividad.md`:

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

Astro genera automáticamente la tarjeta en `/actividades` y la página detallada en `/actividades/nombre-actividad`.

## Desarrollo local

Los comandos deben ejecutarse en la terminal situándote en la raíz del proyecto (el directorio donde se encuentra `package.json`). Es necesario tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### Acceso a la terminal según tu sistema

* Windows: abre PowerShell, Terminal de Windows o el Símbolo del sistema en la carpeta del proyecto. Si usas VS Code, pulsa `Ctrl + ñ` para abrir la terminal integrada.
* Linux y macOS: abre tu emulador de terminal habitual (Bash o Zsh) y entra al directorio del repositorio:
  ```bash
  cd landing-pcu
  ```

### Comandos del proyecto

Los comandos de npm funcionan exactamente igual en Windows, Linux y macOS:

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en el navegador para ver los cambios en tiempo real.

3. Compilar para producción:
   ```bash
   npm run build
   ```

## Despliegue

El proyecto está configurado para desplegarse en Vercel con cada subida a la rama principal en GitHub.
