window.addEventListener("load", function () {
	slideShow();
	tiles();
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
function tiles() {
	var tileHeight = document.getElementById("tile").offsetHeight,
		tile1 = document.getElementById("slide1d"),
		tile2 = document.getElementById("slide2d"),
		tile3 = document.getElementById("slide3d"),
		tile4 = document.getElementById("slide4d");
	tile1.style.height = (tileHeight + 2) + "px";
	tile1.style.top = (tileHeight - 255) + "px";
	tile2.style.height = (tileHeight + 2) + "px";
	tile2.style.top = (tileHeight - 255) + "px";
	tile3.style.height = (tileHeight + 2) + "px";
	tile3.style.top = (tileHeight - 255) + "px";
	tile4.style.height = (tileHeight + 2) + "px";
	tile4.style.top = (tileHeight - 255) + "px";
}
function sliderUp(slide_id) {
    var TH = document.getElementById(slide_id + "d").offsetHeight;
	var s = document.getElementById(slide_id + "d");
	s.style.transform = "translate3d(0px,-" + TH + "px, 0px)";
	console.log(TH);
}
function sliderDown(slide_id) {
	var s = document.getElementById(slide_id + "d");
	s.style.transform = "translate3d(0px, 0px, 0px)";
}

// CLEAN UP SLIDESHOW CODE!!!
function slideShow() {
    var slide1 = document.getElementById("slideShow1"),
        slide2 = document.getElementById("slideShow2"),
        slide3 = document.getElementById("slideShow3"),
        slide4 = document.getElementById("slideShow4"),
        slide5 = document.getElementById("slideShow5"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        dig = 0;
	slide2.style.display  = "none";
    slide3.style.display  = "none";
    slide4.style.display  = "none";
    slide5.style.display  = "none";
    prev.addEventListener("mousedown", slideShowPrev);
    next.addEventListener("mousedown", slideShowNext);
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