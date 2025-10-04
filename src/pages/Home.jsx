import { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col, Modal, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { RUTAS } from '../routes.js';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [contador, setContador] = useState(0);
  const [visitas, setVisitas] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [showSampleModal, setShowSampleModal] = useState(false);

  const SAMPLE_REVIEWS = [];

  function getRandomSample(n = 3) {
    const shuffled = SAMPLE_REVIEWS.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  // Estadísticas reales usando una API pública de contador de visitas
  useEffect(() => {
    document.title = `Clicks: ${contador} | Visitas: ${visitas}`;
  }, [contador, visitas]);

  useEffect(() => {
    // Puedes cambiar el endpoint por uno propio si tienes backend
    fetch("https://api.countapi.xyz/hit/senati-shey-alonso/visitas")
      .then(res => res.json())
      .then(data => {
        setVisitas(data.value);
      });

    const stored = localStorage.getItem('reseñas_senati');
    if (stored) {
      try { setReviews(JSON.parse(stored)); } catch (e) { setReviews([]); }
    }
  }, []);

  return (
    <main className="fade-in">
      {/* Banner educativo */}
      <section style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,18,25,0.6), rgba(0,95,115,0.4)), url('/WebSenati/3P-SENATI.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        color: '#e6fff8',
        padding: '36px 0',
        minHeight: 260,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8} style={{ color: '#fff' }}>
              <h1 className="glow-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Bienvenido a SENATI - Formación Técnica</h1>
              <p style={{ maxWidth: 720 }}>
                Aprende habilidades prácticas con cursos diseñados para la empleabilidad. Mejora tus competencias y acelera tu carrera.
              </p>
              <div className="d-flex gap-2 mt-3">
                <Button variant="primary" onClick={() => navigate(RUTAS.CURSOS)}>Ver Cursos</Button>
                <Button variant="outline-light" onClick={() => navigate(RUTAS.ACERCA)}>Conócenos</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-4">
        {/* 3 Cards arriba */}
        <Row className="g-4 mb-4 align-items-stretch">
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100">
                <Card.Title className="glow-text mb-3">Enlaces SENATI</Card.Title>
                <img src="/WebSenati/ENLACES SENATI.jfif" alt="SENATI" style={{ maxWidth: '320px', marginBottom: "18px" }} />
                <a className="btn btn-outline-secondary" href="/WebSenati/guia_matricula_web.pdf" target="_blank" rel="noreferrer">Guía de matrícula (PDF)</a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white" style={{ minHeight: 220, borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Card.Body className="text-center d-flex flex-column justify-content-center h-100">
                <Card.Title className="glow-text mb-2">Estadísticas</Card.Title>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ flex: 1 }}>
                  <h2 className="display-5" style={{ color: "#00f5ff", fontWeight: "bold", margin: "0" }}>{visitas}</h2>
                  <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}>Visitas reales a este sitio web</p>
                  <Button variant="success" size="sm" disabled style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }}>Visitas a este Sitio Web</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white" style={{ minHeight: 220, borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Card.Body className="text-center d-flex flex-column justify-content-center h-100">
                <Card.Title className="glow-text mb-2">Síguenos</Card.Title>
                <div className="d-flex justify-content-center gap-2 flex-wrap mt-2 mb-2 align-items-center">
                  <a className="btn btn-primary btn-sm d-flex align-items-center gap-1" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }} href="https://www.facebook.com/SenatiOficial" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /> FB</a>
                  <a className="btn btn-danger btn-sm d-flex align-items-center gap-1" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }} href="https://www.instagram.com/senati_oficial/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /> IG</a>
                  <a className="btn btn-info btn-sm d-flex align-items-center gap-1" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }} href="https://twitter.com/senati_oficial" aria-label="Twitter" target="_blank" rel="noreferrer"><FaTwitter /> TW</a>
                  <a className="btn btn-secondary btn-sm d-flex align-items-center gap-1" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }} href="https://www.youtube.com/@SENATIOFICIAL" aria-label="YouTube" target="_blank" rel="noreferrer"><FaYoutube /> YT</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* 3 Cards abajo */}
        <Row className="g-4 mb-4 align-items-stretch">
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white" style={{ minHeight: 220, borderRadius: 18, boxShadow: "0 0 18px #00f5ff22" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100">
                <Card.Title className="glow-text mb-3">Video destacado</Card.Title>
                <div style={{ width: '100%', maxWidth: 320, aspectRatio: "16/9", position: 'relative', borderRadius: 10, overflow: "hidden", margin: "0 auto" }}>
                  <iframe
                    title="Video SENATI"
                    src="https://www.youtube.com/embed/4XgtA5_k2DQ"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white" style={{ minHeight: 220, borderRadius: 18, boxShadow: "0 0 18px #00f5ff22" }}>
              <Card.Body className="d-flex flex-column justify-content-center h-100 text-center">
                <Card.Title className="glow-text mb-2">¿Qué aprenderás hoy?</Card.Title>
                <Card.Text className="mb-2" style={{ color: '#fff', opacity: 0.95, fontSize: "1.05rem" }}>
                  Explora conceptos clave de React como estado, efectos, componentes y hooks. Prácticas y proyectos para tu portafolio.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-success" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", border: "none" }} href="/WebSenati/18-Introducción-a-React.pptx.pdf" target="_blank" rel="noreferrer">Ver guía</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card h-100 bg-dark text-white" style={{ minHeight: 220, borderRadius: 18, boxShadow: "0 0 18px #00f5ff22" }}>
              <Card.Body>
                <Card.Title className="glow-text mb-2">Cómo llegar</Card.Title>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Ubicación y rutas para llegar al campus SENATI más cercano.</p>
                <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative', borderRadius: 10, overflow: "hidden" }}>
                  <iframe
                    title="Cómo llegar a SENATI"
                    src="https://www.google.com/maps?q=senati&output=embed"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-end">
                  <a className="btn btn-outline-primary" style={{ background: "linear-gradient(90deg,#00f5ff,#d400ff)", color: "#fff", border: "none" }} href="https://www.google.com/maps/search/?api=1&query=senati" target="_blank" rel="noreferrer">Abrir en Google Maps</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modal de reseñas */}
        <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Dejar reseña</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={reviewName} onChange={(e) => setReviewName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Reseña</Form.Label>
              <Form.Control as="textarea" rows={3} value={reviewMessage} onChange={(e) => setReviewMessage(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Valoración</Form.Label>
              <Form.Control as="select" value={reviewRating} onChange={(e) => setReviewRating(Number(e.target.value))}>
                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n}</option>)}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowReviewModal(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => {
              const newReview = { name: reviewName || 'Anónimo', message: reviewMessage, rating: reviewRating };
              const updated = [...reviews, newReview];
              setReviews(updated);
              localStorage.setItem('reseñas_senati', JSON.stringify(updated));
              setReviewName(''); setReviewMessage(''); setReviewRating(5);
              setShowReviewModal(false);
            }}>Enviar</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de reseñas de muestra */}
        <Modal show={showSampleModal} onHide={() => setShowSampleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Reseñas de usuarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {getRandomSample(4).map((r, i) => (
              <div key={i} className="mb-3 p-2 border rounded">
                <strong>{r.name}</strong> <span className="text-muted">({r.rating}/5)</span>
                <div>{r.message}</div>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSampleModal(false)}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </main>
  );
}
export default Home;