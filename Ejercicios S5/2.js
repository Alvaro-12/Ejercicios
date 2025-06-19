    function verificarParidad() {
      const numero = parseInt(document.getElementById('numero').value);
      const resultado = document.getElementById('resultado');

      if (isNaN(numero)) {
        resultado.textContent = "Por favor ingresa un número válido.";
        resultado.style.color = "red";
        return;
      }

      if (numero % 2 === 0) {
        resultado.textContent = "El número " + numero + " es PAR.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "El número " + numero + " es IMPAR.";
        resultado.style.color = "blue";
      }
    }



    function obtenerDias(){
        const mes = document.getElementById('mes').value;
        const resultado = document.getElementById('resultado2');

        const diasPorMes = {
            'enero': 0,
            'febrero': 1, // No considera años bisiestos
            'marzo': 2,
            'abril': 3,
            'mayo': 4,
            'junio': 5,
            'julio': 6,
            'agosto': 7,
            'septiembre':8,
            'octubre':9,
            'noviembre': 10,
            'diciembre': 11
        };
        const meses = diasPorMes[mes.toLowerCase()];
        if (meses === undefined) {
            resultado.textContent = "Por favor ingresa un mes válido.";
            resultado.style.color = "red";
            return;
        }
        resultado.textContent = new Date(2025, meses +1, 0).getDate() + " días";

    }

    function evaluarNota() {
      const nota = parseFloat(document.getElementById('nota').value);
      const resultado = document.getElementById('resultado3');

      if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.textContent = "Por favor, ingresa una nota válida entre 0 y 10.";
        resultado.style.color = "red";
        return;
      }
      if (nota > 7) {
        resultado.textContent = "¡Aprobado!";
        resultado.style.color = "green";
      } else if (nota > 4) {
        resultado.textContent = "Debe recuperar. ";
        resultado.style.color = "orange";
      } else {
        resultado.textContent = "Aplazado.";
        resultado.style.color = "red";
      }
    }


    function grupo(){
        const letra = document.getElementById('letra').value.toLowerCase();
        const resultado = document.getElementById('resultado4');

        const grupoA = ['a', 'e', 'i', 'o', 'u'];
        const grupoB = ['b', 'c', 'd', 'f', 'g' ];
        const grupoC = ['h', 'j', 'k', 'l', 'm'];
        const grupoD = ['n', 'p', 'q', 'r' ];
        const grupoE = ['s', 't', 'v', 'w', 'x', 'y', 'z'];
        if (grupoA.includes(letra)) {
            resultado.textContent = "La letra " + letra + " pertenece al Grupo A.";
            resultado.style.color = "green";
        } else if (grupoB.includes(letra)) {
            resultado.textContent = "La letra " + letra + " pertenece al Grupo B.";
            resultado.style.color = "blue";
        } else if (grupoC.includes(letra)) {
            resultado.textContent = "La letra " + letra + " pertenece al Grupo C.";
            resultado.style.color = "orange";
        } else if (grupoD.includes(letra)) {
            resultado.textContent = "La letra " + letra + " pertenece al Grupo D.";
            resultado.style.color = "purple";
        } else if (grupoE.includes(letra)) {
            resultado.textContent = "La letra " + letra + " pertenece al Grupo E.";
            resultado.style.color = "red";
        } else {
            resultado.textContent = "Por favor, ingresa una letra válida.";
            resultado.style.color = "black";
        }
    }


let totalRondas = 0;
let rondaActual = 0;
let puntajeUsuario = 0;
let puntajeComputadora = 0;

function jugar(eleccionUsuario) {
  const resultado = document.getElementById("resultado5");

  if (rondaActual === 0) {
    totalRondas = parseInt(document.getElementById("rondas").value);
    if (isNaN(totalRondas) || totalRondas <= 0) {
      resultado.textContent = "Por favor, ingresa una cantidad válida de rondas.";
      return;
    }
    puntajeUsuario = 0;
    puntajeComputadora = 0;
    resultado.textContent = "";
  }

  if (rondaActual >= totalRondas) {
    resultado.textContent += `\nEl juego ha terminado. Recarga la página para volver a jugar.`;
    return;
  }

  const opciones = ["Piedra", "Papel", "Tijera"];
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  let resultadoRonda = "";

  if (eleccionUsuario === eleccionComputadora) {
    resultadoRonda = "Empate en esta ronda.";
  } else if (
    (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
    (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
    (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
  ) {
    resultadoRonda = "¡Has ganado esta ronda!";
    puntajeUsuario++;
  } else {
    resultadoRonda = "La computadora ha ganado esta ronda.";
    puntajeComputadora++;
  }

  rondaActual++;
  const rondasRestantes = totalRondas - rondaActual;

  resultado.textContent += 
`Ronda: ${rondaActual} de ${totalRondas} 
Tu jugada: ${eleccionUsuario}
Computadora: ${eleccionComputadora}
${resultadoRonda}
Puntaje: Tú ${puntajeUsuario} - ${puntajeComputadora} Computadora
Rondas restantes: ${rondasRestantes}
----------------------\n`;

  if (rondaActual === totalRondas) {
    let resultadoFinal = "\n🎉 Resultado Final: ";
    if (puntajeUsuario > puntajeComputadora) {
      resultadoFinal += "¡Ganaste el juego!";
    } else if (puntajeUsuario < puntajeComputadora) {
      resultadoFinal += "La computadora ganó el juego.";
    } else {
      resultadoFinal += "Empate total.";
    }
    resultado.textContent += resultadoFinal;
  }
}
    