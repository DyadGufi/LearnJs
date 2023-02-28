'use stcrict';

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

alert(`${menu.width}, ${menu.height}, ${menu.title}`);
multiplyNumeric(menu);
alert(`${menu.width}, ${menu.height}, ${menu.title}`);

function multiplyNumeric(obj){
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}


