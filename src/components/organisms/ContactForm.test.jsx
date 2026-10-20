import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactForm from './ContactForm';

describe('Componente ContactForm (Organismo)', () => {
  it('debe renderizar todos los campos del formulario y el boton de enviar', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar mensaje' })).toBeInTheDocument();
  });

  it('debe validar que los campos sean requeridos', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El correo es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es obligatorio.')).toBeInTheDocument();
  });

  it('debe validar formato de correo electronico', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'formato-invalido' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByText('Formato de correo invalido.')).toBeInTheDocument();
  });

  it('debe enviar el formulario exitosamente y reiniciar los campos', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Carlos' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'carlos@test.com' } });
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Un mensaje de prueba' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByText('Mensaje enviado correctamente.')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toHaveValue('');
    expect(screen.getByLabelText('Correo')).toHaveValue('');
    expect(screen.getByLabelText('Mensaje')).toHaveValue('');
  });
});
