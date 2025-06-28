//Crea una función que retorne la suma de dos números.
let num1=parseFloat(prompt("ingrese el primer numero"));
let num2=parseFloat(prompt("ingrese el segundo numero"));


function suma(x,y){
    result=num1+num2;
    return result; 
}
suma(num1,num2);
alert("El resultado es "+result);
console.log("la suma de los 2 sumeros es "+result);