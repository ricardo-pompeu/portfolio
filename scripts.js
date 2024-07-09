document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Function to apply the appropriate theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }

    // Event listener for the theme toggle button
    toggleThemeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });

    // Set initial theme based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for changes in the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
});









document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-thema');
    const body = document.body;

    // Function to apply the appropriate theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }

    // Event listener for the theme toggle button
    toggleThemeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });

    // Set initial theme based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for changes in the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
});



window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


        const texts = ["Portifólio", "Website", "Playground", "Conteúdo", "Mundo"];
        let index = 0;
        let charIndex = 0;
        const dynamicTextElement = document.getElementById('dynamicText');
        const typingSpeed = 200; // Velocidade de digitação em milissegundos
        const erasingSpeed = 100; // Velocidade de apagar em milissegundos
        const newTextDelay = 2000; // Tempo de espera antes de iniciar a digitação do próximo texto

        function type() {
            if (charIndex < texts[index].length) {
                dynamicTextElement.textContent += texts[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                dynamicTextElement.textContent = texts[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(type, typingSpeed + 500);
            }
        }

        document.addEventListener("DOMContentLoaded", function() { 
            if(texts.length) setTimeout(type, newTextDelay + 250);
        });
