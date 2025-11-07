// Modo oscuro general y mockups interactivos
document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("modoOscuro");
  const body = document.body;

  // Guardar preferencia modo oscuro
  btnModoOscuro.addEventListener("click", () => {
    body.classList.toggle("oscuro");
    const isDark = body.classList.contains("oscuro");
    localStorage.setItem("modo", isDark ? "oscuro" : "claro");
    btnModoOscuro.textContent = isDark ? "☀️" : "🌙";
  });

  // Aplicar modo anterior
  if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("oscuro");
    btnModoOscuro.textContent = "☀️";
  }

  // Mockups interactivos (2,3,4)
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const phone = document.getElementById(targetId);
      const content = phone.querySelector(".content");
      content.classList.toggle("day");
      content.classList.toggle("night");
    });
  });
});
