"use strict"
 
const login = prompt('Введите логин:',"Ярослав");
const password = prompt('Введите пароль',"");
if(login === "Ярослав") {
  
   if(password === 'admin1'){
       alert(`Привет ${login} !`);
   }
   else{
   const password2 = prompt('Введите пароль ещё раз :','');
        (password2 === 'admin1') ? alert(`Привет ${login}!`) : alert('Пароль не верный !');
   }
}else {
    alert('Не верный логин =(')
}