'use strict'


let a = document.querySelector('.nav');
let b = document.querySelector('.header-burger');
let c = document.querySelector('body');

b.addEventListener('click', () => {
    a.classList.toggle('burger-active');
    c.classList.toggle('lock');
})