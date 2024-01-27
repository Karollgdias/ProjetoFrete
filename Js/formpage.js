document.addEventListener("DOMContentLoaded", function() {

    let formulario = document.querySelector(".leading")
    let mascara = document.querySelector(".backgroundform")
    let calcularFreteButton = document.getElementById("calcularFreteButton");

    calcularFreteButton.addEventListener("click", function() {
        formulario.style.left = "-50%"
        mascara.style.visibility = "hidden"
        mascara.style.opacity = "0"
    });
});