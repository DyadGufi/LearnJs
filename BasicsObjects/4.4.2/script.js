'use stcrict';

let calculator = {
    read: function(){
        this.x = +prompt("Enter first num: ", 0);
        this.y = +prompt("Enter second num: ", 0);
    },

    sum: function(){
        return this.x + this.y;
    },

    mul: function(){
        return this.x * this.y;
    }
}

calculator.read();

alert( calculator.sum());
alert( calculator.mul());