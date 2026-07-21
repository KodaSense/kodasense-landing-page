AOS.init({
    once: true, 
    offset: 100, 
});
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