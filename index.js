// Efeito de rolagem .
const container = document.querySelector('.main-projetos');
const btnLeft = document.querySelector('.btn-scroll.left');
const btnRight = document.querySelector('.btn-scroll.right');

const scrollAmount = 400; // quanto vai andar

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

//Efeito animação

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

// WhatsAPP

function enviarWhatsApp(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');
    const telefone = "5544998344855"

    const texto = `Olá! me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')

}


// menu hamburguer
const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // troca ícone
    if (document.body.classList.contains("light-mode")) {
        btnTema.textContent = "☀️";
        localStorage.setItem("tema", "light");
    } else {
        btnTema.textContent = "🌙";
        localStorage.setItem("tema", "dark");
    }
});


const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.querySelectorAll(".link-menu").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});
