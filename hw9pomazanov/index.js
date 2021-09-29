"use strict"
function gener(){
    return Math.floor(Math.random() * 100) + 1;
}

function numberGame(userNumber,generation){
    if (userNumber == generation) {
        let newGame = confirm('Поздравляю! Вы угадали , хотите сыграть ещё?');
        if (newGame) {
            let userNumber = +prompt('Введите число от 1 до 100',);
            numberGame(userNumber, gener());
        }
    }
    else {
        let response = (userNumber > generation) ? 'Много!' : 'Мало!';

        userNumber = +prompt(response + ' Введите число от 1 до 100 еще раз:', userNumber);
        numberGame(userNumber, generation);
    }
}

let userNumber = +prompt('Введите число от 1 до 100',);
numberGame(userNumber, gener());