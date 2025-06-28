//Crea una función que tome números y devuelva la suma de sus 
//cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

let num1= parseFloat(prompt("Ingrese el primer numero"))
let num2= parseFloat(prompt("Ingrese el segundo numero"));
let num3= parseFloat(prompt("Ingrese el tercer numero"));

function sumaCubos(x,y,z){
result= Math.pow(num1,3)+Math.pow(num2,3)+Math.pow(num3,3);
return result;
}
sumaCubos(num1,num2,num3);
alert("La suma de los cubos es de "+result);
console.log("la suma es de "+result);
