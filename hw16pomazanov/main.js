"use strict"

function capitalize(string) {
    return string
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalize('я хочу учить английский'));

function checkSubstring(string,substring){
    return string
        .toLowerCase()
        .includes(substring.toLowerCase());
}
console.log(checkSubstring('Програмист','прог'));