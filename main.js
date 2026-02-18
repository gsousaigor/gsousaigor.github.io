document.addEventListener('DOMContentLoaded', () => {
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
            }, 80);
        }, index * 1000);
    });

    // Ano automático no footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
