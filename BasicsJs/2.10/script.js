//Первое задание
//true
if ("0") {
    alert( 'Привет' );
}


//Второе задание
let jsName = prompt('Какое официальное название JavaScript?', "");

if(jsName == "ECMAScript"){
    alert("Верно!");
}
else{
    alert('Не знаете? "ECMAScript"!');
}

//Третье задание

let num = +prompt("Enter num: ", 0);

if(num > 0){
    alert(`${num} > 0`);
}
else if(num == 0){
    alert(`${num} = 0`);
}
else{
    alert(`${num} < 0`);
}

//Четвертое задание

/*
    let result;
    if(a + b < 4){
        result = 'Мало';
    } else {
        result = "Много";
    }
*/

let result;
let a = 2;
let b = 3;

result = a + b < 4 ? 'Мало' : "Много";

alert(result);

//Пятое задание
let login = 'Директор';
let message = login == 'Сотрудник' ? 'Привет' 
    : login == 'Директор' ? 'Здравствуйте'
    : login == '' ? 'Нет логина' : "";

alert(message);