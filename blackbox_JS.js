// Seleccionamos los elementos del formulario
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('contraseña');
const terminosCheck = document.getElementById('terminos');
const registrarBtn = document.getElementById('registrar-btn');

// Función para verificar si los campos están completos
function verificarCampos() {
    if (nombreInput.value && correoInput.value && contraseñaInput.value && terminosCheck.checked) {
        registrarBtn.classList.add('active');
        registrarBtn.disabled = false;
    } else {
        registrarBtn.classList.remove('active');
        registrarBtn.disabled = true;
    }
}

// Eventos para verificar los campos en tiempo real
nombreInput.addEventListener('input', verificarCampos);
correoInput.addEventListener('input', verificarCampos);
contraseñaInput.addEventListener('input', verificarCampos);
terminosCheck.addEventListener('change', verificarCampos);
