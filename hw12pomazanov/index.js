"use strict"

function Cat(name,breed){
    this.name = name;
    this.breed = breed;

    this.meow = function(){
        alert("Мяу =)");
    }
}

let cats = new Cat ('Вася','Мейн-кун');

cats.meow();
console.log(cats);



function User(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function(){
        alert("Hi " + this.firstName);
    }
}

let newUser = new User('Yaroslav','Pomazanov',23);

newUser.greet();
console.log(newUser);