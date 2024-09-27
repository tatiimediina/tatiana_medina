import "./style.css";

// Obtener el formulario de inicio de sesión
const $form = document.getElementById("login-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($form);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  // Realizar una solicitud POST a la API de inicio de sesión
  try {
    await fetch("http://localhost:4321/auth/sign-in", {
      method: "POST",
      credentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    }).then((response) => {
      if (response.ok) {
        return (window.location.href = "/home");
        // ! REDIRIGIR AL USUARIO A LA PÁGINA PRINCIPAL
      } else {
        // ! MOSTRAR UN MENSAJE DE ERROR AL USUARIO
        return res.status(401).json({ message: "Usuario no encontrado" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Error inesperado" });
  }
});
