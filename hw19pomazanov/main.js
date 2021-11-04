"use stict"
let arr = [];
let index = -1;
function plusItem(){
    console.log(1);
    let i1 = document.getElementById('text_submit');
    arr.push(i1.value);
    echoArray();
}
function minusItem(){
    arr.splice(index,1);
    echoArray();
}
function echoArray(){
    let list = document.getElementById('list');
    list.innerHTML ="";
    let i = 0;
    arr.forEach(item => {
        let domItem = document.createElement('li');
        domItem.classList.add('item');
        domItem.setAttribute('data-index',i);
        domItem.addEventListener('click',(e)=> {
            index = e.target.getAttribute('data-index');
            console.log(index);
            domItem.classList.add('red')
        },false)
        domItem.innerHTML = item;
        list.appendChild(domItem);
        i++;
    })
}

let b1 = document.getElementById('plusButton');
b1.addEventListener('click', plusItem, false);

let b2 = document.getElementById('minButton');
b2.addEventListener('click', minusItem, false);