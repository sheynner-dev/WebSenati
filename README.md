# 🌐 Sitio Web Educativo **SENATI** (React + Vite)

**Proyecto subido a dominio de GitHub:** https://sheynner-dev.github.io/WebSenati/

---

> **Autores:** Alonso & **Sheynner Zavala**  
> Tarea: HT-02 & HT-03 — SPA moderna con React, Vite y React-Bootstrap. 🎓🚀

---

## 🔖 Tabla de contenidos
- [Descripción](#-descripción)  
- [Características principales](#-características-principales)  
- [Estructura del proyecto](#-estructura-del-proyecto)  
- [Capturas y descripciones](#-capturas-y-descripciones)  
- [Instalación y ejecución](#-instalación-y-ejecución-local)  
- [Notas de desarrollo](#-notas-de-desarrollo--consideraciones)  
- [Autores](#-autores)  

---

## 🧾 Descripción
Sitio web educativo que muestra la oferta académica de una institución tipo **SENATI**. Implementa una **Single Page Application (SPA)** con navegación fluida, formularios validados con **Formik + Yup**, y componentes reutilizables (Navbar & Footer). Perfecto para exhibir cursos, detalles, contacto y reseñas.

---

## ✨ Características principales
- Rutas centralizadas en `src/routes.js`.  
- Componentes reutilizables: `src/components/Navbar.jsx`, `src/components/Footer.jsx`.  
- Páginas incluidas: `Home`, `Acerca`, `Cursos`, `DetalleCurso`, `Contacto`, `Reseñas`.  
- Formularios con **Formik + Yup** (validación y mensajes de error).  
- Estilos en `src/index.css` + Bootstrap importado en `src/main.jsx`.  
- SPA con `react-router-dom` (sin recargas de página).  
- Diseño responsive con React-Bootstrap. 📱💻

---

## 🗂 Estructura del proyecto (relevante)
text
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Acerca.jsx
│   ├── Cursos.jsx
│   ├── DetalleCurso.jsx
│   ├── Contacto.jsx
│   └── Reseñas.jsx
├── routes.js
├── main.jsx
└── index.css

---

## 📸 Capturas y descripciones

<p align="center">
  <img width="704" height="716" alt="Cards principales en Home" src="https://github.com/user-attachments/assets/75ebc2ef-5e32-49f2-9bba-3b0f899b38d2" />
</p>

**Home — Cards principales**  
En la página principal vemos varias **cards** con funciones: guía en PDF para matrícula, contador de visitas, enlaces a redes sociales institucionales, video informativo sobre vacantes y mapa con ubicación.

---

<p align="center">
  <img width="714" height="78" alt="Navbar superior" src="https://github.com/user-attachments/assets/09e546fc-066e-4373-858f-3a4424e0dccf" />
</p>

**Navbar (barra de navegación)**  
Desde aquí navegas entre las diferentes secciones de la SPA: Home, Cursos, Acerca, Contacto y Reseñas.

---

<p align="center">
  <img width="725" height="462" alt="Página Acerca" src="https://github.com/user-attachments/assets/62b128e1-52c7-4d98-8332-e18e7cfc6ad8" />
</p>

**Acerca**  
Página que explica la misión, visión y valores de la institución, además de metas y objetivos a futuro.

---

<p align="center">
  <img width="725" height="557" alt="Página Cursos" src="https://github.com/user-attachments/assets/6f8ca865-9a3a-4d19-a0f8-ad2fc6da59ca" />
</p>

**Cursos**  
Listado de todos los cursos ofrecidos. Al seleccionar uno, se abre la página de detalle del curso.

---

<p align="center">
  <img width="686" height="357" alt="Detalle de curso" src="https://github.com/user-attachments/assets/d7d1fd3a-e3f8-4c87-bd3d-d21d96e7bedd" />
</p>

**Detalle del curso**  
Muestra información ampliada (ej. *React Avanzado*), formulario de interés (nombre + correo + comentario opcional). Al enviar, se simula o envía la notificación con los datos de interés.

---

<p align="center">
  <img width="730" height="488" alt="Formulario de reseñas" src="https://github.com/user-attachments/assets/d1f957c8-4c57-4028-b4fb-d3a4962a167e" />
</p>

**Reseñas**  
Los usuarios pueden dejar reseñas/valoraciones (1 a 5) y comentarios. Las reseñas se muestran en la misma página.

---

<p align="center">
  <img width="742" height="363" alt="Sección de reseñas activas" src="https://github.com/user-attachments/assets/8a60d16e-192c-4b28-8d3a-1b286a76738e" />
</p>

**Listado de reseñas**  
Las reseñas publicadas aparecen en la vista lateral o sección destinada para ello.

---

<p align="center">
  <img width="732" height="656" alt="Listado de reseñas" src="https://github.com/user-attachments/assets/8ede39b3-322f-4c35-a095-c3dec571352d" />
</p>

---

<p align="center">
  <img width="755" height="337" alt="Contacto y envío por WhatsApp" src="https://github.com/user-attachments/assets/7ef98509-00d9-4e33-9b0d-e22c2f1ffb86" />
</p>

**Contacto**  
Formulario que permite enviar la información por **WhatsApp** a un asesor (nombre, curso, mensaje). Ideal para atención personalizada e inmediata.

---

## 🛠 Instalación y ejecución (local)
```bash
# clonar repo
git clone https://github.com/sheynner-dev/WebSenati.git
cd WebSenati

# instalar dependencias
npm install

# ejecutar en modo desarrollo
npm run dev

# construir para producción
npm run build

📌 Notas de desarrollo / Consideraciones

react-router-dom para navegación interna.

Formularios: Formik + Yup para UX clara y validación.

Envío real de correos o WhatsApp.
Sustituir las rutas de imágenes si las mueves a otro host o carpeta del repo.

Mantener accesibilidad básica: etiquetas alt, roles y focus visible para inputs.

👥 Autores

Alonso Zavala — Alonsozz20 (GitHub)

Sheynner Zavala — sheynner-dev (GitHub)