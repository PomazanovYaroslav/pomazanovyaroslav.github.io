"use strict"

const arr = [
    {name: 'Vasya', surname: 'Ivanov'},
    {name: 'Vanya', surname: 'Ivanov'},
    {name: 'Albert', surname: 'Vasyliev'},
    ];

   function keyBy(a,b){
       if(a.name < b.name)
       return -1;
       if (a.name > b.name)
       return 1;
       return 0;
   }
   arr.sort(keyBy);

   for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
   }


   function keyBy(a,b){
    if(a.surname < b.surname)
    return -1;
    if (a.surname > b.surname)
    return 1;
    return 0;
}
    arr.sort(keyBy);

    for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].surname);
    }