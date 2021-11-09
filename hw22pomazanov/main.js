"use strict"

function createRangeFilter(min, max) {
    return function filter(num) { 
      if(num >= min && num <= max) return true;
      
      return false;
    }
  }
  
  const array =[1,2,3,4,5,6].filter(createRangeFilter(2, 4));
  
  console.log(array);


let array2 = [{ name: "John" }, { name: "Sarah" }];

function createKeyBy(propName) {
  return function keyBy(arr) {
    arr = array2;
    return arr.reduce((r, a) => {
      r[a[propName]] = [...(r[a[propName]] || []), a];
      return r;
    }, {});
  };
}

const key = createKeyBy("name");

const groupedData = key();

console.log(groupedData);


function createCalcPercent(percent) {
  return function calcPrecent(value) {
  return value * percent / 100;
  }
}

const percentCreator = createCalcPercent(14);

const result = percentCreator(120);

console.log(result);