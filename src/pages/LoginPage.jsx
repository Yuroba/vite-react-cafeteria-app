
export const LoginPage = ()=>{
    return (
        <>
        <main id="main-loginpage">
            <section id="container-ingreso">
                <div id="ingreso-title">
                    <h3>ingresar</h3>
                </div>
                <form id="loginform-container">
                    <div id="loginentry-container">
                        <label for="loginusuario">Correo/usuario</label>
                        <input type="text" required name="entryloginusuario" id="loginusuario" aria-label="Correo o usuario"/>
                        <label for="loginpassword">Contraseña</label>
                        <input type="password" name="entryloginpassword" id="loginpassword" aria-label="Contraseña"/>
                    </div>
                    <div id="btnlogin-container">
                        <button type="submit">Ingresar</button>
                        <button type="button">Crear cuenta</button>
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}