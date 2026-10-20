import { Alert, Button, Form, Input } from 'antd';
import useContactForm from '../../hooks/useContactForm';

const ContactForm = () => {
  const { valores, errores, enviado, cambiar, enviar } = useContactForm();

  return (
    <Form layout="vertical" onSubmitCapture={enviar}>
      <Form.Item
        label="Nombre"
        htmlFor="nombre"
        validateStatus={errores.nombre ? 'error' : ''}
        help={errores.nombre}
      >
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
        <Input.TextArea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={valores.mensaje}
          onChange={cambiar}
          maxLength={500}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Enviar mensaje
      </Button>

      {enviado && (
        <Alert type="success" showIcon message="Mensaje enviado correctamente." style={{ marginTop: 16 }} />
      )}
    </Form>
  );
};

export default ContactForm;
