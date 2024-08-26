
import '../styles/styled_EtiquetaSede.css'

export const EtiquetaSede = ({nombre="La republica",direccion="xx-xx-xx",tel="999x999x999", id})=>{
    return(
        <div className="wrapper-sede">
            <input type="radio" id={id} name="sede" className="radio-sede" />
            <label htmlFor={id}>
                <h3>{nombre}</h3>
                <ul>
                    <li><p>{direccion}</p></li>
                    <li><p>{tel}</p></li>
                </ul>
                <p>Atencion: <span>7am-7pm</span></p>
            </label>
        </div>
    )
}