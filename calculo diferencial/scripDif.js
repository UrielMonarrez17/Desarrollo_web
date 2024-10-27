 // Respuestas correctas para cada conjunto
const respuestasCorrectas1 = {
    preg1: "2,5,10", // 3000
    preg2: "3",      // 471
    preg3: "2,3"     // 234
};

const respuestasCorrectas2 = {
    preg4: "16x^2y^2z^3", 
    preg5: "7xy-4x+2xy",       
    preg6: "2y"      
};

const respuestasCorrectas3 = {
    preg7: "4",  
    preg8: "25xy",    
    preg9: "y/4"      
};
const respuestasCorrectas4 = {
    preg10: "x+6+(10/x-2)",   
    preg11: "2x+5+(26/x-5)",
};
const respuestasCorrectas5 = {
    preg12: "5(y-12x+3)",   
    preg13: "z(xy+x-y)",
};

// Función para comprobar un conjunto de preguntas
function comprobarRespuestas(conjuntoRespuestas, resultadoDivId) {
    let mensaje = '';
    
    Object.keys(conjuntoRespuestas).forEach(function(preguntaId) {
        const input = document.getElementById(preguntaId);
        const respuestaUsuario = input.value.trim();
        
        if (respuestaUsuario === conjuntoRespuestas[preguntaId]) {
            mensaje += `<p>Pregunta ${preguntaId.slice(-1)} es correcta.</p>`;
            input.style.borderColor = 'green'; // Si es correcta, cambiar borde a verde
        } else {
            mensaje += `<p>Pregunta ${preguntaId.slice(-1)} es incorrecta. La respuesta correcta es ${conjuntoRespuestas[preguntaId]}.</p>`;
            input.style.borderColor = 'red'; // Si es incorrecta, cambiar borde a rojo
        }
    });

    // Mostrar el mensaje en el div correspondiente
    document.getElementById(resultadoDivId).innerHTML = mensaje;
}

// Asociar eventos a los botones de comprobación
document.getElementById('comprobarBtn1').addEventListener('click', function() {
    comprobarRespuestas(respuestasCorrectas1, 'resultado1');
});

document.getElementById('comprobarBtn2').addEventListener('click', function() {
    comprobarRespuestas(respuestasCorrectas2, 'resultado2');
});

document.getElementById('comprobarBtn3').addEventListener('click', function() {
    comprobarRespuestas(respuestasCorrectas3, 'resultado3');
});

document.getElementById('comprobarBtn4').addEventListener('click', function() {
    comprobarRespuestas(respuestasCorrectas4, 'resultado4');
});

document.getElementById('comprobarBtn5').addEventListener('click', function() {
    comprobarRespuestas(respuestasCorrectas5, 'resultado5');
});

