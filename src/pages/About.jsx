import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  const [hover, setHover] = useState(false);

  return (
    <main className="fade-in" style={{ background: "radial-gradient(circle at 50% 0%, #181f2b 70%, #0a0f1a 100%)" }}>
      <Container className="py-5">
        {/* Fila 1: Info + Docentes + Visión/Valores */}
        <Row className="g-4 mb-4 align-items-stretch">
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22" }}>
              <Card.Body className="d-flex flex-column justify-content-between h-100">
                <Card.Title className="glow-text mb-2" style={{ fontSize: "1.3rem" }}>Acerca de SENATI</Card.Title>
                <Card.Text style={{ fontSize: "1.08rem", color: "#e6fff8" }}>
                  SENATI es líder en formación técnica profesional en Perú, brindando educación de calidad para el desarrollo de competencias laborales y tecnológicas. Nuestra misión es transformar vidas a través de la capacitación práctica y la innovación.
                </Card.Text>
                <ul style={{ fontSize: "1.05rem", color: "#b8eaff", marginTop: "1rem", marginBottom: "1rem", paddingLeft: "1.2rem" }}>
                  <li>Más de 60 años formando profesionales técnicos</li>
                  <li>Docentes con experiencia en la industria</li>
                  <li>Laboratorios y talleres equipados</li>
                  <li>Alianzas con empresas líderes</li>
                  <li>Bolsa de trabajo y prácticas profesionales</li>
                </ul>
                <Button variant="primary" href="https://www.senati.edu.pe/" target="_blank" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  Visita el sitio oficial
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", padding: "1.5rem 0" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100">
                <img
                  src="/WebSenati/DOCENTES SENATI.png"
                  alt="Docentes SENATI"
                  style={{
                    borderRadius: "12px",
                    marginBottom: "16px",
                    width: "100%",
                    maxWidth: "340px",
                    height: "auto",
                    objectFit: "cover",
                    boxShadow: "0 2px 12px #0004",
                    background: "#fff"
                  }}
                />
                <div style={{
                  fontWeight: "bold",
                  fontSize: "1.15rem",
                  marginBottom: "8px",
                  color: "#e6fff8",
                  textShadow: "0 2px 8px #0a3d91"
                }}>
                  Docentes SENATI
                </div>
                <p style={{ margin: 0, fontSize: "1.1rem", textAlign: "center" }}>
                  Formación técnica, proyectos reales y docentes con experiencia en industria.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", padding: "1.5rem 0" }}>
              <Card.Body className="d-flex flex-column justify-content-center h-100">
                <Card.Title className="glow-text mb-2" style={{ fontSize: "1.2rem" }}>Nuestra Visión</Card.Title>
                <Card.Text>
                  Ser la institución referente en educación técnica, impulsando el desarrollo industrial y tecnológico del país.
                </Card.Text>
                <Card.Title className="glow-text mb-2 mt-3" style={{ fontSize: "1.1rem" }}>Nuestros Valores</Card.Title>
                <ul style={{ paddingLeft: "1.2rem", fontSize: "1.05rem", marginBottom: 0 }}>
                  <li>Innovación</li>
                  <li>Excelencia</li>
                  <li>Compromiso</li>
                  <li>Inclusión</li>
                  <li>Responsabilidad</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Fila 2: Campus, Laboratorio, Infraestructura */}
        <Row className="g-4 mb-4 align-items-stretch">
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", padding: "1.5rem 0" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100">
                <img src="/WebSenati/CAMPUS SENATI.jpg" alt="Campus SENATI" style={{ width: "100%", maxWidth: "340px", height: "160px", objectFit: "cover", borderRadius: "12px", marginBottom: "16px" }} />
                <Card.Title className="glow-text mb-2">Campus moderno</Card.Title>
                <Card.Text className="text-center">
                  Espacios diseñados para el aprendizaje práctico y colaborativo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", padding: "1.5rem 0" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100">
                <img src="/WebSenati/LABORATORIO SENATI.jpg" alt="Laboratorio SENATI" style={{ width: "100%", maxWidth: "340px", height: "160px", objectFit: "cover", borderRadius: "12px", marginBottom: "16px" }} />
                <Card.Title className="glow-text mb-2">Laboratorios equipados</Card.Title>
                <Card.Text className="text-center">
                  Tecnología de punta para simulaciones y prácticas reales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-dark text-white h-100" style={{ borderRadius: 18, boxShadow: "0 0 18px #00f5ff22", padding: "1.5rem 0" }}>
              <Card.Body className="d-flex flex-column justify-content-center h-100">
                <Card.Title className="glow-text mb-2">Infraestructura</Card.Title>
                <Card.Text>
                  Más de 80 sedes a nivel nacional, laboratorios modernos, simuladores y talleres especializados para cada carrera.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Fila 3: Contacto */}
        <Row className="g-4 mb-4 align-items-stretch">
          <Col xs={12} md={{ span: 4, offset: 4 }}>
            <Card className="bg-dark text-white h-100 shadow-lg" style={{ borderRadius: "18px", padding: "2rem", boxShadow: "0 0 18px #00f5ff22" }}>
              <Card.Title className="glow-text mb-2" style={{ textAlign: "center", fontSize: "1.5rem" }}>¿Quieres saber más?</Card.Title>
              <Card.Text style={{ textAlign: "center", fontSize: "1.08rem" }}>
                Contáctanos para recibir información sobre carreras, admisión y becas.
              </Card.Text>
              <div className="d-flex justify-content-center mb-3">
                <a
                  className="btn btn-info"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhmfqpXRjGcDkqpFLfBrgSMlgQrTGcPqFDhQZpCTBcwdbBnrdSDxVpBKXqMvSKGnPJsL"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  Escribir a zavalasheynner@gmail.com
                </a>
              </div>
              <Card.Title className="glow-text mb-2 mt-4" style={{ textAlign: "center" }}>Ubicación principal</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                SENATI Talara, Av. Grau 1230, Talara, Piura, Perú
              </Card.Text>
              <div className="d-flex justify-content-center">
                <a className="btn btn-outline-primary" href="https://www.google.com/maps/search/?api=1&query=senati+talara+piura" target="_blank" rel="noreferrer">
                  Ver en Google Maps
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;