/* script.js */

// Toggle mobile menu visibility
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
menu.classList.toggle('open');
hamburger.querySelector('.hamburger-icon').classList.toggle('hidden');
hamburger.querySelector('.cross-icon').classList.toggle('hidden');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.links').forEach(link => {
link.addEventListener('click', () => {
if (menu.classList.contains('open')) {
menu.classList.remove('open');
hamburger.querySelector('.hamburger-icon').classList.remove('hidden');
hamburger.querySelector('.cross-icon').classList.add('hidden');
}
});
});