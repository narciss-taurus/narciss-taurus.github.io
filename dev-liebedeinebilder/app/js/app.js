const log = console.log;

// GRID FILTERING - START

const rows              =   Array.prototype.slice.call(document.getElementsByClassName("grid-category"));

const filterOptions     =   ['option-menschen', 'option-mode', 'option-food', 'option-kunst', 'option-produkte', 'option-3d']
                            .map(option => document.getElementById(option));

const imgTypes          =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
                            .map(type => Array.prototype.slice.call(document.getElementsByClassName(type)));  

const allImages         =   Array.prototype.slice.call(document.getElementsByClassName("grid-img-wrapper"));          


const rows2 = document.querySelectorAll(".grid-category");

var firstRow = rows[0];
// var infiniteLeft = document.querySelector('.infiniteLeft');
var theWidth = firstRow.getBoundingClientRect().width;

// // function infiniteLeft(element, timing) {
// //     // var initWidth = element.getBoundingClientRect().width;
// //     element.style.transform = 'translateX(' + (-theWidth) + 'px)';
// //     element.style.transitionDuration = timing + 's';
// //     setTimeout(() => {
// //         element.style.transitionDuration = 0 + 's';
// //         element.style.transform = 'translateX(' + 0 + 'px)';
// //     }, (timing * 1000));
// // }

function infiniteLeft() {
    // var initWidth = element.getBoundingClientRect().width;
    firstRow.style.transform = 'translateX(' + (-theWidth) + 'px)';
    firstRow.style.transitionDuration = 5 + 's';
    setTimeout(() => {
        firstRow.style.transitionDuration = 0 + 's';
        firstRow.style.transform = 'translateX(' + 0 + 'px)';
        setTimeout(() => {
            infiniteLeft();
        }, 10);
    }, (5 * 1000));
};

setTimeout(() => {
    infiniteLeft(); 
}, 1);


//// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - START

function duplicateChildNodes (parent) {
    var children = Array.prototype.slice.call(parent.querySelectorAll('.grid-img-wrapper'));
    // log(children);
    children.forEach(function(item){
        // var lightboxes = item.attributes;
        // lightboxes = delete lightboxes[1];
        // item.removeAttributes("data-lightbox");
        // var test = item.attributes[1];
        // test = "data-lightbox";
        // log(item.attributes);  
        var clone = item.cloneNode(true);
        // log(clone.getAttribute('data-lightbox'));
        // clone.setAttribute('data-lightbox', null);
        parent.appendChild(clone);
    })
};

rows.map(category => duplicateChildNodes(category));

//// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - END

//// LIGHTBOX - START

var lightbox = document.querySelector('.grid-lightbox');
var lightboxText = document.querySelector('.grid-lightbox-text');
var lightboxGallery = document.querySelector('.grid-lightbox-gallery');
var lightBoxImgList = Array.from(document.querySelectorAll('.grid-lightbox-item'));
var lightboxWrapper = document.querySelector('.grid-lightbox-wrapper');
var lightboxHero = document.querySelector('.grid-lightbox-selected');
var lightboxShown = document.getElementById('grid-lightbox-shown');
var lightboxSource = document.getElementById('testImg');

allImages.forEach(element => {
    element.addEventListener('click', function(){
        lightbox.classList.add('showLightbox');
        setTimeout(() => {
            lightboxWrapper.classList.add('revealPanel');
            lightboxGallery.classList.add('galleryAppear');
        }, 600);
        lightboxHero.src = element.getElementsByClassName('grid-img')[0].src;
        var imgGroupName = element.classList[1];
        hideAllButSelected(imgGroupName);
    });
});

function clickToShow(input, targetImg, animClass, time) {
    input.addEventListener('click', function () {
        
        targetImg.classList.remove(animClass);
        setTimeout(() => {
            targetImg.src = input.title;
            targetImg.classList.add(animClass);
        }, time);
    })
};

// function animateText()

lightBoxImgList.map(img => clickToShow(img, lightboxShown, "showImg", 300));

function hideAllButSelected(c) {
    var x, i;
    x = document.getElementsByClassName("grid-lightbox-item");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        delClass(x[i], "d-inline-block");
        if (x[i].className.indexOf(c) > -1) addingClass(x[i], "d-inline-block");
    }
}
// var sourceList = Array.prototype.slice.call(document.querySelectorAll('.' + source));
// var shown = document.getElementById(target);

