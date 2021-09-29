"use strict"

function pow (a , b){
    let result = a;
    for(let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}
console.log(pow(2 , 10));




let firstName = prompt('Назови имя:','');
let lastName = prompt('Назови фамилию:','');
let age = +prompt('Сколько вам лет?','');
function createUser(firstName ,lastName ,age ){
    
    if (!firstName){
        firstName = null;
    }
    if (!lastName){
        lastName = null;
    } 
    if (!age){
        age = null;
    } 
    return {
        firstName,
        lastName,
        age
    };
}
let user = createUser(firstName,lastName,age);
console.log(user);

function compare(number, low, high) {
    if (number < 100){
        low();
    }
    else { 
        high();
    }
}

function low() {
    alert( "Число меньше 100");
}

function high() {
    alert( "Число больше или равно 100");
}
let number = 200;
compare(number, low, high);