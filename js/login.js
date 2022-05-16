const mailInput = document.getElementById("mail");
const contraseñaInput = document.getElementById("contraseña");
const result = document.getElementById('result');

//Funcion que limpia el login
function limpiarLogin() {
  mailInput.value = '';
  contraseñaInput.value = '';
}

//Funciones generales de local storage
function traerLocalStorage(nombreLS) {
  return JSON.parse(localStorage.getItem(nombreLS));
}

function guardarLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


//Funcion que chequea si el usuario es admin con su pass
function checkIfAdmin(mail, contraseña) {
  return (mail === 'admin@gmail.com' && contraseña === '1234');
}

function checkInputs(mail, contraseña) {
  return (mail && contraseña);
}

function checkIfUserExists (mail, contraseña) {
  let users = traerLocalStorage("usuarios") || [];
  console.log('users', users)
  return users.find(usuario => usuario.mail === mail && usuario.contraseña === contraseña);
}

//FUNCIONES DEL LOGIN
//Login - Admin y usuario 
function loginmail() {
  let mail = mailInput.value;
  let contraseña = contraseñaInput.value;
  if (checkInputs(mail, contraseña)) {
    if (checkIfAdmin(mail, contraseña)) {
      guardarLS('mailLogueado', {mail, contraseña});
      window.location.href = "./peliculas.html";
    } else {
      let user = checkIfUserExists(mail, contraseña);
      console.log('user', user)
      if (user) {
        guardarLS('mailLogueado', user);
        location.href = "peliculas.html";
      } else {
        result.innerHTML = "Usuario no existente";
      }
    }
  } else {
    result.innerHTML = "Email o contraseña incorrecto";
  }
  limpiarLogin();
}

function registrarse() {
  window.location.href = "./signUp.html"
}