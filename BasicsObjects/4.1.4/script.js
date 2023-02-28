'use stcrict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let salariesSum = salarySum(salaries);

alert(`Sum: ${salariesSum}`);


function salarySum(salaryList){
    let sum = 0;

    for(let key in salaryList){
        sum += salaryList[key];
    }

    return sum;
}