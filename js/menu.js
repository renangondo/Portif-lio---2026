export function iniciarMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

    document.querySelectorAll(".link-menu").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
        });
    });
}