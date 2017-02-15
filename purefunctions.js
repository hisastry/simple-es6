/**
 * Created by associate on 2/14/17.
 */
"use strict";

// Pure functions are those that doesn't have side effect i.e no state change outside the function context

// Pure function with primitives & default values
function add(x=5, y=5){
    return (x+y)
}

console.log(add(10, 10));
console.log(add(undefined, 8));
console.log(add(10));
console.log(add(null, 100));

// Pure function with array. concat returns a brand new array
function concatArray(array, element){
    return array.concat(element);
}

let array = [1,2,3,4];
console.log(concatArray(array, 5));
console.log(array);

function concatArrayWithSpread(array, element){
    return [...array, element];
}

let array1 = [7, 8, 9, 10];
console.log(concatArrayWithSpread(array1, 11));
console.log(array1);

