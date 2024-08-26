import { EtiquetaSede } from "../components/EtiquetaSede"
import { Foot } from "../components/footerInfo"
import { Navbar } from "../components/navbbar"
import '../styles/styled_sedespage.css'

export const Sedes = ()=>{
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main id="main-sedespage">
                <div>
                    <h1>Sedes</h1>
                </div>
                <section id="container-sedespage">
                    <div id="container-sedes">
                        <EtiquetaSede id="sede1"/>
                        <EtiquetaSede id="sede2" />
                        <EtiquetaSede id="sede3"/>
                        <EtiquetaSede id="sede4"/>
                        <EtiquetaSede id="sede5"/>
                    </div>
                    <div id="container-map">

                    </div>
                </section>
            </main>
            <footer>
                <Foot />
            </footer>
        </>
    )
}