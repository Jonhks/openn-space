let firstName = document.getElementById("first_name");
let apellido = document.getElementById("last_name");
let correo = document.getElementById("email");
let contraseña = document.getElementById("password");
let boton = document.getElementById("boton");

boton.addEventListener("click" , event =>{
  let usuario = {
    name: firstName.value,
    apellido: apellido.value,
    correo: correo.value,
    contraseña: contraseña.value

  }
  window.social.mostrar(usuario);
})
