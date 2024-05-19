// Adicionando eventos de clique aos links de navegação
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adicionando eventos de clique aos botões de redes sociais
const socialMediaButtons = document.querySelectorAll('#redes-sociais a');

socialMediaButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        window.open(url, '_blank');
    });
});