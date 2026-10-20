import { useEffect, useState } from 'react';

export default function useProyectos(proyectosIniciales = []) {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setProyectos(proyectosIniciales);
      setCargando(false);
    }, 500);

    return () => clearTimeout(temporizador);
  }, [proyectosIniciales]);

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return {
    proyectos: proyectosFiltrados,
    cargando,
    busqueda,
    setBusqueda,
  };
}
