import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './Avatar';

describe('Componente Avatar (Átomo)', () => {
  it('debe mostrar las iniciales si no hay foto', () => {
    render(<Avatar nombre="Juan Pérez" />);
    expect(screen.getByRole('img', { name: 'Avatar de Juan Pérez' })).toHaveTextContent('JP');
  });

  it('debe mostrar la imagen si se pasa la prop foto', () => {
    render(<Avatar nombre="Juan Pérez" foto="/img/perfil.jpg" />);
    const imagen = screen.getByAltText('Fotografía de Juan Pérez');
    expect(imagen).toHaveAttribute('src', '/img/perfil.jpg');
  });
});
