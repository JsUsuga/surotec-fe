const form = document.getElementById("loginForm");
const errorMsg2 = document.getElementById("error-message");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // ✅ IDs corregidos
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(`${apiBaseUrl}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }

    const userData = await response.json();

    // ✅ Guardar usuario
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Redirección por rol
    if (userData.role === "ADMIN") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "student.html";
    }

  } catch (error) {
    console.error("Error en login:", error);
    errorMsg.textContent = error.message || "Error al iniciar sesión";
  }
});
