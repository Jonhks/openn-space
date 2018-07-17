window.onload = otra =(usuario) => {
    let usuarioObtenido = JSON.parse(localStorage.getItem("usuario"));
    print(usuarioObtenido);    
}

const print = (usuarioObtenido) => {
    $("#result").html(
        `<ul>
            <li>nombre: ${usuarioObtenido.name}</li>
            <li>Apellido: ${usuarioObtenido.apellido} </li>
            <li>Email: ${usuarioObtenido.email} </li>
            <li>Contraseña: ${usuarioObtenido.password} </li>
        </ul`
    );
    
}