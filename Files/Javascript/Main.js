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
    var id = document.getElementById(tile_id + "t"),
        toggle = document.getElementById(tile_id + "tg"),
        desc = document.getElementById(tile_id = "Desc");
    if (toggle.innerHTML == "1") {
        id.style.transition = "transform 0.15s ease-in-out, width 0.15s ease-in-out 0.15s, margin-left 0.15s ease-in-out 0.15s";
        id.style.transform = "translateY(-210px)";
        id.style.width = "100%";
        id.style.marginLeft = "0px";
        toggle.innerHTML = "0"
    } else if (toggle.innerHTML == "0") {
        id.style.transition = "transform 0.15s ease-in-out 0.15s, width 0.15s ease-in-out, margin-left 0.15s ease-in-out";
        id.style.transform = "translateY(0px)";
        id.style.width = "50%";
        id.style.marginLeft = "25%";
        toggle.innerHTML = "1";
    }
    
}
function mMenuDown() {
    var menu = document.getElementById("mobileNav"),
        tog = document.getElementById("toggle");
    menu.style.transition = "transform 0.2s ease-out";
    if (tog.innerHTML == "1") {
        menu.style.transform = "translateY(0px)"
        tog.innerHTML = "0"
    } else if (tog.innerHTML == "0") {
        menu.style.transform = "translateY(-274px)"
        tog.innerHTML = "1";
    }
}