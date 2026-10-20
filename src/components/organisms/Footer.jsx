
const Footer = ({ nombre, correo, ubicacion }) => {
  
  // getFullYear() devuelve el año actual dinamicamente (no hay que cambiarlo cada año)
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <p>{`© ${anio} ${nombre}. Todos los derechos reservados.`}</p>
      <p>{`${correo} · ${ubicacion}`}</p>
    </footer>
  );
};

export default Footer;
