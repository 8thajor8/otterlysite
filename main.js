AOS.init();

window.addEventListener('scroll', function() {
var navbar = document.getElementById('navbar__container');

var navbarHeight = navbar.offsetHeight;
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

if (scrollPosition > navbarHeight) {
    navbar.classList.add('navbar__scrolled');
    
} else {
    navbar.classList.remove('navbar__scrolled');
    
}
});

const toggleMenu = document.querySelector('#check');
const body = document.body;
let accionMenu = () =>{ 
    if (toggleMenu.checked) {
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
    } else {
        body.style.position = '';
        body.style.overflow = '';
    }
} 
toggleMenu.addEventListener('change', accionMenu);

const toggleMenuLink = document.querySelector('.with__link');
const element = document.getElementById('collapseMenu');


toggleMenuLink.addEventListener("click", function(){
    console.log(toggleMenu)
    if(toggleMenu.checked){
        toggleMenu.checked = false;
        accionMenu();
        element.classList.remove('show');
    }
});