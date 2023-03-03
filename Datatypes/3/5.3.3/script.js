'use strict';

function truncate(str, maxlenght) {
    let res;
    if(str.lenght > maxlenght){
        res = str.slice(0, maxlenght - 1) + '…';
    } else {
        res = str;
    }
    return res;
}

alert(truncate("helllllooooo sssssi2222222222222irr", 20));