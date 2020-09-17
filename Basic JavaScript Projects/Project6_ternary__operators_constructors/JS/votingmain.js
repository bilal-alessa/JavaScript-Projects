function verifyage() {
    var age, can_vote;
    age = document.getElementById("user_age").value;
    can_vote = (age >= 18 ) ? "Yes you can ":"No you can not ";
    document.getElementById("confirm_age").innerHTML = can_vote + "vote";
}