import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RUTAS } from './routes.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacto from './pages/Contacto.jsx';
import Cursos from './pages/Cursos.jsx';
import DetalleCurso from './pages/DetalleCurso.jsx';
import Resenas from './pages/Resenas.jsx';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RUTAS.INICIO} element={<Home />} />
          <Route path={RUTAS.ACERCA} element={<About />} />
          <Route path={RUTAS.CURSOS} element={<Cursos />} />
          <Route path={RUTAS.CURSO} element={<DetalleCurso />} />
          <Route path={RUTAS.CONTACTO} element={<Contacto />} />
          <Route path={RUTAS.RESENAS} element={<Resenas />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
