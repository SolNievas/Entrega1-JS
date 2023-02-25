const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");

function mensaje() {
    alert("Recuerda completar todos los campos requeridos para continuar");
}


form.addEventListener("submit", e => {
    e.preventDefault()
    let entrar = false

    while (entrar === true) {

    if (nombre.value.length < 3) {
        alert ("El Nombre debe tener más de 3 caracteres");
        mensaje()
    }

    else if (apellido.value.length < 3) {
        alert ("El Apellido debe tener más de 3 caracteres");
        mensaje()
    }

    else if (usuario.value.length < 4) {
        alert ("El Nombre de Usuario debe tener más de 4 caracteres");
        mensaje()
    }

    else if (contraseña.value.length < 6) {
        alert ("La Contraseña debe tener más de 6 caracteres");  
        mensaje()      
    }
    
    break;
    }

})

