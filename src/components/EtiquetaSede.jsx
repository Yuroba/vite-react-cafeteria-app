
import '../styles/styled_EtiquetaSede.css'

export const EtiquetaSede = ({nombre="La republica",direccion="xx-xx-xx",tel="999x999x999"})=>{
    return(
        <div className="wrapper-sede">
            <h3>{nombre}</h3>
            <ul>
                <li><p>{direccion}</p></li>
                <li><p>{tel}</p></li>
            </ul>
            <p>Atencion: <span>7am-7pm</span></p>
        </div>
    )
}