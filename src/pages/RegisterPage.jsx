
import '../styles/styled_registerpage.css'
import {Link} from 'react-router-dom'

export const RegisterPage = ()=>{
    return(
        <main id="main-registerpage">
            <section id="container-registro">
                <div id="registro-title">
                    <h3>Registrar</h3>
                    <Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link>
                </div>
                <form id="registroform-container">
                    <div id="registroentry-container">
                        <label for="registercorreo">Correo</label>
                        <input type="email" required name="entryregistercorreo" id="registercorreo" aria-label="Correo"/>
                        <label for="registerusuario"> Usuario</label>
                        <input type="text" required name="entryregisterusuario" id="registerusuario" aria-label="usuario"/>
                        <label for="registerpassword">Contraseña</label>
                        <input type="password" required name="entryregisterpassword" id="registerpassword" aria-label="Contraseña"/>
                        <label for="registerdireccion">Direccion</label>
                        <input type="text" required name="entryregisterdireccion" id="registerdireccion" aria-label="Direccion" />
                    </div>
                    <div id="btnregister-container">
                        <button type="submit">Crear cuenta</button>
                    </div>
                </form>
            </section>
        </main>
    )
}