//Funcion generar ID para clases
function generarId(length) {
  let id = "";
  let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
}

//Funcion que limpia el login
function limpiarLogin() {
  document.getElementById("mail").value = '';
  document.getElementById("contraseña").value = '';
}


//Funciones generales de local storage
function traerLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function guardarLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

class usuario {
  constructor (mail, contraseña) {
    this.id = generarId(20)
    this.mail = mail;
    this.contraseña = contraseña;
  }
}

//Funcion que agrega un nuevo usuario
function crearUsuario() {
  let mail = document.getElementById("mail").value;
  let contraseña = document.getElementById("contraseña").value;

  let usuarios = traerLocalStorage('usuarios');
  if (!usuarios) {
    usuarios = [];
  }
  let mailExiste = false;
  if (usuarios.length > 0) {
    mailExiste = usuarios.find(usuario => usuario.mail === mail);
  }
  if (mailExiste) {
    result.innerHTML = "Este mail ya sido registrado"
  } else if (mail === null || contraseña === null) {
    return;
  } else {
    let nuevoUsuario = new usuario(mail, contraseña);
    usuarios.push(nuevoUsuario);
    guardarLS('usuarios', usuarios);
    limpiarLogin();
  }
}

function volver() {
  window.location.href = "./index.html"
}
