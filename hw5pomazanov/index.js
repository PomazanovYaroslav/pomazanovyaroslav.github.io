"use strict"
//1.
const drinkBeer = prompt('Желаете выпить пива?','да');
if(drinkBeer ==='да') {
    alert('Это отлично !');
}else {
    alert('Тогда в следущий раз!')
}
(drinkBeer === 'да') ? alert('Это отлично!') : (drinkBeer === 'нет') ? alert('Тогда в следущий раз!') : alert('Я вас не понимаю!');


//2.
const userAge = prompt('Введите возраст:','18');
if(userAge >= 18) {

    if(userAge > 30) {
        alert('Здраствуйте!');

    }else {
        alert('Привет чувак!');
    }
}
else if(userAge < 18) {
    alert('Доступ запрещён, вам нет 18 лет!');
}

(userAge < 18) ? alert('Доступ запрещён, вам нет 18 лет!') : (userAge > 30) ? alert('Здраствуйте!') : alert('Привет чувак!');

//3.
const teaOrCoffee = prompt('Чай или кофе ?','Чай');
const sugar = prompt('С сахором ?','да');

if(teaOrCoffee === 'Чай') {
    if (sugar === 'да'){
        alert('Чай с сахором !')
    }
     else if (sugar === 'нет') {
        alert('Чай без сахара !')
    }else {
        alert('я вас не понимаю!')
    }
}    
else if(teaOrCoffee === 'Кофе') {
    if (sugar === 'да'){
        alert('Кофе с сахором !');
    }
    else if(sugar === 'нет'){
        alert('Кофе без сахара !');
    }else {
        alert('Я вас не понимаю !')
    }
}else {
    alert('Я вас не понимаю !=(')
}

(teaOrCoffee === 'Чай') ? 
(sugar === "да") ? alert('Чай с сахором !'): alert('Чай без сахара !')
: 
(sugar === "да") ? alert('Кофе с сахором !') : alert('Кофе без сахара !')