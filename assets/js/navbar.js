const nav = document.querySelector('nav');

window.onscroll = () => {
	if (window.scrollY === 0) {
        nav.classList.add('fondo__transparente');
        nav.classList.remove('fondo__negro');
    } else {
        nav.classList.remove('fondo__transparente');
        nav.classList.add('fondo__negro');
    }
}

function navBtn() {
    nav.classList.toggle("fondo__verde")
    nav.classList.toggle("pb-4")
}