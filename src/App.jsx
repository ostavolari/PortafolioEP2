import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  BookOutlined,
  ProjectOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Personal from './components/layouts/Personal';
import Experiencia from './components/layouts/Experiencia';
import Estudios from './components/layouts/Estudios';
import Proyectos from './components/layouts/Proyectos';
import Contacto from './components/layouts/Contacto';
import Footer from './components/organisms/Footer';
import useProyectos from './hooks/useProyectos';
import './App.css';

const { Sider, Content } = Layout;

const perfilInicial = {
  nombre: 'Oscar Tavolari Galvez',
  titulo: 'Desarrollador Fullstack en desarrollo - Músico Sesionista',
  descripcion:
    'Estudiante de Analista Programador en Duoc UC (4.º semestre) enfocado en el desarrollo Full Stack, con un claro interés por el Backend. Me apasiona resolver problemas complejos donde la lógica, el procesamiento de datos y la arquitectura sean protagonistas. Como músico sesionista y sonidista aficionado, he desarrollado disciplina, trabajo en equipo y atención al detalle, cualidades que aplico día a día en la escritura de código limpio y estructurado.',
  // Profe no tengo ninguna foto donde este sobrio asi que puse la mas decente, disculpe
  foto: '/img/perfil.jpeg',
};

const experienciasIniciales = [
  {
    id: 1,
    empresa: 'Britt Coffee & Bakery',
    cargo: 'Barista',
    inicio: 'Septiembre 2022',
    termino: 'Enero 2023',
  },
  {
    id: 2,
    empresa: 'Comercial Lakshmi LTDA.',
    cargo: 'Repartidor',
    inicio: 'Marzo 2023',
    termino: 'Febrero 2024',
  },
  {
    id: 3,
    empresa: 'Banda Crater',
    cargo: 'Guitarrista, Bajista y Arreglista',
    inicio: 'Enero, 2019',
    termino: 'Actualidad',
  },
];

const estudiosIniciales = [
  {
    id: 1,
    institucion: 'Universidad Alberto Hurtado',
    titulo: 'Derecho',
    anio: '2022 - 2022 (No continuada)',
  },
  {
    id: 2,
    institucion: 'Universidad Metropolitana de Ciencias de la Educacion (Ex-Pedagogico)',
    titulo: 'Pedagogia en Musica',
    anio: '2023 - 2023 (No continuada)',
  },
  {
    id: 3,
    institucion: 'Duoc UC, Sede Maipu',
    titulo: 'Analista Programador',
    anio: '2025 - Actualidad',
  },
];

const proyectosIniciales = [
  {
    id: 1,
    titulo: 'Instrumentum',
    categoria: 'WebAPI RESTful',
    imagen: '/img/MER-instrumentum.png',
    repositorio: 'https://github.com/vicbustosf/Instrumentum_Bustos_Tavolari_010D.git',
  },
  {
    id: 2,
    titulo: 'Tienda DecoHogar',
    categoria: 'HTML',
    imagen: '/img/decohogar.png',
    repositorio: 'https://github.com/ostavolari/Evaluacion_Parcial_1-CASO-5_TIENDA_DECOHOGAR.git',
  },
];

// Solo GitHub, sin LinkedIn
const redesIniciales = [
  { id: 'github', nombre: 'GitHub', url: 'https://github.com/ostavolari' },
];

