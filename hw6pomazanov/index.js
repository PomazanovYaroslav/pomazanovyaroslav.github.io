const VALID_LOGIN = 'Admin';
const VALID_PASSWORD = '123';

const login = prompt('Логин:','');

const isLoginValid = login === VALID_LOGIN;
let password = ('Пароль:','');
let isPasswordValid = password === VALID_PASSWORD;

if(!isLoginValid) {
    console.log('Не правильный логин');
}else if (isPasswordValid) {
    console.log('Привет!');
} else {
    while (!isPasswordValid) {
        password = prompt('Пароль:','');
        if (password === null) break;
        isPasswordValid = password ===VALID_PASSWORD;
    }
    if(isPasswordValid){
        console.log('Привет!');
    } else {
        console.log('Не правильный пароль');
    }
}