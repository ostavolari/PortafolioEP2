import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Personal from './Personal';

const perfil = {
  nombre: 'Ana Perez',
  titulo: 'Dev Front-End',
  descripcion: 'Descripcion de prueba',
  foto: '',
};

describe('Componente Personal', () => {
  it('debe mostrar nombre, titulo y descripcion', () => {
    render(<Personal perfil={perfil} />);
    expect(screen.getByRole('heading', { name: 'Ana Perez' })).toBeInTheDocument();
    expect(screen.getByText('Dev Front-End')).toBeInTheDocument();
    expect(screen.getByText('Descripcion de prueba')).toBeInTheDocument();
  });

  it('debe mostrar las iniciales cuando no hay foto', () => {
    render(<Personal perfil={perfil} />);
    expect(screen.getByRole('img', { name: 'Avatar de Ana Perez' })).toHaveTextContent('AP');
  });

  it('debe llamar onContacto al presionar Contactame', () => {
    const onContacto = vi.fn();
    render(<Personal perfil={perfil} onContacto={onContacto} />);
    fireEvent.click(screen.getByRole('button', { name: 'Contactame' }));
    expect(onContacto).toHaveBeenCalledTimes(1);
  });
});
