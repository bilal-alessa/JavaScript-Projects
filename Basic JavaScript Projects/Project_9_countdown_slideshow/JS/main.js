function countdown() {
    var seconds = document.getElementById("seconds").value;

        function tick() {
            seconds = seconds - 1;
            timer.innerHTML = seconds;
            setTimeout(tick, 1000); // 1000 milliseconds is 1 second.
        if(seconds == -1) {
            alert("Time's up!");
        }
            }
        tick();
    }

//setting the variable slideIndex to 1 to grab the first slide
//and present it without hiding all of the images.
//wse used an html event tag (onload) to fun the function
//showSlides and to unhide the origial slide otherwise
//none will never execute.

var slideIndex = 1; // Global variables declared and assigned.
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}