"use strict"

function sumOfArray (arr) {
    return arr.flat(Infinity).reduce((a, b) => a+b, 0);
}
console.log(sumOfArray([1, [2], [[[5]]]]));

function sum(numArray) { 
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
      let Addindex = numArray[a];
      add += Addindex;
    } 
    return add;
  }
  console.log(sum([1, 2, 3, 4]));

function mapToUpperCase(){
let arr = ["melon","banana","apple","orange","lemon"];
arr = arr.map(function(x){ return x.toUpperCase(); })
console.log(arr);
}
mapToUpperCase()


function mapToUpperCase(){
let arr = ["melon","banana","apple","orange","lemon"];
for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
}
console.log(arr);
}
mapToUpperCase()