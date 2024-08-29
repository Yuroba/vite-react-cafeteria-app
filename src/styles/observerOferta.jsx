
const ofertaObserver = document.querySelector('#content-oferta')

function check(entry) {
    console.log(entry)
}

const observer = new IntersectionObserver(check, options)

observer.observe(ofertaObserver)