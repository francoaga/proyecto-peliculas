

//Funciones generales de local storage
function traerLocalStorage(nombreLS) {
  return JSON.parse(localStorage.getItem(nombreLS));
}

function checkUserIsLogged() {
  let mailLogueado = traerLocalStorage('mailLogueado');
  if (!mailLogueado) {
    setTimeout(() => location.href = "index.html", 700);
  }
}
checkUserIsLogged();

function admin() {
  let mailLogueado = traerLocalStorage('mailLogueado');
  let linkadmin = document.getElementById("linkadmin");
  if (mailLogueado.mail === "admin@gmail.com") {
    linkadmin.classList.remove("d-none");
    linkadmin.classList.add("d-flex");
  } else {
    console.log('entro')
    linkadmin.classList.add("d-none");
    linkadmin.classList.remove("d-flex");
  }
}
admin();


function salir() {
  localStorage.removeItem("mailLogueado");
  window.location.href = "./index.html"
}