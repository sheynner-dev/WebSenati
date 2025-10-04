import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Card, Container, Button, Form, Row, Col } from "react-bootstrap";

import CURSOS from "../data/cursos.js";

function DetalleCurso() {
  const { id } = useParams();
  const navigate = useNavigate();
  const curso = CURSOS.find((c) => String(c.id) === String(id));

  if (!curso) {
    return (
      <main className="fade-in">
        <Container className="py-5 text-center">
          <h2>Curso no encontrado</h2>
          <Button onClick={() => navigate('/cursos')} className="mt-3">Volver a Cursos</Button>
        </Container>
      </main>
    );
  }

  // Form state
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviarPorCorreo(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Interés en el curso: ${curso.nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}%0ACurso: ${curso.nombre}`);
    window.location.href = `mailto:zavalasheynner@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="fade-in">
      <Container className="py-5" style={{ color: '#fff' }}>
        <Card className="card p-4 mx-auto bg-dark text-white" style={{ maxWidth: 900 }}>
          <Row>
            <Col md={6}>
              <img src={`/WebSenati/${encodeURI(curso.imagen)}`} alt={curso.nombre} className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <h2 className="glow-text" style={{ color: '#fff' }}>{curso.nombre}</h2>
              <p style={{ color: '#fff' }}>{curso.descripcionLarga}</p>
              <p><strong>Contenido:</strong> <span style={{ color: '#fff' }}>{curso.contenido}</span></p>
              <p><strong>Precio:</strong> <span style={{ color: '#fff' }}>S/ {curso.precio}</span></p>
            </Col>
          </Row>

          <hr />

          <h4 style={{ color: '#fff' }}>Contactar e inscribirse</h4>
          <Form onSubmit={enviarPorCorreo}>
            <Row className="g-2">
              <Col md={4}>
                <Form.Control placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Tu email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </Col>
              <Col md={4} className="d-grid">
                <Button type="submit" variant="success">Enviar interés por correo</Button>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Control as="textarea" rows={3} placeholder="Mensaje adicional" value={mensaje} onChange={e => setMensaje(e.target.value)} />
            </Form.Group>
          </Form>

          <div className="d-flex gap-2 mt-3">
            <Button variant="secondary" onClick={() => navigate('/cursos')}>Volver a Cursos</Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}

export default DetalleCurso;
