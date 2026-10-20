import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Etiqueta from './Etiqueta';

describe('Componente Etiqueta (Átomo)', () => {
  it('debe renderizar el contenido hijo', () => {
    render(<Etiqueta color="blue">React</Etiqueta>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
