
export const Cafeteria = ()=>{
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div id="wrapper-list">
                    <ul>
                        <li><a>Pack</a></li>
                        <li><a>Caliente</a></li>
                        <li><a>Frio</a></li>
                        <li><a>Desayuno</a></li>
                        <li><a>Postre</a></li>
                    </ul>
                </div>
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