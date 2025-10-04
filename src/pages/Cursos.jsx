import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Badge, Form } from "react-bootstrap";
import { useState } from "react";
import CURSOS from "../data/cursos.js";

function Cursos() {
  const [query, setQuery] = useState("");
  const filtered = CURSOS.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="fade-in">
      <Container className="py-5" style={{ color: '#fff' }}>
        <h1 className="glow-text mb-3" style={{ color: '#fff' }}>Cursos</h1>
        <p className="mb-4" style={{ color: '#fff' }}>Cursos Disponibles: <Badge bg="info">{CURSOS.length}</Badge></p>

        <Form className="mb-3">
          <Form.Control placeholder="Buscar cursos..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </Form>

        <Row className="g-4">
          {filtered.map((c) => (
            <Col xs={12} md={6} lg={4} key={c.id}>
              <Card className="card h-100 bg-dark text-white">
                {c.imagen && <img src={`/WebSenati/${encodeURI(c.imagen)}`} alt={c.nombre} className="card-img-top" style={{ objectFit: 'cover', height: 160 }} />}
                <Card.Body>
                  <Card.Title className="glow-text" style={{ color: '#fff' }}>{c.nombre}</Card.Title>
                  <Card.Text style={{ color: '#fff' }}>{c.descripcion}</Card.Text>
                  <p style={{ fontWeight: 'bold', color: '#fff' }}>S/ {c.precio}</p>
                  <Link to={`/curso/${c.id}`} className="btn btn-primary w-100">Ver detalle</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Cursos;