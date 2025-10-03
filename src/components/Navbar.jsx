import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap"; 
import { RUTAS } from "../routes.js";

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        {/* 🚀 Logo a la izquierda */}
        <BootstrapNavbar.Brand 
          as={Link} 
          to={RUTAS.INICIO} 
          className="logo glow-text"
        >
          🚀 Sitio Web-SENATI
        </BootstrapNavbar.Brand>

  <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
  <BootstrapNavbar.Collapse id="basic-navbar-nav">
          {/* Menú a la derecha */}
          <Nav className="ms-auto menu me-3">
            <Nav.Link as={Link} to={RUTAS.INICIO} title="Página principal - contador y noticias">Principal</Nav.Link>
            <Nav.Link as={Link} to={RUTAS.ACERCA} title="Información institucional">Acerca</Nav.Link>
            <Nav.Link as={Link} to={RUTAS.CURSOS} title="Listado de cursos disponibles">Cursos</Nav.Link>
            <Nav.Link as={Link} to={RUTAS.RESENAS} title="Ver y dejar reseñas de usuarios">Reseñas</Nav.Link>
            <Nav.Link as={Link} to={RUTAS.CONTACTO} title="Formulario de contacto">Contacto</Nav.Link>
            
          </Nav>

         
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
