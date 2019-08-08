//
//	PAGE KEYS
//

var homePage = document.querySelector('.key--home');

function visiting(key) {
	return key !== null ? true : false;
};




//
// RESPONSIVE 100VH FIX FOR SCROLLING 
//

var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());

function vhResize() {
    var vh = window.innerHeight * 0.01;
    if ( ie === undefined ) {
        document.documentElement.style.setProperty('--vh', vh + 'px');
    };
};

window.addEventListener('resize', vhResize);



//
//	NAVBAR
//

const content = document.querySelector('body');
const openingOverlay = document.getElementById('overlay');
const menuToggler = document.getElementById('nav__toggler');
const menuContent = document.getElementById('nav__content');

//const dots = Array.prototype.slice.call(document.getElementsByClassName('slider__home--dot'));

// imageBoxes.forEach(imageBox => {
//     imageBox.addEventListener('click', function() {

//     });
// });


//NAVBAR TOGGLING ANIMATION

function menuSlider (content, button) {
    button.addEventListener('click', function () {
        button.classList.toggle("change");
        $(content).slideToggle(400);
    });
};

menuSlider(menuContent, menuToggler);



//
// GLIDE INIT
//


if (visiting(homePage)) {
	var sliderMain = new Glide('#slider__main', {
		type: 'slider',
		autoplay: 6000,
		animationDuration: 1000,
		gap: 0
	});

	sliderMain.mount();

	
};

//
// SMOOTH SCROLL BROWSER FIX
//

$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 150
			}, 800 );
		}
	});
});



//
//	VIDEO
//

var gdVideo = document.querySelector('.gd__video');

gdVideo.addEventListener('click', function () {
	if (gdVideo.paused) {
			gdVideo.play();
			gdVideo.controls = false;
	} else {
		gdVideo.pause();
		gdVideo.controls = true;
	}
});

//
// LOCATIONS
//

var isShown = "hidden";
var animDuration = 700;

function hidePanel(target){
	//CSS Class .movedown {transform: translateY(2rem);transition: 0.5s ease-out;}
	target.classList.remove('moveup');
	target.classList.add('movedown');
	$(target).animate({
		opacity: 0,
	}, animDuration );
	setTimeout(function() {
		$(target).hide();
		
	}, animDuration);
};

function showPanel(target){
	//CSS Class .movedown {transform: translateY(2rem);transition: 0.5s ease-out;}
	$(target).show();
	target.classList.add('moveup');
	$(target).animate({
		opacity: 1,
	}, animDuration );
	setTimeout(function() {
		target.classList.remove('movedown');
	}, animDuration);	
};

var locText = document.getElementById('locations');
var locMain = document.getElementById('location--main');
var locBackButton = document.getElementById('location--goback');
var locContainers = Array.prototype.slice.call(document.getElementsByClassName('location__container'));
var locBoxes = Array.prototype.slice.call(document.getElementsByClassName('location__box'));
var locMainLinkOstraAreal = document.getElementById('location--main-ostraareal');
var locMainLinkEventwerk = document.getElementById('location--main-eventwerk');
var locMainLinkMutzelhaus = document.getElementById('location--main-mutzelhaus');
var locMainLinkBurgermeister = document.getElementById('location--main-burgermeister');

locBackButton.addEventListener('click', function(){
	locContainers.forEach(container => {
		hidePanel(container);
		hidePanel(locBackButton);
	});
	setTimeout(function(){
		showPanel(locMain);
	}, animDuration - 1);
	locText.textContent = 'Locations';
});

locBoxes.forEach(element => {
	element.addEventListener('click', function() {
		showPanel(locBackButton);
	});
	
});


//OSTRAL-AREA

var locBoxOstraAreal = document.getElementById('location--box-ostraareal');

var locLinkOpenair = document.getElementById('location--link-openair');
var locLinkErlcapitol = document.getElementById('location--link-erlcapitol');
var locLinkErlforum = document.getElementById('location--link-erlforum');
var locLinkSeehaus = document.getElementById('location--link-seehaus');

var locBoxOpenair = document.getElementById('location--box-openair');


locMainLinkOstraAreal.addEventListener('click', function(){
	hidePanel(locMain);
	setTimeout(function() {
		showPanel(locBoxOstraAreal);
	}, animDuration - 1);
	locText.textContent = "Ostra-Areal"
});

locLinkOpenair.addEventListener('click', function(){
	hidePanel(locBoxOstraAreal);
	setTimeout(function() {
		showPanel(locBoxOpenair);
	}, animDuration - 1);
	locText.textContent = "Open-Air (Freifläche)"
});

//

console.log(window.pageYOffset);