const result = document.getElementById("result");


//Funcion que limpia el login
function limpiarLogin() {
  document.getElementById("mail").value = '';
  document.getElementById("contraseña").value = '';
}


//Funciones generales de local storage
function traerLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function guardarLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

class Usuario {
  constructor (mail, contraseña, id) {
    this.id = id;
    this.mail = mail;
    this.contraseña = contraseña;
  }
}

//Funcion que agrega un nuevo usuario
function crearUsuario() {
  let mail = document.getElementById("mail").value;
  let contraseña = document.getElementById("contraseña").value;
  let usuarios = traerLocalStorage('usuarios') || [];
  let mailExiste = false;
  if (usuarios.length > 0) {
    mailExiste = usuarios.find(usuario => usuario.mail === mail);
  }
  if (mailExiste) {
    Swal.fire({
      icon: 'error',
      title: 'Este mail ya esta registrado',
      showConfirmButton: false,
      timer: 1500
    })
  } else if (mail === null || contraseña === null) {
    return;
  } else {
    let nuevoUsuario = new Usuario(mail, contraseña);
    usuarios.push(nuevoUsuario);
    guardarLocalStorage('usuarios', usuarios);
    limpiarLogin();
    Swal.fire({
      icon: 'success',
      title: 'Usuario registrado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

function volver() {
  window.location.href = "./index.html"
}
