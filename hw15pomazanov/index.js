"use strict"

function keyBey(array, key){
    return array.reduse((objBy,user) => {
        if(!objBy[user[key]] ) {
            objBy[user[key]] = [];
        }
        objBy[user[key]].push(user);
        return objBy;
        } , {}
    )
}