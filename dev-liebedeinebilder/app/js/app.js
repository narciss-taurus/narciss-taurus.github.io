const log = console.log;

// GRID FILTERING - START

const rows              =   Array.prototype.slice.call(document.getElementsByClassName("grid-category"));

const filterOptions     =   ['option-menschen', 'option-mode', 'option-food', 'option-kunst', 'option-produkte', 'option-3d']
                            .map(option => document.getElementById(option));

const imgTypes          =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
                            .map(type => Array.prototype.slice.call(document.getElementsByClassName(type)));

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


// //// GET NON-CLONED ELEMENTS - START

// function getNonCloned(imgtype) {
//     var imgArray = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox="' + imgtype + '"]'));
//     imgArray = imgArray.slice(0, (imgArray.length / 2));
//     log(imgArray);
//     return imgArray;
// }

// const nonClonedGroup    =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
//                             .map(group => getNonCloned(group));

// var groupMenschen = nonClonedGroup[0];
// var groupMode = nonClonedGroup[1];
// var groupFood = nonClonedGroup[2];
// var groupKunst = nonClonedGroup[3];
// var groupProdukte = nonClonedGroup[4];
// var group3d = nonClonedGroup[5];

//// GET NON-CLONED ELEMENTS - END

filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("grid-img-wrapper");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
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
function w3RemoveClass(element, name) {
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

let currentPos = [0, 0, 0, 0];

function loopGallery() {
    currentPos[0] -= .4;
    currentPos[1] -= .7;
    currentPos[2] -= 1;
    currentPos[3] -= 1.5;

    rows[0].style.transform = "translate3d(" + currentPos[0] + "px , 0, 0)";
    rows[1].style.transform = "translate3d(" + currentPos[1] + "px , 0, 0)";
    rows[2].style.transform = "translate3d(" + currentPos[2] + "px , 0, 0)";
    rows[3].style.transform = "translate3d(" + currentPos[3] + "px , 0, 0)";

    if (currentPos[0] <= rowEndCoords[0]) {
        currentPos[0] = .4;
    };
    
    if (currentPos[1] <= rowEndCoords[1]) {
        currentPos[1] = .7;
    };
    
    if (currentPos[2] <= rowEndCoords[2]) {
        currentPos[2] = 1;
    };
    
    if (currentPos[3] <= rowEndCoords[3]) {
        currentPos[3] = 1.5;
    };

    requestAnimationFrame(loopGallery);
};

loopGallery();

lightbox.option({
    'alwaysShowNavOnTouchDevices': false,
    'resizeDuration': 200,
    'wrapAround': true
});

// GALLERY INITIALIZE - END




