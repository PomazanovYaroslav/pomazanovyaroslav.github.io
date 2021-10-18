"use strict"

function capitalize(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
     }
     console.log(capitalize("функции для работы со строками"));



function kmpSearch( substring, string) {
    if (substring.length == 0)
        return 0;

    let lsp = [0]; 
    for (var i = 1; i < substring.length; i++) {
        let j = lsp[i - 1]; 
        while (j > 0 && substring.charAt(i) != pattern.charAt(j))
        j = lsp[j - 1];
        if (substring.charAt(i) ==substring.charAt(j))
        j++;
        lsp.push(j);
    }

    let j = 0;
    for (var i = 0; i < string.length; i++) {
        while (j > 0 && string.charAt(i) != substring.charAt(j))
        j = lsp[j - 1];
        if (string.charAt(i) == substring.charAt(j)) {
        j++;
        if (j == substring.length)
            return i - (j - 1);
        }
    }
    return -1;
    }

console.log(kmpSearch('грамиро', 'програмирование') != -1);
console.log(kmpSearch('праг', 'програмирование') != -1); 

