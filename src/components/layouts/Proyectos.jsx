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

    {/* Input.Search: campo de busqueda con boton de limpiar (allowClear)
        onChange llama a setBusqueda con el texto escrito y lo filtra en useProyectos */}
    <Input.Search
      placeholder="Buscar proyecto por titulo"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      allowClear
      style={{ maxWidth: 400, marginBottom: 20 }}
    />

    {/* Spin: icono de carga de Ant Design. Se muestra mientras cargando sea true */}
    {cargando && (
      <div role="status">
        <Spin /> Cargando proyectos...
      </div>
    )}

    {/* componente de Ant Design para cuando no hay resultados */}
    {!cargando && proyectos.length === 0 && (
      <Empty description="No hay proyectos para mostrar." />
    )}

    {/* Row y Col arman la grilla responsiva de tarjetas
        gutter define el espacio entre columnas y filas */}
    {!cargando && proyectos.length > 0 && (
      <Row gutter={[24, 24]}>
        {proyectos.map((proyecto) => (
          // xs=24 (1 columna en movil), md=12 (2 columnas), xl=8 (3 columnas)
          <Col key={proyecto.id} xs={24} md={12} xl={8}>
            <ProyectoCard proyecto={proyecto} />
          </Col>
        ))}
      </Row>
    )}
  </div>
);

export default Proyectos;
