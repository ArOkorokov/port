'use strict'




function burger() {
    let a = document.querySelector('.nav');
    let b = document.querySelector('.header-burger');
    let c = document.querySelector('body');
    
    b.addEventListener('click', (e) => {
        a.classList.toggle('burger-active');
        c.classList.toggle('lock');
        e.stopPropagation();
    })
}
burger();

this.onload = function() {
    gsap.from('.main-header--losung-wrapper', {
        opacity: 0,
        duration: 4,
        delay: 0.3,
    })
    gsap.from('.main-header_developer-develop_wrapper', {
        opacity: 0,
        x: -150,
        duration: 3,
        delay: 0.3,
    })
    gsap.from('.main-header_developer-web_wrapper' , {
        opacity: 0,
        x: -150,
        duration: 2,
        rotation: -10,
    })
}