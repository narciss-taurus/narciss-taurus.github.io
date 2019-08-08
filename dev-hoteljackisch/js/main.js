var homePage = document.documentElement.querySelector('.key--home');
var zimmerkategorienPage = document.documentElement.querySelector('.key--zimmerkategorien');
var kontaktPage = document.documentElement.querySelector('.key--kontakt');
var unternehmungenPage = document.documentElement.querySelector('.key--unternehmungen');

function visiting(key) {
	return key !== null ? true : false;
};

if (visiting (kontaktPage) && window.innerWidth > 995) {
    $('#mainfooter').appendTo($('#footerarea'));
};

// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------

// UPDATE: Now using Live NodeList idea from @jdalton

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


//
// RESPONSIVE 100VH FIX FOR SCROLLING 
//

function vhResize() {
    var vh = window.innerHeight * 0.01;
    if ( ie === undefined ) {
        document.documentElement.style.setProperty('--vh', vh + 'px');
    };
};

// VH USAGE ON RESIZE WINDOW 
window.addEventListener('resize', vhResize);



const content = document.querySelector('body');
const openingOverlay = document.getElementById('overlay');
const menuToggler = document.getElementById('nav__toggler');
const menuContent = document.getElementById('nav__content');

//const dots = Array.prototype.slice.call(document.getElementsByClassName('slider__home--dot'));

// imageBoxes.forEach(imageBox => {
//     imageBox.addEventListener('click', function() {

//     });
// });

//OPENING FADEOUT
$(openingOverlay).fadeOut(1300);

//NAVBAR TOGGLING ANIMATION

function menuSlider (content, button) {
    button.addEventListener('click', function () {
        button.classList.toggle("change");
        $(content).slideToggle(500);
    });
};

menuSlider(menuContent, menuToggler);


if (visiting(homePage)) {
     var sliderHome = new Glide('#slider__home', {
         autoplay: 6000,
         animationDuration: 1000,
         gap: 0
     });

     sliderHome.mount();
};


//
// INTERACTIVE ZIMMERKATEGORIEN
// FADE IN/OUT FUNCTIONALITY
//

