"use strict"
const number = prompt('Введите число','');
function fibonacci(number){

    let number1 = 0;
    let number2 = 1;
    let sum = 1;

    for(let i = 1; i <= number; i++ ){
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
    }
    return sum;
}
alert(fibonacci(number));