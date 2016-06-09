window.addEventListener("load", function () {
	
});
function slideMenuIn(btn) {
	var b = document.getElementById("menuBtn"),
		c = document.getElementById("cover"),
		m = document.getElementById("menuBtnSlide"),
		bd = document.getElementById("body"),
		btnId = document.getElementById(btn + "Hr"),
		sec = document.getElementById(btn + "Sec").offsetTop;
	setTimeout( function() {
		window.scrollTo(0, sec - 50);
		b.style.display = "inline-block";
		m.style.transform = "translate3d(-300px, 0px, 0px)";
		m.style.overflowY = "hidden"
		c.style.display = "none";
		bd.style.overflowY = "auto";
	}, 350)
}
function slideMenuInCover() {
	var b = document.getElementById("menuBtn"),
		c = document.getElementById("cover"),
		m = document.getElementById("menuBtnSlide"),
		bd = document.getElementById("body");
	b.style.display = "inline-block";
	m.style.transform = "translate3d(-300px, 0px, 0px)";
	m.style.overflowY = "hidden"
	c.style.display = "none";
	bd.style.overflowY = "auto";
}
function slideMenuOut(menu_id) {
	var m = document.getElementById(menu_id + "Slide"),
		c = document.getElementById("cover"),
	    b = document.getElementById(menu_id),
		bd = document.getElementById("body");
	b.style.display = "none";
	m.style.transform = "translate3d(300px, 0px, 0px)";
	m.style.overflowY = "auto"
	c.style.display = "block";
	bd.style.overflowY = "hidden";
}
function bottomSlide(btn) {
	var btnId = document.getElementById(btn + "Hr"),
		btnW = document.getElementById(btn).offsetWidth;
	btnId.style.opacity = "1.0";
	btnId.style.width = btnW + "px";
	setTimeout( function() {
		btnId.style.width = "0px";
		btnId.style.opacity = "0.0";
	}, 400)
}
function gallery(image_id) {
	var img_id = document.getElementById(image_id).id,
		gal = document.getElementById("gallery"),
		imgLink = document.getElementById("imageLink"),
		image1Link = "http://delongyearbooks.weebly.com",
		image2Link = "http://longfellowyearbooks.weebly.com";
	setTimeout(function() {
		gal.style.backgroundImage = "url(Files/img/gallery/" + img_id + ".png)";
		if ( img_id == "image1") {
			imgLink.href = image1Link;
		} else if ( img_id == "image2" ) {
			imgLink.href = image2Link;
		}; // Add more else if's if there are more images
	}, 200)
	
}
var pos = "0";
function galleryControls() {
	var controls = document.getElementById("controls"),
		controlTog = document.getElementById("controlTog"),
		ctrlWidth = controls.offsetWidth;
	if (pos == "0") {
		controls.style.transform = "translate3d(-" + ctrlWidth + "px, 0px, 0px)";	
		controlTog.style.transform = "rotate(180deg)";
		pos = "1";
	} else if (pos == "1") {
		controls.style.transform = "translate3d(0px, 0px, 0px)";
		controlTog.style.transform = "rotate(0deg)";
		pos = "0";
	}
	
}
// default Y position for the slide container
var psY = 0;
// take the number of slides and multiply it by 100
var maxPsY = 400;
function projectsUp() {
	var ps = document.getElementById("projectSlides");
	// seen as psY = psY + 100
	psY += 100;
	// if psY equals maxPsY then subtract 100 and set it equal to 0
	if ( psY == maxPsY ) {
		psY -= maxPsY;
	}
	//console.log(psY)
	ps.style.transform = "translate3d(0px, -" + psY + "%, 0px)";
}
function projectsDown() {
	var ps = document.getElementById("projectSlides");
	// seen as psY = psY - 100
	psY -= 100;
	// if psY equals -100 then add maxPsY and set it equal to (maxPsY - 100)
	if ( psY == -100 ) {
		psY += maxPsY;
	}
	//console.log(psY)
	ps.style.transform = "translate3d(0px, -" + psY + "%, 0px)";
}