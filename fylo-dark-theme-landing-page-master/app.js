const menu = document.querySelector('.menu');
document.querySelector('.close-btn').addEventListener('click', closeMenu, false);
document.querySelector('.hamburger').addEventListener('click', showMenu, false);

function showMenu(){
    menu.classList.add('active');
}

function closeMenu(){
    menu.classList.remove('active');
}