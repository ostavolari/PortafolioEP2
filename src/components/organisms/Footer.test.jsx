import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Componente Footer', () => {
  it('debe mostrar el ano actual calculado por codigo', () => {
    render(<Footer nombre="Ana Perez" correo="ana@correo.com" ubicacion="Santiago, Chile" />);
    const anio = String(new Date().getFullYear());
    expect(screen.getByText(new RegExp(`© ${anio} Ana Perez`))).toBeInTheDocument();
    expect(screen.getByText(/ana@correo.com/)).toBeInTheDocument();
  });
});
