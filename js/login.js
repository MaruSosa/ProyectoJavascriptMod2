/*logica registro */
import {validarEmail,validarContrasena}from "./validaciones.js";
const formularioRegistro = document.querySelector("#formRegistro");

formularioRegistro.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("validationDefaultUsername").value;
  const password = document.getElementById("contrasenia").value;
  const repetpassword = document.getElementById("confirmarContrasenia").value;

  if (password !== repetpassword) {
    return alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const isUserRegistered = users.find(user => user.email === email);

  if (isUserRegistered) {
    return alert("El email ya se encuentra registrado.");
  } else {
    users.push({ nombre: nombre, apellido: apellido, email: email, usuario: usuario, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "./login.html"  }
});

