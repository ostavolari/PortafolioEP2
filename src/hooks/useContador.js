import { useState } from 'react';

export const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);
  const incrementar = () => setContador((valor) => valor + 1);
  const reiniciar = () => setContador(valorInicial);
  return { contador, incrementar, reiniciar };
};
