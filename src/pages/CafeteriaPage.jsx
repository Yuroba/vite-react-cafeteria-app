
import { Navbar } from "../components/navbbar"
import { EtiquetaCafeteria } from "../components/EtiquetaCafeteria"

import '../styles/styled_cafeteriapage.css'
import { EtiquetaCart } from "../components/CartComponent/EtiquetaCart"
import { SubCartShop } from "../components/CartComponent/SubEtiquetaCartShop"
import { useState } from "react"



export const Cafeteria = ()=>{
    const [showBuy, changeShow] = useState('off-shopcart')
    function handleShow(){
        if (showBuy === 'off-shopcart') {
            const itemList = [...document.querySelectorAll('.cart-items .item')];
            console.log(itemList)
            itemList.length > 0 ? changeShow('show-shopcart') : ""
        } else {
            const itemList = [...document.querySelectorAll('.cart-items .item')];
            console.log(itemList)
            itemList.length > 0 ? changeShow('off-shopcart') : ""
        }

    }
    
    const [cartitem, setChangeCartItem] = useState([])
    function addToCart(item){
        setChangeCartItem([...cartitem, item])
    }
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
                <section id="main-container">
                    <section id="container-cafeteria">
                        <div id="pack" className="cafeteriacontent pack">
                            <div>
                                <i class="fa-solid fa-boxes-packing"></i>
                                <h1>Pack</h1>
                            </div>
                            <div className="cafewrapper packs">
                                <EtiquetaCafeteria title="Cafe Express" precio="15.00" addToCart={addToCart}/>
                                <EtiquetaCafeteria addToCart={addToCart}/>
                                <EtiquetaCafeteria addToCart={addToCart}/>
                                <EtiquetaCafeteria title="Cafe Express" precio="15.00" addToCart={addToCart}/>
                            </div>
                        </div>
                        <div id="caliente" className="cafeteriacontent caliente">
                            <div>
                                <i class="fa-solid fa-mug-hot"></i>
                                <h1>Caliente</h1>
                            </div>
                            <div className="cafewrapper caliente">
                                <EtiquetaCafeteria addToCart={addToCart}/>
                                <EtiquetaCafeteria addToCart={addToCart}/>
                                <EtiquetaCafeteria addToCart={addToCart}/>
                                <EtiquetaCafeteria addToCart={addToCart}/>
                            </div>
                        </div>
                        <div id="frio" className="cafeteriacontent frio">
                            <div>
                                <i class="fa-regular fa-snowflake"></i>
                                <h1>Frio</h1>
                            </div>
                            <div className="cafewrapper frio">
                                <EtiquetaCafeteria />
                                <EtiquetaCafeteria />
                                <EtiquetaCafeteria />
                                <EtiquetaCafeteria />
                            </div>
                        </div>
                        <div id="desayuno" className="cafeteriacontent desayuno">
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
                        <div id="postre" className="cafeteriacontent postre">
                            <div>
                                <i class="fa-solid fa-ice-cream"></i>
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
                    <EtiquetaCart click={handleShow} items={cartitem}/>
                    
                </section>
                <SubCartShop click={handleShow} classnombre={showBuy}/>
            </main>
        </>
    )
}