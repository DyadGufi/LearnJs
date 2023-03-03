'use strict';

function sumInput(){
    let data = [];

    while(true) {
        let val = prompt("Enter num: ", 0);

        if(val === '' || val === null || val === !isFinite(val))
            break;

        data.push(+val);
    }


    let sum = 0;

    for(let num of data){
        sum += num;
    }

    return sum;
}

alert( sumInput() );