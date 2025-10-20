document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('boton-dark');

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        console.log("Boton presionado");
    });
});