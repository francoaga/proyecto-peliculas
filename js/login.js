function login(e) {
  let administradores= [{email: "fandresgroselle@gmail.com", password: "12356"}];
  event.preventDefault();

  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;
  let result = document.getElementById('result');

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  console.log(data);

  if(user === null) {
    result.innerHTML = "Ingrese un email o contraseña valida"
  } else if(email === administradores[0].email && psw === administradores[0].password) {
    window.location.href= "./peliculasConAdmin.html";
  } else if (email === data.email && psw === data.psw) {
    window.location.href= "./peliculas.html";
  } else {
    result.innerHTML = "Ingrese un email o contraseña valida"
  }
}

function registrarse(e) {
  event.preventDefault();
   window.location.href="./signUp.html"
}