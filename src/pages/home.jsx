import { Navbar } from '../components/navbbar';
import { BtnRecommend } from '../components/Btns';
import { EtiquetaOferta } from '../components/EtiquetaOferta';
import { EtiquetaCatalogo } from '../components/etiquetacatalogo';
import { EtiquetaSede } from '../components/EtiquetaSede';

import imagen from '../assets/pngs/lianzas1.png'
import imggranos from '../assets/pngs/semilla-de-cafe.png'
import imggranos2 from '../assets/pngs/Grano de cafe.png'

export const Home = ()=>{
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <section id="container-introduction">
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
            <section id="ofertas">
                <EtiquetaOferta />
            </section>
            <section id="recommend">
                <h1>Recommend</h1>
                <div id="wrapper-recommend">
                    <EtiquetaCatalogo img="https://images.unsplash.com/photo-1481455473976-c280ae7c10f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Express" carga="Muy cargado" />
                    <EtiquetaCatalogo img="https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="biccioto" carga="Muy cargado" />
                    <EtiquetaCatalogo img="https://images.unsplash.com/photo-1486122151631-4b5aaa3ac70d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="prro bermudes" carga="Muy cargado" />

                </div>
            </section>
            <section id="sedes">
                <div id="container-sedes">
                    <h1>Sedes</h1>
                    <EtiquetaSede />
                </div>
            </section>
            <section id="promo">
                <div id="container-promo">
                    <div id="wrapper-promo">
                        <h1>Consigue promos, descuentos, noticias, etc.</h1>
                        <form action="" method="POST">
                            <input type="email" placeholder='Your email Address' name="email"></input>
                            <button type="submit">Suscribete</button>
                        </form>
                    </div>
                </div>
                <figure className="img-lianas">
                    <img src={imagen}></img>
                    <img src={imagen}></img>
                </figure>
                <figure className="img-granos1">
                    <img src={imggranos}></img>
                </figure>
                <figure className="granos gra2">
                    <img src={imggranos2}></img>
                </figure>
                <figure className="granos gra3">
                    <img src={imggranos2}></img>
                </figure>
            </section>
        </main>
        <footer>
            <div id="wrapper-info">

            </div>
        </footer>
        </>
    )
}