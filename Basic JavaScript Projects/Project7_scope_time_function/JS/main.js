var globalvar = "This is a global variable"; //global variable can be grabbed by any function.


///////////////////IF Demonstration//////////////////////

function RNGgame() {
   var x = Math.floor(Math.random() * 10);
    if (x == 5) {
        document.getElementById("result").innerHTML = "You Win!"; // If y does equal 5 this will execute
    }
    else { // else statement letting user know they've lost.
        document.getElementById("result").innerHTML = "Sorry, you lost";
    }
}

///////////////////Error Demonstration//////////////////////

function returnanswer() {
    document.write("returnanswer").innerHTML = x; // This is just to demonstrate an error.
    console.log();  // Logging it to the console with this command.
}

///////////////////TIME FUNCTION//////////////////////

function ontime(){
    var Time = new Date().getHours(); //Time set as variable with hours between 0-23.
    var str; // not assigned yet. Will be used to return string to id.
    if (Time < 12 == Time > 0) { // if the time is before noon true and time is greater than midnight then statement is true so continue if.
        str = "It's morning right now";
    }
    else if (Time > 12 == Time < 18) { //if the time is later than noon but earlier than 6pm is after noon
        str = "It is afternoon right now";
    }
    else {
        str = "It is evening time."; // doesnt need any time since the remaining hours would be evening anyways.
    }
    document.getElementById("Return").innerHTML = str;
}

///////////////////USING A GLOBAL VARIABLE//////////////////////

function Global_variable() { //called the function required to grab global var.
    document.getElementById("Global_variable").innerHTML = globalvar;
}