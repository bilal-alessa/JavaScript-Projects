
///WHILE LOOP////

function Call_Loop() {
    var Digit = "";
    var  X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}





function string_length() {
    var str = document.getElementById("name_length").value;
    var strsize = str.length; //.length grabs the string count including the space.
    document.getElementById("printing").innerHTML = "Your name has " + strsize + " letters in it.";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // solid brackets [] are used for assigning or retrieving values of an index in a array.
var Content = ""; // assigned as a string with an empty value
var Y; // allocating the variable Y only. 
function for_Loop() {
 for(Y = 0; Y < Instruments.length; Y++) { // starts with assigning Y as 0 and as long as Y is less than the amount of length, then add 1(++)
   console.log(Y); // Checking the debug mode for how many times the counter counts elements in the array.
    Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cats").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function array_Function() {
    var Storage = []
    Storage[0] = "Wooden Logs,";
    Storage[1] = " Iron Ore,";
    Storage[2] = " Rocks,";
    Storage[3] = " Meat,";
    Storage[4] = " Gold.";
    document.getElementById("Array").innerHTML = "You will need these items to survive the game: " + Storage[0] + Storage[1] + Storage[2] + Storage[3] + Storage[4];
}

function constant_function() {
    const Shopping_List = [] // Creating an array.
    Shopping_List[0] = "Eggs"; //Adding elements to my array.
    Shopping_List[1] = "Milk";
    Shopping_List[2] = "Soda";
    Shopping_List[3] = "Bread";
    Shopping_List[4] = "Toilet Paper"; // add this to the end of the array and run it making sure the function grabs the newly added element with its value.
    document.getElementById("Constant").innerHTML = Shopping_List[4] + " is an item in your shopping list.";
}

function let_function() {
    var x = 150;{
        let x = 20; // the let keyword 
        document.getElementById("let_function").innerHTML = x;
    }
}

function returning(a, b) {
    var ab = (a+b);
    return ab;
}

let My_Pc = {
    Processor: "I7",
    RAM: "32G",
    Motherboard: " Asus A-II X99",
    SSD: " 512GB",
    HDD: " 2TB ",
    Build : function() {
        console.log(My_Pc.Processor)
        return "PC SPECS: " + this.Processor + this.RAM + this.Motherboard + this.SSD + this.HDD;
    }
};
document.getElementById("My_Pc").innerHTML = My_Pc.Build();

function Loop_Break() {
    var counter = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
        break;
    } 
        counter += "The number is: "+ i + "<br>";
}
    document.getElementById("Loop_Break").innerHTML = counter;
}
