const Footer = ({ nombre, correo, ubicacion }) => {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <p>{`© ${anio} ${nombre}. Todos los derechos reservados.`}</p>
      <p>{`${correo} · ${ubicacion}`}</p>
    </footer>
  );
};

export default Footer;
