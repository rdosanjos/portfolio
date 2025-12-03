// ——— Changement de style du header au scroll ———
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ——— Navigation fluide (scroll doux) ———
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // ——— Fermer le menu mobile après clic ———
        const nav = document.getElementById('main-nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// ——— Gestion du menu mobile ———
const menuBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ——— Gestion du formulaire ———
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! (Ceci est une démo)');
    form.reset();
});