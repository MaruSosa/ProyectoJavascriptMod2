export default class Producto {
    #id;
    #nombre;
    #precio;
    #imagen;
    #descripcion;
  
    constructor(
      id = crypto.randomUUID(),
      nombre,
      precio,
      imagen,
      descripcion,
      
    ) {
      this.#id = id;
      this.#nombre = nombre;
      this.#precio = precio;
      this.#imagen = imagen;
      this.#descripcion = descripcion;
    }
  
    get id() {
      return this.#id;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set precio(nuevoPrecio) {
      this.#precio = nuevoPrecio;
    }
  
    get imagen() {
      return this.imagen;
    }
  
    set imagen(nuevoImagen) {
      this.imagen = nuevoImagen;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    set descripcion(nuevaDescripcion) {
      this.#descripcion = nuevaDescripcion;
    }
  
    //  Método para el objeto JSON.stringify
    toJSON() {
      return {
        id: this.id,
        nombre: this.nombre,
        precio: this.precio,
        descripcion: this.descripcion,
        imagen:this.imagen
      };
    }
  }