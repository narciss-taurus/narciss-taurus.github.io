//NAVBAR TOGGLING ANIMATION

const menuToggler = document.getElementById('menuToggler');

function navbarToggle() {
	$('#navbar__content').slideToggle(500);
};

menuToggler.addEventListener('click', navbarToggle);



//NAVBAR X ANIMATION

function toggleAnim(x) {
	x.classList.toggle("change");
}




//GLIDE DEFINITIONS

var sliderFooter = new Glide('#footer__partnergroup', {
	type: 'carousel',
	autoplay: 2000,
	animationDuration: 700,
	perView: 4,
	breakpoints: {
		1200: {
			perView: 4
		},
		960: {
			perView: 3
		},
		600: {
			perView: 1
		}
	}
});

var sliderHome = new Glide('#home__imageslider', {
	//autoplay: 6000,
	animationDuration: 1000,
	gap: 0
});

var sliderHomeProdukte = new Glide('#home__produkte', {
	type: 'carousel',
	perView: 6,
	breakpoints: {
		1200: {
			autoplay: 3000,
			animationDuration: 700,
			perView: 3
		},
		850: {
			autoplay: 3000,
			animationDuration: 700,
			perView: 2
		},
		600: {
			autoplay: 3000,
			animationDuration: 700,
			perView: 1
		}
	}
});

var sliderUnternehmen = new Glide('#unternehmen__imageslider', {
	//autoplay: 6000,
	animationDuration: 1000,
	gap: 0
});

var sliderUnternehmenErfahren = new Glide('#unternehmen__erfahren', {
	type: 'carousel',
	perView: 5,
	breakpoints: {
		1200: {
			perView: 4
		},
		960: {
			perView: 3
		},	
		600: {
			//autoplay: 5000,
			animationDuration: 700,
			perView: 1
		}
	}
});

var sliderUnternehmenMieten = new Glide('#unternehmen__mieten', {
	type: 'carousel',
	perView: 7,
	breakpoints: {
		600: {
			//autoplay: 5000,
			animationDuration: 700,
			perView: 1
		}
	}
});

var sliderUnternehmenReferenzen = new Glide('#unternehmen__referenzen', {
	type: 'carousel',
	perView: 3,
	breakpoints: {
		600: {
			//autoplay: 5000,
			animationDuration: 700,
			perView: 1
		}
	}
});

var sliderProdukte = new Glide('#produkte--slider', {
	type: 'carousel',
	perView: 3,
	autoplay: 3000,
	peek: 80,
	gap: 90,
	breakpoints: {
		850: {
			peek: 80,
			gap: 90,
			autoplay: 3000,
			animationDuration: 700,
			perView: 2
		},
		600: {
			peek: 50,
			gap: 60,
			autoplay: 3000,
			animationDuration: 700,
			perView: 1
		}
	}
});

var sliderEinzelProdukte = new Glide('#einzelprodukte--slider', {
	type: 'carousel',
	perView: 3,
	autoplay: 3000,
	peek: 80,
	gap: 90,
	breakpoints: {
		850: {
			peek: 80,
			gap: 90,
			autoplay: 3000,
			animationDuration: 700,
			perView: 2
		},
		600: {
			peek: 50,
			gap: 60,
			autoplay: 3000,
			animationDuration: 700,
			perView: 1
		}
	}
});





var navLinks = document.getElementsByTagName('a');

var searchText = "Unternehmen";
var found;

for (var i = 0; i < navLinks.length; i++) {
	if (navLinks[i].textContent == searchText) {
		found = navLinks[i];
		break;
	}
}

var searchKontakt = "Kontakt";
var onKontakt;

for (var i = 0; i < navLinks.length; i++) {
	if (navLinks[i].textContent == searchKontakt) {
		onKontakt = navLinks[i];
		break;
	}
}




//GLIDE INITIALIZATION with PAGE LOCATIONS

sliderFooter.mount();

var homePage = document.querySelector('.key--home');
var unternehmenPage = document.querySelector('.key--unternehmen');
var kontaktPage = document.querySelector('.key--kontakt');
var produktePage = document.querySelector('.key--produkte');
var einzelProduktePage = document.querySelector('.key--einzelprodukte');


function visiting(key) {
	return key !== null ? true : false;
};

