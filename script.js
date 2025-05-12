// script.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuList = document.querySelector('.menu-list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuList.classList.toggle('menu-open');
  });

  document.querySelectorAll('.menu-list .links').forEach(link => {
    link.addEventListener('click', () => {
      if (menuList.classList.contains('menu-open')) {
        hamburger.classList.remove('open');
        menuList.classList.remove('menu-open');
      }
    });
  });
});
