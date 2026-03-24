const year = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');

if (year) {
  year.textContent = new Date().getFullYear();
}

const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  root.classList.add('light');
}

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
