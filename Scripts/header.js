window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
