import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));


const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.querySelectorAll(".nav__item").forEach( n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));