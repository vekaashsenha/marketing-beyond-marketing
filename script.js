const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open', !expanded);
  menuButton.textContent = expanded ? 'Menu' : 'Close';
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
}));
