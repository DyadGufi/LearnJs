'use strict';

a = 2; // объявление идет через let поскольку браузер выводит ошибку что эта переменная уже обьявлена в прошлом скрипте

let x = 1 + (a *= 2); //x = 1 + 4 = 5

alert(`x = ${x}`);