import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header1 from './componentes/header/Header1';
import Formulario from './componentes/header/formulario/Formulario';
import MiOrg from './componentes/header/miOrg';
import Equipo from './componentes/header/equipo';
import Footer from './componentes/header/footer';

function App() {
  const [mostrarForm,actualizarmostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programacion",
    Imagen: "https://github.com/harlandlohora.png",
    Puesto: "Dueña",
    Nombre: "Camila",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    Imagen: "https://github.com/harlandlohora.png",
    Puesto: "Head",
    Nombre: "Byron Diaz",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front-End",
    Imagen: "https://github.com/harlandlohora.png",
    Puesto: "Head",
    Nombre: "Byron Diaz",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Front-End",
    Imagen: "https://github.com/harlandlohora.png",
    Puesto: "Head",
    Nombre: "Harland",
    fav: false
  }
])

//Estado para actualizar color de fondo
const [EquipoColor, setEquipoColor] = useState(
  [
    {
      id: uuid(),
      Titulo:"Programacion",
       colorPrimario: "#57C278",
       colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      Titulo:"Front-End",
       colorPrimario: "#82CFFA",
       colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      Titulo:"Data Science",
       colorPrimario: "#A6D157",
       colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      Titulo:"DevOps",
       colorPrimario: "#E06B69",
       colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      Titulo:"Ux y Diseño",
       colorPrimario: "#DB6EBF",
       colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      Titulo:"Movil",
       colorPrimario: "#FFBA05",
       colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      Titulo:"Innovacion y Gestion",
       colorPrimario: "#FF8A29",
       colorSecundario: "#FFEEDF"
    }
]
)

  //Concepto tenario --> condicion ? seMuestra :noseMuestra
  //condicion && seMuestra
  const cambiarMostar = () =>{
    actualizarmostrar(!mostrarForm)
  }

  
  //Registrar colaborador
  const RegistrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador",colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Funcion para eliminar un colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminando este colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador => colaborador.id !== id))
    console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }

  //funcion para actualizar el color de los equipos
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, " ID: ",id)

    const actualizarColor = EquipoColor.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipoColor(actualizarColor)
  }
  //funcion para dar like
  const like = (id) =>{

    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  //Crear nuevo equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    console.log("1",setEquipoColor)
    setEquipoColor([...EquipoColor, {...nuevoEquipo, id: uuid() }])
    console.log(setEquipoColor)
  }

  return (
    <div>
      <Header1/>
      
      {
        mostrarForm && <Formulario 
        equipos={EquipoColor.map((equipo)=>equipo.Titulo)}
        RegistrarColaborador={RegistrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostar={cambiarMostar}/>
      {
        EquipoColor.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.Titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.Titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
