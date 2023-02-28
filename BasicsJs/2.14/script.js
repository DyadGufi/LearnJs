//Задание 1

let browserName = prompt("Enter your browser: ", "");

if(browserName == "Edge"){
    alert("You've got the Edge!");
} else if(browserName == "Chrome" || 
    browserName == "Firefox" 
    ||browserName == "Safari" 
    ||browserName == "Opera"){
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

//Задание 2
const number = +prompt("Enter number >= 0 and <= 3: ", "");

switch(number){
    case 0:
        alert(`You enter: ${number}`);
        break;
    case 1:
        alert(`You enter: ${number}`);
        break;
    case 2:
        alert(`You enter: ${number}`);
        break;
    case 3:
        alert(`You enter: ${number}`);
        break;
    default:
        alert("Incorrect.");
}