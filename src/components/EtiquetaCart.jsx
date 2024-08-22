import '../styles/styled_EtiquetaCart.css'

export const EtiquetaCart = ({item, unit, precio})=>{
    return (
        <section className="cart-container">
            <div className="cart-title">
                <i class="fa-solid fa-cart-shopping"></i>
                <h3>Carrito</h3>
            </div>
            <div className="cart-items">
                <div className="item cart1">
                    <p>Cafe express</p>
                    <p>x1 <span>15.00</span></p>
                </div>
                <div className="item cart2">
                    <p>Cafe express</p>
                    <p>x1 <span>15.00</span></p>
                </div>
                <div className="item cart3">
                    <p>Cafe express</p>
                    <p>x1 <span>15.00</span></p>
                </div>
                <div className="item cart4">
                    <p>Cafe express</p>
                    <p>x1 <span>15.00</span></p>

                </div>
            </div>
            <div className="cart-options">
                <i class="fa-solid fa-bag-shopping"></i>
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-delete-left"></i>
            </div>
        </section>
    )
}