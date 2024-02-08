const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
});