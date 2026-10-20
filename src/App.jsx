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

// Datos iniciales del portafolio personal (fuente de verdad en App)
const perfilInicial = {
  
  nombre: 'Oscar Tavolari Galvez',
  titulo: 'Desarrollador Fullstack en desarrollo, músico sesionista',
  descripcion:
    'Estudiante de Análisis Programador (4.º semestre, Duoc UC) enfocado en el desarrollo Full Stack, con una clara preferencia por el Backend. Me motivan los proyectos desafiantes donde la lógica, los números y el procesamiento de datos sean los protagonistas. Aún no he tenido la oportunidad de participar en un proyecto real, fuera de DuocUC. Además, soy músico sesionista (guitarra y bajo) y sonidista aficionado, lo que me aporta disciplina, buena oreja para el trabajo en equipo y rigor con la estructura.',
  // Profe no tengo ninguna foto donde esté sobrio así que puse la más decente, disculpe
  foto: '/img/perfil.jpeg',
};

const experienciasIniciales = [
  {
    id: 1,
    empresa: 'Britt Coffee & Bakery',
    cargo: 'Barista',
    inicio: 'Septiembre 2022',
    termino: 'Enero 2023'
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
    anio: '2022 - 2022(No continuada)',
  },
  {
    id: 2,
    institucion: 'Universidad Metropolitana de Ciencias de la Educación (Ex-Pedagógico)',
    titulo: 'Pedagogía en Música',
    anio: '2023 - 2023 (No continuada)',
  },
  {
    id: 3,
    institucion: 'Duoc UC, Sede Maipú',
    titulo: 'Analista Programador',
    anio: '2025 - Actualidad',
  }
];

const proyectosIniciales = [
  {
    id: 1,
    titulo: 'Instrumentum',
    categoria: 'WebAPI RESTful',
    imagen: 'public/img/MER-instrumentum.png',
    repositorio: 'https://github.com/vicbustosf/Instrumentum_Bustos_Tavolari_010D.git'
  },
  {
    id: 2,
    titulo: 'Tienda DecoHogar',
    categoria: 'HTML',
    imagen: 'public/img/decohogar.png',
    repositorio: 'https://github.com/ostavolari/Evaluacion_Parcial_1-CASO-5_TIENDA_DECOHOGAR.git',
  }
  
];

const redesIniciales = [
  { id: 'github', nombre: 'GitHub', url: 'https://github.com/ostavolari' },
];

const contactoInicial = {
  correo: 'os.tavolari@duocuc.cl',
  ubicacion: 'Santiago, Chile',
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [pagina, setPagina] = useState('1');

  // Estados de datos administrados en App
  const [perfil] = useState(perfilInicial);
  const [experiencias] = useState(experienciasIniciales);
  const [estudios] = useState(estudiosIniciales);
  const [redes] = useState(redesIniciales);
  const [contacto] = useState(contactoInicial);

  const { proyectos, cargando, busqueda, setBusqueda } = useProyectos(proyectosIniciales);

  useEffect(() => {
    document.title = `${perfil.nombre} | Portafolio`;
  }, [perfil.nombre]);

  const irAContacto = () => setPagina('5');

  return (
    <Layout className="app-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">Mi Portafolio</div>
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
----------- CONVERSACIÓN CON IA (Gemini 3.8 flash high) ----------------------

- ¿Esclavo, q puedo hacer para crear un menu lateral que cambie de sección en una sola 
página sin enredarme y dónde guardo mis datos sin complicarme con carpetas extra?"

- La solución:

Para resolver eso de la forma más básica y limpia posible , lo que puedes hacer es: 1. Crear un estado simple con un número para saber en qué pestaña estás

En lugar de instalar React Router o sistemas avanzados de navegación, puedes usar un simple useState que guarde un texto o número (por ejemplo, '1' para Inicio, '2' para Experiencia, etc.):

jsx
const [pagina, setPagina] = useState('1');
2. Usar App.jsx como el "cerebro" donde viven todos tus datos

Para no crear carpetas raras ni enredarte con archivos de datos por fuera:

Guardas tu información directamente en estados dentro de App.jsx (perfil, estudios, experiencias):
jsx
const [perfil] = useState(perfilInicial);
const [experiencias] = useState(experienciasIniciales);

Así cumples la regla de que App es la dueña de la información, y simplemente se la "presta" a cada vista por medio de props.

3. Conectar el menú lateral de Ant Design con ese número

En la barra lateral (Sider), creas un <Menu> donde cada botón tiene una clave (key: '1', key: '2'). Al hacer clic, le dices a React que actualice la variable pagina:

jsx
<Menu
  selectedKeys={[pagina]}
  onClick={({ key }) => setPagina(key)}
  items={[
    { key: '1', label: 'Inicio' },
    { key: '2', label: 'Experiencia' },
    // ...
  ]}
/>
4. Mostrar solo la sección que coincida con el número actual

En la zona del contenido (<Content>), colocas una condición con && para cada pantalla:

jsx
{pagina === '1' && <Personal perfil={perfil} onContacto={() => setPagina('5')} />}
{pagina === '2' && <Experiencia experiencias={experiencias} />}
{pagina === '3' && <Estudios estudios={estudios} />}
Si pagina vale '1', React solo dibuja Personal.
Cuando el usuario toca "Experiencia" en el menú, pagina pasa a valer '2', Personal desaparece y se muestra Experiencia. Todo sin recargar la página web.
5. Dejar el Footer fijo abajo

Colocas el <Footer /> justo debajo del <Content>, pero fuera de las condiciones. Así se muestra siempre, sin importar qué sección esté abierta.

¿Por qué hacerlo así?

Porque es fácil de entender, fácil de explicar y no requiere nada avanzado: solo un menú que cambia un número, y un contenido que muestra la pantalla que le corresponde a ese número.
*/
export default App;
