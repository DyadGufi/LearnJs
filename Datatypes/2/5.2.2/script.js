'use strict';

/*
    Из-за особенностей работы с числами и представлением
    их в двоичнои коде выходит потеря точности при работе с 
    числами с плавающей точкой.
*/

//Здесь по мнению компьютера 6.35 == 6.349999... поэтому он округляется в меньшую сторону
alert(6.35.toFixed(20));

//1.350000..008882 поэтому он округляется в 1.36
alert(1.35.toFixed(20));

/*ЧТобы исправить ошибку, необходимо изначальное число привести к целому числу */
alert(Math.round(6.35 * 10) / 10 );