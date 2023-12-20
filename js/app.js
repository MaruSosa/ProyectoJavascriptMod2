
/*logica de papelitos */
const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;
  
  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];
  
  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container');
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;
    
    confettiEl.removeTimeout = setTimeout(function() {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);
    
    this.containerEl.appendChild(confettiEl);
  }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));


/*-------------------------- */
let duration = 15 * 1000;
let animationEnd = Date.now() + duration;
let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
var timeLeft = animationEnd - Date.now();

if (timeLeft <= 0) {
  return clearInterval(interval);
}

let particleCount = 50 * (timeLeft / duration);
confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
/*aumentar y desminuir la cantidad de producto */
function checkInputSize() {
  let input = document.getElementById('quantityInput');
  input.size = input.value.length > 1 ? input.value.length : 1;
}

function increaseQuantity() {
  let input = document.getElementById('quantityInput');
  let currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  checkInputSize();
}

function decreaseQuantity() {
  let input = document.getElementById('quantityInput');
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
      input.value = currentValue - 1;
      checkInputSize();
  }
};
/* logica de nuevo producto*/
import Producto from "./classProducto.js";
import { validarCantidadCaracteres, validarCantidadCaracteresDescripcion, validarImagenExtension, validarPrecioConRegex } from "./validaciones.js";
const modalAdminProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);
const btnAgregarProducto = document.getElementById("btnNuevoProducto");
const formularioProducto = document.querySelector("form");
const imagen= document.querySelector("imagen");
const nombre = document.getElementById("nombre"),
  descripcion= document.getElementById("descripcion"),
 precio= document.getElementById("precio");
  
const listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];


const mostrarModal = () => {
  limpiarFormulario();
  modalAdminProducto.show();
};

const crearProducto = (e) => {
  e.preventDefault();
  if (
    validarCantidadCaracteres(nombre.value, 2, 20) &&
    validarCantidadCaracteresDescripcion(descripcion.value, 10, 150) &&
    validarImagenExtension(imagen) &&
    validarPrecio(precio.value)
  ) {
    const nuevoProducto= new Producto(
      undefined,
      imagen.value,
      nombre.value,
      descripcion.value,
      precio.value,
    );
    listaProductos.push(nuevoContacto);
    limpiarFormulario();
    guardarEnLocalstorage();
    crearFila(nuevoProducto, listaProductos.length);
    modalAdminProducto.hide();
    Swal.fire({
      title: "Producto creado",
      text: `El Producto ${nuevoProducto.nombre} fue creado correctamente`,
      icon: "success",
    });
  }else{
    alert('Hay errores en el formulario')
  }
};

function limpiarFormulario() {
  formularioProducto.reset();
}

function guardarEnLocalstorage() {
  localStorage.setItem("agendaKey", JSON.stringify(listaProductos));
}

function crearFila(producto, fila) {
  const tablaProductos = document.querySelector("tbody");
  tablaProductos.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${producto.imagen}</td>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.precio}</td>
    <td>
    <button class="btn btn-primary" onclick="verDetalleProducto('${producto.id}')">Ver detalle</button>
      <button class="btn btn-warning me-1">Editar</button
      ><button class="btn btn-danger" onclick="borrarContacto('${producto.id}')">Borrar</button>
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
      const posicionProductoBuscado = Listaproductos.findIndex(
        (itemContacto) => itemContacto.id === idContacto
      );
      Listaproductos.splice(posicionProductoBuscado, 1);
      guardarEnLocalstorage();
      const tablaContactos = document.querySelector("tbody");
      console.log(tablaContactos.children[posicionContactoBuscado]); //objeto.propiedad[posicionarray]
      tablaContactos.removeChild(
        tablaContactos.children[posicionContactoBuscado]
      );
      Swal.fire({
        title: "Contacto eliminado",
        text: "El contacto fue eliminado exitosamente",
        icon: "success",
      });
    }
  });
};

window.verDetalleProducto=(idProducto)=> {
  console.log(window.location);
  window.location.href= window.location.origin +'/pages/detalleGloboLuminoso.html'+idProducto;
};
//logica extra
btnAgregarProducto.addEventListener("click", mostrarModal);
formularioProducto.addEventListener("submit", crearProducto);

cargaInicial();
