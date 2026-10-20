import { useState } from 'react';

// Hook utilitario simple: contador con valor inicial configurable
// lo usamos para practicar la logica de hooks personalizados
export const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  // incrementar suma 1 al valor actual
  // usamos la forma funcional (valor => valor + 1) para evitar valores desactualizados
  const incrementar = () => setContador((valor) => valor + 1);

  // reiniciar vuelve al valor con el que se creo el hook
  const reiniciar = () => setContador(valorInicial);

  return { contador, incrementar, reiniciar };
};
