document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação simples para os comandos do terminal
    const commands = document.querySelectorAll('.command');
    
    commands.forEach((command, index) => {
        const text = command.innerText;
        command.innerText = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    command.innerText += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }, index * 1500); // Delay entre os comandos
    });

    // Revelar elementos ao scroll (opcional, para um toque extra)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.container').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
