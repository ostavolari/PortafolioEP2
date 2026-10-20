import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Personal from './Personal';

const perfil = {
  nombre: 'Ana Pérez',
  titulo: 'Dev Front-End',
  descripcion: 'Descripción de prueba',
  foto: '',
};

describe('Componente Personal', () => {
  it('debe mostrar nombre, título y descripción', () => {
    render(<Personal perfil={perfil} />);
    expect(screen.getByRole('heading', { name: 'Ana Pérez' })).toBeInTheDocument();
    expect(screen.getByText('Dev Front-End')).toBeInTheDocument();
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
  });

  it('debe mostrar las iniciales cuando no hay foto', () => {
    render(<Personal perfil={perfil} />);
    expect(screen.getByRole('img', { name: 'Avatar de Ana Pérez' })).toHaveTextContent('AP');
  });

  it('debe llamar onContacto al presionar Contáctame', () => {
    const onContacto = vi.fn();
    render(<Personal perfil={perfil} onContacto={onContacto} />);
    fireEvent.click(screen.getByRole('button', { name: 'Contáctame' }));
    expect(onContacto).toHaveBeenCalledTimes(1);
  });
});
