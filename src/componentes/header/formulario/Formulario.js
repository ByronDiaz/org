import { useState } from "react"
import "./Formulario.css"
import Campo from "../campos/"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"
const Formulario = (props) =>{
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [Titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {RegistrarColaborador, crearEquipo} = props

    const manejarDatos = (event) =>{
        event.preventDefault()
        console.log("manejando")
        let datosAEnviar = {
            Nombre: nombre,
            Puesto: puesto,
            Imagen: foto,
            equipo: equipo
        }
        console.log(datosAEnviar)
        RegistrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        console.log(Titulo, color)
        crearEquipo({ Titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarDatos}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa Nombre" required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresa enlace de foto" required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipo={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear nuevo equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa titulo" required 
                valor={Titulo} 
                actualizarValor={setTitulo}
            />
            <Campo 
                titulo="color" 
                placeholder="Ingresa el color en hexadecimal" 
                required
                valor={color} 
                actualizarValor={setColor}
                type="color"
            />
             <Boton>Registrar equipo</Boton>
           </form> 
    </section>
}

export default Formulario