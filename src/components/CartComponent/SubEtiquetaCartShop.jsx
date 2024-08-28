import { Link } from 'react-router-dom'
import './styled_SubCartShop.css'


export const SubCartShop = ({changeShow, click, items})=>{
    return(
        <page id="page-shop-cart" className={changeShow}>
            <section id="shop-cart">
                <div className='icon-exit'>
                    <i onClick={click} class="fa-solid fa-xmark"></i>
                </div>
                <div className="cart-items">
                    {items.map((item,m)=> (
                        <div className={`item cart` + (m+1).toString()}>
                            <p>{item.title}</p>
                            <p>x{item.quantity} <span>{item.precio}</span></p>
                        </div>
                    ))}
                </div>
                <div className="cart-resume">
                    <p>Precio</p>
                    <p>{items.map(item => parseFloat(item.precio) * parseFloat(item.quantity))
                    .reduce((acc,el) => (parseFloat(acc)+parseFloat(el)).toFixed(2), 0.00)}</p>
                </div>
                <div id="cartbtns">
                    <Link className="cartbtn domicilio" to='/Checkout' state={{items: items}}><i class="fa-solid fa-truck"></i>Pedir a domicilio</Link>
                    <Link className="cartbtn cuenta" to="/Login">Ingresa con tu cuenta</Link>
                </div>
            </section>
        </page>
    )
}