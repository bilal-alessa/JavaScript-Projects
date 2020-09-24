function validateForm() {
    var x = document.forms["formSubmission"]["flname"].value;
    var y = document.forms["formSubmission"]["email"].value;
    var z = document.forms["formSubmission"]["message"].value;
    for (x == ""; y == ""; z == "") {
     alert("Please fill all empty fields");
     return false;
    }
}