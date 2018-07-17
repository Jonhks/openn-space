let nameImput = $("#first_name");
let boton = $("#boton");
let lastInput = $("#last_name");
let emailInput = $("#email");
let password = $("#password");


boton.click(event => {
  let usuario = {
    "name":  nameImput.val(),
    "apellido" : lastInput.val(),
    "email": emailInput.val(),
    "password": password.val()
  }
  window.social.mostrar(usuario)
});


set = () => {
  let str = "Este es el string del usuario ";
  let usr = {
    name: "jonh",
    "cel": 123123123,
    "tall": 1.87,
    "age": 32
  }
  localStorage.setItem("usuario", JSON.stringify(usr) )
}

get = () => {
  let resultado = localStorage.getItem("usuario");
  console.log(resultado);
}

set();
// get();


