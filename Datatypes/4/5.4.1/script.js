'use strict';

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Бананы");

/*Выведет 4. Мы создали не пкопию массива, а ссылку на него */
alert( fruits.length);