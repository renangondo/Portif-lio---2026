export function iniciarScrollProjetos() {
    const container = document.querySelector('.main-projetos');
    const btnLeft = document.querySelector('.btn-scroll.left');
    const btnRight = document.querySelector('.btn-scroll.right');

    if (!container || !btnLeft || !btnRight) return;

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