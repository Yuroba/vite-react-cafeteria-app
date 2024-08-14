
import '../styled-components/styled_navbbar.css'

import { NavButton } from "./btn-nav"

export const Navbar = ()=>{
    return (
        <nav id="navbar-fixed">
            <div id="logo">
                <i>Un logo</i>
            </div>
            <section id="nav-btns">
                <NavButton to="#home" label="home"/>
                <NavButton to="#sedes" label="sedes"/>
                <NavButton to="#contactos" label="contactos"/>
            </section>
        </nav>
    )
}