document.addEventListener('DOMContentLoaded', () => {
    // Revelar elementos ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecionar elementos para revelar
    const sections = document.querySelectorAll('.section, .hero-content, .stack-card, .timeline-item');
    
    sections.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});

// Adicionar estilos de revelação dinamicamente
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
