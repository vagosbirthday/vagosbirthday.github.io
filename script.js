// script.js

document.addEventListener('DOMContentLoaded', () => {
  // —— Mobile menu toggle ——  
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

  // —— Contact form validation ——  
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      // grab trimmed values
      const name = this.Name.value.trim();
      const email = this.Email.value.trim();
      const msg = this.Message.value.trim();

      // simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // validate
      if (!name || !email || !msg) {
        alert('Please fill in all fields before sending.');
        e.preventDefault();
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
      }

      // all good → let mailto: proceed
      // (you could show a “Opening your mail client…” message here)
    });
  }
});
