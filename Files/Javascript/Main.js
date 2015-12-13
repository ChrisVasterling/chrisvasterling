window.addEventListener("load", function () {
	var smbtnout  = document.getElementById("smbtnout").style.display = "none";
	var load_screen = document.getElementById("load_screen");
	document.body.removeChild(load_screen);
});
/*Sidebar Animation start*/
/*
function sidebarin() {
	var smbtnin = document.getElementById("smbtnin");
	var smbtnout = document.getElementById("smbtnout");
	var sidebar = document.getElementById("sidebar");
	var mcontent = document.getElementById("mcontent");
	var cover = document.getElementById("cover");
	sidebar.style.marginLeft = "0px";
	smbtnin.style.display = "none";
	smbtnout.style.display = "block";
	smbtnout.style.marginLeft = "0px";
	smbtnout.style.left = "20px";
	//Sidebar webkit animation
	sidebar.style.WebkitAnimationName = "sidebarin";
	sidebar.style.WebkitAnimationDuration = "0.5s";
	sidebar.style.animationName = "sidebarin";
	sidebar.style.animationDuration = "0.5s";
	//toggle button webkit animation
	smbtnout.style.WebkitAnimationName = "sidebarbtnin";
	smbtnout.style.WebkitAnimationDuration = "0.5s";
	smbtnout.style.animationName = "sidebarbtnin";
	smbtnout.style.animationDuration = "0.5s";
	cover.style.display = "block";
	cover.className = "cover2";
	cover.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
	//cover webkit animation
	cover.style.WebkitAnimationName = "coverin"
	cover.style.WebkitAnimationDuration = ".5s"
	cover.style.animationName = "coverin"
	cover.style.animationDuration = ".5s"
	//mcontent.style.animationName = "mcontentin";
	//mcontent.style.animationDuration = "0.5s";
	//mcontent.style.marginLeft = "300px";
}
function sidebarout() {
	var smbtnin = document.getElementById("smbtnin");
	var smbtnout = document.getElementById("smbtnout");
	var sidebar = document.getElementById("sidebar");
	var mcontent = document.getElementById("mcontent");
	var cover = document.getElementById("cover");
	sidebar.style.marginLeft = "-300px";
	smbtnin.style.display = "inline";
	smbtnout.style.display = "none";
	smbtnout.style.marginLeft = "50px";
	//Sidebar webkit animation
	sidebar.style.WebkitAnimationName = "sidebarout";
	sidebar.style.WebkitAnimationDuration = "0.5s";
	sidebar.style.animationName = "sidebarout";
	sidebar.style.animationDuration = "0.5s";
	//toggle button webkit animation
	smbtnin.style.WebkitAnimationName = "sidebarbtnout";
	smbtnin.style.WebkitAnimationDuration = "0.5s";
	smbtnin.style.animationName = "sidebarbtnout";
	smbtnin.style.animationDuration = "0.5s";
	cover.className = "cover2";
	cover.style.backgroundColor = "transparent";
	//cover webkit animation
	cover.style.WebkitAnimationName = "coverout";
	cover.style.WebkitAnimationDuration = ".5s";
	cover.style.animationName = "coverout";
	cover.style.animationDuration = ".5s";
	setTimeout(function(){cover.style.display = "none"; }, 500)
	//mcontent.style.animationName = "mcontentout";
	//mcontent.style.animationDuration = "0.5s";
	//mcontent.style.marginLeft = "0px";
}
*/
/*Sidebar Animations end*/
function sidebarin() {
    var smbtnin = document.getElementById("smbtnin");
	var smbtnout = document.getElementById("smbtnout");
	var sidebar = document.getElementById("sidebar");
	var mcontent = document.getElementById("mcontent");
	var cover = document.getElementById("cover");
    sidebar.style.transform = "translate(300px,0px)";
	cover.className = "cover2";
	cover.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    cover.style.left = "300px";
    smbtnin.style.display = "none";
	smbtnout.style.display = "block";
	smbtnout.style.marginLeft = "0px";
	smbtnout.style.left = "20px";
}
function sidebarout() {
    var smbtnin = document.getElementById("smbtnin");
	var smbtnout = document.getElementById("smbtnout");
	var sidebar = document.getElementById("sidebar");
	var mcontent = document.getElementById("mcontent");
	var cover = document.getElementById("cover");
    sidebar.style.transform = "translate(0px,0px)";
    cover.className = "cover2";
	cover.style.backgroundColor = "transparent";
    cover.style.left = "-100%";
    smbtnin.style.display = "inline";
	smbtnout.style.display = "none";
	smbtnout.style.marginLeft = "50px";
}