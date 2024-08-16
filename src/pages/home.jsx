import { Navbar } from '../components/navbbar';
import { BtnRecommend } from '../components/Btns';
import { EtiquetaOferta } from '../components/EtiquetaOferta';


export const Home = ()=>{
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <section id="container-home">
                <section id="wrapper-home-img">
                    <img src="https://images.unsplash.com/photo-1518552782168-0396d0079475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="1. imagen"></img>
                    <img src="https://images.unsplash.com/photo-1495862433577-132cf20d7902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2. imagen"></img>
                    <section id="wrapper-home-entrada">
                        <h2>!Good morningQ¡</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque finibus, libero nec molestie ultrices, dui ligula consequat justo,
                            lacinia suscipit purus mauris in metus. Ut neque ante, tristique ut lacus molestie, 
                        </p>
                    </section>
                </section>

                <section id="container-home-text">
                    <div id="wrapper-home-text">
                        <div>
                            <h2>a treasure for everyone</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque finibus, libero nec molestie ultrices, dui ligula consequat justo, 
                                lacinia suscipit purus mauris in metus. Ut neque ante, tristique ut lacus molestie, 
                            </p>
                        </div>
                        <div>
                            <h2>One Click to Refreshing Delights</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus, libero 
                            </p>
                        </div>
                    </div>
                    <BtnRecommend />
                </section>
            </section>
            <section id="container-ofertas">
                <EtiquetaOferta />
            </section>
            <section id="container-catalogo">

            </section>
        </main>
        </>
    )
}