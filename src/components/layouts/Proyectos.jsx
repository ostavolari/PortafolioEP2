import { Col, Empty, Input, Row, Spin } from 'antd';
import ProyectoCard from '../organisms/ProyectoCard';

const Proyectos = ({
  proyectos = [],
  cargando = false,
  busqueda = '',
  setBusqueda = () => {},
}) => (
  <div>
    <div className="titulo-seccion">
      <h1>Desarrollos y Proyectos</h1>
      <p>Proyectos destacados con enlace a su repositorio.</p>
    </div>

    <Input.Search
      placeholder="Buscar proyecto por título"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      allowClear
      style={{ maxWidth: 400, marginBottom: 20 }}
    />

    {cargando && (
      <div role="status">
        <Spin /> Cargando proyectos...
      </div>
    )}

    {!cargando && proyectos.length === 0 && (
      <Empty description="No hay proyectos para mostrar." />
    )}

    {!cargando && proyectos.length > 0 && (
      <Row gutter={[24, 24]}>
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id} xs={24} md={12} xl={8}>
            <ProyectoCard proyecto={proyecto} />
          </Col>
        ))}
      </Row>
    )}
  </div>
);

export default Proyectos;
