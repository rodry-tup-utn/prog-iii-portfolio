document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("boton-dark");
  const iconoDarkMode = document.getElementById("icono-dark-mode");

  darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (iconoDarkMode.src.includes("night")) {
      iconoDarkMode.src = "img/light-mode.png";
    } else {
      iconoDarkMode.src = "img/night-mode.png";
    }
  });
});
