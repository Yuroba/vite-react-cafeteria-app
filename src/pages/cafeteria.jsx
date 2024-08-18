
import { Navbar } from "../components/navbbar"

import '../styles/styled_cafeteria.css'

export const Cafeteria = ()=>{
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <nav id="navbar-list">
                    <ul>
                        <li><a>Pack</a></li>
                        <li><a>Caliente</a></li>
                        <li><a>Frio</a></li>
                        <li><a>Desayuno</a></li>
                        <li><a>Postre</a></li>
                    </ul>
                </nav>
                <section id="container-cafeteria">
                    <div id="pack">
                        <h3>Pack</h3>
                        <div id="wrapper-packs">

                        </div>
                    </div>
                    <div id="caliente">
                        <h3>Caliente</h3>
                        <div id="wrapper-packs">
                            
                        </div>
                    </div>
                    <div id="frio">
                        <h3>Frio</h3>
                        <div id="wrapper-packs">
                            
                        </div>
                    </div>
                    <div id="desayuno">
                        <h3>Desayuno</h3>
                        <div id="wrapper-packs">
                            
                        </div>
                    </div>
                    <div id="postre">
                        <h3>Postre</h3>
                        <div id="wrapper-packs">
                            
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}