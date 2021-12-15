'use strict'

//navbar scroll , 아래 두개의 코멘트는 navbar의 scroll을 구하는 것

//const navbar = document.querySelector('#navbar');
//const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
if(window.scrollY > 100) {
    navbar.classList.add('navbar--dark');
} else navbar.classList.remove('navbar--dark');
});

//navbar toggle-btn
const btn = document.querySelector('.navbar__toggle-btn');
const navbarmenu = document.querySelector('.navbar__menu');
btn.addEventListener('click',()=>{
 if(!navbarmenu.classList.contains('navbar--btn')){
     navbarmenu.classList.add('navbar--btn');
 }else{
     navbarmenu.classList.remove('navbar--btn');
 };
});

//navbar menu click to id scroll 
const navbarclick = document.querySelector('.navbar__menu')
document.addEventListener('click',(event)=>{
    const target = event.target
    const link = target.dataset.link
    if (link == null){
        return;
    }else{
     const scrollto = document.querySelector(link);
     scrollto.scrollIntoView({behavior: "smooth" });
    }
})

const homeopacity = document.querySelector('.home__container')
const homeHeigth = homeopacity.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
   homeopacity.style.opacity = 1 -  window.scrollY/homeHeigth; 
});


//  250 380