// sourceList.map(source => function () {
//     source.addEventListener('click', function () {
//         console.log(source);
//     })
// })



// clickToShow("grid-lightbox-item", "grid-lightbox-shown");
// filterSelection('type-menschen')" 
// filterSelection('type-mode')" clas
// filterSelection('type-food')" clas
// filterSelection('type-kunst')" cla
// filterSelection('type-produkte')" 
// filterSelection('type-3d')" class=

// function hideElements(groupname) {
//     var elements = Array.prototype.slice.call(lightboxHero.querySelectorAll('.' + groupname));
//     elements.map( el => function(){
//         el.style.display = "none";
//     })
// }

// if ( selected !== 0 ) {
//     lightBoxImgList.map(img => {
//         img.addEventListener('click', function () {
//             log(lightboxHero.src);
//             // lightboxHero.src = img.src;
//         });
//     })
// }



//// LIGHTBOX - END

//// GET NON-CLONED ELEMENTS - START

function getNonCloned(imgtype) {
    var imgArray = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox="' + imgtype + '"]'));
    imgArray = imgArray.slice(0, (imgArray.length / 2));
    return imgArray;
}

const nonClonedGroup    =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
                            .map(group => getNonCloned(group));

var groupMenschen = nonClonedGroup[0];
var groupMode = nonClonedGroup[1];
var groupFood = nonClonedGroup[2];
var groupKunst = nonClonedGroup[3];
var groupProdukte = nonClonedGroup[4];
var group3d = nonClonedGroup[5];

//// GET NON-CLONED ELEMENTS - END

filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("grid-img-wrapper");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        delClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addingClass(x[i], "show");
    }
}

// Show filtered elements
function addingClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function delClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".grid-filter");
var btns = btnContainer.getElementsByClassName("grid-filter-option");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// GRID FILTERING - END

// GALLERY INITIALIZE - START

let rowWidths = rows.map( row => {
    var divided = row.getBoundingClientRect().width;
    divided /= 2;
    return parseInt(divided);
});

let rowEndCoords = rowWidths.map( rowWidth => {
    return -Math.abs(rowWidth);
});

function usleep(microseconds) {
    // Delay for a given number of micro seconds    
    //   
    // version: 902.122  
    // discuss at: http://phpjs.org/functions/usleep  
    // // +   original by: Brett Zamir  
    // %        note 1: For study purposes. Current implementation could lock up the user's browser.  
    // %        note 1: Consider using setTimeout() instead.  
    // %        note 2: Note that this function's argument, contrary to the PHP name, does not  
    // %        note 2: start being significant until 1,000 microseconds (1 millisecond)  
    // *     example 1: usleep(2000000); // delays for 2 seconds  
    // *     returns 1: true  
    var start = new Date().getTime();
    while (new Date() < (start + microseconds / 1000));
    return true;
} 

let currentPos = [0, 0, 0, 0];
let request;

// const loopGallery = () => {

//     // usleep(10000);

//     currentPos[0] -= .4;
//     currentPos[1] -= .7;
//     currentPos[2] -= 1;
//     currentPos[3] -= 1.5;

//     rows[0].style.transform = "translate3d(" + currentPos[0] + "px , 0, 0)";
//     rows[1].style.transform = "translate3d(" + currentPos[1] + "px , 0, 0)";
//     rows[2].style.transform = "translate3d(" + currentPos[2] + "px , 0, 0)";
//     rows[3].style.transform = "translate3d(" + currentPos[3] + "px , 0, 0)";

//     if (currentPos[0] <= rowEndCoords[0]) {
//         currentPos[0] = .4;
//     };
    
//     if (currentPos[1] <= rowEndCoords[1]) {
//         currentPos[1] = .7;
//     };
    
//     if (currentPos[2] <= rowEndCoords[2]) {
//         currentPos[2] = 1;
//     };
    
//     if (currentPos[3] <= rowEndCoords[3]) {
//         currentPos[3] = 1.5;
//     };

//     request = requestAnimationFrame(loopGallery);
// };

// requestAnimationFrame(loopGallery);

// loopGallery();

// lightbox.option({
//     'alwaysShowNavOnTouchDevices': false,
//     'resizeDuration': 200,
//     'wrapAround': true
// });

// GALLERY INITIALIZE - END




