// ===== ПЛАВНАЯ ПРОКРУТКА ПО ССЫЛКАМ =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== АНИМАЦИЯ ПРИ ПРОКРУТКЕ =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-block, .contacts-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== ПРИВЕТСТВИЕ В КОНСОЛИ =====
console.log('%c☕ Добро пожаловать в "Утренний свет"!', 
    'color: #6D4C41; font-size: 20px; font-weight: bold;');
console.log('%cСайт сделан с душой 💪', 
    'color: #A1887F; font-size: 14px;');