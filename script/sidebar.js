const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
let menuOpen = false;

// Gestisci apertura/chiusura menu laterale
menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    sideMenu.classList.toggle('open', menuOpen);
    menuToggle.setAttribute('aria-expanded', menuOpen);
});

// Chiudi il menu quando si clicca fuori
document.addEventListener('pointerdown', (e) => {
    if (menuOpen && !sideMenu.contains(e.target) && e.target !== menuToggle) {
        menuOpen = false;
        sideMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', "false");
        closeAllDropdowns();
    }
});

// Chiudi tutti i dropdown
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        dropdown.style.maxHeight = '0';
    });
}

// Gestisci apertura/chiusura dropdown con animazione
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        const isOpen = dropdown.style.maxHeight && dropdown.style.maxHeight !== '0px';

        closeAllDropdowns();
        dropdown.style.maxHeight = isOpen ? '0' : `${dropdown.scrollHeight}px`;
    });
});

// Chiudi dropdown quando si clicca fuori
document.addEventListener('pointerdown', (e) => {
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
            dropdown.style.maxHeight = '0';
        }
    });
});
