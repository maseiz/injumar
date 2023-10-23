document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el botón de hamburguesa y todos los enlaces del menú
  const menuButton = document.getElementById("menuButton");
  const menuLinks = document.querySelectorAll(".nav-link");

  // Agrega un manejador de eventos al botón de hamburguesa
  menuButton.addEventListener("click", function () {
    // Cierra el menú al hacer clic en el botón de hamburguesa
    const menuCollapse = document.getElementById("navbarSupportedContent");
    if (menuCollapse.classList.contains("show")) {
      menuCollapse.classList.remove("show");
    }
  });

  // Agrega manejadores de eventos a los enlaces del menú
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Obtiene el atributo href del enlace (el objetivo de desplazamiento)
      const targetId = link.getAttribute("href").substring(1);

      // Obtiene la posición de la sección de destino
      const targetSection = document.getElementById(targetId);
      const targetOffset = targetSection.offsetTop;

      // Desplaza la página a la sección de destino
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });

      // Cierra el menú al hacer clic en un enlace
      const menuCollapse = document.getElementById("navbarSupportedContent");
      if (menuCollapse.classList.contains("show")) {
        menuCollapse.classList.remove("show");
      }

      e.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    });
  });
});
