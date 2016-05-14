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
		window.scrollTo(0, sec - 25);
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
		img_btn = document.getElementById(image_id),
		gal = document.getElementById("gallery");
	gal.style.backgroundImage = "url(Files/img/gallery/" + img_id + ".png)";
	//img_btn.style.backgroundColor = "rgb(45, 45, 45)";
	//img_btn.style.color = "white";
}