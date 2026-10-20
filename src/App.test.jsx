import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

const irA = async (nombre) => {
  await act(async () => {
    fireEvent.click(screen.getByRole('menuitem', { name: new RegExp(nombre) }));
  });
};

describe('Componente App', () => {
  it('Determina si se muestra Inicio', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Quien soy?' })).toBeInTheDocument();
  });

  it('Determina si se muestra Experiencia', async () => {
    render(<App />);
    await irA('Experiencia');
    expect(screen.getByRole('heading', { name: 'Experiencia Laboral' })).toBeInTheDocument();
  });

  it('Determina si se muestra Estudios', async () => {
    render(<App />);
    await irA('Estudios');
    expect(screen.getByRole('heading', { name: 'Estudios' })).toBeInTheDocument();
  });

  it('Determina si se muestra Proyectos', async () => {
    render(<App />);
    await irA('Proyectos');
    expect(screen.getByRole('heading', { name: 'Desarrollos y Proyectos' })).toBeInTheDocument();
    expect(await screen.findByText('Instrumentum')).toBeInTheDocument();
  });

  it('Determina si se muestra Contacto', async () => {
    render(<App />);
    await irA('Contacto');
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument();
  });

  it('Debe ir a Contacto al presionar el boton Contactame', async () => {
    render(<App />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Contactame' }));
    });
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument();
  });

  it('Debe mostrar el footer y actualizar el titulo del documento', () => {
    render(<App />);
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()}`))).toBeInTheDocument();
    expect(document.title).toContain('Portafolio');
  });
});
