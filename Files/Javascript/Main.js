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
    var WS1 = document.getElementById("WS1"),
        wsBtn1 = document.getElementById("wsBtn1"),
        WS2 = document.getElementById("WS2"),
        wsBtn2 = document.getElementById("wsBtn2"),
        WS3 = document.getElementById("WS3"),
        wsBtn3 = document.getElementById("wsBtn3"),
        WS4 = document.getElementById("WS4"),
        wsBtn4 = document.getElementById("wsBtn4"),
        WS5 = document.getElementById("WS5"),
        wsBtn5 = document.getElementById("wsBtn5"),
        moveDist = 220;
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
    wsBtn2.addEventListener("click", function () {
        var i2 = document.getElementById("Identifier2");
        if (i2.innerHTML == "off") {
            WS2.style.transform = "translate(0px,-"+ moveDist +"px)"
            wsBtn2.style.transform = "rotate(180deg)"
            i2.innerHTML = "on"
        } else if (i2.innerHTML == "on") {
            WS2.style.transform = "translate(0px,0px)"
            wsBtn2.style.transform = "rotate(0deg)"
            i2.innerHTML = "off"
        }
    });
    wsBtn3.addEventListener("click", function () {
        var i3 = document.getElementById("Identifier3");
        if (i3.innerHTML == "off") {
            WS3.style.transform = "translate(0px,-"+ moveDist +"px)"
            wsBtn3.style.transform = "rotate(180deg)"
            i3.innerHTML = "on"
        } else if (i3.innerHTML == "on") {
            WS3.style.transform = "translate(0px,0px)"
            wsBtn3.style.transform = "rotate(0deg)"
            i3.innerHTML = "off"
        }
    });
    wsBtn4.addEventListener("click", function () {
        var i4 = document.getElementById("Identifier1");
        if (i4.innerHTML == "off") {
            WS4.style.transform = "translate(0px,-"+ moveDist +"px)"
            wsBtn4.style.transform = "rotate(180deg)"
            i4.innerHTML = "on"
        } else if (i4.innerHTML == "on") {
            WS4.style.transform = "translate(0px,0px)"
            wsBtn4.style.transform = "rotate(0deg)"
            i4.innerHTML = "off"
        }
    });
    wsBtn5.addEventListener("click", function () {
        var i5 = document.getElementById("Identifier1");
        if (i5.innerHTML == "off") {
            WS5.style.transform = "translate(0px,-"+ moveDist +"px)"
            wsBtn5.style.transform = "rotate(180deg)"
            i5.innerHTML = "on"
        } else if (i5.innerHTML == "on") {
            WS5.style.transform = "translate(0px,0px)"
            wsBtn5.style.transform = "rotate(0deg)"
            i5.innerHTML = "off"
        }
    });
}