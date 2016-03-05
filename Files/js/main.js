window.addEventListener("load", function () {
	slideShow();
	slideOutMenu();
});
function slideOutMenu() {
    var toggle = document.getElementById("menuToggle"),
        menu = document.getElementById("menu"),
        cover = document.getElementById("cover"),
        menuNum = document.getElementById("menuNum"),
		dig = 0;
	toggle.addEventListener("mousedown", slide);
	cover.addEventListener("mousedown", slide);
	function slide() {
		if ( dig == 0 ) {
  	      toggle.style.display = "none";
  	      menu.style.left = "0px";
  	      cover.style.display = "block";
  	      dig = dig + 1;
  	  } else if ( dig == 1 ) {
  	      toggle.style.display = "inline-block";
  	      menu.style.left = "-300px";
  	      cover.style.display = "none";
  	      dig = dig - 1;
  	  }
	}
    
    
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