if (window.innerWidth < 1200 && visiting(unternehmenPage) ) {

	found.classList.add('bk__active--page');
	sliderUnternehmenErfahren.mount();
	sliderUnternehmenMieten.mount();
	sliderUnternehmenReferenzen.mount();
	document.body.classList.add('bk__bg--black');

} else if (visiting(unternehmenPage)) {

	found.classList.add('bk__active--page');
	sliderUnternehmen.mount();
	sliderUnternehmenReferenzen.mount();
	document.body.classList.add('bk__bg--black');
	$('#erfahren-fix').after("<div class='col-2'></div>");
	$('.unternehmen__erfahren--itemgroup').append("<div class='col-2'></div>");

} else if (window.innerWidth < 1200 && visiting(homePage)) {

	sliderHomeProdukte.mount();
	sliderHome.mount();
	document.body.classList.add('bk__bg--black');

} else if (visiting(homePage)) {

	sliderHomeProdukte.mount();
	sliderHome.mount();
	document.body.classList.add('bk__bg--black');

} else if (visiting(kontaktPage)) {
	
	onKontakt.classList.add('bk__active--page');
}





//
// RESPONSIVE 100VH FIX FOR SCROLLING 
//

function vhResize() {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// VH USAGE ON RESIZE WINDOW 
window.addEventListener('resize', vhResize);




//
//RESPONSIVE PAGESCROLLING
//

const sections = document.querySelectorAll('section');
const prevBtn = document.querySelector('.pagescroll__nav--prev');
const nextBtn = document.querySelector('.pagescroll__nav--next');

var index = 0;
var lastTime = 0;
const animationDuration = 500;

function toggleText(index, state) {
	if (state === 'show') {
		sections.forEach( function (section, i) {
			if (i === index) {
				section.querySelector('.bk__slidecontent').classList.add('slidein');
			};
		});
	} else {
		sections.forEach( function (section, i) {
			if (i === index) {
				section.querySelector('.bk__slidecontent').classList.remove('slidein');
			};
		});
	}
};

function sectionDisplay() {
	sections.forEach( function (section, i) {
		if (i === index) {
			toggleText(i, 'show');
			section.scrollIntoView({
				behavior: 'smooth'
			});
		};
	});
};

toggleText(0, 'show');


if (visiting(homePage) || visiting(unternehmenPage)) {
	nextBtn.addEventListener('click', function () {
		if (visiting(unternehmenPage)) {
			if (index > 3) return;
		} else {
			if (index > 1) return;
		};
		toggleText(index, 'hide');
		index++;
		sectionDisplay();
		if (index > 3 && visiting(unternehmenPage)) {
			nextBtn.style.opacity = "0";
		} else if (index > 1 && visiting(homePage)) {
			nextBtn.style.opacity = "0";
		} else if (index === 0) {
			nextBtn.style.opacity = "1";
		} else {
			nextBtn.style.opacity = "1";
		};
	});

	prevBtn.addEventListener('click', function () {
		if (index < 1) return;
		toggleText(index, 'hide');
		index--;
		sectionDisplay();
		if (index > 3 && visiting(unternehmenPage)) {
			nextBtn.style.opacity = "0";
		} else if (index > 1 && visiting(homePage)) {
			nextBtn.style.opacity = "0";
		} else if (index === 0) {
			nextBtn.style.opacity = "1";
		} else {
			nextBtn.style.opacity = "1";
		};
	});

	window.addEventListener('wheel', function (e) {
		var delta = e.wheelDelta;
		var currentTime = new Date().getTime();

		if (currentTime - lastTime < animationDuration) {
			e.stopPropagation();
			return;
		}

		var normalClick = new Event('click');
		var prevBtnClick = new Event('click');

		if (delta < 0) {
			window.scroll(0, 120); // THIS IS FUCKING VOODOO FOR WPADMINBAR
			nextBtn.dispatchEvent(normalClick);
			stopPropagation(); // THIS IS ALSO A LIFESAVER
		} else {
			window.scroll(0, -120); // THIS IS FUCKING VOODOO FOR WPADMINBAR
			prevBtn.dispatchEvent(prevBtnClick);
			stopPropagation(); // THIS IS ALSO A LIFESAVER
		};

		lastTime = currentTime;
	});

};


//KEYBOARD INPUT

document.onkeydown = checkKey;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
		// up arrow
		prevBtn.click();
		e.preventDefault();
	}
	else if (e.keyCode == '40') {
		// down arrow
		nextBtn.click();
		e.preventDefault();
	}
	else if (e.keyCode == '37') {
		// left arrow
	}
	else if (e.keyCode == '39') {
		// right arrow
	}
}

