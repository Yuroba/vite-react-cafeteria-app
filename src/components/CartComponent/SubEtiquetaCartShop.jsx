import './styled_SubCartShop.css'
export const SubCartShop = ({classnombre, click})=>{
    return(
        <page id="page-shop-cart" className={classnombre}>
            <section id="shop-cart">
                <div className='icon-exit'>
                    <i onClick={click} class="fa-solid fa-xmark"></i>
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
                </div>
                <div className="cart-resume">
                    <p>Precio</p>
                    <p>45.00</p>
                </div>
                <div id="cartbtns">
                    <button className="cartbtn domicilio"><i class="fa-solid fa-truck"></i>Pedir a domicilio</button>
                    <button className="cartbtn cuenta">Ingresa con tu cuenta</button>
                </div>
            </section>
        </page>
    )
}