//Задание 1

//Оба варианта сработают одинаково.

function CheckAge_1_1(age){
    if(age > 18){
        return true;
    }
    else{
    //..
    return confirm("Родители разрешили?");
    }
}

function CheckAge_1_2(age){
    if(age > 18){
        return true;
    }
    return confirm("Родители разрешили?");
}

//Задание 2

function CheckAge_2_1(age){
    return age > 18 ? true : confirm("Родители разрешили?");
}

function CheckAge_2_2(age){
    return (age > 18) || confirm("Родители разрешили?");
}

//Задание 3
function getMin(num1, num2){
    return num1 < num2 ? num1 : num2;
}

let num3_1 = 5;
let num3_2 = 7;
let min = getMin(num3_1, num3_2);
alert(min);

//Задание 4
function pow(num, deg){
    let result = num;
    for(let i = 0; i < deg - 1; i++){
        result *= num;
    }
    return result;
}

let num4_1 = prompt("Enter num: ", 1);
let numDeg = prompt("Enter second degree: ", 1);

if(numDeg < 1){
    alert(`Incorrect`);
} else {
    alert(pow(num4_1, numDeg));
}


