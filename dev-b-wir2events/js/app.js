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
}
