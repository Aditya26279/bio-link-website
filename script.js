const toggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeIcon.textContent = isLight ? '☾' : '☼';
  toggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  localStorage.setItem('bio-theme', isLight ? 'light' : 'dark');
});

if (localStorage.getItem('bio-theme') === 'light') toggle.click();
