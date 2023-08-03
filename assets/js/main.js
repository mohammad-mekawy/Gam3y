document.addEventListener('DOMContentLoaded', function() {

var myUpButton = document.querySelector('div.up');
var navbar = document.querySelector('.navbar');
var Logo = document.querySelector('.Logo');

window.onscroll = function() {
    window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
    window.scrollY > 40 ? navbar.style.backgroundColor = '#4a69bde6' : navbar.style.backgroundColor = '#4a69bd';
    window.scrollY > 40 ? Logo.style.width = '70%' : Logo.style.width = '100%';
    window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
    window.scrollY > 250 ? myUpButton.style.transform = 'translateY(-20px)' : myUpButton.style.transform = 'translateY(0)';
};
window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
window.scrollY > 40 ? navbar.style.backgroundColor = '#4a69bde6' : navbar.style.backgroundColor = '#4a69bd';
window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
window.scrollY > 40 ? Logo.style.width = '70%' : Logo.style.width = '100%';

myUpButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

});