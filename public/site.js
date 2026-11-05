const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
const closeMenu = (restore = false) => {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  if (restore) menuButton.focus();
};
menuButton.addEventListener('click', () => {
  const opening = menu.hidden;
  menu.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  if (opening) menu.querySelector('a, button')?.focus();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
menu.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
const dialog = document.querySelector('#webclass-dialog');
document.querySelectorAll('[data-webclass-open]').forEach((button) => button.addEventListener('click', () => {
  if (!menu.hidden) closeMenu();
  dialog.showModal();
}));
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
const contact = document.querySelector('#contact-form');
if (contact) {
  const name = contact.elements.name;
  const message = contact.elements.message;
  const clearError = (event) => event.target.setCustomValidity('');
  [name, message].forEach((input) => input.addEventListener('input', clearError));
  contact.addEventListener('submit', (event) => {
    event.preventDefault();
    for (const input of [name, message]) {
      input.setCustomValidity(input.value.trim() ? '' : 'Completa este campo.');
    }
    if (!contact.reportValidity()) return;
    const status = document.querySelector('#contact-status');
    status.hidden = false;
    status.textContent = 'Mensaje enviado con éxito (simulación). No se ha enviado ni guardado información.';
    contact.reset();
  });
}