const contactoInicial = {
  correo: 'os.tavolari@duocuc.cl',
  ubicacion: 'Santiago, Chile',
};

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────────────────────
function App() {
  // collapsed: controla si el menu lateral esta abierto o compacto
  const [collapsed, setCollapsed] = useState(false);

  // pagina: guarda en que seccion esta parado el usuario ('1' a '5')
  // con esto hacemos la navegacion sin necesidad de React Router
  const [pagina, setPagina] = useState('1');

  // Los datos se guardan en estado para que React los "recuerde" entre renders
  const [perfil] = useState(perfilInicial);
  const [experiencias] = useState(experienciasIniciales);
  const [estudios] = useState(estudiosIniciales);
  const [redes] = useState(redesIniciales);
  const [contacto] = useState(contactoInicial);

  // useProyectos maneja la carga simulada (timeout de 500ms) y el filtro de busqueda
  const { proyectos, cargando, busqueda, setBusqueda } = useProyectos(proyectosIniciales);

  // useEffect corre una sola vez al montar el componente
  // actualiza el titulo que aparece en la pestana del navegador
  useEffect(() => {
    document.title = `${perfil.nombre} | Portafolio`;
  }, [perfil.nombre]);

  // funcion corta para saltar directo a la seccion de Contacto
  const irAContacto = () => setPagina('5');

  return (
    // Layout de Ant Design: envuelve todo y usa flex por debajo
    <Layout className="app-layout">

      {/* Sider: la barra lateral con el menu. Se puede plegar con el boton abajo */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">Mi Portafolio</div>

        {/* Menu: cada item tiene una key numerica.
            selectedKeys marca cual esta activo.
            onClick actualiza el estado 'pagina' */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pagina]}
          onClick={({ key }) => setPagina(key)}
          items={[
            { key: '1', icon: <UserOutlined />, label: 'Inicio' },
            { key: '2', icon: <SolutionOutlined />, label: 'Experiencia' },
            { key: '3', icon: <BookOutlined />, label: 'Estudios' },
            { key: '4', icon: <ProjectOutlined />, label: 'Proyectos' },
            { key: '5', icon: <MailOutlined />, label: 'Contacto' },
          ]}
        />
      </Sider>

      <Layout>
        <Content className="contenido">
          {/* Renderizado condicional: solo se muestra el componente
              cuya key coincida con el valor actual de 'pagina' */}
          {pagina === '1' && <Personal perfil={perfil} onContacto={irAContacto} />}
          {pagina === '2' && <Experiencia experiencias={experiencias} />}
          {pagina === '3' && <Estudios estudios={estudios} />}
          {pagina === '4' && (
            <Proyectos
              proyectos={proyectos}
              cargando={cargando}
              busqueda={busqueda}
              setBusqueda={setBusqueda}
            />
          )}
          {pagina === '5' && <Contacto redes={redes} />}
        </Content>

        {/* Footer siempre visible, no depende de que pagina este abierta */}
        <Footer
          nombre={perfil.nombre}
          correo={contacto.correo}
          ubicacion={contacto.ubicacion}
        />
      </Layout>
    </Layout>
  );
}

/*
----------- CONVERSACION CON IA (Gemini flash) --------------------------------

- Esclavo, que puedo hacer para crear un menu lateral que cambie de seccion en una sola
pagina sin enredarme y donde guardo mis datos sin complicarme con carpetas extra?

- La solucion:

Para resolver eso de la forma mas basica y limpia posible, lo que podes hacer es:

1. Un estado simple con un numero para saber en que pestana estas.
   En lugar de instalar React Router, usas useState con '1', '2', etc.

   const [pagina, setPagina] = useState('1');

2. App.jsx como el "cerebro" donde viven todos tus datos.
   Guarda la info directamente en estados dentro de App.jsx.
   App es la duena de la informacion y se la presta a cada vista con props.

3. Conectar el menu de Ant Design con ese numero.
   Cada boton del menu tiene key: '1', key: '2', etc.
   Al hacer clic se llama setPagina(key) y React actualiza todo.

4. Mostrar solo la seccion que coincida con el numero actual.
   En el contenido usas && para cada pantalla:

   {pagina === '1' && <Personal ... />}
   {pagina === '2' && <Experiencia ... />}

   Si pagina vale '1', solo se dibuja Personal. Si cambia a '2', desaparece
   Personal y aparece Experiencia. Todo sin recargar la pagina.

5. Footer fijo abajo, fuera de las condiciones. Siempre visible.

Por que hacerlo asi?
Porque es facil de entender, facil de explicar en la evaluacion
y no necesita nada avanzado.
*/

export default App;
