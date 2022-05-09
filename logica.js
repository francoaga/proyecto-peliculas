class Pelicula {
    #nombre;
    #director;
    #urlImagen;
    #escritores = [];
    #categoriaGeneros = [];
    #elenco= [];
    #argumento;
    #fechaLanzamiento;
    #duracion;

    constructor(_nombre, _director, _urlImagen, _fechaLanzamiento, _duracion) {
        this.#nombre= _nombre;
        this.#director= _director;
        this.#urlImagen= _urlImagen;
        this.#fechaLanzamiento= _fechaLanzamiento;
        this.#duracion= _duracion;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(_nombre) {
        this.#nombre= _nombre;
    }

    get director() {
        return this.#director;
    }

    set director(_director) {
        this.#director= _director;
    }

    get urlImagen() {
        return this.#urlImagen;
    }

    set urlImagen(_urlImagen) {
        this.#urlImagen= _urlImagen;
    }

    get escritores() {
        return this.#escritores;
    }

    set escritores(lista) {
        lista.forEach(escritor => {
            this.#escritores.Add(escritor);
        });
    }

    get categorias() {
        return this.#categoriaGeneros;
    }

    set categorias(categorias) {
        categorias.forEach(categoria => {
            this.#categoriaGeneros.Add(categoria);
        });
    }

    get elenco() {
        return this.#elenco;
    }

    set elenco(actores) {
        actores.forEach(actor => {
            this.#elenco.Add(actor);
        });
    }

    get argumento() {
        return this.#argumento;
    }

    set argumento(argumento) {
        this.#argumento= argumento;
    }

    get fechaLanzamiento() {
        return this.#fechaLanzamiento;
    }

    set fechaLanzamiento(fecha) {
        this.#fechaLanzamiento= fecha;
    }

    get duracion() {
        return this.#duracion;
    }

    set duracion(duracion) {
        this.#duracion= duracion;
    }
}


class Serie extends Pelicula {
    #temporadas;

    constructor(_nombre, _director, _urlImagen, _fechaLanzamiento, _duracion, _temporadas) {
        super(_nombre, _director, _urlImagen, _fechaLanzamiento, _duracion);
        this.#temporadas= _temporadas;
    }

    get cantidadTemporadas() {
        return this.#temporadas;
    }

    set cantidadTemporadas(_temporadas) {
        this.#temporadas= _temporadas;
    }
}