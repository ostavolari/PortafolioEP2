import { List } from 'antd';
import Etiqueta from '../atoms/Etiqueta';


const Experiencia = ({ experiencias = [] }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Experiencia Laboral</h1>
      <p>Recorrido profesional en orden cronologico.</p>
    </div>

    <List
      dataSource={experiencias}
      // renderItem se llama por cada elemento del array
      // extra muestra el rango de fechas alineado a la derecha
      renderItem={(experiencia) => (
        <List.Item
          key={experiencia.id}
          extra={<Etiqueta>{`${experiencia.inicio} - ${experiencia.termino}`}</Etiqueta>}
        >
          {/* Meta muestra titulo (cargo) y descripcion (empresa) con estilos de Ant Design */}
          <List.Item.Meta title={experiencia.cargo} description={experiencia.empresa} />
        </List.Item>
      )}
    />
  </div>
);

export default Experiencia;
