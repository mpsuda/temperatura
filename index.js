var temperatura = prompt("Olá! Qual a temperatura atual?");

var corpo = document.getElementById("corpo")
var h1 = document.getElementById ("texto");

if (temperatura >= 25) {
    h1.innerText="Está calor!";
    corpo.style.color = "yellow";
    corpo.style.backgroundColor = "red"
} else {
    h1.innerText="Está frio!";
    corpo.style.color = "white"
    corpo.style.backgroundColor = "blue"
}


