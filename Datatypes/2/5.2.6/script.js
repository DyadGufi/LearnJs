'use strict';

function randomInteger(min, max) {
    let res = min + Math.random() * (max - min);
    return Math.floor(res);
}

alert( randomInteger(1, 5));
