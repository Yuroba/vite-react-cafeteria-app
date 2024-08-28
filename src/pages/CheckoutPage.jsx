import { Navbar } from "../components/navbbar"
import { useLocation } from "react-router-dom"
import '../styles/styled_checkoutpage.css'

export const CheckoutPage = ()=>{
    const location = useLocation();
    const {items} = location.state || { items: []}
    console.log("location ",location)
    console.log("item ", items)
    return(
        <>
        <header><Navbar/></header>
        <main id="main-checkoutpage">
            <section id="checkout-personal">
                <h3>Facturacion/Boleta</h3>
                <div id="container-personal">
                    <div id="wrapper-personal">
                        <div>
                            <label htmlFor="checkoutnombre">Nombre</label>
                            <input id="checkoutnombre"type="text" required name="entrynombrecheckout" />
                        </div>
                        <div>
                            <label htmlFor="checkoutapellido">Apellidos</label>
                            <input id="checkoutapellido"type="text" required name="entryapellidocheckout" />
                        </div>
                        <div>
                            <label htmlFor="checkoutcorreo">Correo electronico</label>
                            <input id="checkoutcorreo"type="text" required name="entrycorreocheckout" />
                        </div>
                        <div>
                            <label htmlFor="checkouttelefono">Telefono</label>
                            <input id="checkouttelefono"type="number" required name="entrytelefonocheckout" />
                        </div>
                        <div>
                            <label htmlFor="checkoutdni">DNI/RUC</label>
                            <input id="checkoutdni"type="text" required name="entrydnicheckout" />
                        </div>
                    </div>
                    <div id="container-direccion">
                        <div>
                            <label htmlFor="checkoutdirección">Dirección</label>
                            <input id="checkoutdirección"type="text" required name="entrydireccióncheckout" />
                            <button type="button"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="checkout-detalle">
                <h3>Detalle</h3>
                <div className="detalle productos">
                    <p>Productos <span>precio</span></p>
                    <ul className="productos-list">
                        <li>
                            <p>Soy una lista de producto<span>xn</span><span>$30</span></p>
                        </li>
                        {items.map(item => (
                            <li>
                                <p>{item.title}<span>x{item.quantity}</span><span>${item.precio}</span></p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="detalle iva">
                    <p>IVA <span>0.18</span></p>
                </div>
                <div className="detalle entrega">
                    <p>Entrega <span>$10</span></p>
                </div>
                <button type="button">Realizar Pedido</button>
            </section>
        </main>
        </>
    )
}