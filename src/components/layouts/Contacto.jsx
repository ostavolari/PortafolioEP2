import { Button, Col, Row } from 'antd';
import ContactForm from '../organisms/ContactForm';

// Layout: seccion de contacto con enlaces a redes y formulario
// redes viene como prop desde App.jsx (el array redesIniciales)
const Contacto = ({ redes = [] }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Contacto</h1>
      <p>Escribeme o encontrame en mis redes.</p>
    </div>

    {/* Row de dos columnas: izquierda para redes, derecha para el formulario */}
    <Row gutter={[48, 32]}>
      <Col xs={24} lg={8}>
        <p>Mis redes sociales:</p>
        {/* Recorre el array y crea un boton-link por cada red */}
        {redes.map((red) => (
          <Button
            key={red.id}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 8, marginBottom: 8 }}
          >
            {red.nombre}
          </Button>
        ))}
      </Col>
      <Col xs={24} lg={16}>
        {/* ContactForm maneja su propio estado via useContactForm */}
        <ContactForm />
      </Col>
    </Row>
  </div>
);

export default Contacto;
