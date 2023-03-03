'use strict';

let styles = ["Jazz", "bluz"];

styles.push("Roc-n-roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
alert( styles.shift());
styles.unshift("Rap", "Raggy");
alert(styles);