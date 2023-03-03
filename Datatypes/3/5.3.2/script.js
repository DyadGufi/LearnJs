'use strict';

function checkSpam(str) {
    let copyStr = str.toLowerCase();

    return copyStr.includes('viagra') || 
    copyStr.includes('xxx');
}

alert( checkSpam("viagra"));
alert( checkSpam("xxx"));
alert( checkSpam("so say viagra hi"));
alert( checkSpam("No spam"));