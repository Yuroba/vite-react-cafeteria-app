
import { BtnPedir } from "./btn-pedir"
import '../styled-components/styled_etiqueta-oferta.css'

export const EtiquetaOferta = ()=>{
    return (
        <div id="container-oferta">
            <div id="content-oferta">
                <div id="wrapper-oferta">
                    <section id="content-text">
                        <h3>25% de descuento</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius leo vel lectus ultricies ultricies. Integer diam elit, 
                            varius sed tellus quis, consequat sodales tellus. Fusce vitae pellentesque orci, 
                            et imperd.
                        </p>
                        <BtnPedir />
                    </section>
                    <img src="https://images.unsplash.com/photo-1461010083959-8a5727311252?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Una imagen"></img>
                </div>
                <div className="title-oferta">
                    <h2>Ofertas</h2>
                </div>
            </div>
        </div>
    )
}