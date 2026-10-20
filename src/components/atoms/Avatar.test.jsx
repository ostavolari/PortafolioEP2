import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './Avatar';

describe('Componente Avatar (Atomo)', () => {
  it('debe mostrar las iniciales si no hay foto', () => {
    render(<Avatar nombre="Juan Perez" />);
    expect(screen.getByRole('img', { name: 'Avatar de Juan Perez' })).toHaveTextContent('JP');
  });

  it('debe mostrar la imagen si se pasa la prop foto', () => {
    render(<Avatar nombre="Juan Perez" foto="/img/perfil.jpg" />);
    const imagen = screen.getByAltText('Fotografia de Juan Perez');
    expect(imagen).toHaveAttribute('src', '/img/perfil.jpg');
  });
});
