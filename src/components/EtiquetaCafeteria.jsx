

import '../styles/styled_EtiquetaCafeteria.css'

export const EtiquetaCafeteria = ({title="cafe", quantity=0, precio="10.00", addToCart})=>{
    const handleAddToCart = ()=> {
        const item = { title, quantity, precio};
        addToCart(item)
    }
    return(
        <div id="etiqueta-cafeteria">
            <div id="cafeteria-img">
                <h3>
                    {title}
                </h3>
                <figure>
                    <img src="https://images.unsplash.com/photo-1461010083959-8a5727311252?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Un cafe"></img>
                </figure>
            </div>
            <div id="cafeteria-content">
                <p>Lorema aaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaa
                </p>
                <div id="content-precio" method="POST">
                    <input value={precio}></input>
                    <button type="submit" onClick={handleAddToCart}><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>
        </div>
    )
}