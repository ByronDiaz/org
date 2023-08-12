import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    
const { colorPrimario, colorSecundario, Titulo, id} = props.datos
//obtenemos los valores que estan en la props.colaboradores
const {colaboradores, eliminarColaborador, actualizarColor, like} = props

const estiloTitulo = { borderColor: colorPrimario }
    return <>
        { 
            colaboradores.length > 0 &&  <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
                <input
                    type="color"
                    className="inputColor"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
            <h3 style={estiloTitulo}>{Titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                   />)
                }
            </div>
            </section>
        }
    </>
}
export default Equipo