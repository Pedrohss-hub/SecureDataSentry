const header = document.querySelector('.header');
let baseScrol = window.scrollY
let headerHeight = -(header.offsetHeight)
console.log(headerHeight)
header.style.top = headerHeight + 'px'

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
        console.log('teste')
    }
    console.log(realScroll)
    baseScrol = varScroll;
})

/*
    animation: headerUp 0.4s ease-in-out 0s infinite forwards;
 */
/* AJUSTE DO CARROSEL*/
