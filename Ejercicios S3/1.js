document.getElementById("btn").addEventListener("click", function() {
            alert("Hola, mundo!");
        });

let saludo = "Hola, mundo!";

document.getElementById("Saludo").innerHTML = saludo;

let nombre = document.getElementById("nombre").value;

document.getElementById("btn2").addEventListener("click", function() {
    nombre = document.getElementById("nombre").value;
    document.getElementById("NombreSaludo").innerHTML = "Hola, " + nombre + "!";
});


function calcularPago() {
  const horas = parseFloat(document.getElementById("horas").value);
  const coste = parseFloat(document.getElementById("coste").value);
  
  if (isNaN(horas) || isNaN(coste)) {
    document.getElementById("resultado").textContent = "Por favor, introduce valores válidos.";
    return;
  }

  const paga = horas * coste;
  document.getElementById("resultado").textContent = `La paga que te corresponde es: $${paga.toFixed(2)}`;
}

function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultadoIMC").textContent = "Por favor, introduce valores válidos.";
        return;
    }
    
    const imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
}


function calcular() {
  const n = parseInt(document.getElementById("N1").value);
  const m = parseInt(document.getElementById("N2").value);

  if (isNaN(n) || isNaN(m) || m === 0) {
    document.getElementById("resultadoDivision").textContent = "Por favor, introduce dos números válidos y que el divisor no sea cero.";
    return;
  }

  const cociente = Math.floor(n / m);
  const resto = n % m;

  document.getElementById("resultadoDivision").textContent =
    `La división resultante de dividir ${n} entre ${m} da un cociente ${cociente} y un resto ${resto}.`;
}

