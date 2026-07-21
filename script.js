AOS.init({
    once: true, 
    offset: 100, 
});
// Scroll Spy
const secoes = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.menu-navegacao a');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            linksNav.forEach(link => {
                link.classList.toggle('ativo', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });
secoes.forEach(sec => observer.observe(sec));
// Theme Toggle
const btnTema = document.getElementById('btn-tema');
const body = document.body;
btnTema.addEventListener('click', () => {
    body.classList.toggle('tema-claro');
    if (body.classList.contains('tema-claro')) {
        btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
// Mobile Menu
const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuNavegacao = document.querySelector('.menu-navegacao');
const linksMenu = document.querySelectorAll('.menu-navegacao a');
btnMenuMobile.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
    const icone = btnMenuMobile.querySelector('i');
    if (menuNavegacao.classList.contains('ativo')) {
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark');
    } else {
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuNavegacao.classList.remove('ativo');
        btnMenuMobile.querySelector('i').classList.remove('fa-xmark');
        btnMenuMobile.querySelector('i').classList.add('fa-bars');
    });
});
// Navbar Shrink + Back to Top
const navbar = document.getElementById('navbar');
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    btnTopo.classList.toggle('visivel', y > 300);
    navbar.classList.toggle('navbar-compact', y > 80);
});
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// FAQ Accordion
document.querySelectorAll('.pergunta-faq').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const aberto = item.classList.contains('aberto');
        document.querySelectorAll('.item-faq.aberto').forEach(i => i.classList.remove('aberto'));
        if (!aberto) item.classList.add('aberto');
    });
});
document.addEventListener('click', (e) => {
    if (menuNavegacao.classList.contains('ativo') &&
        !menuNavegacao.contains(e.target) &&
        !btnMenuMobile.contains(e.target)) {
        menuNavegacao.classList.remove('ativo');
        const icone = btnMenuMobile.querySelector('i');
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});