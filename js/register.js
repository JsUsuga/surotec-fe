const registerForm = document.getElementById("registerForm");
const errorMsg = document.getElementById("error-message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 1 Tomamos los valores de los campos del formulario
  const documentType = document.getElementById("registerDocumentType").value;
  const documentNumber = document.getElementById("registerDocumentNumber").value;
  const firstName = document.getElementById("registerFirstName").value;
  const lastName = document.getElementById("registerLastName").value;
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    // Hacemos la petición POST al backend
    const response = await fetch(`${apiBaseUrl}/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        documentType,
        documentNumber,
        firstName,
        lastName,
        username,
        email,
        password,
        status: "ACTIVE" // 👈 Aquí agregamos el campo que faltaba
      }),
    });

    // Verificamos la respuesta
    if (!response.ok) {
      throw new Error("Error al registrar el usuario");
    }

    const userData = await response.json();
    alert(`✅ Usuario registrado con éxito: ${userData.firstName} ${userData.lastName}`);

    // Volver al login después del registro
    toggleForm();

  } catch (error) {
    console.error("Error creando usuario:", error);
    errorMsg.textContent = error.message;
  }
});
