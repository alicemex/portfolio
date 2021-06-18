let slider = document.getElementById("main-slider");
let header = document.getElementById("header");
let hamburguer = document.getElementById("hamburguer");
let tache = document.getElementById("tache");

function closeMenu() {
    header.classList.add("hidden");
    header.classList.remove("show");
    hamburguer.classList.add("show");

}

function showMenu() {
    header.classList.add("show");
    header.classList.remove("hidden");
    hamburguer.classList.add("hidden");
    hamburguer.classList.remove("show");
    tache.classList.remove("hidden");
}

function pintar() {
    var element = document.getElementById("menu-drop");
    element.classList.remove("oculto");
}




document.addEventListener("scroll", function() {

    if (slider.offsetTop < window.scrollY) {
        header.style.top = 0;
        header.classList.add("fixed");
    }

});