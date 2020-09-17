function verifyage() {
    var age, can_vote;
    age = document.getElementById("user_age").value;
    can_vote = (age >= 18 ) ? "Yes you can ":"No you can not "; // ternary operation, basically a simple if statement using boolean true or false left is true right is false.
    document.getElementById("confirm_age").innerHTML = can_vote + "vote";
}

function Shirt(Color, Size, Type) {
    this.Shirt_Color = Color; // assigning properties to the class
    this.Shirt_Size = Size;
    this.Shirt_Type = Type;
}
var Bilal = new Shirt("Blue", "Extra-Large", "Tank-Top");
var Zayn = new Shirt("White", "Small", "Onesie");

function New_shirt() {
    document.getElementById("New_and_This").innerHTML =
    "Bilal's shirt color is " + Bilal.Shirt_Color + ", the size is "
    + Bilal.Shirt_Size + " and it is a " + Bilal.Shirt_Type;

}

function nested1() {
    document.getElementById("Nested_Function").innerHTML = nested2(); // grabs element id and assigns function in nested2 for the output.
    function nested2(){
        var starting_point= 8;
        function nested3() {
            starting_point += 1;
        }
        nested3();
        return starting_point; // return is the point of stopping and returning the value back to the caller.
    }
}