document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const usuarioTexto = document.getElementById("usuario");
  const cerrarSesion = document.getElementById("cerrarSesion");

  // Mostrar usuario o redirigir si no hay sesión
  if (usuario) {
    usuarioTexto.textContent = `Sesión iniciada como: ${usuario}`;
  } else {
    alert("Debes iniciar sesión primero.");
    window.location.href = "../LoginScreen/login.html";
    return;
  }

  // Cerrar sesión
  cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.href = "../LoginScreen/login.html";
  });
});
