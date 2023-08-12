import "./campo.css"
import { useState } from "react"

const Campo = (props) => {
    const placeholderModoficado = `${props.placeholder}*`
    //destructuracion 
    //la ventaja de hacer una destructuracion es que le podemos
    //dar un valor por si no es enviado en la prop
    const { type = "text" } = props
    
    console.log(type)

    const manejarCambio = (e) => {
        //aqui por medio de props el formulario nos manda en que
        //estado esta el input
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModoficado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo