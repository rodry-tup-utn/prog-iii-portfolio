document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("boton-dark");
  const iconoDarkMode = document.getElementById("icono-dark-mode");
  const iconoGitProyecto = document.querySelectorAll('.proyecto-link__imagen');

  darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const modoNoche = iconoDarkMode.src.includes("night");

    iconoDarkMode.src = (modoNoche) ? "img/light-mode.png" : "img/night-mode.png";
    iconoGitProyecto.forEach(element => {
        element.src = (modoNoche) ? "img/github-light.png" : "img/github.png";
      });
  });
});
