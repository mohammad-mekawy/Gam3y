document.addEventListener('DOMContentLoaded', function() {

var myUpButton = document.querySelector('div.up');
var navbar = document.querySelector('.navbar');

window.onscroll = function() {
    window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
    window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
    window.scrollY > 40 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
    window.scrollY > 250 ? myUpButton.style.transform = 'translateY(-20px)' : myUpButton.style.transform = 'translateY(0)';
};
window.scrollY > 250 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
window.scrollY > 250 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';

myUpButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

});