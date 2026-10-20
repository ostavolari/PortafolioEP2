import { Button, Card } from 'antd';
import Etiqueta from '../atoms/Etiqueta';


const ProyectoCard = ({ proyecto }) => (
  <Card
    // cover: imagen que aparece arriba de la tarjeta
    // si no hay imagen, se muestra un recuadro gris con texto
    cover={
      proyecto.imagen ? (
        <img src={proyecto.imagen} alt={`Previsualizacion de ${proyecto.titulo}`} />
      ) : (
        <div className="proyecto-placeholder">Previsualizacion pendiente</div>
      )
    }
  >
    {/* Etiqueta de categoria (ej: "React", "HTML") */}
    <Etiqueta color="geekblue">{proyecto.categoria}</Etiqueta>

    {/* Card.Meta muestra el titulo con el estilo de Ant Design */}
    <Card.Meta title={proyecto.titulo} style={{ margin: '12px 0' }} />

    {/* Boton que abre el repositorio en una pestana nueva
        target="_blank" abre en nueva pestana
        rel="noopener noreferrer" es buena practica de seguridad */}
    <Button href={proyecto.repositorio} target="_blank" rel="noopener noreferrer">
      Ver repositorio
    </Button>
  </Card>
);

export default ProyectoCard;


/* CONVERSACIÓN CON IA
- que hago si un repo no tiene previsualización? 

- 1. Mostrar un mensaje o cuadro alternativo (Placeholder)
Si no existe la propiedad de la imagen, renderizas un contenedor gris o un diseño sencillo en su lugar:

JavaScript
cover={
  proyecto.imagen ? (
    <img src={proyecto.imagen} alt={`Previsualización de ${proyecto.titulo}`} />
  ) : (
    <div className="proyecto-placeholder">Previsualización pendiente</div>
  )
}

2. Usar una imagen por defecto
Puedes definir una imagen estándar (un logo de tu portafolio o una ilustración genérica de código) para cuando falte la imagen principal:

JavaScript
cover={
  <img 
    src={proyecto.imagen || '/imagenes/placeholder-defecto.png'} 
    alt={`Previsualización de ${proyecto.titulo}`} 
  />
}
  
3. Omitir el bloque si no hay imagen
Si prefieres que la tarjeta quede más compacta cuando no haya previsualización, simplemente evalúas si existe antes de pasar el prop cover:

JavaScript
cover={proyecto.imagen ? <img src={proyecto.imagen} alt={proyecto.titulo} /> : null}

*/