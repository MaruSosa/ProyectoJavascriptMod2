/* logica de nuevo producto*/
import Producto from "./classProducto.js";
import { resumenValidaciones} from "./validaciones.js";


let formularioProducto= document.getElementById("formModal");
let modalProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);
const btnCrearProducto = document.getElementById("btnNuevoProducto");
let 
  nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  precio = document.getElementById("precio");
let altaProducto = true; 

let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];


if (listaProductos.length > 0) {
  listaProductos = listaProductos.map(
    (producto) =>
      new Producto(
        producto.nombre,
        producto.descripcion,
        producto.imagen,
        producto.precio,
      )
  );
}
console.log(listaProductos);

cargaInicial();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto, posicion) =>
      crearFila(producto, posicion + 1)
    );
  }
}

function crearFila(producto, fila) {
  console.log(producto);
  let tablaProducto = document.getElementById("tablaProducto");
  tablaProducto.innerHTML += `<tr>
  <th scope="row">${fila}</th>
  <td>${producto.nombre}</td>
  <td><span class="my-class text-truncate m-3">${producto.descripcion}</span></td>
  <td><span class="my-class text-truncate">${producto.imagen}</span></td>
  <td>${producto.precio}</td>
  <td>
    <button class="btn btn-warning btnEditar" onclick="prepararProducto('${producto.id}')">
      <i class="bi bi-pencil-square"></i>Editar
    </button>
    <button class="btn btn-danger btnBorrar" onclick="borrarProducto('${producto.id}')">
      <i class="bi bi-x-square"></i>Borrar
    </button>
  </td>
</tr>`;
}

formularioProducto.addEventListener("submit", prepararFormularioProducto);
btnCrearProducto.addEventListener("click", desplegarModalProducto);

//funciones
function desplegarModalProducto() {
  limpiarFormulario();
  altaProducto=true;
  modalProducto.show();
}

function prepararFormularioProducto(e) {
  e.preventDefault();
  console.log("en el evento submit");
  if (altaProducto) {
    crearProducto();
  } else {
    editarProducto();
  }
}

function crearProducto() {
  
  const resumen = resumenValidaciones(
    nombre.value,
    descripcion.value,
    imagen.value,
    precio.value
  );

  mostrarMensajeError(resumen);
  if (resumen.length === 0) {
   
    const productoNuevo = new Producto(
      undefined,
      nombre.value,
      descripcion.value,
      imagen.value,
      precio.value,
    );

    listaProductos.push(productoNuevo);
    
    guardarEnLocalstorage();
    console.log(productoNuevo);
    
    crearFila(productoNuevo, listaProductos.length);
    
    Swal.fire(
      "Producto creado",
      "El producto fue creado exitosamente",
      "success"
    );
    limpiarFormulario();
    
  }
}

function mostrarMensajeError(resumen) {
  if (resumen.length > 0) {
    alert.className = "alert alert-danger mt-3";
    alert.innerHTML = resumen;
  } else {
    alert.className = "alert alert-danger mt-3 d-none";
  }
}

function guardarEnLocalstorage() {
  localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
}

function limpiarFormulario() {
  formularioProducto.reset();
}

