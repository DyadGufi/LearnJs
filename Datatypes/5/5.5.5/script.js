'use strict';

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let data = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(data);
  
  alert( sorted );
  alert( data );