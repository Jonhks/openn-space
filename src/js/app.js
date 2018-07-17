window.social = {
  mostrar : (usuario) => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
    location.href = "views/vista1.html";
  } 
}
