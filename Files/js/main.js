window.addEventListener("load", function () {
	slideShow();
});
function slideMenuOut(menu_id) {
	var m = document.getElementById(menu_id + "Slide"),
		c = document.getElementById("cover"),
	    b = document.getElementById(menu_id),
		bd = document.getElementById("body");
	b.style.display = "none";
	m.style.transform = "translate3d(350px, 0px, 0px)";
	m.style.overflowY = "auto"
	c.style.display = "block";
	bd.style.overflowY = "hidden";
}
function slideMenuIn() {
	var b = document.getElementById("menuBtn"),
		c = document.getElementById("cover"),
		m = document.getElementById("menuBtnSlide"),
		bd = document.getElementById("body");;
	b.style.display = "inline-block";
	m.style.transform = "translate3d(-350px, 0px, 0px)";
	m.style.overflowY = "hidden"
	c.style.display = "none";
	bd.style.overflowY = "auto";
}
function slideShow() {
    var slide1 = document.getElementById("slide1"),
        slide2 = document.getElementById("slide2"),
        slide3 = document.getElementById("slide3"),
        slide4 = document.getElementById("slide4"),
        slide5 = document.getElementById("slide5"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        dig = 0;
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
function sliderUp(slide_id) {
	var s = document.getElementById(slide_id + "d");
	s.style.transform = "translate3d(0px, -259px, 0px)";
}
function sliderDown(slide_id) {
	var s = document.getElementById(slide_id + "d");
	s.style.transform = "translate3d(0px, 0px, 0px)";
}