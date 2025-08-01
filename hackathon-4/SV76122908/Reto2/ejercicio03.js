//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js.

const tipoValor = (valor) => {
    return typeof valor;
    }
console.log(tipoValor("hola")); 
console.log(tipoValor(1));
console.log(tipoValor(true));
console.log(tipoValor(undefined));
console.log(tipoValor(null));
