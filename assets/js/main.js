// Placeholder for simple interactivity (e.g., read-more toggles)
document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-toggle]');
  if (!btn) return;
  // Prevent jumping to top for anchor links
  if (btn.tagName === 'A') e.preventDefault();
  const target = document.querySelector(btn.getAttribute('data-toggle'));
  if (!target) return;
  const expanded = target.getAttribute('aria-expanded') === 'true';
  target.setAttribute('aria-expanded', String(!expanded));
});


