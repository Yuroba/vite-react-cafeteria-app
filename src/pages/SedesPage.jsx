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
                        <EtiquetaSede />
                        <EtiquetaSede />
                        <EtiquetaSede />
                        <EtiquetaSede />
                        <EtiquetaSede />
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