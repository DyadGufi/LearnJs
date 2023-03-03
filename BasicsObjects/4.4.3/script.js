'use strict';

let ladder = {
    step: 0,

    up(){
        this.step++;
        return this;
    },

    down(){
        this.step--;
        return this;
    },

    ShowStep: function(){
        alert( this.step );
        return this;
    }

};

ladder.up().up().ShowStep().down().ShowStep();