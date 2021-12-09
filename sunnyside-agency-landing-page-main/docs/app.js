const menu = document.querySelector('.navbar-collapse');
document.getElementById('icon-hamburger').addEventListener('click', toggleMenu)
 
function toggleMenu(){
    menu.classList.toggle('active')
}