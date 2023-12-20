export default class Producto{
    #id;
    #nombre;
    #descripcion;
    #precio;

    constructor(id = crypto.randomUUID() , nombre, descripcion, precio) {
        this.#id=id;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#precio=precio;
    }
}