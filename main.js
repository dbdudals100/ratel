'use strict'

//navbar scroll 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
} else navbar.classList.remove('navbar--dark');
});


const btn = document.querySelector('.navbar__toggle-btn');
const navbarmenu = document.querySelector('.navbar__menu');
btn.addEventListener('click',()=>{
 if(!navbarmenu.classList.contains('navbar--btn')){
     navbarmenu.classList.add('navbar--btn');
 }else{
     navbarmenu.classList.remove('navbar--btn');
 };
});
