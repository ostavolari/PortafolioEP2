import { Button, Col, Row } from 'antd';
import ContactForm from '../organisms/ContactForm';

const Contacto = ({ redes = [] }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Contacto</h1>
      <p>Escríbeme o encuéntrame en mis redes.</p>
    </div>

    <Row gutter={[48, 32]}>
      <Col xs={24} lg={8}>
        <p>Mis redes sociales:</p>
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
        <ContactForm />
      </Col>
    </Row>
  </div>
);

export default Contacto;
