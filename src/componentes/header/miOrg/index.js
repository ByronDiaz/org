import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks
    //userState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)

    //aqui definimos el estado que este caso va ser un bolean
    //const [Mostar,actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
        //console.log("Mostar/ocultar", !Mostar)
        //actualizarMostrar(!Mostar)
    //}
    return <section className="orSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostar}/>
    </section>
}
export default MiOrg