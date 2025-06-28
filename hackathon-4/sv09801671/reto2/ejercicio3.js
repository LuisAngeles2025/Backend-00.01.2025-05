//Crear una funcion que me retorne el tipo de valor 
//entregado, invocar la función para los distintos 
//tipos de js

function tipoDeValor(valor) {
    return typeof valor;
}   

console.log(tipoDeValor(42));              
console.log(tipoDeValor("Hola mundo"));    
console.log(tipoDeValor(true));            
console.log(tipoDeValor(undefined));       
console.log(tipoDeValor(null));            
console.log(tipoDeValor({}));              
console.log(tipoDeValor([]));              
console.log(tipoDeValor(function() {}));   
console.log(tipoDeValor(Symbol("id")));    
console.log(tipoDeValor(BigInt(9007199254740991))); 

