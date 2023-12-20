export default class Producto{
    #id;
    #imagen;
    #nombre;
    #descripcion;
    #precio;

    constructor(id = crypto.randomUUID() ,imagen, nombre, descripcion, precio) {
        this.#id=id;
        this.#imagen=imagen;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#precio=precio;
    }
}