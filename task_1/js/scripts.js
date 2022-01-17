/* This is Function called on buttonOnClick ,
 which takes value of option and call the function*/

function onTap() {
    var select = document.getElementById('Operation'); //reterives value from options
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    switch (value) {
        case "addition": //for addition
            addtion();
            break;
        case "subtraction": //for subtraction
            subtraction();
            break;

        case "division": //for division
            division();
            break;

        case "multiplication": //for multiplication
            multiplication();
            break;
        case "Modulus": //for Modulus
            modulus();
            break;
        case "increment": //for increment
            increment();
            break;

        case "decrement": //for decrement
            decrement();
            break;

    }

}
//for addition
function addtion() {
    a = 10;
    b = 5;
    result = a + b;
    alert("Addition of Number " + a + " and " + b + " is :" + result);
    // document.write(result);
    console.log(result);
}
//for subtraction
function subtraction(a, b) {
    a = 10;
    b = 5;
    result = a - b;
    alert("subtraction of Number " + a + " and " + b + " is :" + result);
    console.log(result);
}
//for division
function division(a, b) {
    a = 10;
    b = 5;
    result = a / b;
    alert("division of Number " + a + " and " + b + " is :" + result);
    console.log(result);
}
//for multiplication
function multiplication(a, b) {
    a = 10;
    b = 5;
    result = a * b;
    alert("multiplication of Number " + a + " and " + b + " is :" + result);
    console.log(result);
}
//for modulus
function modulus() {
    a = 10;
    b = 5;
    result = a % b;
    alert("modulus of Number " + result);
    // document.write(result);
    // console.log(result);
}
//for increment
function increment(a, b) {
    a = 10;
    b = 5;
    result = ++a;
    result1 = ++b;
    alert("increment of first Number  :" + result + " and " + "increment of second Number :" + result1);
    console.log(result);
}
//for decrement
function decrement(a, b) {
    a = 10;
    b = 5;
    result = --a;
    result1 = --b;
    alert("decrement of first Number :" + result + " and " + "decrement of second Number :" + result1);
    console.log(result);
}