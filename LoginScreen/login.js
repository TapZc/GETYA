// 🌙 Modo oscuro, validación de login y redirección
document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("modoOscuro");
  const body = document.body;
  const btnLogin = document.getElementById("btn-login");

  // Alternar modo oscuro
  btnModoOscuro.addEventListener("click", () => {
    body.classList.toggle("oscuro");
    const isDark = body.classList.contains("oscuro");
    localStorage.setItem("modo", isDark ? "oscuro" : "claro");
    btnModoOscuro.textContent = isDark ? "☀️" : "🌙";
  });

  // Aplicar modo previo guardado
  if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("oscuro");
    btnModoOscuro.textContent = "☀️";
  }

  // Simular autenticación
  btnLogin.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Simular autenticación básica
    if (password.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    // Guardar sesión en localStorage
    localStorage.setItem("usuario", email);

    // Mostrar animación de carga
    btnLogin.disabled = true;
    btnLogin.textContent = "Iniciando sesión...";
    setTimeout(() => {
      window.location.href = "../dashboard/dashboard.html";
    }, 1500);
  });
});
