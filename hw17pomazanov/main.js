"use strict"

const elem1 = document.getElementById('container');
console.log(elem1);

const elem2 = document.querySelector('#container');
console.log(elem2);

const elem3 = document.querySelectorAll('li.second');
console.log(elem3);
for (let elem of elem3) {
console.log(elem);
}

const elem4 = document.querySelector('ol > li.third');
console.log(elem4);

const elem5 = document.querySelector('.header');
elem5.textContent = "Hello";
console.log(elem5);

const elem6 = document.querySelector('.footer');
elem6.classList.toggle("main");
console.log(elem6);
elem6.classList.remove("main");
console.log(elem6);

const elem7 = document.createElement('li');
elem7.textContent = "four";
console.log(elem7);

const elem8 = document.querySelector('ul');
elem8.append(elem7);
console.log(elem8);

const elem9 = document.querySelectorAll('ol > li');
for (let elem of elem9){
    elem.style.backgroundColor = '#008000';
}

elem6.remove();