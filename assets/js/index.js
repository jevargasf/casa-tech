// objetivo: desplegar un alert de éxito en el formulario
// llamar al elemento formulario 
const formulario = document.getElementById('formularioContacto');

// llamar al elemento alert
const alertaExito = document.getElementById('alertaExito');

// EVENTOS DEL NAVEGADOR. evento submit: envío de formulario
// escuchar el evento submit del formulario de contacto
formulario.addEventListener('submit', function(evento){
    // prevenir que la pantalla se cargue
    evento.preventDefault();

    // quitar la clase d-none de mi elemento alertaExito
    alertaExito.classList.remove('d-none');
});