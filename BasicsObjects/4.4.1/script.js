'use strict';

let user = makeUser();

alert(user.ref.name)


//данный код выведет ошибку и вернет undefined
function makeUser(){
    return {
        name: "John",
        ref: this
    };
}