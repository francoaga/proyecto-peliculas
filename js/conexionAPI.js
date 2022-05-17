// api key  from TMDB 
const api = "api_key=df514ee036238e00dcc55f43225cee95";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchThrillerMovies: `${base_url}/discover/movie?${api}&with_genres=53`,
  fetchFantasyMovies: `${base_url}/discover/movie?${api}&with_genres=14`,
};
// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner_title");
  var banner__desc = document.getElementById("banner_description");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.name;
})

// movies rows
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("netflixrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "NETFLIX ORIGINALS";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s = movie.name.replace(/\s+/g, "");
    poster.id = s;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});



//trending 
fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Trending Now";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

// top rated 
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

// action
fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Action Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// comedy
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Comedy Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// Horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Horror Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// Romance
fetch(requests.fetchThrillerMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Thriller Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});
// documentry
fetch(requests.fetchFantasyMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("head_row");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Fantasy Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});


//Para ver que generos hay
let listaGeneros= [];

class Genero{
    constructor(id, nombre) {
        this.id= id;
        this.nombre= nombre;
    }
}


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

    console.log(listaGeneros);
}


pedirGeneros();

