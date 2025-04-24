function $(sel) { return document.querySelector(sel); }

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = $('#menu-btn');
  const overlay = $('#overlay');
  const body    = document.body;

  // toggle menu visibility
  menuBtn.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });

  // clicking outside (on overlay) also closes
  overlay.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });
});