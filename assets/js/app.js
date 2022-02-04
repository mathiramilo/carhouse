// --- HAMBURGUER MENU ---

// Get the Menu
const mainNav = document.getElementById('main-nav');
const mainNavStyle = window.getComputedStyle(mainNav);

// Get the Hamurguer & Add Click Event
const hamburguer = document.getElementById('hamburguer');
hamburguer.addEventListener('click', toggleMenu);

// Toggle the Menu
function toggleMenu() {
    if (mainNavStyle.getPropertyValue('display') == 'none') {
        mainNav.style.display = 'block';
        mainNav.style.animation = 'opacity 1s';
    } else {
        mainNav.style.display = 'none';
    }
}

// --- DISABLE SCROLL IN MODALS (Not Working) ---

// Get the Modals & Styles
const verAutosModal = document.getElementById('modal-ver-autos');
const verAutosModalStyle = window.getComputedStyle(verAutosModal);
const contactarseModal = document.getElementById('modal-contactarse');
const contactarseModalStyle = window.getComputedStyle(contactarseModal);

// If Modals are Shown, Disable Scroll
if (verAutosModalStyle.getPropertyValue('opacity') != '0' || contactarseModalStyle.getPropertyValue('opacity') != '0') {
    disableScroll();
}

// Disable the Scroll
function disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(x, y);
    }
}