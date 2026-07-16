// ============================================
//  PLIK: js/script.js
//  PROMORA - Serwer Reklamowy Discord
// ============================================

// ============================================
//  1. ZMIANA MOTYWU (DARK/LIGHT)
// ============================================

// Funkcja przełączająca motyw
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    // Przełączamy klasę
    body.classList.toggle('light-mode');
    
    // Zmieniamy ikonkę przycisku
    if (body.classList.contains('light-mode')) {
        button.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        button.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

// Funkcja ładująca zapisany motyw
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.getElementById('theme-toggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (button) button.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        if (button) button.textContent = '🌙';
    }
}

// ============================================
//  2. AKTYWNA NAWIGACJA
// ============================================

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
//  3. PŁYNNE PRZEWIJANIE
// ============================================

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
//  4. REKLAMY - ZAWSZE WIDOCZNE
// ============================================

function zamknijReklame(id) {
    // Reklamy pozostają widoczne - nic nie robimy
    return;
}

// ============================================
//  START - URUCHAMIANIE WSZYSTKIEGO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Załaduj motyw
    loadTheme();
    
    // Ustaw aktywną nawigację
    setActiveNav();
    
    // Płynne przewijanie
    smoothScroll();
    
    console.log('🚀 Promora - strona załadowana pomyślnie!');
});
