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