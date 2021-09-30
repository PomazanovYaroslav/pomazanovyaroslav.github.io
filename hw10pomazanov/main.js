"use strict"

let user = {};
    alert(check(user));
    console.log(check(user));
    
function check(user){
    for (let key in user) {
    return false;
    }
    return true;
}


 let obj = {
    '0': 'zero', 
    '42': 'answer', 
    'greeting': 'Hello',
    '3.14': 'PI', 
}
function getValues(obj) {
    let values = [];
    
    for (let key in obj) {
        if (key == +key) {
        values.push(obj[key]);
        }
    }
    
    return values.join(', ');
    }
    
console.log(getValues(obj));