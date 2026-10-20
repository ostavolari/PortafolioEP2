import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experiencia from './Experiencia';

const experiencias = [
  {
    id: 1,
    empresa: 'Acme',
    cargo: 'Desarrolladora',
    inicio: 'Ene 2023',
    termino: 'Actualidad',
  },
];

describe('Componente Experiencia', () => {
  it('debe mostrar empresa, cargo y fechas', () => {
    render(<Experiencia experiencias={experiencias} />);
    expect(screen.getByText('Acme')).toBeInTheDocument();
    expect(screen.getByText('Desarrolladora')).toBeInTheDocument();
    expect(screen.getByText('Ene 2023 - Actualidad')).toBeInTheDocument();
  });
});
