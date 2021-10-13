"use strict"
 
let login = prompt('Введите логин:',"Ярослав");
if(login === "Ярослав") {
  
    let password = prompt('Введите пароль',"");
   if(password === 'admin1'){
       alert(`Привет ${login} !`);
   }
   else{
   const password2 = prompt('Введите пароль ещё раз :','');
        (password2 === 'admin1') ? alert(`Привет ${login}!`) : alert('Пароль не верный !');
   }
}
else {
    function newUser (newlogin,newPassword,){
        alert("Логин не верный , давай создадим нового пользователя?")
        newlogin = prompt('Ваш новый логин:','');
        newPassword = prompt('Ваш новый пароль:','');
        alert(`Привет ${newlogin} , твой пароль ${newPassword} `)
        return {
            newlogin,
            newPassword,
        }
    }
    let userObj =  newUser();
    console.log(userObj);
}