//TOUCH INPUT

function swipedetect(el, callback) {

	var touchsurface = el,
		swipedir,
		startX,
		startY,
		distX,
		distY,
		threshold = 50, //required min distance traveled to be considered swipe
		restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		allowedTime = 300, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handleswipe = callback || function (swipedir) {}

	touchsurface.addEventListener('touchstart', function (e) {
		var touchobj = e.changedTouches[0]
		swipedir = 'none'
		dist = 0
		startX = touchobj.pageX
		startY = touchobj.pageY
		startTime = new Date().getTime() // record time when finger first makes contact with surface
		e.stopPropagation();
	}, false)

	touchsurface.addEventListener('touchmove', function (e) {
		e.stopPropagation(); // prevent scrolling when inside DIV
	}, false)

	touchsurface.addEventListener('touchend', function (e) {
		var touchobj = e.changedTouches[0]
		distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
		elapsedTime = new Date().getTime() - startTime // get time elapsed
		if (elapsedTime <= allowedTime) { // first condition for awipe met
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
				swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
			} else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
				swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
			}
		}
		handleswipe(swipedir)
		e.stopPropagation();
	}, false)
}

//PAGESCROLL INIT

window.addEventListener('load', function () {
	sections.forEach((el) => {
		swipedetect(el, function (swipedir) {
			if (swipedir == "down") {
				prevBtn.click();
			} else if (swipedir == "up") {
				nextBtn.click();
			};			
		});
	});
});

//PAGESCROLL END





//MODAL WINDOW -- ON UNTERNEHMEN PAGE

const modalBox = document.getElementById("bk__modal");
const modalTitle = document.getElementById("bk__modal--title");
const modalCaption = document.getElementById("bk__modal--text");
const modalActiveImg = document.getElementById('bk__modal--img');
const modalImages = document.querySelectorAll('.unternehmen__referenzen--box');

modalImages.forEach((modalImage) => {
	modalImage.addEventListener('click', function () {
		modalBox.style.display = "block";
		modalActiveImg.src = modalImage.querySelector('img').src;
		modalTitle.innerHTML = modalImage.querySelector('h6').textContent;
		modalCaption.innerHTML = modalImage.querySelector('.unternehmen__referenzen--text').textContent;
	});
});

if (visiting(unternehmenPage)) {
	var modalCloser = document.querySelector(".bk__modal--close");
	modalCloser.addEventListener('click', function () {
		modalBox.style.display = "none";
	});
};

//MODAL WINDOW END




//
//PRODUKTE PAGE
//

if (visiting(produktePage)) {

	var filterArrows = Array.prototype.slice.call(document.getElementsByClassName('produkte__filter--icon'));

	filterArrows.forEach(filterArrow => {
		filterArrow.addEventListener('click', function () {
			filterArrow.classList.toggle('turn');
		});
	});

	var productSelectors = Array.prototype.slice.call(document.getElementsByClassName('produkte__item--button'));

	productSelectors.forEach(productSelector => {
		productSelector.addEventListener('click', function () {
			productSelector.textContent = "IN DEN WARENKORB";
		});
	});

	sliderProdukte.mount();
};


//
//PRODUKTE PAGE END
//


//
//EINZELPRODUKTE PAGE
//


if (visiting(einzelProduktePage)) {

	var filterArrows = Array.prototype.slice.call(document.getElementsByClassName('produkte__filter--icon'));

	filterArrows.forEach(filterArrow => {
		filterArrow.addEventListener('click', function () {
			filterArrow.classList.toggle('turn');
		});
	});

	var productSelectors = Array.prototype.slice.call(document.getElementsByClassName('produkte__item--button'));

	productSelectors.forEach(productSelector => {
		productSelector.addEventListener('click', function () {
			productSelector.textContent = "IN DEN WARENKORB";
		});
	});

	sliderEinzelProdukte.mount();
};


//
//EINZELPRODUKTE PAGE END
//