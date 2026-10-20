import { useState } from 'react';

const valoresIniciales = { nombre: '', correo: '', mensaje: '' };
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validarContacto = (valores) => {
  const errores = {};
  const nombre = valores.nombre.trim();
  const correo = valores.correo.trim();
  const mensaje = valores.mensaje.trim();

  if (!nombre) errores.nombre = 'El nombre es obligatorio.';
  else if (nombre.length > 100) errores.nombre = 'Máximo 100 caracteres.';

  if (!correo) errores.correo = 'El correo es obligatorio.';
  else if (!regexCorreo.test(correo)) errores.correo = 'Formato de correo inválido.';

  if (!mensaje) errores.mensaje = 'El mensaje es obligatorio.';
  else if (mensaje.length > 500) errores.mensaje = 'Máximo 500 caracteres.';

  return errores;
};

export default function useContactForm() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const cambiar = (evento) => {
    setValores({ ...valores, [evento.target.name]: evento.target.value });
    setEnviado(false);
  };

  const enviar = (evento) => {
    evento.preventDefault();
    const nuevosErrores = validarContacto(valores);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setValores(valoresIniciales);
    } else {
      setEnviado(false);
    }
  };

  return { valores, errores, enviado, cambiar, enviar };
}
