
import '../styles/styled_navbbar.css'

import { NavButton } from "./BtnNav"
import { useState } from 'react'

export const Navbar = ()=>{
    const [nameClass, setNameClass] = useState('off-home')
    const handleMouseEnter = () => {
        setNameClass('show-home');
    };
    
    const handleMouseLeave = () => {
        setNameClass('off-home');
    };
    return (
        <nav id="navbar-fixed">
            <div id="logo">
                <i>Un logo</i>
            </div>
            <ul id="nav-btns">
                <li onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <NavButton to="/#" label="home"/>
                    <ol className={nameClass}>
                        <li><a href="#Sedes">Sedes</a></li>
                        <li><a href="#ofertas">Ofertas</a></li>
                        <li><a href="#recommend">Recomendado</a></li>
                        <li><a href="#Promo">Promo</a></li>
                        <li><a href="#Contacto">Contacto</a></li>
                    </ol>
                </li>
                <li>
                <NavButton to="/Cafeteria" label="Cafeteria"/>
                </li>
                <li>
                <NavButton to="/Contacto" label="contactos"/>
                </li>
            </ul>
        </nav>
    )
}