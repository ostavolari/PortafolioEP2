import { Alert, Button, Form, Input } from 'antd';
import useContactForm from '../../hooks/useContactForm';

// Organismo: formulario de contacto con validacion en el cliente (sin backend)
// toda la logica de estado y validacion esta en el hook useContactForm
const ContactForm = () => {
  const { valores, errores, enviado, cambiar, enviar } = useContactForm();

  return (
    // onSubmitCapture intercepta el submit antes de que el navegador lo procese
    <Form layout="vertical" onSubmitCapture={enviar}>

      {/* validateStatus: le dice a Ant Design si el campo tiene error (para el borde rojo)
          help: muestra el mensaje de error debajo del input */}
      <Form.Item
        label="Nombre"
        htmlFor="nombre"
        validateStatus={errores.nombre ? 'error' : ''}
        help={errores.nombre}
      >
        {/* maxLength limita los caracteres directamente en el input */}
        <Input id="nombre" name="nombre" value={valores.nombre} onChange={cambiar} maxLength={100} />
      </Form.Item>

      <Form.Item
        label="Correo"
        htmlFor="correo"
        validateStatus={errores.correo ? 'error' : ''}
        help={errores.correo}
      >
        <Input
          id="correo"
          name="correo"
          value={valores.correo}
          onChange={cambiar}
          placeholder="usuario@correo.com"
        />
      </Form.Item>

      <Form.Item
        label="Mensaje"
        htmlFor="mensaje"
        validateStatus={errores.mensaje ? 'error' : ''}
        help={errores.mensaje}
      >
        {/* TextArea es el input de varias lineas */}
        <Input.TextArea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={valores.mensaje}
          onChange={cambiar}
          maxLength={500}
        />
      </Form.Item>

      {/* htmlType="submit" hace que el boton dispare el evento submit del form */}
      <Button type="primary" htmlType="submit">
        Enviar mensaje
      </Button>

      {/* solo se muestra el Alert si enviado es true (despues de un envio exitoso) */}
      {enviado && (
        <Alert type="success" showIcon message="Mensaje enviado correctamente." style={{ marginTop: 16 }} />
      )}
    </Form>
  );
};

export default ContactForm;
