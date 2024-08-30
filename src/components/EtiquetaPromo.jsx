import '../styles/styled_EtiquetaPromo.css'
import { useState, useRef, useEffect } from 'react'



export const EtiquetaPromo = ()=>{
    const elementCheck = useRef(null)

    const checkPromo = (entries)=>{
        console.log(entries)
        entries.forEach(entry => {
            console.log(entry)
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    }
    useEffect(()=> {
        const observer = new IntersectionObserver(checkPromo, {
            threshold: 0.5,
        })
        const elementCurrent = elementCheck.current
        if (elementCurrent) {
            observer.observe(elementCurrent)
        }
        return ()=>{
            if (elementCurrent) {
                observer.unobserve(elementCurrent)
            }
        }
    }, [])

    return (
        <div id="container-promo" ref={elementCheck}>
            <div id="wrapper-promo">
                <h1>Consigue promos, descuentos, noticias, etc.</h1>
                <form action="" method="POST">
                    <input type="email" placeholder='Your email Address' name="email"></input>
                    <button type="submit">Suscribete</button>
                </form>
            </div>
        </div>
    )
}