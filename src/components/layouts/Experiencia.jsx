import { List } from 'antd';
import Etiqueta from '../atoms/Etiqueta';

const Experiencia = ({ experiencias = [] }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Experiencia Laboral</h1>
      <p>Recorrido profesional en orden cronológico.</p>
    </div>

    <List
      dataSource={experiencias}
      renderItem={(experiencia) => (
        <List.Item
          key={experiencia.id}
          extra={<Etiqueta>{`${experiencia.inicio} – ${experiencia.termino}`}</Etiqueta>}
        >
          <List.Item.Meta title={experiencia.cargo} description={experiencia.empresa} />
        </List.Item>
      )}
    />
  </div>
);

export default Experiencia;
