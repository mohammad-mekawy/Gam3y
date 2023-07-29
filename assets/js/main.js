// Up BTN
var myUpButton = document.querySelector('div.up');
window.onscroll = function() {
    window.scrollY > 120 ? myUpButton.style.opacity = '1' : myUpButton.style.opacity = '0';
};
myUpButton.style.opacity = window.scrollY > 120 ? '1' : '0';

myUpButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// navbar shadow
var navbar = document.querySelector('.navbar');

window.onscroll = function() {
    window.scrollY > 120 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');
};
window.scrollY > 120 ? navbar.classList.add('shadow') : navbar.classList.remove('shadow');