import { Avatar as AntAvatar } from 'antd';


const Avatar = ({ foto, nombre }) => {
  // si hay foto, la mostramos directamente como imagen
  if (foto) {
    return <AntAvatar src={foto} size={160} alt={`Fotografia de ${nombre}`} />;
  }

  // si no hay foto, sacamos las primeras dos palabras del nombre
  // y tomamos la primera letra de cada una para armar las iniciales
  const iniciales = nombre
    .split(' ')      // divide por espacios: ['Oscar', 'Tavolari', 'Galvez']
    .slice(0, 2)     // toma solo las dos primeras palabras
    .map((palabra) => palabra[0]) // toma la primera letra de cada una
    .join('');       // las une: 'OT'

  //Claramente esto no se me ocurrió a mi como inteligencia natural, adjunto conversación en Personal.jxs

  return (
    // role e aria-label son atributos de accesibilidad para lectores de pantalla
    <AntAvatar
      size={160}
      role="img"
      aria-label={`Avatar de ${nombre}`}
      style={{ fontSize: 50, backgroundColor: '#1677ff' }}
    >
      {iniciales}
    </AntAvatar>
  );
};

export default Avatar;
