/* logica de nuevo producto*/
import Producto from "./classProducto.js";
import { validarCantidadCaracteres,validarCantidadCaracteresDescripcion,validarImagen,validarPrecio } from "./validaciones.js";
const btnNuevoProducto = document.getElementById('btnNuevoProducto');
const modalAdminProducto = new bootstrap.Modal(document.getElementById('administrarProducto'));
let listaProductos = JSON.parse(localStorage.getItem('productos')) || []; 

const mostrarModal = () => {
  modalAdminProducto.show();
};

btnNuevoProducto.addEventListener('click', mostrarModal);

const form = document.getElementById('form');
const agregarProducto = (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const imagen = document.getElementById('imagen').value; 
  const precio = parseFloat(document.getElementById('precio').value);
  if(validarCantidadCaracteres(nombre,2,20)&& validarCantidadCaracteresDescripcion(descripcion,10,100)&&validarImagen(imagen)&&validarPrecio(precio)){
    const nuevoProducto = {
      nombre,
      descripcion,
      imagen,
      precio,
    };
  
    listaProductos.push(nuevoProducto); 
    localStorage.setItem('productos', JSON.stringify(listaProductos)); 
  
    Swal.fire({
      title: 'Producto creado',
      text: `El producto ${nuevoProducto.nombre} fue creado correctamente`,
      icon: 'success',
    });
  
    mostrarProductosEnTabla(); 
    modalAdminProducto.hide();
    form.reset();
  }else {
  
    Swal.fire({
      title: 'Error',
      text: 'Hay errores en el formulario. Por favor, verifica los campos ingresados.',
      icon: 'error',
    });
  }
};

form.addEventListener('submit', agregarProducto);

const mostrarProductosEnTabla = () => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  listaProductos.forEach((producto, index) => {
    const newRow = tbody.insertRow();
    newRow.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;"></td>
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>
        <button class="btn btn-primary" onclick="verDetalleProducto('${producto.id}')">Ver detalle</button>
        <button class="btn btn-warning me-1">Editar</button>
        <button class="btn btn-danger" onclick="borrarProducto('${producto.id}')">Borrar</button>
      </td>
    `;
  });
};
  
mostrarProductosEnTabla(); 
