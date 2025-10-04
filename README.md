# Sitio Web Educativo SENATI (React + Vite)

**Desarrollado por Sheynner y Alonso Zavala**

Este proyecto es una SPA (Single Page Application) educativa creada con React, Vite y React Bootstrap. Permite explorar información sobre SENATI, sus cursos, docentes, infraestructura y más, con navegación rápida y moderna.

## Estructura del Proyecto

- **index.html**  
  Archivo principal HTML, define el punto de entrada y el contenedor `#root` para la app React.

- **package.json**  
  Configura dependencias como React, Bootstrap, Formik, Yup, React Router y scripts para desarrollo, build y despliegue.

- **vite.config.js**  
  Configuración de Vite para desarrollo y producción.

- **public/**  
  Carpeta con imágenes, PDFs y recursos estáticos usados en la web (logos, guías, fotos de campus y docentes).

- **src/**  
  Carpeta principal de código fuente:
  - **App.jsx**: Componente raíz de la aplicación.
  - **main.jsx**: Punto de entrada, monta la app en el DOM y aplica estilos globales.
  - **index.css**: Estilos personalizados.
  - **routes.js**: Centraliza las rutas de la SPA.
  - **assets/**: Recursos adicionales.
  - **pages/**:  
    - **Home.jsx**: Página principal, muestra banner, estadísticas, enlaces, video, ubicación y permite dejar reseñas.
    - **About.jsx**: Información sobre SENATI, docentes, visión, valores, infraestructura y contacto.
    - **(otras páginas)**: Cursos, DetalleCurso, Contacto, Reseñas, etc.
  - **components/**:  
    - **Navbar.jsx**: Barra de navegación reutilizable.
    - **Footer.jsx**: Pie de página.

## Instalación y Ejecución

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Para construir la versión de producción:
   ```bash
   npm run build
   ```
4. Para previsualizar el build:
   ```bash
   npm run preview
   ```
5. Para desplegar en GitHub Pages:
   ```bash
   npm run deploy
   ```

## Funcionamiento General

- **SPA:**  
  La navegación entre páginas es instantánea usando [`react-router-dom`](https://reactrouter.com/), sin recargar el navegador.
- **Componentes reutilizables:**  
  Navbar y Footer se usan en todas las páginas.
- **Estadísticas:**  
  La página Home muestra visitas reales usando una API pública.
- **Reseñas:**  
  Los usuarios pueden dejar reseñas, que se guardan en `localStorage`.
- **Formularios:**  
  Validación con Formik y Yup.
- **Estilos:**  
  Bootstrap y estilos personalizados en `index.css`.
- **Recursos:**  
  Imágenes y PDFs en la carpeta `public/` se usan en las páginas.

## Ventajas de Vite

- Arranque rápido y HMR instantáneo.
- Compilación eficiente para producción.
- Uso de ES modules.

## Autores

Desarrollado por **Sheynner Zavala** y **Alonso Zavala** para la tarea HT-02 & HT-03.

---

> Para más detalles revisa los archivos fuente en la carpeta [`src/`](src/) y los recursos en [`public/`](public/).