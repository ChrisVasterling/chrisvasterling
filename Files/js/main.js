window.addEventListener("load", function () {
    /*
        Project Section - Slides
    */

    // counts number of slides on load, since each slide is 100% multiple the number of slides
    // by 100 so you get all the percentages added together.
	var slideAmount = document.getElementsByClassName("projectSlide").length;
    // take the number of slides and multiply it by 100 (for percentage height total)
    maxYval = slideAmount * 100;
    setTimeout(function(){
        var menuToggle = document.getElementById('menuBtn'),
            name = document.getElementById('name');
        name.style.boxShadow = '5px 5px 10px black';
        name.style.opacity = '1';
        name.style.transform = 'scale(1)';
        setTimeout(function(){
            menuToggle.style.boxShadow = '2px 2px 5px black';
            menuToggle.style.transform = 'scale(1)';
        }, 750)
    }, 750)
});
function slideMenuIn(btn) {
	var b = document.getElementById("menuBtn"),
		c = document.getElementById("cover"),
		m = document.getElementById("menuBtnSlide"),
		bd = document.getElementById("body"),
		btnId = document.getElementById(btn + "Hr");
	setTimeout( function() {
        if (btn == 'contact') {
            btnId = document.getElementById("contactHr"),
    		sec = document.getElementById("aboutSec").offsetTop;
            openAboutSec('aboutDetCon');
            if (viewAbtControls == true) {
                aboutControls("aboutControlTog");
            }
        } else if (btn == 'about') {
            sec = document.getElementById("aboutSec").offsetTop;
            if (viewAbtControls == false) {
                aboutControls("aboutControlTog");
            }
        } else {
            sec = document.getElementById(btn + "Sec").offsetTop;
        }
		window.scrollTo(0, sec - 50);
		b.style.display = "inline-block";
		m.style.transform = "translate3d(-300px, 0px, 0px)";
		m.style.overflowY = "hidden";
		bd.style.overflowY = "auto";
        c.style.backgroundColor = "transparent";
        setTimeout(function(){
            c.style.display = "none";
        }, 400)
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
	bd.style.overflowY = "auto";
    c.style.backgroundColor = "transparent";
    setTimeout(function(){
        c.style.display = "none";
    }, 400)
}
function slideMenuOut(menu_id) {
	var m = document.getElementById(menu_id + "Slide"),
		c = document.getElementById("cover"),
	    b = document.getElementById(menu_id),
		bd = document.getElementById("body");
    b.style.boxShadow = "0px 0px 0px black";
    b.style.transform = "scale(.95)";
    b.style.opacity = "0";
    c.style.display = "block";
    setTimeout(function(){
        b.style.boxShadow = "2px 2px 5px black";
        b.style.transform = "scale(1)";
        b.style.opacity = "1";
        b.style.display = "none";
        c.style.backgroundColor = "rgba(20, 20, 20, 0.5)";
        m.style.transform = "translate3d(300px, 0px, 0px)";
        m.style.overflowY = "auto";
        bd.style.overflowY = "hidden";
    }, 300)

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
var viewSites = false;
function gallerySites() {
    var img = document.getElementById('gallery'),
        tog = document.getElementById('galleryTog'),
        togImg = document.getElementById('galleryTogImg'),
        cont = document.getElementById('galleryControls');
    cont.style.height = img.clientHeight - tog.clientHeight + 'px'
    if (viewSites == false) {
        cont.style.transform = 'translate3d(0px, ' + tog.offsetHeight + 'px, 0px)'
        togImg.style.transform = 'rotateX(180deg)'
        viewSites = true;
    } else if (viewSites == true) {
        cont.style.transform = 'translate3d(0px, -100%, 0px)'
        togImg.style.transform = 'rotateX(0deg)'
        viewSites = false;
    }
}
// default Y position for the slide container
var Yval = 0;
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
function galleryImage(website) {
    var image = "Files/img/gallery/" + document.getElementById(website).dataset.image,
        website = document.getElementById(website),
        galleryWebsite = document.getElementById('galleryWebsite'),
        galleryImage = document.getElementById('galleryImage'),
        gallery = document.getElementById('galleryImg');
    gallery.style.opacity = '0';
    website.style.boxShadow = '0px 0px 0px black';
    website.style.transform = 'scale(0.95)';
    gallery.style.transform = "scale(.95)";
    gallery.onload = function() {
        gallery.style.opacity = '1';
        gallery.style.transform = "scale(1)";
        website.style.boxShadow = '2px 2px 5px black';
        website.style.transform = 'scale(1)';
        gallerySites();
    };
    setTimeout( function () {
        gallery.src = image;
        galleryWebsite.href = website.dataset.url;
        galleryImage.href = image;
    }, 500)
}
function photographChange(buttonID) {
    var button = document.getElementById(buttonID),
        image = button.dataset.image,
        pImage = document.getElementById('photographyImage'),
        filePath = 'Files/img/photography/',
        vImg = document.getElementById('viewImg'),
        lImg = document.getElementById('largeImg'),
        pLinks = document.getElementById('photoLinks'),
        PCButtons = document.getElementById('photoControlButtons').offsetHeight + 30 + pLinks.offsetHeight;
    vImg.href = filePath + image + '_fullres.jpg';
    lImg.href = filePath + image + '_fullres.jpg';
    lImg.download = 'image' + image + '.jpg';
    pImage.style.opacity = '0';
    pImage.style.transform = 'scale(.95)';
    button.style.boxShadow = '0px 0px 0px black';
    button.style.transform = 'scale(0.95)';
    setTimeout( function() {
        pImage.src = filePath + image + '.jpg';
        pImage.addEventListener('load', function () {
            pImage.style.opacity = '1';
            pImage.style.transform = 'scale(1)';
            button.style.boxShadow = '2px 2px 5px black';
            button.style.transform = 'scale(1)';
        })
    }, 400);
}
function displayMorePhotos(dispHide) {
    var more = document.getElementById('morePhotos'),
        photosMore = document.getElementById('photosMore'),
        pButtons = document.getElementById('photoButton');
    if (dispHide == 'display') {
        more.style.display = "inline";
        photosMore.innerHTML = 'Less Photos'
        photosMore.setAttribute('onclick', 'displayMorePhotos("hide")')
    } else if (dispHide == 'hide') {
        more.style.display = "none";
        photosMore.innerHTML = 'More Photos'
        photosMore.setAttribute('onclick', 'displayMorePhotos("display")')
    }
}
function scrollStart() {
    setTimeout(function() {
        var stop = document.getElementById('websitesSec').offsetTop - 75,
        scroll = setInterval(function() {
            window.scrollBy(0, 20)
            if (window.pageYOffset >= stop) {
                clearInterval(scroll)
            }
        }, 10);
    }, 100)

}
var viewAbtControls = true, abtControlTime = 400;
function aboutControls(togBtn) {
    var tog = document.getElementById(togBtn),
        controls = document.getElementById('aboutControls');
    tog.style.boxShadow = '0px 0px 0px black';
    tog.style.transform = 'scale(0.95)';
    setTimeout( function() {
        if (viewAbtControls == true) {
            controls.style.transform = 'translate3d(-100%, 0, 0)';
            tog.src= "Files/img/icons/svg/grid.svg";
            tog.style.backgroundColor = 'rgb(0, 0, 100)';
            viewAbtControls = false;
        } else if (viewAbtControls == false) {
            controls.style.transform = 'translate3d(0, 0, 0)';
            tog.src= "Files/img/icons/svg/arrowLeft.svg";
            tog.style.backgroundColor = 'rgb(80,100,145)';
            viewAbtControls = true;
        }
        tog.style.boxShadow = '2px 2px 5px black';
        tog.style.transform = 'scale(1)';
    }, abtControlTime);
}
function openAboutSec(aboutBtn) {
    var section = document.getElementById(aboutBtn + 'Sec'),
        abtSections = document.getElementsByClassName('aboutDetSec');
    setTimeout(function(){
        for (i = 0; i <= abtSections.length - 1; i++) {
            document.getElementById(abtSections[i].id).style.opacity = '0';
        }
        setTimeout(function(){
            for (i = 0; i <= abtSections.length - 1; i++) {
                document.getElementById(abtSections[i].id).style.display = 'none';
            }
            section.style.display = 'block';
            section.style.opacity = '1';
        }, abtControlTime)
    }, abtControlTime * 2)

}
