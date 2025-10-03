import { useEffect, useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

function Resenas() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const stored = localStorage.getItem('reseñas_senati');
    if (stored) {
      try { setReviews(JSON.parse(stored)); } catch (e) { setReviews([]); }
    }
  }, []);

  function submit(e) {
    e.preventDefault();
    const r = { name: name || 'Anónimo', message, rating };
    const updated = [...reviews, r];
    setReviews(updated);
    localStorage.setItem('reseñas_senati', JSON.stringify(updated));
    setName(''); setMessage(''); setRating(5);
  }

  return (
    <main className="fade-in">
      <Container className="py-5" style={{ color: '#fff' }}>
        <h1 className="glow-text mb-4 text-center" style={{ color: '#fff' }}>Reseñas de Usuarios</h1>
        <Row className="g-4">
          <Col md={6}>
            <Card className="p-4 bg-dark text-white">
              <h4 style={{ color: '#fff' }}>Dejar una reseña</h4>
              <Form onSubmit={submit}>
                <Form.Group className="mb-2">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Reseña</Form.Label>
                  <Form.Control as="textarea" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Valoración</Form.Label>
                  <Form.Select value={rating} onChange={e => setRating(Number(e.target.value))}>
                    {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
                  </Form.Select>
                </Form.Group>
                <Button type="submit" variant="primary">Enviar reseña</Button>
              </Form>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-4 bg-dark text-white">
              <h4 style={{ color: '#fff' }}>Reseñas recientes</h4>
              <div style={{ maxHeight: 420, overflowY: 'auto' }}>
                {reviews.length === 0 ? (
                  <p className="text-muted">Aún no hay reseñas. Sé el primero.</p>
                ) : (
                  reviews.slice().reverse().map((r, i) => (
                    <div key={i} className="mb-3 p-2 border rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <strong style={{ color: '#fff' }}>{r.name}</strong> <span className="text-muted">({r.rating}/5)</span>
                      <div style={{ color: '#fff' }}>{r.message}</div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Resenas;
