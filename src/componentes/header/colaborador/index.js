import "./colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { Nombre, Puesto, Imagen, equipo, id,fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>

        <div className="encabezado" style={{background: colorPrimario}}>
            <img src={Imagen} alt={Nombre}/>
        </div>
        <div className="info">
            <h4>{Nombre}</h4>
            <h5>{Puesto}</h5>
            {fav ?<AiFillHeart color={colorPrimario} onClick={() => like(id)}/> :<AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}
export default Colaborador