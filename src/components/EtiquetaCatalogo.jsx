import '../styles/styled_EtiquetaCatalogo.css'
import { BtnPedir } from './Btns'

export const EtiquetaCatalogo = ({img,title,carga})=>{
    return(
        <div id="container-catalogo">
            <div id="wrapper-catalogo-img">
                <figure>
                    <img className="imagen" src={img} alt="Un cafe"></img>
                </figure>
            </div>
            <div id="wrapper-catalogo-text">
                <div>
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque finibus, libero 
                    </p>
                </div>
                <div>
                    <h3>Carga</h3>
                    <p>
                        {carga}
                    </p>
                </div>
                <BtnPedir />
            </div>
        </div>
    )
}