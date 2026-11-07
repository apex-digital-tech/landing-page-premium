document.addEventListener('DOMContentLoaded', () => {

    // 1. Animation au défilement (Scroll Reveal UI)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 2. Formulaire de Capture (Opt-in Form)
    const optinForm = document.getElementById('optin-form');
    const emailInput = document.getElementById('user-email');
    const formMessage = document.getElementById('form-message');

    if (optinForm) {
        optinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userEmail = emailInput.value.trim();

            if(userEmail) {
                formMessage.textContent = "⚡ Awesome! You have successfully subscribed.";
                formMessage.classList.add('success');
                emailInput.value = '';

                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.classList.remove('success');
                }, 4000);
            }
        });
    }

    // 3. Gestion Globale du Menu Mobile Interactif
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const toggleIcon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle && navLinks && toggleIcon) {
        // Au clic sur l'icône : ouvre ou ferme le volet mobile
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-xmark');
            } else {
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });

        // Fermeture automatique au clic sur n'importe quel lien interne
        const allLinks = navLinks.querySelectorAll('a');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            });
        });
    }
});
