window.social = {
  mostrar : (usuario) => {
    location.href = "views/vista1.html";
    localStorage.setItem("usuario",JSON.stringify(usuario) )
    otra()
  } 
}
