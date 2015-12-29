window.addEventListener("load", function () {
	var smbtnout  = document.getElementById("smbtnout").style.display = "none";
	var load_screen = document.getElementById("load_screen");
	document.body.removeChild(load_screen);
    slideArrow();
});
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
function slideArrow() {
    var WS1 = document.getElementById("WS1");
    var wsBtn1 = document.getElementById("wsBtn1");
    var WS2 = document.getElementById("WS2");
    var wsBtn2 = document.getElementById("wsBtn2");
    var WS3 = document.getElementById("WS3");
    var wsBtn3 = document.getElementById("wsBtn3");
    var WS4 = document.getElementById("WS4");
    var wsBtn4 = document.getElementById("wsBtn4");
    var WS5 = document.getElementById("WS5");
    var wsBtn5 = document.getElementById("wsBtn5");
    var moveDist = 220;
    wsBtn1.addEventListener("click", function () {
        var i1 = document.getElementById("Identifier1");
        if (i1.innerHTML == "off") {
            WS1.style.transform = "translate(0px,-"+ moveDist +"px)"
            wsBtn1.style.transform = "rotate(180deg)"
            i1.innerHTML = "on"
        } else if (i1.innerHTML == "on") {
            WS1.style.transform = "translate(0px,0px)"
            wsBtn1.style.transform = "rotate(0deg)"
            i1.innerHTML = "off"
        }
    });
}