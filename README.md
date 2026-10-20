# Portafolio Personal

Aplicación web interactiva de tipo "Portafolio Personal" en formato Single Page Application (SPA), desarrollada con React, Vite y Ant Design, estructurada siguiendo el patrón y arquitectura del proyecto `dashboard`.

---

## 1. Requisitos previos

- **Node.js** versión 22 o superior
- **npm** (incluido con Node.js)

---

## 2. Instalación y ejecución local

1. Abrir una terminal en la carpeta raíz del proyecto (donde se encuentra `package.json`).
2. Instalar las dependencias del proyecto:

```bash
npm install
```

3. Iniciar el servidor local de desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador la URL indicada en la terminal (usualmente `http://localhost:5173`).

---

## 3. Pruebas automatizadas y calidad de código

```bash
# Ejecutar todas las pruebas una vez
npm run test:run

# Ejecutar pruebas en modo interactivo/watch
npm test

# Ejecutar revisión de código con ESLint
npm run lint

# Generar compilación de producción
npm run build
```

---

## 4. Estructura del proyecto

El proyecto sigue la misma estructura de componentes y organización que el proyecto de referencia `dashboard`:

```text
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── atoms/                     # Componentes básicos (Avatar, Etiqueta)
│   │   ├── Avatar.jsx
│   │   ├── Avatar.test.jsx
│   │   ├── Etiqueta.jsx
│   │   └── Etiqueta.test.jsx
│   ├── layouts/                   # Vistas/secciones principales de la interfaz
│   │   ├── Personal.jsx           # Sección "¿Quién soy?"
│   │   ├── Personal.test.jsx
│   │   ├── Experiencia.jsx        # Lista cronológica de experiencias laborales
│   │   ├── Experiencia.test.jsx
│   │   ├── Estudios.jsx           # Detalle de formación académica y cursos
│   │   ├── Estudios.test.jsx
│   │   ├── Proyectos.jsx          # Grilla de proyectos con buscador reactivo
│   │   ├── Proyectos.test.jsx
│   │   ├── Contacto.jsx           # Redes sociales y formulario de contacto
│   │   └── Contacto.test.jsx
│   ├── molecules/                 # Carpeta para moléculas
│   └── organisms/                 # Componentes y bloques funcionales complejos
│       ├── ContactForm.jsx        # Formulario con validación en cliente
│       ├── ContactForm.test.jsx
│       ├── Footer.jsx             # Pie de página con año dinámico y contacto
│       ├── Footer.test.jsx
│       └── ProyectoCard.jsx       # Tarjeta de presentación de proyecto
├── hooks/
│   ├── useContactForm.js          # Control y validación del formulario de contacto
│   ├── useContactForm.test.js
│   ├── useContador.js             # Hook utilitario de conteo
│   ├── useContador.test.js
│   ├── useProyectos.js            # Hook para filtro de búsqueda y carga simulada
│   └── useProyectos.test.js
├── App.css                        # Estilos de la aplicación
├── App.jsx                        # Fuente de verdad de los datos y coordinación de vistas
├── App.test.jsx                   # Pruebas de integración del flujo de la SPA
├── index.css                      # Estilos globales
├── main.jsx                       # Punto de entrada de la aplicación
└── setupTests.js                  # Configuración del entorno de pruebas JSDOM
```

---

## 5. Personalización de Datos

Todos los datos personales y de configuración se administran directamente como fuente de verdad en `src/App.jsx`.
- Busca los comentarios marcados con `// ADJUNTA AQUI: (...)` para modificar tu nombre, perfil, experiencias, estudios, proyectos y redes.
- Las imágenes personales o capturas de proyectos se pueden guardar en la carpeta `public/img/` y referenciarse como `/img/nombre-archivo.png`.
