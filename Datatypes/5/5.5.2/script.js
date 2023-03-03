'use strict';

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [4, 7, 2, 8];

let filteredNum = filterRange(arr, 3, 7);

alert(filteredNum);