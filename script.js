

//task 1
//explicitily asked to round it up a tad
function add(x, y){
    return (Number(x) + Number(y));
}

function subtract(x, y){
    return (Number(x) - Number(y));
}

function multiply(x, y) {
    return (Number(x) * Number(y)).toFixed(2);
};

function divide(x, y) {
    if (y == 0 && x == 0) {
        return "LMAO i caught that!you cheeky bugger!(pun intended i think)";
    }   else {return (Number(x) / Number(y)).toFixed(2);} 
};




//task 2
//idk if task two i mean to be a function with arguments of num1, num2 and operator but currently not? they are to update the display i guess so no? 
let num1='',num2='',temp = '';
let currentdisplay = 'num1';
let operator='';
let result = ''

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

//task4 is focused around html and CSS - complete


//task 5 -Create the functions that populate the display when you click the digit buttons.
//You should store the content of the display (the number) in a variable for use in the next step.

let display = document.getElementById('display');

const btns = document.querySelectorAll('button');

btns.forEach(button => {button.addEventListener('click', ()=> ButtonClick(button.innerText))
});

function ButtonClick (value) {
    if (!isNaN(value) || value == '.'){
        handleNum(value);

    }
    else if( value == '+' || value == '-' || value == '*' || value == '/') {

        handleOperator(value);
    }
    else if(value == '=') {
        handleEqual();
    }

    else if(value == 'AC') {
        handleAC();
    }
}



//this is almost, almost complete, i still need to pass over the handles to fix the situation of 2+ 2 +2 + 2 + 2 essentially when the operator isn't already empty, handle it like
//the Equal, also, not losing temp when we blank it after equal i think? because if we do 2+ 2 = we get 4, but if we do = again we lose it
function handleNum(value) {
    if (temp.includes('.') && value == '.') {
        display.innerText = temp;
    } else {
        temp += value
        display.innerText = temp;
    }
    return;
}


function handleOperator(value) {
    //if below happens then we are at the second operator
    // if (num1 == result) {
    //     handleEqual()
    //     operator = value;
    //     display.innerText = operator;

    // }

    operator = value;
    display.innerText = operator;
    currentdisplay = ''

    if (result == '') {
        num1 = temp; 
    } else {
        num1 = result;
        num2 = temp
    }
    temp = '';

}

function handleEqual() {
    num2 = temp;
    //temp = '';

    showcalculated(num1,operator,num2);
    // here i do the trick????
    //num1 = temp
}

function handleAC() {
    num1 = '';
    num2 = '';
    operator = ''
    display.innerText = 0;
    result = ''
    temp = ''

}

function showcalculated(num1,operator,num2) {
    display.innerText = operate(num1,operator, num2);
    result = operate(num1,operator, num2)
    num1 = result;
    return;

}