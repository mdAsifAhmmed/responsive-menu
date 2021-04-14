const menu = document.querySelector('#mobile_menu');
const menuLink =document.querySelector('.nav_menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})





