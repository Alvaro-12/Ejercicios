// Ejercicio 1: Saludar a una persona ingresada por el usuario
    document.getElementById('btnS').addEventListener('click', function() {
        const nombres = document.getElementById('nombres').value;
        const nombresArray = nombres.split(' ').map(nombre => nombre.trim());
        const saludo = nombresArray.map(nombre => `Hola ${nombre}`).join('<br>');
        document.getElementById('resultado').innerHTML = saludo;
    });

// Ejercicio 2: Calcular el promedio de notas ingresadas por el usuario
    document.getElementById('btnN').addEventListener('click', function() {
        const numeros = document.getElementById('numeros').value;
        const numerosArray = numeros.split(' ').map(num => parseInt(num.trim(), 10));
        const menornumero = numerosArray.sort((a, b) => a - b)[0];
        document.getElementById('resultado2').innerHTML = `El menor número es: ${menornumero}`;

    });


    // Ejercicio 3: Calcular la suma de números ingresados por el usuario
    document.getElementById('btnN2').addEventListener('click', function() {
        const numeros = document.getElementById('numeros2').value;
        const numerosArray = numeros.split(' ').map(num => parseInt(num.trim(), 10));
        const sumaNumeros = numerosArray.reduce((acum, num) => acum + num, 0);
        document.getElementById('resultado3').innerHTML = `La suma de los numeros es: ${sumaNumeros}`;

    });
// Ejercicio 4: Buscar un valor en un array de valores ingresados por el usuario
    let valoresArray = [];

function confirmarValores() {
  const valoresInput = document.getElementById("valores").value.trim();

  if (!valoresInput) {
    document.getElementById("resultadoBusqueda").textContent = "Por favor, ingresa al menos un valor.";
    return;
  }

  // Guardar valores en un array
  valoresArray = valoresInput.split(" ");

  // Desactivar input y botón de ingreso
  document.getElementById("valores").disabled = true;
  event.target.disabled = true;

  // Mostrar sección de búsqueda
  document.getElementById("busquedaForm").style.display = "block";
}

function buscarValor() {
  const valorBuscado = document.getElementById("buscar").value.trim();

  if (!valorBuscado) {
    document.getElementById("resultadoBusqueda").textContent = "Por favor, ingresa un valor a buscar.";
    return;
  }

  if (valoresArray.includes(valorBuscado)) {
    document.getElementById("resultadoBusqueda").textContent =
      `El valor ${valorBuscado} se encuentra entre los valores originales.`;
  } else {
    document.getElementById("resultadoBusqueda").textContent =
      `El valor ${valorBuscado} NO se encuentra entre los valores originales.`;
  }
}


//Ejercicio 5: Buscar indice 
let valoresIndice = [];
function confirmarValoresIndice() {
  const valoresInput = document.getElementById("valoresIndice").value.trim();

  if (!valoresInput) {
    document.getElementById("resultadoIndice").textContent = "Por favor, ingresa al menos un valor.";
    return;
  }

  // Guardar valores en un array
  valoresIndice = valoresInput.split(" ");

  // Desactivar input y botón de ingreso
  document.getElementById("valoresIndice").disabled = true;
  event.target.disabled = true;

  // Mostrar sección de búsqueda
  document.getElementById("busquedaForm2").style.display = "block";
}
function buscarIndice() {
  const valorBuscado = document.getElementById("buscarIndice").value.trim();

  if (!valorBuscado) {
    document.getElementById("resultadoIndice").textContent = "Por favor, ingresa un valor a buscar.";
    return;
  }

  const indice = valoresIndice.indexOf(valorBuscado);

  if (indice !== -1) {
    document.getElementById("resultadoIndice").textContent =
      `El valor ${valorBuscado} se encuentra en el índice ${indice}.`;
  } else {
    document.getElementById("resultadoIndice").textContent =
      `El valor ${valorBuscado} NO se encuentra entre los valores originales.`;
  }
}