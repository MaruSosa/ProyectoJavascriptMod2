
let listaProductos = JSON.parse(localStorage.getItem('productos')) || []; 
console.log(listaProductos);
function guardarCategoria(categoria){
    console.log("hola")
    listaProductos=listaProductos.filter(producto=>producto.categoria===categoria);
    
}