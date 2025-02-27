

//task 1
//explicitily asked to round it up a tad
function add(x, y){
    return Number((x + y).toFixed(2));
}

function subtract(x, y){
    return Number((x - y).toFixed(2));
}

function multiply(x, y) {
    return Number((x * y).toFixed(2));
};

function divide(x, y) {
    if (y == 0 && x == 0) {
        return "LMAO i caught that!you cheeky bugger!(pun intended i think)";
    }   else {return Number((x / y).toFixed(2));} 
};




//task 2
//idk if task two i mean to be a function with arguments of num1, num2 and operator but currently not? they are to update the display i guess so no? 
let num1,num2;
let operator;




//task 3
//well this answers the deliberation on task two aye?
function operate(num1, operator, num2){
//if i add more operators i should change that to switch => idk i don't have another idea currently jumping
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }   
}

