function Connect(){
    var First_name = "Bilal ";
    var Last_name = "Al-Essa";
    var Full_name = First_name.concat(Last_name); // concatenate both strings together to align
    document.getElementById("Para1").innerHTML = Full_name; 
}

function RandomChar() {
    var name = "Bilal"; // using this variable to be sliced 
    document.getElementById("Slice").innerHTML = name.slice(2,3); // 2 is the start 3 is the end index in the variable string Bilal
}

function UpperCase() {
    var x = "Click here to change all this text to upper case letters.";
    var UpperTo = x.toUpperCase(); // returns variable x with string converted to upper case
    document.getElementById("ToUpperCase").innerHTML = UpperTo;
}

function IntToString() {
    var  X = 5+6;
    document.getElementById("IntToString").innerHTML = "5 + 6 = " + X.toString() + " the number 11 is also a string";
}

function Precision() {
    var x = 152.9842651542;
    document.getElementById("Precision").innerHTML = "Precision Method,  " + x.toPrecision(6);
}

function FixedNumber(){
    var X = 99.999;
    document.getElementById("FixedNumber").innerHTML =  X.toFixed(2); // rmeoves most of the decimal points depending on toFixed parameters.
}

