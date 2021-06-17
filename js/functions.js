function pintar() {
    var element = document.getElementById("menu-drop");
    element.classList.remove("oculto");
}


let slider = document.getElementById("main-slider");
let header = document.getElementById("header");



document.addEventListener("scroll", function() {

    if (slider.offsetTop < window.scrollY) {
        header.style.top = 0;
        header.classList.add("fixed");
    }

});