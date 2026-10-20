import { Button, Col, Row } from 'antd';
import Avatar from '../atoms/Avatar';

// Layout: seccion de presentacion personal
// recibe perfil (los datos del usuario) y onContacto (funcion para ir a la pestana de contacto)
const Personal = ({ perfil, onContacto }) => (
  <div>
    <div className="titulo-seccion">
      <h1>Quien soy?</h1>
      <p>Presentacion personal y profesional.</p>
    </div>

    {/* Row y Col son el sistema de grilla de Ant Design (parecido a Bootstrap)
        xs=24 ocupa todo el ancho en movil, md=8 ocupa 1/3 en pantallas medianas */}
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={8} style={{ textAlign: 'center' }}>
        {/* Avatar muestra foto o iniciales segun si hay foto o no */}
        <Avatar foto={perfil?.foto} nombre={perfil?.nombre || ''} />
      </Col>
      <Col xs={24} md={16}>
        <h2>{perfil?.nombre}</h2>
        <h4>{perfil?.titulo}</h4>
        <p>{perfil?.descripcion}</p>
        {/* al hacer clic llama a irAContacto en App.jsx que cambia pagina a '5' */}
        <Button type="primary" onClick={onContacto}>Contactame</Button>
      </Col>
    </Row>
  </div>
);

export default Personal;

/*CONVERSACION CON IA 
- cómo hago para que use bien el espacio en pc y en teléfono?

- Para que la sección se adapte de forma fluida tanto en monitores de PC como en pantallas de teléfono, la clave está en aprovechar las propiedades del sistema de grilla (Grid) de Ant Design (Row y Col).

Aquí tienes las 3 mejores formas de lograrlo:

1. Ajustar el diseño mediante los puntos de interrupción (xs, md, lg)
En lugar de usar solo dos tamaños (xs y md), puedes definir varios según la pantalla:

JavaScript
<Row gutter={[32, 32]} align="middle">
  { En móvil (xs): Centrado y ocupa todo el ancho (24) }
  { En PC (md/lg): Ocupa 8 o 6 columnas }
  <Col xs={24} md={8} lg={6} style={{ textAlign: 'center' }}>
    <Avatar foto={perfil?.foto} nombre={perfil?.nombre || ''} />
  </Col>

  { En móvil (xs): Alineado o centrado según prefieras }
  {En PC (md/lg): Toma el resto del espacio (16 o 18 columnas) }
  <Col xs={24} md={16} lg={18}>
    <h2>{perfil?.nombre}</h2>
    <h4>{perfil?.titulo}</h4>
    <p>{perfil?.descripcion}</p>
    <Button type="primary" onClick={onContacto}>Contáctame</Button>
  </Col>
</Row>
2. Centrar los textos en móviles con CSS / Clases
En teléfonos suele verse mejor si el texto y el botón están centrados, mientras que en PC se ven mejor alineados a la izquierda:

Opción con estilos inline dinámicos:

JavaScript
// En el Col del texto:
<Col 
  xs={24} 
  md={16} 
  style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
>
Opción recomendada (vía CSS):

CSS
En tu archivo CSS 
.presentacion-texto {
  text-align: center;
}

@media (min-width: 768px) {
  .presentacion-texto {
    text-align: left;
  }
}

==================================================================

- que podría hacer si no adjuntara foto? 

- Si no adjuntas una foto (es decir, si perfil.foto viene vacío, null o undefined), tienes tres opciones principales para solucionarlo en este componente:

1. Delegar en el componente Avatar (Lo que hace tu código actual)
Le pasas el nombre como respaldo al componente <Avatar/>. Dentro de él, puedes programar la lógica para que genere un círculo con las iniciales de la persona o muestre un ícono por defecto si no detecta una URL de foto:

JavaScript
<Avatar foto={perfil?.foto} nombre={perfil?.nombre || ''} />

2. Usar una imagen o avatar por defecto (Fallback)
Puedes definir una ruta a una imagen estática genérica para que se muestre cuando el usuario no tenga foto asignada:

JavaScript
<Avatar 
  foto={perfil?.foto || '/imagenes/avatar-defecto.png'} 
  nombre={perfil?.nombre || ''} 
/>

3. Ocultar la columna de la foto si no existe
Si prefieres que en ausencia de foto la información tome todo el ancho de la pantalla, evalúas la existencia de perfil?.foto para renderizar esa columna o ajustar el tamaño de la grilla:

JavaScript
<Row gutter={[32, 32]} align="middle">
  {perfil?.foto && (
    <Col xs={24} md={8} style={{ textAlign: 'center' }}>
      <Avatar foto={perfil.foto} nombre={perfil.nombre} />
    </Col>
  )}
  <Col xs={24} md={perfil?.foto ? 16 : 24}>
    <h2>{perfil?.nombre}</h2>
    <h4>{perfil?.titulo}</h4>
    <p>{perfil?.descripcion}</p>
    <Button type="primary" onClick={onContacto}>Contactame</Button>
  </Col>
</Row>

*/