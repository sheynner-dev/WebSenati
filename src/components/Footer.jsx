import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-center py-3" style={{ marginTop: '40px' }}>
      <Container>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/SenatiOficial" aria-label="Facebook">Facebook</a>
          <a href="https://www.instagram.com/senati_oficial" aria-label="Instagram">Instagram</a>
          <a href="https://x.com/SENATI" aria-label="Twitter">Twitter</a>
        </div>
        <small className="d-block mt-2">© {new Date().getFullYear()} Desarrollado por Sheynner Zavala y Alonso Zavala</small>
      </Container>
    </footer>
  );
}

export default Footer;
