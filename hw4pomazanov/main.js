"use strict"

let operand1 = prompt("Укажите число", 0);
operand1 = Number(operand1);
let operator = prompt("Укажите способ вычесления", "+");
let operand2 = prompt("Укажите число", 0);
operand2 = Number(operand2);
let result ="";

switch(operator) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    case '/':
        result = operand1 / operand2;
        break;
    case '**':
        result = operand1 ** operand2;
        break;
    default:
        result = 'Не поддерживаемая операция';
        break;
}

alert(result);