/* Obtener datos a través de los formularios */

var lines = document.getElementById("lineas");
var clr = document.getElementById("colorsito");
var button = document.getElementById("boton");
var clear = document.getElementById("c_canvas");

/* añadir escuchador de eventos */
boton.addEventListener("click", drawcanvas);
clear.addEventListener("click", clearcanvas);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function canvasfunction(color, xinicial, yinicial, xfinal, yfinal) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function clearcanvas () {
    
    lienzo.clearRect(0, 0, d.width, d.height);
    console.log("Se limpió canvas correctamente");
}

/* Crear función que dibuje en el canvas */
function drawcanvas() {
    
    color = clr.value;
    lineas = lines.value;
    espacio = ancho / lineas
    var i = 0;

    for (i = 0; i <= lineas; i++) {

        xi = espacio * i;
        yf = espacio * (1 + i); 

        canvasfunction(color, xi, 0, ancho, yf);

    }


    console.log("Número de líneas: " + lines.value);
    console.log("Colorn de las líneas" + clr.value);

}


