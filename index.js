// Efeito de rolagem tipo Netflix.
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

// Efeito de animação

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


