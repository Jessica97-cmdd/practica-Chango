
//autor: jessica Chango

//Función pafra habilidar y desabilitar 
function deshabilitar() {
    let inputText = document.getElementById("sumaB");
    inputText.disabled = true;
    alert("El segundo número ha sido deshabilitado.")
}

function habilitar() {
    let inputText = document.getElementById("sumaB");
    inputText.disabled = false;
    lert("El segundo número ha sido deshabilitado.");
}
function ocultar() {
  let boton = document.getElementById("btnPrimo");
  boton.style.display = "none";
}
function mostrar() {
  let boton = document.getElementById("btnPrimo");
  boton.style.display = "block";
}
function cambiarColor() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.style.color = "white";
        input.style.backgroundColor = "blue";
    });
}
//Función para sumar dos núeros
function sumar() {
    let valor1= document.getElementById("sumaA").value;
    let valor2= document.getElementById("sumaB").value;
    let resultado= document.getElementById("resultadoSuma");

    if (valor1.trim() === "" || valor2.trim() === "") {
      resultado.textContent = "Por favor, ingrese ambos números.";
      return;
    }

    let numero1= Number(valor1);
    let numero2= Number(valor2);

    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
      resultado.textContent = "Por favor, ingrese valores numéricos válidos.";
      return;
    }

    resultado.textContent = "La suma es: " + (numero1 + numero2);
}

function dividir() {
    let valor1= document.getElementById("divisionA").value;
    let valor2= document.getElementById("divisionB").value;
    let resultado= document.getElementById("resultadoDivision");

    if (valor1.trim() === "" || valor2.trim() === "") {
      resultado.textContent = "Por favor, ingrese ambos números.";
      return;
    }

    let numero1= Number(valor1);
    let numero2= Number(valor2);

    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
      resultado.textContent = "Por favor, ingrese valores numéricos válidos.";
      return;
    }
    if (numero2 === 0){
      document.getElementById("divisionB").style.color = "red";
      document.getElementById("divisionB").style.borderColor = "red";
      document.getElementById("divisionB").style.fontSize = "2em";
      resultado.textContent ="Error: No se puede dividir entre cero.";
      return;
    }
      document.getElementById("divisionB").style.color = "black";
      document.getElementById("divisionB").style.borderColor = "gray";
      resultado.textContent = "La división es: " + numero1 / numero2;
}
//función para verificar si un numero es par o impar.
function verificarParImpar() {
    let valor1= document.getElementById("numeroPar").value;
    let resultado= document.getElementById("resultadoPar");

    if (valor1.trim() === "") {
      resultado.textContent = "Por favor, ingrese ambos números.";
      return;
    }

    let numero1 = Number(valor1);

    if (!Number.isFinite(numero1)) {
      resultado.textContent = "Por favor, ingrese valores numéricos válidos.";
      return;
    }

    let resultadoParImpar = numero1 % 2 === 0 ? "El número es par." : "El numero es impar.";
  
    resultado.textContent = resultadoParImpar;
}
//FUNCIÓN PARA VERFICAR SI ES PRIMO
function verificarPrimo() {
    let valor1= document.getElementById("numeroPrimo").value;
    let resultado= document.getElementById("resultadoPrimo");

    if (valor1.trim() === "") {
      resultado.textContent = "Por favor, ingrese ambos números.";
      return;
    }

    let numero1 = Number(valor1);

    if (!Number.isFinite(numero1)) {
      resultado.textContent = "Por favor, ingrese valores numéricos válidos.";
      return;
    }

    let esPrimo = true;
    if (numero1 <= 1){
      esPrimo = false;
    }  else{
      for (let i = 2; i <= Math.sqrt(numero1); i++) {
        if (numero1 % i === 0){
          esPrimo = false;
          break;
        } 
      }
    }
    resultado.textContent = esPrimo ? "El número es primo.": "El número no es Primo.";
}
