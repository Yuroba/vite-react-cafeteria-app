
export const LoginPage = ()=>{
    return (
        <>
        <main id="main-loginpage">
            <section id="container-ingreso">
                <div id="container-title">
                    <h3>ingresar</h3>
                </div>
                <form id="loginform-container">
                    <div id="loginentry-container">
                        <label for="entryusuario">Correo/usuario</label>
                        <input type="text" required name="entryusuario" id="entryusuario" aria-label="Correo o usuario"/>
                        <label for="entrypassword">Contraseña</label>
                        <input type="password" name="entrypassword" id="entrypassword" aria-label="Contraseña"/>
                    </div>
                    <div id="btnform-container">
                        <button type="submit">Ingresar</button>
                        <button type="button">Crear cuenta</button>
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}