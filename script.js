// Archivo: script.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingresa un email válido.");
            return;
        }

        alert("✅ Tu mensaje ha sido enviado con éxito.");
        this.reset();
    });
});


