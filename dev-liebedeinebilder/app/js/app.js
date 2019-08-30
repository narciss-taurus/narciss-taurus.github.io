const log = console.log;
const rows = Array.prototype.slice.call(document.getElementsByClassName("grid-category"));

// GRID FILTERING - START

const filterOptions     =   ['option-menschen', 'option-mode', 'option-food', 'option-kunst', 'option-produkte', 'option-3d']
                            .map(option => document.getElementById(option));

const imgTypes          =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
                            .map(type => Array.prototype.slice.call(document.getElementsByClassName(type)));


// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - START

function duplicateChildNodes (parent) {
    NodeList.prototype.forEach = Array.prototype.forEach;
    var children = parent.childNodes;
    children.forEach(function(item){
        var clone = item.cloneNode(true);
        parent.appendChild(clone);
        // var lightboxAtt = item.getAttribute('data-lightbox');
    })
};

rows.map(category => duplicateChildNodes(category));

// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - END

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
    currentPos[0] -= 10;
    currentPos[1] -= 10;
    currentPos[2] -= 10;
    currentPos[3] -= 10;

    rows[0].style.transform = "translate3d(" + currentPos[0] + "px , 0, 0)";
    rows[1].style.transform = "translate3d(" + currentPos[1] + "px , 0, 0)";
    rows[2].style.transform = "translate3d(" + currentPos[2] + "px , 0, 0)";
    rows[3].style.transform = "translate3d(" + currentPos[3] + "px , 0, 0)";

    if (currentPos[0] <= rowEndCoords[0]) {
        currentPos[0] = 0;
    };
    
    if (currentPos[1] <= rowEndCoords[1]) {
        currentPos[1] = 0;
    };
    
    if (currentPos[2] <= rowEndCoords[2]) {
        currentPos[2] = 0;
    };
    
    if (currentPos[3] <= rowEndCoords[3]) {
        currentPos[3] = 0;
    };

    requestAnimationFrame(loopGallery);
};

loopGallery();

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// GALLERY INITIALIZE - END




