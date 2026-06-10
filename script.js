document.addEventListener('DOMContentLoaded', () => {

    // 1. Controle do Header Sticky (Funciona em todas)
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Menu Hamburguer (Funciona em todas)
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    if (mobileMenu && navbar) {
        const menuIcon = mobileMenu.querySelector('i');
        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
            if (navbar.classList.contains('active')) {
                menuIcon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                if (menuIcon) menuIcon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // 3. Efeito Parallax (Só roda se existir o elemento na página)
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            let scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.1}px))`;
        });
    }

    // 4. Lógica de Formulário (Só roda se o formulário existir na página)
    const formLead = document.getElementById('form-lead');
    if (formLead) {
        const btnSubmit = document.getElementById('btn-submit');
        const btnText = btnSubmit.querySelector('.btn-text');
        const spinner = btnSubmit.querySelector('.spinner');

        formLead.addEventListener('submit', (e) => {
            e.preventDefault();
            btnText.style.display = 'none';
            spinner.style.display = 'inline-block';
            btnSubmit.style.pointerEvents = 'none';
            
            setTimeout(() => {
                spinner.style.display = 'none';
                btnText.style.display = 'inline-block';
                btnText.innerText = 'Atendimento Solicitado!';
                btnSubmit.style.backgroundColor = 'transparent';
                btnSubmit.style.color = '#CBA461';
                btnSubmit.style.boxShadow = 'inset 0 0 0 1px #CBA461';
                formLead.reset();
            }, 2000);
        });
    }

    // 5. Intersection Observer (Só roda se houver elementos para animar)
    const targets = document.querySelectorAll('.scroll-animate, #timeline-trigger');
    if (targets.length > 0) {
        const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if(entry.target.id === 'timeline-trigger') entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        targets.forEach(el => observer.observe(el));
    }
});