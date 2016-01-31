window.addEventListener("load", function () {
	slideShow();
});
function slideShow() {
    var slide1 = document.getElementById("slide1"),
        slide2 = document.getElementById("slide2"),
        slide3 = document.getElementById("slide3"),
        slide4 = document.getElementById("slide4"),
        slide5 = document.getElementById("slide5"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        dig = 0,
        digPrev = 0;
	slide2.style.display  = "none";
    slide3.style.display  = "none";
    slide4.style.display  = "none";
    slide5.style.display  = "none";
    prev.addEventListener("click", slideShowPrev);
    next.addEventListener("click", slideShowNext);
    function slideShowNext() {
        if ( dig == 0 ) {
            /*Slide 2*/
            slide1.style.display = "none";
            slide2.style.display = "block";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = dig + 1;
        } else if ( dig == 1 ) {
            /*Slide 3*/
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "block";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = dig + 1;
        } else if ( dig == 2 ) {
            /*Slide 4*/
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "block";
            slide5.style.display  = "none";
            dig = dig + 1;
        } else if ( dig == 3 ) {
            /*Slide 5*/
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "block";
            dig = dig + 1;
        } else if ( dig == 4 ) {
            /*Slide 1*/
            slide1.style.display = "block";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = 0;
        }
    }
    function slideShowPrev() {
        if ( dig == 4 ) {
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "block";
            slide5.style.display  = "none";
            dig = dig - 1;
        } else if ( dig == 3 ) {
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "block";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = dig - 1;
        } else if ( dig == 2 ) {
            slide1.style.display = "none";
            slide2.style.display = "block";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = dig - 1;
        } else if ( dig == 1 ) {
            slide1.style.display = "block";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "none";
            dig = dig - 1;
        } else if ( dig == 0 ) {
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display  = "none";
            slide5.style.display  = "block";
            dig = 4;
            console.log("Hello")
        } 
    }
}
function tileUp(tile_id) {
    var id = document.getElementById(tile_id + "t");
    var toggle = document.getElementById(tile_id + "tg")
    id.style.transition = "transform 0.2s ease-in-out";
    if (toggle.innerHTML == "1") {
        id.style.transform = "translateY(-210px)";
        toggle.innerHTML = "0"
    } else if (toggle.innerHTML == 0) {
        id.style.transform = "translateY(0px)";
        toggle.innerHTML = "1";
    }
    
}