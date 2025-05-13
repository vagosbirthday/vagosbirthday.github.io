// script.js

document.addEventListener('DOMContentLoaded', () => {
  // —— Toggle menú móvil ——
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

  // —— Paso: toggle .active en cada flip-card ——
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  // —— (Opcional) Cerrar tarjetas al hacer click fuera ——
  document.addEventListener('click', e => {
    document.querySelectorAll('.flip-card.active').forEach(card => {
      if (!card.contains(e.target)) {
        card.classList.remove('active');
      }
    });
  });
});
