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
export const validarImagen = (imagen) => {
    const patron = /\.(jpg|jpeg|png|gif)$/i;
    const nombreArchivo = imagen.name;
    if (patron.test(nombreArchivo)) {
      console.log('El formato de la imagen es válido');
      return true;
    } else {
      console.log('El formato de la imagen es erróneo');
      return false;
    }
  };
  
  
 export const validarPrecio=(precio)=> {
    const regex = /^(?!0+(\.0+)?$)(?!-0+(\.0+)?$)\d+(\.\d+)?$/;
    return regex.test(precio);
  }
/*validaciones de registro */
