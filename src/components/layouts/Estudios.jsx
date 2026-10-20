import { List } from 'antd';
import Etiqueta from '../atoms/Etiqueta';


const Estudios = ({ estudios = [] }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Estudios</h1>
      <p>Formacion academica y cursos realizados.</p>
    </div>

    <List
      dataSource={estudios}
      // extra muestra el ano de cada estudio a la derecha con una Etiqueta
      renderItem={(estudio) => (
        <List.Item
          key={estudio.id}
          extra={<Etiqueta>{estudio.anio}</Etiqueta>}
        >
          <List.Item.Meta title={estudio.titulo} description={estudio.institucion} />
        </List.Item>
      )}
    />
  </div>
);

export default Estudios;
