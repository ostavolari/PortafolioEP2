import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Estudios from './Estudios';

const estudios = [{ id: 1, institucion: 'Duoc UC', titulo: 'Ingenieria', anio: '2024' }];

describe('Componente Estudios', () => {
  it('debe mostrar institucion, titulo y anio', () => {
    render(<Estudios estudios={estudios} />);
    expect(screen.getByText('Duoc UC')).toBeInTheDocument();
    expect(screen.getByText('Ingenieria')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });
});
