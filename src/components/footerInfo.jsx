import '../styles/styled_FooterInfo.css'

export const Foot = ()=>{
    return(
        <div id="container-foot">
            <div id="wrapper-foot">
                <section id="foot-contacto" className='foot'>
                    <h2>Info de contacto</h2>
                    <div className="contacto direccion">
                        <h3>Dirección</h3>
                        <ul>
                            <li>xx - xx - xx</li>
                        </ul>
                    </div>
                    <div className="contacto correos">
                        <h3>Correos</h3>
                        <ul>
                            <li>cafe@cafe.com</li>
                            <li>cafe@cafe.com</li>
                            <li>cafe@cafe.com</li>
                        </ul>
                    </div>
                    <div className="contacto telefono">
                        <h3>Telefono</h3>
                        <ul>
                            <li>999-999-xxx</li>
                        </ul>
                    </div>
                </section>
                <section id="foot-nosotros" className='foot'>
                    <h2>Sobre nosotros</h2>
                    <ul>
                        <li><a>Nuestra historia</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </section>

            </div>
        </div>
    )
}