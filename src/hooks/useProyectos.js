import { useEffect, useState } from 'react';

// Hook para manejar la lista de proyectos
// recibe el array inicial y se encarga de la carga simulada y el filtro
export default function useProyectos(proyectosIniciales = []) {
  const [proyectos, setProyectos] = useState([]);

  // cargando: true mientras se "espera" la carga (simulamos un fetch con setTimeout)
  /*La IA me recomendó esto para simular un fetch real al backend, 
  mostrar spinners al cargar y hacer el código más profesional.*/
  const [cargando, setCargando] = useState(true);

  //texto que escribe el usuario en el buscador
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // simula una carga de 500ms (como si fuera real)
    const temporizador = setTimeout(() => {
      setProyectos(proyectosIniciales);
      setCargando(false);
    }, 500);

    // si el componente se desmonta antes de los 500ms, cancela el timer
    return () => clearTimeout(temporizador);
  }, [proyectosIniciales]);

  // filter recorre el array y solo deja los proyectos cuyo titulo
  // contenga el texto de busqueda (sin importar mayusculas)
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
