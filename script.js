// 1. Controle do Header Sticky Transparente
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Menu Hamburguer (Mobile)
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
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
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    });
});

// 3. Efeito Parallax Sutil na Marca d'água "AC"
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if(parallaxBg) {
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.1}px))`;
    }
});

// 4. Lógica de Interação do Formulário com Spinner
const formLead = document.getElementById('form-lead');
const btnSubmit = document.getElementById('btn-submit');
const btnText = btnSubmit.querySelector('.btn-text');
const spinner = btnSubmit.querySelector('.spinner');

formLead.addEventListener('submit', (e) => {
    e.preventDefault();
    // Inicia Efeito de Loading (KODA touch)
    btnText.style.display = 'none';
    spinner.style.display = 'inline-block';
    btnSubmit.style.pointerEvents = 'none';
    
    // Simula a requisição para um backend/CRM
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

// 5. Intersection Observer Supremo (Fade In e Timeline)
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Revela elementos gerais
            entry.target.classList.add('visible');
            
            // Lógica isolada para a linha do tempo (Timeline)
            if(entry.target.id === 'timeline-trigger') {
                entry.target.classList.add('active');
            }
            
            // Desativa a observação para não repetir a animação ao subir a página
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Mapeia todos os elementos dinâmicos da página
const elementsToAnimate = document.querySelectorAll('.scroll-animate, #timeline-trigger');
elementsToAnimate.forEach(el => {
    observer.observe(el);
});