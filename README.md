# Sitio SENATI (React + Vite)

Proyecto de Alonso y Sheynner Zavala para la tarea HT-02 & HT-03. Implementa una SPA con React, Vite y React Bootstrap.

Características principales:
- Rutas centralizadas en `src/routes.js`.
- Navbar y Footer reutilizables en `src/components`.
- Páginas: Home, Acerca, Cursos, DetalleCurso, Contacto y Reseñas.
- Formularios con Formik + Yup.
- Estilos personalizados en `src/index.css` y Bootstrap importado en `src/main.jsx`.

Instalación y ejecución

```bash
npm install
npm run dev
```

Ventajas de Vite
- Arranque muy rápido gracias a ES modules.
- HMR rápido durante desarrollo.
- Compilación ligera y eficiente para producción.

SPA vs MPA

Este proyecto es una SPA (Single Page Application). La navegación se realiza mediante componentes `<Link>` de `react-router-dom`, lo que evita recargas completas del navegador. En una MPA (Multi Page Application), cada enlace solicita una nueva página al servidor y recarga todo el documento. La SPA mantiene la aplicación en memoria, actualiza sólo el DOM necesario y permite transiciones más suaves.

Estructura relevante

- `src/components/Navbar.jsx` - Barra de navegación reutilizable.
- `src/components/Footer.jsx` - Pie de página.
- `src/pages/*` - Páginas de la aplicación.
- `src/routes.js` - Constantes de rutas usadas por la app.