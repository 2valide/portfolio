document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});