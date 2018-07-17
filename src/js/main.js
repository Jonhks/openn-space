const enviar = () => {
let nombre = "Hola chicas ";
let persona = {
  name: "Edith",
  age: 23,
  altura: 1.59,
  estudiante: "Front"
}
console.log(persona)
  localStorage.setItem("usuario", JSON.stringify(persona));
}

const recibir = () => {
  let usuarioRecibido = localStorage.getItem("usuario");
  let copelia= JSON.parse(usuarioRecibido)
  print(copelia);
}

const print = (copelia) => {
  $("#resultado").html(
    `<ul>
<li>nombre: ${copelia.name} </li>
<li>edad: ${copelia.age}  </li>
<li>estatura: ${copelia.altura} </li>
<li>estudiante: ${copelia.estudiante}  </li>
</ul>`)

}


enviar();
recibir();