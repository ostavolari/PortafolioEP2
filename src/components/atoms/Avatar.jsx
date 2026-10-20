import { Avatar as AntAvatar } from 'antd';

const Avatar = ({ foto, nombre }) => {
  if (foto) {
    return <AntAvatar src={foto} size={160} alt={`Fotografía de ${nombre}`} />;
  }

  const iniciales = nombre
    .split(' ')
    .slice(0, 2)
    .map((palabra) => palabra[0])
    .join('');

  return (
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
