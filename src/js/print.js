window.onload = cargar = () => {
  let usuarioObtenido = JSON.parse(localStorage.getItem("key"));
  console.log(usuarioObtenido);
  print(usuarioObtenido);
}

const print = (usuarioObtenido) => {
  let resultado = document.getElementById("resultados");
  let pintado = ` <ul>
  <li>Nombre: ${usuarioObtenido.name}</li>
  <li>Apellido: ${usuarioObtenido.apellido} </li>
  <li>Email: ${usuarioObtenido.correo}</li>
  <li>Contraseña: ${usuarioObtenido.contraseña}</li>
</ul>`

resultado.innerHTML = pintado;
}