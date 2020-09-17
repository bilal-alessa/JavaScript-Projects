function My_math() {
    var add = 20 + 53;
    document.getElementById("Math").innerHTML = "20 + 53 = " + add;
}

function My_Math_subtract() {
    var subtract = 100 - 70;
    document.getElementById("mathsubtract").innerHTML = "100 -70 = " + subtract;
}

function Multiply() {
    var multiply = 10 * 10;
    document.getElementById("multiplication").innerHTML = "10 * 10 = " + multiply;
}

function Divide() {
    var divide = 100 / 10;
    document.getElementById("division").innerHTML = "100 / 10 = " + divide;
}

function Math_function() {
    var x = (5+5) * 30 / 3 - 2; // remember to follow PEDMAS rules of operations
    document.getElementById("multiplemathequations").innerHTML = "We start with 5 plus 5, multiply 30,"
    + " followed by dividing by 3 and ending with subtracting 2. The answer will be " + x;
}

function getremainder() {
    var remainder = 5 % 3
    document.getElementById("remaindernumber").innerHTML = remainder;
}

function negativenumber() {
    var a = 8;
    document.getElementById("Positive").innerHTML = "This is a negative number " + -a;
}

function increment(){
    x = 5;
    x++; // ++ double time is to add one integer to a number.
    document.getElementById("increment").innerHTML = "5 + 1 = " + x; 
}

function decrement() {
    x = 5;
    x--; // double -- is to drecrement by 1 integer.
    document.getElementById("decrement").innerHTML = "5 - 1 = " + x
}

function randomnumber() {
    x = Math.random() * 100; //What do the parameters in this situation mean?
    document.getElementById("random").innerHTML = x;
}

function SquareRt() {
    x = Math.sqrt(64); // The Math.sqrt() does seem to be case sensitive.
    document.getElementById("sqrof64").innerHTML = "The square root of 64 is = "
    + x;
}