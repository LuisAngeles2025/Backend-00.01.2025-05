//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

let num1=parseInt(prompt("Ingrese #1"));
let num2=parseInt(prompt("ingrese #2"));
let num3=parseInt(prompt("ingrese #3"));

function sumaCubos(x,y,z){
    result=(Math.pow(num1,3)+Math.pow(num2,3)+Math.pow(num3,3));
    return result;
}
sumaCubos(num1,num2,num3);

alert("La suma de los cubos equivale a " + result);
console.log(`${result} es la suma de los cubos de los 3 #s`)   