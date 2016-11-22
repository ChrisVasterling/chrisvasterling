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
		m.style.overflowY = "hidden";
		c.style.display = "none";
		bd.style.overflowY = "auto";
	}, 350);
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
	m.style.overflowY = "auto";
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
var viewSites = '0'
function gallerySites() {
    var img = document.getElementById('galleryImg'),
        tog = document.getElementById('galleryTog'),
        togImg = document.getElementById('galleryTogImg'),
        cont = document.getElementById('galleryControls');
    cont.style.height = img.clientHeight + 'px'
    if (viewSites == '0') {
        cont.style.transform = 'translate3d(0px, ' + tog.clientHeight + 'px, 0px)'
        togImg.style.transform = 'rotateX(180deg)'  
        viewSites = '1'
    } else if (viewSites == '1') {
        cont.style.transform = 'translate3d(0px, -100%, 0px)'
        togImg.style.transform = 'rotateX(0deg)'
        viewSites = '0'
    }
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

/*
    Project Section - Slides
*/
// default Y position for the slide container
var Yval = 0;
// counts number of slides on load, since each slide is 100% multiple the number of slides
// by 100 so you get all the percentages added together.
window.onload = function () {
    var slideAmount = document.getElementsByClassName("projectSlide").length;
    // take the number of slides and multiply it by 100 (for percentage height total)
    maxYval = slideAmount * 100;
}
function projectsUp() {
	var ps = document.getElementById("projectSlides");
	// seen as Yval = Yval + 100
	Yval += 100;
	// if Yval equals maxYval then subtract 100 and set it equal to 0
	if ( Yval == maxYval ) {
		Yval -= maxYval;
	}
	//console.log(Yval)
	ps.style.transform = "translate3d(0px, -" + Yval + "%, 0px)";
}
function projectsDown() {
	var ps = document.getElementById("projectSlides");
	// seen as Yval = Yval - 100
	Yval -= 100;
	// if Yval equals -100 then add maxYval and set it equal to (maxYval - 100)
	if ( Yval == -100 ) {
		Yval += maxYval;
	}
	//console.log(Yval)
	ps.style.transform = "translate3d(0px, -" + Yval + "%, 0px)";
}