const log = console.log;
const rows = Array.prototype.slice.call(document.getElementsByClassName("grid-category"));
var clicked = 0;

// GRID FILTERING - START

const filterOptions     =   ['option-menschen', 'option-mode', 'option-food', 'option-kunst', 'option-produkte', 'option-3d']
                            .map(option => document.getElementById(option));

const imgTypes          =   ['type-menschen', 'type-mode', 'type-food', 'type-kunst', 'type-produkte', 'type-3d']
                            .map(type => Array.prototype.slice.call(document.getElementsByClassName(type)));

function except(arrayGroup, key) {
    var splicedArray = arrayGroup.slice();
    splicedArray.splice(key, 1);
    return splicedArray;
};

function filterGallery(buttons, elements) {
    buttons.map( (button, index) => {
        var filteredArray = except(elements, index);
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            filteredArray.map(type => type.map( innertype => innertype.classList.toggle('hide')));
        });
    });
    return clicked = 1;
};

filterGallery(filterOptions, imgTypes);

// GRID FILTERING - END

// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - START

function duplicateChildNodes (parent) {
    NodeList.prototype.forEach = Array.prototype.forEach;
    var children = parent.childNodes;
    children.forEach(function(item){
        var clone = item.cloneNode(true);
        parent.appendChild(clone);
    })
};

rows.map(category => duplicateChildNodes(category));

// DUPLICATING ELEMENTS FOR LOOP ILLUSION (AFTER LOOP INIT) - END

// GALLERY INITIALIZE - START

let rowWidths = rows.map( row => {
    var divided = row.getBoundingClientRect().width;
    return divided / 2;
});

let rowEndCoords = rowWidths.map( rowWidth => {
    return -Math.abs(rowWidth);
});

let currentPos = [0, 0, 0, 0];

function loopGallery() {
    currentPos[0] -= 1;
    currentPos[1] -= 1;
    currentPos[2] -= 1;
    currentPos[3] -= 1;

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

// GALLERY INITIALIZE - END




