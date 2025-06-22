//20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las 
// siguientes operaciones:

//    ¿Cuántos números son Pares?

//    ¿Cuál es el mayor de todos?

//    Si el tercero es par, calcular el cuadrado del segundo.

//    Si el primero es menor que el cuarto, calcular la media de los 4 números.

//    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores
//    50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

let num= parseInt(prompt("Coloque un numero entero positivo "));
console.log("El primer numero es: "+num)
let num2= parseInt(prompt("Coloque un numero entero positivo "));
console.log("El segundo numero es: "+num2)
let num3= parseInt(prompt("Coloque un numero entero positivo "));
console.log("El tercer numero es: "+num3)
let num4= parseInt(prompt("Coloque un numero entero positivo "));
console.log("El cuarto numero es: "+num4)


if(num>0 && num2>0 && num3>0 && num4>0){
    let numeros=[num,num2,num3,num4];
let pares = numeros.filter(n=>n%2==0).length;
console.log("Cantidad de pares: "+pares);

let mayor = Math.max(num,num2,num3,num4);
console.log("El mayor es: ", mayor);

if(num3%2==0){
    let numero= Math.pow(num2,2);
    console.log("El cuadrado del segundo es: ",numero);
} 

if(num2>num3){
    if(num3<=700 && 50<=num3){
        let suma= num+num2+num3+num4;
        console.log("La suma de los 4 numeros es: ",suma)
    }
}
}else{
    console.log("Vuela a colocar un numero entero y positivo");
}