function nested1() {
    document.getElementById("Nested_Function").innerHTML = nested2();
    function nested2(){
        var starting_point= 8;
        function nested3() {
            starting_point += 1;
        }
        nested3();
        return starting_point;
    }
}