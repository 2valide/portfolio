// nav
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });


// nav barre hover
document.addEventListener('DOMContentLoaded', function () {
  var navItems = document.querySelectorAll('.nav ul li a');

  navItems.forEach(function (item) {
      item.addEventListener('click', function () {
          // Supprimer la classe "active" de tous les éléments
          navItems.forEach(function (navItem) {
              navItem.parentElement.classList.remove('active');
          });

          // Ajouter la classe "active" à l'élément cliqué
          this.parentElement.classList.add('active');
      });
  });
});