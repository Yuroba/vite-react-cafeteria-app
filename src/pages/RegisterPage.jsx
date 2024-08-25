
export const RegisterPage = ()=>{
    return(
        <main>
            <section id="container-registro">
                <div id="registro-title">
                    <h3>Registrar</h3>
                </div>
                <form id="registroform-container">
                    <div id="registroentry-container">
                        <label for="registercorreo">Correo</label>
                        <input type="text" required name="entryregistercorreo" id="registercorreo" aria-label="Correo"/>
                        <label for="registerusuario"> Usuario</label>
                        <input type="text" required name="entryregisterusuario" id="registerusuario" aria-label="usuario"/>
                        <label for="registerpassword">Contraseña</label>
                        <input type="password" name="entryregisterpassword" id="registerpassword" aria-label="Contraseña"/>
                        <label for="registerdireccion">Direccion</label>
                        <input type="text" name="entryregisterdireccion" id="registerdireccion" aria-label="Direccion" />
                    </div>
                    <div id="btnregister-container">
                        <button type="submit">Crear cuenta</button>
                    </div>
                </form>
            </section>
        </main>
    )
}