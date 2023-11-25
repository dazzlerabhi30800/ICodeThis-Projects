const navbar = document.querySelector('nav');
const menu = document.querySelector('.menu');

navbar.onclick = () => {
    menu.classList.toggle("scale-0");
}