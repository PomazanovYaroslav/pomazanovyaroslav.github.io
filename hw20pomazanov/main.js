"use strict"

function fibonacci(num) {  
     if (num <= 1) return 1;  
       return fibonacci(num - 1) + fibonacci(num - 2); 
    }  
console.log(fibonacci(10));

function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}
console.log(factorial(6));

function factorials(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorials(n-1, result*n);
    }
}
console.log(factorials(5));