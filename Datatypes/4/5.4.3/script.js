'use strict';

let arr = ["a" , "b"];

arr.push(function(){
    alert( this );
});

//выведет a,b,function(){ alert( this ); }
arr[2]();