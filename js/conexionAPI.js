let listaGeneros= [];
let listaPeliculas= [];

class PeliculaGenero {

    constructor(genero, cantidad) {
        this.peliculas= [];
        this.cantidadPeliculas= cantidad;
        this.genero= genero;
    }

    agregarlista(lista) {
        for(let i= 0; i< lista.length; i++) {
            this.peliculas.push(lista[i]);
        }
    }
}


class Genero{
    constructor(id, nombre) {
        this.id= id;
        this.nombre= nombre;
    }
}


// window.addEventListener('load', () => {
//     pedirGeneros();
//     // listaGeneros.forEach(genero => {
//     //     // peliculasPorGenero(genero.id)
//     //     console.log(genero);
//     // });
//     for (let index = 0; index < listaGeneros.length; index++) {
//         console.log(listaGeneros[index]);
        
//     }
// });



const pedirGeneros = async () => {
    try {
      const respuesta = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=df514ee036238e00dcc55f43225cee95&language=en-US"
      );
      console.log(respuesta);
      //Comprobacion de los datos de respuesta
      if (respuesta.status === 200) {
        //Accedemos a los datos
        const datos = await respuesta.json();
        console.log(datos);
        guardarGeneros(datos);
      } else if (respuesta.status === 401) {
        console.log("Error en la llave o el endpoint");
      } else if (respuesta.status === 404) {
        console.log("Las peliculas nos existen");
      } else {
        console.log("Error inesperado");
      }
    } catch (error) {
      console.log(error);
    }
  };


const guardarGeneros= (generos) => {
    const array= generos.genres;
    //console.log(array);
    for (let index = 0; index < array.length; index++) {
        const generoActual= new Genero(array[index].id, array[index].name);
        listaGeneros.push(generoActual);
    }

    //console.log(listaGeneros);
}


const peliculasPorGenero= async (idGenero= 28) => {
    try {
        console.log(idGenero);
        const respuesta = await fetch(
            `https://api.themoviedb.org/3/list/${idGenero}?api_key=df514ee036238e00dcc55f43225cee95&language=en-US`
        );
        console.log(respuesta);
        //Comprobacion de los datos de respuesta
        if (respuesta.status === 200) {
            //Accedemos a los datos
            const datos = await respuesta.json();
            console.log(datos.items);
            guardarPeliculasGenero(datos);
        }
    } catch(error) {
        console.log(error);
    }
}

const guardarPeliculasGenero= (peliculas) => {
    console.log(peliculas);
    
    const generoActual= new PeliculaGenero(peliculas.id, peliculas.item_count);
    generoActual.agregarlista(peliculas.items);
    
    //Guardo en listaPeliculas
    listaPeliculas.push(generoActual);

    console.log(listaPeliculas);
}

const cargarPagina= () => {
    pedirGeneros();
    peliculasPorGenero();
    console.log(listaGeneros);

}
// pedirGeneros();
// peliculasPorGenero();
cargarPagina();

