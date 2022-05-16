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

const result = document.getElementById('result');

class Usuario {
    constructor(mail,contraseña, id){
        this.mail = mail;
        this.contraseña = contraseña;
        this.id = id;
    }
}

function agregarUsuario(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let mail = document.getElementById('mailModal1');
    let contraseña = document.getElementById('contraseñaModal1');
    if(mail.value !== "" && contraseña.value !== ""){
        if (usuarios.find(usuario => usuario.mail === mail.value)) {
            result.innerHTML = "Este mail ya sido registrado"
            return;
        }  
        usuarios.push(new Usuario(mail.value, contraseña.value, usuarios.length));
        localStorage.setItem('usuarios',JSON.stringify(usuarios));

        mail.value = ""
        contraseña.value = ""

        listarUsuarios();
        Swal.fire({
            title: 'Usuario creado',
            text: 'Usuario guardado con exito!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
            })
        $('#addUsuarioModal').modal('hide');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function listarUsuarios(usuarios = null) {
    if(!usuarios)
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
    let tabla = "";
    if(!usuarios || usuarios.length<1) {
        tabla += '<tr><td colspan="2">Agregue un contacto para empezar</td><td colspan="2"></td><td><button type="button" class="btn me-3 btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addUsuarioModal"><i class="fas fa-user-plus me-3"></i>Agregar Usuario</button></td></tr>';
    }
    else {
        for (let i = 0; i < usuarios.length; i++)
            tabla += '<tr><td colspan="2">'+ usuarios[i].mail + '</td><td colspan="2">' + usuarios[i].contraseña + '</td><td colspan="2"><button type="button" class="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target="#editUsuarioModal" onclick="actualizarUsuario(' + usuarios[i].id + ')">Editar</button></td><td colspan="2"><button class="btn btn-danger" onclick="eliminarUsuario(' + usuarios[i].id + ')">Eliminar</button></td></tr>';
    }
    document.getElementById('tablaUsuarios').innerHTML = tabla;
}

function eliminarUsuario(id) {
    Swal.fire({
        title: "¿Está seguro?",
        text: "No podrá recuperar los datos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        confirmButtonText: "Borrar"
        }).then((result) => {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        usuarios.splice(id, 1);
        for(let i=0; i<usuarios.length; i++)
            usuarios[i].id = i;
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        if(result.value) {
            Swal.fire({
                      title: "Borrado!", 
                      text: "El usuario fue eliminado.",
                      icon: 'success',
                      showConfirmButton: false,
                      timer: 1500
                      })
                buscar();
            }
        })
}

function actualizarUsuario(id) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    document.getElementById('mailModal').value = usuarios[id].mail;
    document.getElementById('contraseñaModal').value = (usuarios[id].contraseña);
    document.getElementById('idModal').value = (id);
}

function editarUsuario() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let mail = document.getElementById('mailModal');
    let contraseña = document.getElementById('contraseñaModal');
    let id = document.getElementById('idModal').value;
    if(mail.value != "" && contraseña.value != ""){
        usuarios[id].mail = mail.value;
        usuarios[id].contraseña = contraseña.value;
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        listarUsuarios();
        Swal.fire({
            title: 'Usuario Actualizado',
            text: 'Usuario modificado con exito!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
            })
        $('#editUsuarioModal').modal('hide');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function buscar() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let search = document.getElementById("Buscar");
    let resultado = [];
    if(usuarios && search.value) {
        for(let i=0; i<usuarios.length; i++) 
            if(usuarios[i].mail.toLowerCase().includes(search.value.toLowerCase()) || usuarios[i].contraseña.includes(search.value))
                resultado.push(usuarios[i]);

        if(resultado.length>0) {
            listarUsuarios(resultado);
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'No se encontró',
            })
            search.value = "";
            listarUsuarios();
        }
    }
    else {
        listarUsuarios();
    }
}

function cancelar() {
    document.getElementById("Buscar").value = "";
    listarUsuarios();
}

function ordenar(campo) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if(usuarios.length>1) {
        for(let i=0; i<usuarios.length; i++) {
            let actual = usuarios[i], j=0;
            if(campo == "mail") {
                for(j=i; j>0 && usuarios[j-1].mail>actual.mail; j--)
                    usuarios[j] = usuarios[j-1];
                usuarios[j] = actual;
            }
            else if(campo == "contraseña") {
                for(j=i; j>0 && usuarios[j-1].contraseña>actual.contraseña; j--)
                    usuarios[j] = usuarios[j-1];
                usuarios[j] = actual;
            }
        }
        listarUsuarios(usuarios);
    }
}

listarUsuarios();