document.addEventListener("DOMContentLoaded", () => {
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
    }
  });

  // Gestisci apertura/chiusura dropdown senza chiudere gli altri
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.nextElementSibling;
      dropdown.classList.toggle('open');
    });
  });

  // Chiudi solo il dropdown specifico quando si clicca fuori
  document.addEventListener('pointerdown', (e) => {
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
      const toggle = dropdown.previousElementSibling; // Bottone che apre il dropdown
      if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });
});
