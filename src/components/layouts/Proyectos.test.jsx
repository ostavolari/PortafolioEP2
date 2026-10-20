import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Proyectos from './Proyectos';

const proyectos = [
  {
    id: 1,
    titulo: 'Tienda',
    categoria: 'Web',
    imagen: '',
    repositorio: 'https://github.com/a/tienda',
  },
  {
    id: 2,
    titulo: 'Dashboard',
    categoria: 'React',
    imagen: '',
    repositorio: 'https://github.com/a/dash',
  },
];

describe('Componente Proyectos', () => {
  it('debe mostrar el título de la sección', () => {
    render(<Proyectos />);
    expect(screen.getByRole('heading', { name: 'Desarrollos y Proyectos' })).toBeInTheDocument();
  });

  it('debe mostrar los proyectos con su enlace al repositorio', () => {
    render(<Proyectos proyectos={proyectos} />);
    expect(screen.getByText('Tienda')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Ver repositorio' })).toHaveLength(2);
  });

  it('debe mostrar el estado de carga', () => {
    render(<Proyectos cargando />);
    expect(screen.getByText(/Cargando proyectos/)).toBeInTheDocument();
  });

  it('debe mostrar un mensaje si no hay proyectos', () => {
    render(<Proyectos proyectos={[]} />);
    expect(screen.getByText('No hay proyectos para mostrar.')).toBeInTheDocument();
  });

  it('debe avisar el texto de búsqueda', () => {
    const setBusqueda = vi.fn();
    render(<Proyectos proyectos={proyectos} setBusqueda={setBusqueda} />);
    fireEvent.change(screen.getByPlaceholderText('Buscar proyecto por título'), {
      target: { value: 'tie' },
    });
    expect(setBusqueda).toHaveBeenCalledWith('tie');
  });
});
