// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

const $form = document.getElementById("register-form");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();

  const password = document.getElementById("password").value.trim();

  const email = document.getElementById("email").value.trim();

  try {
    const response = await fetch("http://localhost:4321/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: true,
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }).then((response) => {
        if (response.ok) {
          return (window.location.href = "/sign-in");
        } else {
          return res.status(401).json({ message: "Error inesperado" });
        }
      }),
    });
  } catch (error) {
    return res.status(500).json({ message: "Error inesperado" });
  }
});
