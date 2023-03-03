'use strict';

function filterRangeInPlace(arr, a, b) {
    
    for(let i = 0; i < arr.lenght; i++) {
        let num = arr[i];

        if(num < a || num > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );