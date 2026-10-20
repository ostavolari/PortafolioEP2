import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useContador } from './useContador';

describe('useContador', () => {
  it('debe comenzar en el valor inicial', () => {
    const { result } = renderHook(() => useContador(5));
    expect(result.current.contador).toBe(5);
  });

  it('debe incrementar el contador', () => {
    const { result } = renderHook(() => useContador(0));
    act(() => {
      result.current.incrementar();
    });
    expect(result.current.contador).toBe(1);
  });

  it('debe volver al valor inicial al reiniciar', () => {
    const { result } = renderHook(() => useContador(3));
    act(() => {
      result.current.incrementar();
      result.current.reiniciar();
    });
    expect(result.current.contador).toBe(3);
  });
});
