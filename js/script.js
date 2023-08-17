const header = document.querySelector('.header')
const carrossel = document.querySelector('.space-pag')
let baseScrol = window.scrollY
let headerHeight = -(header.offsetHeight)

/* INTERATIVIDADE DO HEADER*/
document.addEventListener("scroll", () => {
    let varScroll = window.scrollY
    let realScroll = varScroll - baseScrol
    function headerUp() {
        header.style.top = headerHeight+'px'
        header.removeEventListener('animationend', headerUp)
    }

    if (realScroll > 0 && !header.classList.contains('headerUp')) {
        header.classList.remove('headerDown')
        header.classList.add('headerUp')
        header.addEventListener('animationend', headerUp)
    }


    if (realScroll < 0 && !header.classList.contains('headerDown')) {
        header.classList.remove('headerUp')
        header.classList.add('headerDown')
        header.style.top = '0px'
    }
    baseScrol = varScroll;
})

const spacePag = () => {
    carrossel.style.marginTop = Math.abs(headerHeight) +'px'
    console.log(carrossel.marginTop)
}
spacePag()

function scrollToNoticias() {
    const noticiasSection = document.querySelector('.list-text');
    const news = document.querySelector('.container-digital')
    if (noticiasSection) {
        const noticiasOffsetTop = news.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: noticiasOffsetTop, behavior: "smooth" });
    }
}

