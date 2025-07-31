// Mobile Navbar Hamburger Menu Toggle
const hamburger = document.querySelector('.mobile-navbar .hamburger');
const mobileMenu = document.querySelector('.mobile-navbar-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('.mobile-navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}
