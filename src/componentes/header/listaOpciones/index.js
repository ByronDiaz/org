import "./listaOpciones.css"

const ListaOpciones = (props) =>{

    //metodo map  Equipos.map((ejemplo, index)=>{
    //return <option></option>
    //})
   

    const manejarCambio = (e) =>{
        console.log("Cambiaste", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
            {props.equipo.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}

        </select>
    </div>
}

export default ListaOpciones