
import { Navbar } from "../components/navbbar"
import { EtiquetaCafeteria } from "../components/EtiquetaCafeteria"

import '../styles/styled_cafeteriapage.css'

export const Cafeteria = ()=>{
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main id="main-cafeteriapage">
                <nav id="navbar-list">
                    <ul>
                        <li><a href="#pack">Pack</a></li>
                        <li><a href="#caliente">Caliente</a></li>
                        <li><a href="#frio">Frio</a></li>
                        <li><a href="#desayuno">Desayuno</a></li>
                        <li><a href="#postre">Postre</a></li>
                    </ul>
                </nav>
                <section id="container-cafeteria">
                    <div id="pack">
                        <div>
                            <h1>Pack</h1>
                        </div>
                        <div className="cafewrapper packs">
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                        </div>
                    </div>
                    <div id="caliente">
                        <div>
                            <h1>Caliente</h1>
                        </div>
                        <div className="cafewrapper caliente">
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                        </div>
                    </div>
                    <div id="frio">
                        <div>
                            <h1>Frio</h1>
                        </div>
                        <div className="cafewrapper frio">
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                        </div>
                    </div>
                    <div id="desayuno">
                        <div>
                            <i class="fa-solid fa-utensils"></i>
                            <h1>Desayuno</h1>
                        </div>
                        <div className="cafewrapper desayuno">
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                        </div>
                    </div>
                    <div id="postre">
                        <div>
                            <h1>Postre</h1>
                        </div>
                        <div className="cafewrapper postre">
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                            <EtiquetaCafeteria />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}