export function iniciarAnimacoes() {
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
}