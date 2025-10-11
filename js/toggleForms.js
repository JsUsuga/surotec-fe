function toggleForm() {
  const loginContainer = document.getElementById("loginContainer");
  const registerContainer = document.getElementById("registerContainer");

  if (!loginContainer || !registerContainer) return;

  const isLoginVisible = loginContainer.style.display !== "none";

  if (isLoginVisible) {
    // Ocultar login, mostrar registro
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
  } else {
    // Ocultar registro, mostrar login
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
  }
}
