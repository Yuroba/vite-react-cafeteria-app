import { Navbar } from '../components/navbbar';

const Home = ()=>{
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main id="container-home">
            <section id="wrapper-home-img">
                <img alt="1. imagen"></img>
                <img alt="2. imagen"></img>
            </section>
            <section id="wrapper-home-title">
                <h2>Good Morning</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque finibus, libero nec molestie ultrices, dui ligula consequat justo,
                    lacinia suscipit purus mauris in metus. Ut neque ante, tristique ut lacus molestie, 
                 </p>
            </section>
            <section id="container-home-text">
                <div id="wrapper-home-text"></div>
            </section>
        </main>
        </>
    )
}