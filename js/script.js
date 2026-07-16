// ============================================
//  PLIK: js/script.js
//  PROMORA - Serwer Reklamowy Discord
// ============================================

// ===== REKLAMY - ZAWSZE WIDOCZNE =====
// Funkcja zamykania reklam jest wyłączona - reklamy pozostają zawsze widoczne
function zamknijReklame(id) {
    // Reklamy pozostają widoczne - nic nie robimy
    return;
}

// ============================================
//  AKTYWNA NAWIGACJA - podświetlenie strony
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Pobieramy nazwę aktualnej strony z URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Znajdujemy wszystkie linki w nawigacji
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        // Pobieramy href z linku
        const href = link.getAttribute('href');
        
        // Sprawdzamy czy link pasuje do aktualnej strony
        // Dla strony głównej (index.html) lub gdy currentPage jest puste
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ============================================
//  PŁYNNE PRZEWIJANIE - dla kotwic (#)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Pomijamy puste kotwice
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

// ============================================
//  OPCJONALNIE: Efekt pojawiania się elementów
//  przy przewijaniu (dla lepszego wyglądu)
// ============================================
// Ta funkcja sprawdza czy element jest widoczny na ekranie
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Funkcja dodająca klasę 'visible' do widocznych elementów
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .event-item, .stat-item');
    
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Nasłuchiwanie przewijania (opcjonalne)
// Odkomentuj poniższe linie jeśli chcesz używać animacji
/*
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);
*/

// ============================================
//  OPCJONALNIE: Licznik odwiedzin (bardzo prosty)
//  Używa localStorage do zliczania
// ============================================
// Odkomentuj poniższy kod jeśli chcesz licznik
/*
function countVisit() {
    let visits = localStorage.getItem('promora_visits');
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    localStorage.setItem('promora_visits', visits);
    
    // Wyświetl licznik jeśli istnieje element o id 'visit-counter'
    const counterElement = document.getElementById('visit-counter');
    if (counterElement) {
        counterElement.textContent = visits;
    }
}

// Wywołaj przy załadowaniu strony
document.addEventListener('DOMContentLoaded', countVisit);
*/

// ============================================
//  KONIEC PLIKU
// ============================================
console.log('🚀 Promora - strona załadowana pomyślnie!');
