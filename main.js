let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Jika scroll ke bawah dan sudah melewati 100px
    navbar.classList.add('nav-up');
  } else {
    // Jika scroll ke atas
    navbar.classList.remove('nav-up');
  }
  
  lastScrollTop = scrollTop;
});

const offcanvas = document.getElementById('offcanvasNavbar');

offcanvas.addEventListener('shown.bs.offcanvas', () => {
  document.body.classList.add('offcanvas-open');
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
  document.body.classList.remove('offcanvas-open');
});

