  // Respuestas correctas
const respuestasCorrectas = {
    preg1: "2,5,10", // Respuesta correcta para 3000
    preg2: "3",      // Respuesta correcta para 471
    preg3: "2,3"     // Respuesta correcta para 234
};

// Obtener los elementos del DOM
const comprobarBtn = document.getElementById('comprobarBtn');
const resultadoDiv = document.getElementById('resultado');

// Añadir un evento al botón para comprobar las respuestas
comprobarBtn.addEventListener('click', function() {
    let esCorrecto = true; // Bandera para saber si todas las respuestas son correctas
    let mensaje = '';

    // Comprobar cada respuesta
    Object.keys(respuestasCorrectas).forEach(function(preguntaId) {
        const input = document.getElementById(preguntaId);
        const respuestaUsuario = input.value.trim();

        if (respuestaUsuario === respuestasCorrectas[preguntaId]) {
            mensaje += `<p>Respuesta correcta para ${preguntaId}.</p>`;
        } else {
            esCorrecto = false;
            mensaje += `<p>Respuesta incorrecta para ${preguntaId}. La respuesta correcta es ${respuestasCorrectas[preguntaId]}.</p>`;
        }
    });

    // Mostrar el resultado
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.color = esCorrecto ? 'green' : 'red';
});