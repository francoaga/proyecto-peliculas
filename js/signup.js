function signup(e){
  event.preventDefault();

let email = document.getElementById("email").value;
let psw = document.getElementById("psw").value

let user = {
  email: email,
  psw: psw
};

let json = JSON.stringify(user);
localStorage.setItem(email, json);
alert("usuario creado")
window.location.href="index.html";

}


function volver(e) {
  event.preventDefault();
   window.location.href="../index.html"
}