// --- HAMBURGUER MENU ---

// Get the Menu
const mainNav = document.getElementById('main-nav');
const mainNavStyles = window.getComputedStyle(mainNav);

// Get the Hamurguer & Add Click Event
const hamburguer = document.getElementById('hamburguer');
hamburguer.addEventListener('click', toggleMenu);

// Toggle the Menu
function toggleMenu() {
    if (mainNavStyles.getPropertyValue('display') == 'none') {
        mainNav.style.display = 'block';
        mainNav.style.animation = 'opacity 1s';
    } else {
        mainNav.style.display = 'none';
    }
}