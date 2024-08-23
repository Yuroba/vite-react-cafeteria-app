import './styled_EtiquetaCart.css'
import { useState } from 'react'
import { SubCartShop } from './SubEtiquetaCartShop';

export const EtiquetaCart = ({items, click})=>{
    console.log("en cart",items)
    return (
        <>
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
                {items.map((item,n) => (
                    <div className={`item cart` + (n+1).toString()}>
                        <p>{item.title}</p>
                        <p>x1 <span>{item.precio}</span></p>
                    </div>
                ))}
            </div>
            <div className="cart-options">
                <button className='btncart buy' onClick={click}><i class="fa-solid fa-bag-shopping"></i></button>
                <button className='btncart trash'><i class="fa-solid fa-trash-can"></i></button>
                <button className='btncart delete'><i class="fa-solid fa-delete-left"></i></button>
            </div>
        </section>
        </>
    )
}