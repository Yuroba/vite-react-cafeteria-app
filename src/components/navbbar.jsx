
import { Link } from 'react-router-dom'
import '../styles/styled_navbbar.css'

import { NavButton } from "./BtnNav"
import { useState } from 'react'

export const Navbar = ()=>{
    const [nameClass, setNameClass] = useState('off-home')
    const handleMouseEnter = () => {
        window.location.pathname === "/" ? setNameClass('show-home'):""
        console.log(window.location.pathname)
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
                    <Link className='nav-button' to="/">Home</Link>
                    <ol className={nameClass}>
                        <li><a href="#Sedes">Sedes</a></li>
                        <li><a href="#ofertas">Ofertas</a></li>
                        <li><a href="#recommend">Recomendado</a></li>
                        <li><a href="#ofertas">Ofertas</a></li>
                        <li><a href="#foot">Contacto</a></li>
                    </ol>
                </li>
                <li>
                <Link className='nav-button' to="/Cafeteria">Cafeteria</Link>
                </li>
                <li>
                <Link className='nav-button' to="/Sedes">Sedes</Link>
                </li>
                <li>
                <Link className='nav-button' to="/Login">Cuenta</Link>
                </li>
            </ul>
        </nav>
    )
}