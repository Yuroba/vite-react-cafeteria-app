
import React, {useState, useRef, useEffect} from "react"
import { BtnPedir } from "./Btns"
import '../styles/styled_EtiquetaOferta.css'

export const EtiquetaOferta = ()=>{

    const elementCheck = useRef(null)

    function checkOferta(entries){
        entries.forEach(entry => {
            
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    }

    useEffect(()=> {
        const observer = new IntersectionObserver(checkOferta, {
            threshold:0.1,
            rootMargin: "-50px",
        });

        const currentElement = elementCheck.current;

        if (currentElement) {
            observer.observe(currentElement)
        };

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])
    return (
        <div id="container-oferta">
            <div id="content-oferta" ref={elementCheck}>
                <div id="wrapper-oferta">
                    <section id="content-text">
                        <h3>25% de descuento</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius leo vel lectus ultricies ultricies. Integer diam elit, 
                            varius sed tellus quis, consequat sodales tellus. Fusce vitae pellentesque orci, 
                            et imperd.
                        </p>
                        <BtnPedir />
                    </section>
                    <figure>
                    <img src="https://images.unsplash.com/photo-1461010083959-8a5727311252?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Una imagen"></img>
                    </figure>
                </div>
                <div className="title-oferta">
                    <h2>Ofertas</h2>
                </div>
            </div>
        </div>
    )
}