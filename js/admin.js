function obtenerdata() {
    let key = localStorage.getItem("key")
    let email = localStorage.getItem( "email")
    let psw = localStorage.getItem( "psw")
    
    console.log('user', key)
};

obtenerdata();


//Traigo el boton "Nuevo +"
const botonNuevo= document.getElementById('agregar-pelicula');

//Le agrego una escucha de eventos
botonNuevo.addEventListener('click', () => {
    console.log("Ventana Modal para agregar una nueva pelicula");
    crearFila();
});

//Traigo la el cuerpo de la tabla
const cuerpoTabla= document.getElementById('tablaPeliculas');

cuerpoTabla.addEventListener('click', (e) => {
    //console.log(e);
    if(e.target.classList.contains('borrar-icono')) {
        console.log("Pelicula Borrada");
    } else if(e.target.classList.contains('modificar-icono')) {
        console.log("Pelicula Modificada");
    } else if(e.target.classList.contains('destacar-icono')) {
        console.log("Pelicula Destacada");
    }
})

function crearFila() {
    const fragmentoFila= document.createDocumentFragment(); // -->creo el fragmento de la pelicula
    const fila= document.createElement('TR'); // --> creo la fila
    crearCeldas(fila);
    fragmentoFila.appendChild(fila);
    const tabla= document.getElementById('tablaPeliculas');
    tabla.appendChild(fragmentoFila);
}

function crearCeldas(fila) {
    for (let index = 0; index < 6; index++) {
        let celda;
        if(index === 0) {
            celda= document.createElement('TH');
            celda.textContent= '4';
            agregarAtributoValor(celda, 'scope', 'row');
        } else if(index < 4){
            celda= document.createElement('TD');
            celda.textContent= "algo";
        } else if( index < 5){
            celda= document.createElement('TD');
            agregarBotonVisibilidad(celda);
        } else {
            celda= document.createElement('TD');
            agregarOpciones(celda);
        }
        fila.appendChild(celda);
    }
}

function agregarAtributoValor(nodo, atributo, valor) {
        nodo.setAttribute(atributo, valor);
}

function agregarBotonVisibilidad(nodo) {
    const div= document.createElement('DIV');
    div.classList.add('form-check','form-switch','d-flex','justify-content-center');
    const input= document.createElement('INPUT');
    input.classList.add('form-check-input');
    agregarAtributoValor(input, 'type', 'checkbox');
    agregarAtributoValor(input, 'id', 'flexSwitchCheckChecked');
    agregarAtributoValor(input, 'checked', 'true')
    div.appendChild(input);
    nodo.appendChild(div);
}

function agregarOpciones(nodo) {
    const opciones= ['borrar-icono','modificar-icono','destacar-icono'];
    const urlsImagenes= ['./images/admin/eliminar.png','./images/admin/editar.png','./images/admin/estrella.png'];

    const div= document.createElement('DIV');

    for (let index = 0; index < 3; index++) {
        const opcion= document.createElement('DIV');
        opcion.classList.add('icono');
        const imagen= document.createElement('IMG');
        agregarAtributoValor(imagen, 'class', opciones[index]);
        agregarAtributoValor(imagen, "src", urlsImagenes[index]);
        agregarAtributoValor(imagen, "alt", "");
        opcion.appendChild(imagen);
        div.appendChild(opcion);
    }
    div.classList.add('d-flex','justify-content-around');
    nodo.appendChild(div);
}