(function () {
    var FX = {
        easing: {
            linear: function (progress) {
                return progress;
            },
            quadratic: function (progress) {
                return Math.pow(progress, 2);
            },
            swing: function (progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function (progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function (progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function (progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function (progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function (options) {
            var start = new Date;
            var id = setInterval(function () {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress == 1) {
                    clearInterval(id);
                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeQuit: function (element, options) {
            var to = 1;
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeEnter: function (element, options) {
            var to = 0;
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to + delta;
                }
            });
            
        }
    };
    window.FX = FX;
})();

if (visiting(zimmerkategorienPage)) {
    
    var zimmerkategorien = document.getElementById('zimmerkategorien');
    var zimmerkategorienSubtitle = document.getElementById('zimmerkategorien--subtitle')
    var schueneLink = document.getElementById('schuene-link');
    var pensionLink = document.getElementById('pension-link');
    var schueneLinkNav = document.getElementById('schuene-link-nav');
    var pensionLinkNav = document.getElementById('pension-link-nav');
    var schueneContainer = document.getElementById('schuene-container');
    var pensionContainer = document.getElementById('pension-container');
    var catNavbar = document.getElementById('category__navbar');

    var defPension = pensionLinkNav.innerHTML;
    var defSchuene = schueneLinkNav.innerHTML;

    pensionLink.addEventListener('click', function() {
        FX.fadeQuit(zimmerkategorien, {
            duration: 1000,
            complete: function() {
                zimmerkategorien.classList.add('hiding');
                pensionContainer.classList.add('shown');
                catNavbar.classList.add('shown');
                catNavbar.style.display = "flex";
                setTimeout(function () {
                    FX.fadeEnter(pensionContainer, { duration: 700 });
                    pensionContainer.classList.add('shownhidinganim');
                    FX.fadeEnter(catNavbar, { duration: 700 });
                }, 50);
            }
        });
        zimmerkategorienSubtitle.innerHTML = "DIE PENSION";
        pensionLinkNav.innerHTML = "ZUR&#220;CK &rarr;";
        setTimeout(function () {
            pensionLinkNav.href = "zimmerkategorien.html";
        }, 100);
    }, false);

    schueneLink.addEventListener('click', function () {
        FX.fadeQuit(zimmerkategorien, {
            duration: 1000,
            complete: function () {
                zimmerkategorien.classList.add('hiding');
                schueneContainer.classList.add('shown');
                catNavbar.classList.add('shown');
                catNavbar.style.display = "flex";
                setTimeout(function () {
                    FX.fadeEnter(schueneContainer, { duration: 700 });
                    schueneContainer.classList.add('shownhidinganim');
                    FX.fadeEnter(catNavbar, { duration: 700 });
                }, 50);
            }
        });
        zimmerkategorienSubtitle.innerHTML = "FERIENWOHNUNGEN";
        schueneLinkNav.innerHTML = "&larr; ZUR&#220;CK";
        setTimeout(function () {
            schueneLinkNav.href = "zimmerkategorien.html";
        }, 100);
    }, false);

    pensionLinkNav.addEventListener('click', function () {
        if (schueneContainer.classList.contains('shown')) {
            FX.fadeQuit(schueneContainer, {
                duration: 900,
                complete: function () {
                    
                    schueneContainer.classList.add('hiding');
                    schueneContainer.classList.remove('shown');
                    pensionContainer.classList.add('shown');
                    
                    setTimeout(function () {
                        FX.fadeEnter(pensionContainer, { duration: 250, complete: function(){
                            pensionContainer.classList.add('shownhidinganim');
                        }}); 
                    }, 250);
                }
            });
            schueneContainer.classList.remove('shownhidinganim');
            zimmerkategorienSubtitle.innerHTML = "DIE PENSION";
            pensionLinkNav.innerHTML = "ZUR&#220;CK &rarr;";
            setTimeout(function () {
                pensionLinkNav.href = "zimmerkategorien.html";
            }, 100); 
            schueneLinkNav.href = "#schuene";
            schueneLinkNav.innerHTML = defSchuene;
            
        }; 
    }, false);

    schueneLinkNav.addEventListener('click', function () {
        if (pensionContainer.classList.contains('shown')) {
            FX.fadeQuit(pensionContainer, {
                duration: 900,
                complete: function () {               
                    pensionContainer.classList.add('hiding');
                    pensionContainer.classList.remove('shown');
                    schueneContainer.classList.add('shown');
                    setTimeout(function () {
                        FX.fadeEnter(schueneContainer, { duration: 250, complete: function(){
                            schueneContainer.classList.add('shownhidinganim');
                        }});    
                    }, 250);
                }
            }); 
            pensionContainer.classList.remove('shownhidinganim');
            zimmerkategorienSubtitle.innerHTML = "FERIENWOHNUNGEN";
            schueneLinkNav.innerHTML = "&larr; ZUR&#220;CK";
            setTimeout( function () {
                schueneLinkNav.href = "zimmerkategorien.html";
            }, 100);
            pensionLinkNav.href = "#pension";
            pensionLinkNav.innerHTML = defPension;
            
        }; 
    }, false);
};    


if (visiting(unternehmungenPage)) {
    // var wasserLink = document.getElementById('wasser-link');
    // var fahrradLink = document.getElementById('fahrrad-link');
    // var aktivitatenLink = document.getElementById('aktivitaten-link');
    // var wasserContainer = document.getElementById('wasser-container');
    // var fahrradContainer = document.getElementById('fahrrad-container');
    // var aktivitatenContainer = document.getElementById('aktivitaten-container');
    // var unternehmungenContainer = document.getElementById('unternehmungen-box');

    // wasserLink.addEventListener('click', function () {
    //     $(unternehmungenContainer).fadeOut(1000);
    //     setTimeout(function () {
    //         FX.fadeEnter(wasserContainer, {
    //             duration: 1000,
    //         });
    //         wasserContainer.classList.remove('hiding');
    //         setTimeout(() => {
    //             wasserContainer.classList.add('showhidinganim');
    //         }, 250);
    //     }, 1000);
    // }, false);
};






let cssVarPoly = {
    init: function () {
        // first lets see if the browser supports CSS variables
        // No version of IE supports window.CSS.supports, so if that isn't supported in the first place we know CSS variables is not supported
        // Edge supports supports, so check for actual variable support
        if (window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')) {
            // this browser does support variables, abort
            // console.log('your browser supports CSS variables, aborting and letting the native support handle things.');
            return;
        } else {
            // edge barfs on console statements if the console is not open... lame!
            // console.log('no support for you! polyfill all (some of) the things!!');
            document.querySelector('body').classList.add('cssvars-polyfilled');
        }

        cssVarPoly.ratifiedVars = {};
        cssVarPoly.varsByBlock = {};
        cssVarPoly.oldCSS = {};

        // start things off
        cssVarPoly.findCSS();
        cssVarPoly.updateCSS();
    },

    // find all the css blocks, save off the content, and look for variables
    findCSS: function () {
        let styleBlocks = document.querySelectorAll('style:not(.inserted),link[type="text/css"]');

        // we need to track the order of the style/link elements when we save off the CSS, set a counter
        let counter = 1;

        // loop through all CSS blocks looking for CSS variables being set
        [].forEach.call(styleBlocks, function (block) {
            // console.log(block.nodeName);
            let theCSS;
            if (block.nodeName === 'STYLE') {
                // console.log("style");
                theCSS = block.innerHTML;
                cssVarPoly.findSetters(theCSS, counter);
            } else if (block.nodeName === 'LINK') {
                // console.log("link");
                cssVarPoly.getLink(block.getAttribute('href'), counter, function (counter, request) {
                    cssVarPoly.findSetters(request.responseText, counter);
                    cssVarPoly.oldCSS[counter] = request.responseText;
                    cssVarPoly.updateCSS();
                });
                theCSS = '';
            }
            // save off the CSS to parse through again later. the value may be empty for links that are waiting for their ajax return, but this will maintain the order
            cssVarPoly.oldCSS[counter] = theCSS;
            counter++;
        });
    },

    // find all the "--variable: value" matches in a provided block of CSS and add them to the master list
    findSetters: function (theCSS, counter) {
        // console.log(theCSS);
        cssVarPoly.varsByBlock[counter] = theCSS.match(/(--.+:.+;)/g) || [];
    },

    // run through all the CSS blocks to update the variables and then inject on the page
    updateCSS: function () {
        // first lets loop through all the variables to make sure later vars trump earlier vars
        cssVarPoly.ratifySetters(cssVarPoly.varsByBlock);

        // loop through the css blocks (styles and links)
        for (let curCSSID in cssVarPoly.oldCSS) {
            // console.log("curCSS:",oldCSS[curCSSID]);
            let newCSS = cssVarPoly.replaceGetters(cssVarPoly.oldCSS[curCSSID], cssVarPoly.ratifiedVars);
            // put it back into the page
            // first check to see if this block exists already
            if (document.querySelector('#inserted' + curCSSID)) {
                // console.log("updating")
                document.querySelector('#inserted' + curCSSID).innerHTML = newCSS;
            } else {
                // console.log("adding");
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = newCSS;
                style.classList.add('inserted');
                style.id = 'inserted' + curCSSID;
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        };
    },

    // parse a provided block of CSS looking for a provided list of variables and replace the --var-name with the correct value
    replaceGetters: function (curCSS, varList) {
        // console.log(varList);
        for (let theVar in varList) {
            // console.log(theVar);
            // match the variable with the actual variable name
            // console.log (theVar);
            var res = theVar.match(/--[a-zA-Z0-9-]+/g);
            // console.log (res[0]);
            theVar = res[0];
            let getterRegex = new RegExp('var\\(\\s*' + theVar + '\\s*\\)', 'g');
            // console.log(getterRegex);
            // console.log(curCSS);
            curCSS = curCSS.replace(getterRegex, varList[theVar]);

            // now check for any getters that are left that have fallbacks
            let getterRegex2 = new RegExp('var\\(\\s*.+\\s*,\\s*(.+)\\)', 'g');
            // console.log(getterRegex);
            // console.log(curCSS);
            let matches = curCSS.match(getterRegex2);
            if (matches) {
                // console.log("matches",matches);
                matches.forEach(function (match) {
                    // console.log(match.match(/var\(.+,\s*(.+)\)/))
                    // find the fallback within the getter
                    curCSS = curCSS.replace(match, match.match(/var\(.+,\s*(.+)\)/)[1]);
                });
            }

            // curCSS = curCSS.replace(getterRegex2,varList[theVar]);
        };
        // console.log(curCSS);
        return curCSS;
    },

    // determine the css variable name value pair and track the latest
    ratifySetters: function (varList) {
        // console.log("varList:",varList);
        // loop through each block in order, to maintain order specificity
        for (let curBlock in varList) {
            let curVars = varList[curBlock];
            // console.log("curVars:",curVars);
            // loop through each var in the block
            curVars.forEach(function (theVar) {
                // console.log(theVar);
                // split on the name value pair separator
                let matches = theVar.split(/:\s*/);
                // console.log(matches);
                // put it in an object based on the varName. Each time we do this it will override a previous use and so will always have the last set be the winner
                // 0 = the name, 1 = the value, strip off the ; if it is there
                cssVarPoly.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
            });
        };
        // console.log(ratifiedVars);
    },

    // get the CSS file (same domain for now)
    getLink: function (url, counter, success) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.overrideMimeType('text/css;');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                // console.log(request.responseText);
                if (typeof success === 'function') {
                    success(counter, request);
                }
            } else {
                // We reached our target server, but it returned an error
                console.warn('an error was returned from:', url);
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.warn('we could not get anything from:', url);
        };

        request.send();
    }

};

cssVarPoly.init();