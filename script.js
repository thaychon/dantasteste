document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE DO MENU MOBILE ---

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    if (menuToggle && mainNav) {
        
        // switch abre e fecha
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                //mobile aberto
                if (mainNav.classList.contains('active')) {
                    // fechado
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});