function PrintType() {
    x = "Word";
    document.getElementById("para1").innerHTML = document.write(typeof x);
}

function NotaNumber() {
    x = 0 / 0;
    document.getElementById("Notanumber").innerHTML = x;
    
}

function NotaNumber() {
    x = 5+2; // isNan (is not a number)
    document.getElementById("Notanumber").innerHTML = x;
    document.getElementById("realnumber").innerHTML = isNaN(x);// isNan (is not a number)
}

function FakeNumber() {
    x = 0 / 0;
    document.getElementById("fakenumber").innerHTML = isNaN(x);// isNan (is not a number)
}

function infinite() {
    document.getElementById("infinite number").innerHTML = 2e310;
}

function booleanaction() {
    
    document.getElementById("boolean").innerHTML = (50 > 30 );
}

console.log(80 < 50);

function coercion() {
    document.getElementById("coercion").innerHTML = ("100" + 20);
}

function dataandvalue() {
    var x = 20;
    var y = 20;
    document.getElementById("dataandvalue").innerHTML = (x === y);
}

function dataandvalue2() {
    var x = "HELLO"; // adding non similiar data types together
    var y = 10;
    document.getElementById("dataandvalue2").innerHTML = (x === y);
}


function dataandvalue3() {
    var x = "10";
    var y = 10;
    document.getElementById("dataandvalue3").innerHTML = (x === y);
}

function dataandvalue4() {
    var x = 5;
    var y = 10;
    document.getElementById("dataandvalue4").innerHTML = (x === y); // compares the data value
}

function andsign() {
    var x = 5;
    var y = 6;
    document.getElementById("andsign").innerHTML = (y + x == 11);
}

function orsign() {

    document.getElementById("orsign").innerHTML = (5 > 13 || 8 > 13);
}

function negative() {
    document.getElementById("negative").innerHTML = !( 5 > 3);
}

function andoperator() {
    document.getElementById("andoperator").innerHTML = (5 > 3 && 10 > 9);
}