'use stcrict';

let obj = {};

function A(){
    return Object;
}
function B(){
    return Object;
}

alert( new A() == new B() );