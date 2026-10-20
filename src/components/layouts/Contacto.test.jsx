import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contacto from './Contacto';

const redes = [
  { id: 'linkedin', nombre: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { id: 'github', nombre: 'GitHub', url: 'https://github.com/' },
];

const enviar = () => fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));

describe('Componente Contacto', () => {
  it('debe mostrar los enlaces a redes sociales', () => {
    render(<Contacto redes={redes} />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/');
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
  });

  it('debe mostrar errores si se envía el formulario vacío', () => {
    render(<Contacto redes={redes} />);
    enviar();
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El correo es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es obligatorio.')).toBeInTheDocument();
  });

  it('debe mostrar error si el correo es inválido', () => {
    render(<Contacto redes={redes} />);
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'correo-malo' } });
    enviar();
    expect(screen.getByText('Formato de correo inválido.')).toBeInTheDocument();
  });

  it('debe confirmar el envío cuando los datos son válidos', () => {
    render(<Contacto redes={redes} />);
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'ana@correo.com' } });
    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: { value: 'Hola, me gustó tu portafolio' },
    });
    enviar();
    expect(screen.getByText('Mensaje enviado correctamente.')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toHaveValue('');
  });
});
