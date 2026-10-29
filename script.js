const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('.main-nav');
const navigationLinks = document.querySelectorAll('.main-nav a');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNavigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNavigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
