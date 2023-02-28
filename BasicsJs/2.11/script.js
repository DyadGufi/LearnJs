'use sctrict';

//задания от 1 до 5
alert(null || 2 || undefined); // 2
alert( alert(1) || 2 || alert(3)); // 1 и 2. В первый раз получит indefined и выведет 2.
alert(1 && null && 2); //null. Null = false
alert(alert(1) && alert(2));//1 и undefined.
alert(null || 2 && 3 || 4); //2 && 3 == true. Выведет 3


//задание 6
let age = 60;

if(age >= 14 && age <= 90){
    alert(`${age} >= 14 and ${age} <= 90`);
} 
// else {
//     alert(`${age} < 14 or ${age} > 90`);
//}

//задание 7
//Первый вариант
if(!(age >= 14 && age <= 90)){
    alert(`${age} < 14 or ${age} > 90`);
}
//второй вариант
if(age < 14 || age > 90){
    alert(`${age} < 14 or ${age} > 90`);
}

//задание 8
if (-1 || 0) alert( 'first' ); //выполнится
if (-1 && 0) alert( 'second' ); //не выполнится
if (null || -1 && 1) alert( 'third' ); //выполнится

//Задание 9
let login = prompt("Введите логин: ", "");

if(login == "Админ"){
    let pass = prompt("Введите пароль: ", "");
    if(pass == "Я главный"){
        alert("Здравствуйте");
    } else if(pass != null){
        alert("Неверный пароль.");
    } else {
        alert("Отменено.");
    }
} else if(login != null){
    alert("Я вас не знаю.");
} else {
    alert("Отменено.");
}

