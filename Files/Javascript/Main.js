window.addEventListener("load", function () {
	slideShow()
});
function slideShow() {
    var slide1 = document.getElementById("slide1"),
        slide2 = document.getElementById("slide2"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        dig = 0;
	slide2.style.display  = "none";
    prev.addEventListener("click", slideShowPrev);
    next.addEventListener("click", slideShowNext);
    
}





var img = 0;
var imgselect = 0;
function slideshow() {
	if ( img >= 0 ) {
		img = img + 1
		imgselect = imgselect + 1
		var ss  = document.getElementById("slideshow");
		ss.style.backgroundImage = 'url(Files/Images/Slideshow/' + imgselect + '_opt.jpg)';
		if ( imgselect == 5 || imgselect >= 5 ) {
			imgselect = 0
			img = 0
		} else {
			/**/
		}
	} else {
		/**/
	}
}