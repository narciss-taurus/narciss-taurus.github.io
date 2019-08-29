function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var ageLimit = document.getElementById('ageLimit');
var buttons = Array.prototype.slice.call(document.getElementsByClassName('agelimit-button'));
var acceptButton = buttons[0];

acceptButton.addEventListener('click', function(){
    setCookie('clicklink', 'yes', 30);
    document.documentElement.classList.remove('overflow-hidden');
    ageLimit.classList.add('invisible');
    setTimeout(function() {
        ageLimit.classList.add('d-none');
    }, 500);
});

var cookieString = getCookie("clicklink");
if (cookieString == "yes") {
    document.documentElement.classList.remove('overflow-hidden');
    ageLimit.classList.add('d-none');
};

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "img/wir2-herz.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": .5,
                "opacity_min": 0.1,
                "sync": true
            }
        },
        "size": {
            "value": 30,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable" : false,
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
        }
    },
    "retina_detect": true
});

