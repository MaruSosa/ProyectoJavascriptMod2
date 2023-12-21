/* logica de nuevo producto*/
import Producto from "./classProducto.js";
import { validarCantidadCaracteres,validarCantidadCaracteresDescripcion,validarPrecio,validarImagen } from "./validaciones.js";

const modalAdminProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);
const btnAgregarProducto = document.getElementById("btnNuevoProducto");
const formularioProducto = document.getElementById("form");
const nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  precio = document.getElementById("precio"),
  imagen = document.getElementById("imagen");
const listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

//funciones
const mostrarModal = () => {
  limpiarFormulario();
  modalAdminProducto.show();
};

const crearProducto = (e) => {
  e.preventDefault();
  const imagenFile = document.getElementById('imagen').files[0];
  if (
    validarCantidadCaracteres(nombre.value, 2, 20) &&
    validarCantidadCaracteresDescripcion(descripcion.value, 10, 150) &&
    validarImagen(imagenFile) &&
    validarPrecio(precio.value)
  ) {
    console.log(nuevoProducto);
    listaProductos.push(nuevoProducto);
    console.log(listaProductos);
    limpiarFormulario();
    guardarEnLocalstorage();
 
    crearFila(nuevoProducto, listaProductos.length);
    modalAdminProducto.hide();
 
    Swal.fire({
      title: "Producto creado",
      text: `El producto ${nuevoProducto.nombre} fue creado correctamente`,
      icon: "success",
    });
  } else {
    alert('Hay errores en el formulario');
  }
};


function limpiarFormulario() {
  formularioProducto.reset();
}

function guardarEnLocalstorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

function crearFila(producto, fila) {
  const tablaProductos = document.querySelector("tbody");
  tablaProductos.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td><img src="${producto.imagen}" alt="${producto.nombre}" style="max-width: 100px; max-height: 100px;"></td>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.precio}</td>
    <td>
      <button class="btn btn-primary" onclick="verDetalleProducto('${producto.id}')">Ver detalle</button>
      <button class="btn btn-warning me-1">Editar</button>
      <button class="btn btn-danger" onclick="borrarProducto('${producto.id}')">Borrar</button>
    </td>
  </tr>`;
}

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((itemProducto, posicion) =>
      crearFila(itemProducto, posicion + 1)
    );

  
  }

}
window.borrarProducto = (idProducto) => {
  Swal.fire({
    title: "¿Estas seguro que quieres borrar?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionProductoBuscado =listaProductos.findIndex(
        (itemProducto) => itemProducto.id === idProducto
      );

      listaProductos.splice(posicionProductoBuscado, 1);

      guardarEnLocalstorage();

      const tablaProductos = document.querySelector("tbody");
      console.log(tablaProductos.children[posicionProductoBuscado]);
      tablaProductos.removeChild(
        tablaProductos.children[posicionProductoBuscado]
      );
      Swal.fire({
        title: "Producto eliminado",
        text: "El producto fue eliminado exitosamente",
        icon: "success",
      });
    }
  });
};

window.verDetalleProducto = (idProducto) => {
  window.location.href =
    window.location.origin + "/pages/detalleProducto.html?id=" + idProducto;
};

//logica extra
btnAgregarProducto.addEventListener("click", mostrarModal);
formularioProducto.addEventListener("submit", crearProducto);

cargaInicial();

