import { Button, Card } from 'antd';
import Etiqueta from '../atoms/Etiqueta';

const ProyectoCard = ({ proyecto }) => (
  <Card
    cover={
      proyecto.imagen ? (
        <img src={proyecto.imagen} alt={`Previsualización de ${proyecto.titulo}`} />
      ) : (
        <div className="proyecto-placeholder">Previsualización pendiente</div>
      )
    }
  >
    <Etiqueta color="geekblue">{proyecto.categoria}</Etiqueta>
    <Card.Meta title={proyecto.titulo} style={{ margin: '12px 0' }} />
    <Button href={proyecto.repositorio} target="_blank" rel="noopener noreferrer">
      Ver repositorio
    </Button>
  </Card>
);

export default ProyectoCard;
