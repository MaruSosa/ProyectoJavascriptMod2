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
export const validarImagenExtension = (image) => {
    const extensionesValidas = /\.(jpg|jpeg|png|gif|bmp)$/i;
    const extensionArchivo = image.name.split('.').pop();
    return extensionesValidas.test(`.${extensionArchivo}`);
  }
 export const validarPrecio=(precio)=> {
    const regex = /^(?!0+(\.0+)?$)(?!-0+(\.0+)?$)\d+(\.\d+)?$/;
    return regex.test(precio);
  }