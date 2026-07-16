// ===== ZAMYKANIE REKLAM =====
function zamknijReklame(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'none';
        // Zapamiętujemy w localStorage że reklama została zamknięta
        localStorage.setItem('reklama_' + id, 'zamknieta');
    }
}

// ===== SPRAWDZANIE CZY REKLAMY BYŁY JUŻ ZAMKNIĘTE =====
document.addEventListener('DOMContentLoaded', function() {
    // Sprawdzamy każdą reklamę
    const reklamy = ['reklama-gora', 'reklama-dol', 'reklama-lewa', 'reklama-prawa'];
    reklamy.forEach(id => {
        const status = localStorage.getItem('reklama_' + id);
        if (status === 'zamknieta') {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none';
            }
        }
    });

    // ===== AKTYWNA NAWIGACJA =====
    // Zaznaczamy aktywną stronę w menu na podstawie URL
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== EFEKT PRZEWIJANIA (opcjonalnie) =====
// Płynne przewijanie dla linków wewnętrznych
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});