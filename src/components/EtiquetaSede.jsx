
import '../styles/styled_EtiquetaSede.css'

export const EtiquetaSede = ({nombre,direccion,img})=>{
    return(
        <div id="wrapper-sedes">
            <figure>
                <img src="https://images.unsplash.com/photo-1690126671026-623dc4f8370a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img de sede"></img>
            </figure>
            <div id="sedes-text">
                <h3>{nombre}</h3>
                <p>{direccion}</p>
            </div>
        </div>
    )
}