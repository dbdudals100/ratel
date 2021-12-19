'use strict'

//navbar scroll , 아래 두개의 코멘트는 navbar의 scroll을 구하는 것

const navbar = document.querySelector('#navbar');
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
     scrollIntoView(link);
    }
});

//home__container scrolling opacity 
const homeopacity = document.querySelector('.home__container')
const homeHeigth = homeopacity.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
   homeopacity.style.opacity = 1 -  window.scrollY/homeHeigth; 
});

//arrow-up btn click home scrolling
const arrow = document.querySelector(".arrow-up")
document.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        arrow.classList.add('visible')
   }else arrow.classList.remove('visible')
});

arrow.addEventListener("click",()=>{
    scrollIntoView("#home");
});



// frequency to function made 
function scrollIntoView(seleter){
    const scrollTo = document.querySelector(seleter);
    scrollTo.scrollIntoView({behavior:"smooth"});
};


// scroll navbar__menu target ative 

const sectionIds = [
   '#home',
   '#target',
   '#workout',
   '#programming',
   '#good-writing',
   '#contact'
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map( id => document.querySelector(`[data-link="${id}"]`));
let seletedNavItem = navItems[0]
let selectedNavIndex;
function selectNavItem(selected) {
    seletedNavItem.classList.remove('active');
    seletedNavItem = selected;
    seletedNavItem.classList.add('active');
}
const observerCallback=(entries,observer) => {
    entries.forEach(entry => {
     if (!entry.isIntersecting && entry.intersectionRatio > 0 ){
         const index = sectionIds.indexOf(`#${entry.target.id}`)
         if(entry.boundingClientRect.y < 0){
            selectedNavIndex = index + 1 ;
         }else {
             selectedNavIndex = index -1;
         }
     }
    });
}
const observerOptions = {
    root: null,
    rootMajin: '0px',
    threshold: 0.5,
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel',() => {
    if(window.scrollY === 0){
        selectedNavIndex =0;
    }else if(
        Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight){
            selectedNavIndex = navItems.length - 1;
        }
    selectNavItem(navItems[selectedNavIndex]);
});