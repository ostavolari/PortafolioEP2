import { useState } from 'react';

// valores por defecto del formulario (campos vacios al inicio)
const valoresIniciales = { nombre: '', correo: '', mensaje: '' };

// regex simple para verificar que el correo tenga el formato user@algo.com
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// validarContacto recibe el objeto de valores y devuelve un objeto con los errores encontrados
// si no hay errores, devuelve un objeto vacio {}
export const validarContacto = (valores) => {
  const errores = {};

  // trim() saca los espacios de los bordes antes de validar
  const nombre = valores.nombre.trim();
  const correo = valores.correo.trim();
  const mensaje = valores.mensaje.trim();

  if (!nombre) errores.nombre = 'El nombre es obligatorio.';
  else if (nombre.length > 100) errores.nombre = 'Maximo 100 caracteres.';

  if (!correo) errores.correo = 'El correo es obligatorio.';
  else if (!regexCorreo.test(correo)) errores.correo = 'Formato de correo invalido.';

  if (!mensaje) errores.mensaje = 'El mensaje es obligatorio.';
  else if (mensaje.length > 500) errores.mensaje = 'Maximo 500 caracteres.';

  return errores;
};

// Hook personalizado: maneja el estado del formulario de contacto
// devuelve todo lo que necesita el componente ContactForm para funcionar
export default function useContactForm() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});

  // enviado: true cuando el formulario paso todas las validaciones
  const [enviado, setEnviado] = useState(false);

  // cambiar: se llama cada vez que el usuario escribe en un campo
  // usa el atributo 'name' del input para saber cual campo actualizar
  // el spread (...valores) copia los demas campos sin tocarlos
  const cambiar = (evento) => {
    setValores({ ...valores, [evento.target.name]: evento.target.value });
    setEnviado(false); // oculta el mensaje de exito si el usuario sigue escribiendo
  };

  // enviar: se llama al hacer submit del formulario
  // valida, y si todo esta ok limpia el form y muestra mensaje de exito
  const enviar = (evento) => {
    evento.preventDefault(); // evita que la pagina se recargue
    const nuevosErrores = validarContacto(valores);
    setErrores(nuevosErrores);

    // Object.keys devuelve un array con las claves del objeto
    // si esta vacio, no hay errores y el envio fue exitoso
    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setValores(valoresIniciales); // limpia el formulario
    } else {
      setEnviado(false);
    }
  };

  return { valores, errores, enviado, cambiar, enviar };
}
