export const validarCantidadCaracteres= (texto,min,max)=>{
    if(texto.length>=min&& texto.length<=max){
        return true;
    }else{
        return false;
    }
}
export const validarCantidadCaracteresDescripcion= (texto,min,max)=>{
    if(texto.length>=min&& texto.length<=max){
        return true;
    }else{
        return false;
    }
}
export const validarImagen = (url) => {
  const patron = /\.(jpg|jpeg|png|gif)$/i;
  if (patron.test(url)) {
    console.log('La URL de la imagen tiene un formato válido');
    return true;
  } else {
    console.log('La URL de la imagen tiene un formato erróneo');
    return false;
  }
};
  
 export const validarPrecio=(precio)=> {
    const regex = /^(?!0+(\.0+)?$)(?!-0+(\.0+)?$)\d+(\.\d+)?$/;
    return regex.test(precio);
  }
// Expresión regular para validar un correo electrónico
 export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Expresión regular para validar la contraseña (requiere al menos 8 caracteres, una mayúscula, una minúscula y un número)
 export const validarContrasena = (contrasena) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(contrasena);
};

