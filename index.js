// ROLAGEM DOS PROJETOS
const container = document.querySelector('.main-projetos');
const btnLeft = document.querySelector('.btn-scroll.left');
const btnRight = document.querySelector('.btn-scroll.right');

if (container && btnLeft && btnRight) {
    const scrollAmount = 400;

    btnRight.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    btnLeft.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
}

// ANIMAÇÃO AO ROLAR
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(el => observer.observe(el));

// WHATSAPP
function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "5544998344855";

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}

// MENU HAMBÚRGUER
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuNav");
const overlayMenu = document.getElementById("overlayMenu");

if (menuToggle && menu && overlayMenu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("ativo");
        overlayMenu.classList.toggle("ativo");
    });

    document.querySelectorAll(".link-menu").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            overlayMenu.classList.remove("ativo");
        });
    });

    overlayMenu.addEventListener("click", () => {
        menu.classList.remove("ativo");
        overlayMenu.classList.remove("ativo");
    });
}