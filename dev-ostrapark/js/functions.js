//
// Slideshow
//

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  console.log('test');
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
  }
  x[slideIndex - 1].style.opacity = 1;
}

setInterval(function () { 
  showDivs(slideIndex += 1);
}, 5000);


var videoEl = document.querySelector('video');

videoEl.addEventListener('click', function () {
  if (videoEl.paused) {
    videoEl.play();
    videoEl.controls = false;
  } else {
    videoEl.pause();
    videoEl.controls = true;
  }
});