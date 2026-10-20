import { Button, Col, Row } from 'antd';
import Avatar from '../atoms/Avatar';

const Personal = ({ perfil, onContacto }) => (
  <div>
    <div className="titulo-seccion">
      <h1>¿Quién soy?</h1>
      <p>Presentación personal y profesional.</p>
    </div>

    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={8} style={{ textAlign: 'center' }}>
        <Avatar foto={perfil?.foto} nombre={perfil?.nombre || ''} />
      </Col>
      <Col xs={24} md={16}>
        <h2>{perfil?.nombre}</h2>
        <h4>{perfil?.titulo}</h4>
        <p>{perfil?.descripcion}</p>
        <Button type="primary" onClick={onContacto}>Contáctame</Button>
      </Col>
    </Row>
  </div>
);

export default Personal;
