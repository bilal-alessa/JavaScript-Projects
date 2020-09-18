var globalvar = "This is a global variable"; //global variable can be grabbed by any function.

function RNGgame() {
   var x = Math.floor(Math.random() * 10);
    if (x == 5) {
        document.getElementById("result").innerHTML = "You Win!"; // If y does equal 5 this will execute
    }
    else { // else statement letting user know they've lost.
        document.getElementById("result").innerHTML = "Sorry, you lost";
    }
}

function returnanswer() {
    document.write("returnanswer").innerHTML = x; // This is just to demonstrate an error.
    console.log();  // Logging it to the console with this command.
}

function ontime() {
    if (new Date().getHours() > 12) { // time function uses 24h time between 0-23
        document.getElementById("ontime").innerHTML = "No, its past noon";
    }
    else {
        document.getElementById("ontime").innerHTML = "Yes, it is before noon";
    }
}

function Global_variable() { //called the function required to grab global var.
    document.getElementById("Global_variable").innerHTML = globalvar;
}