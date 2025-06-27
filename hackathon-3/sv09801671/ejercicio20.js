//Hacer un algoritmo en JavaScript que lea 
// 4 números enteros positivos y verifique y 
// realice las siguientes operaciones:

//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del 
// segundo.
//Si el primero es menor que el cuarto, calcular 
// la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar 
// si el tercero esta comprendido entre los valores 
// 50 y 700. Si cumple se cumple la segunda condición, 
// calcular la suma de los 4 números.

const x1=parseInt(prompt("Ingrese 1 numero entero positivo"));
const x2=parseInt(prompt("Ingrese 1 numero entero positivo"));
const x3=parseInt(prompt("Ingrese 1 numero entero positivo"));
const x4=parseInt(prompt("Ingrese 1 numero entero positivo"));


let num="";

if (x1%2==0){
    num="par";
}else{
    num="impar";
}
alert("El numero es "+num);
console.log("el numero es "+num);

if (x2%2==0){
    num="par";
}else{
    num="impar";
}
alert("El numero es "+num);
console.log("el numero es "+num);

if (x3%2==0){
    num="par";
}else{
    num="impar";
}
alert("El numero es "+num);
console.log("el numero es "+num);

if (x4%2==0){
    num="par";
}else{
    num="impar";  
}

alert("El numero es "+num);
console.log("el numero es "+num);

let mayor=""
if (x1>=x2 && x1>=x3 && x1>=x4){
    mayor=x1;
}else if (x2>=x3 && x2>=x4){
    mayor=x2;    
}else if (x3>=x4){
    mayor=x3;
}else{
    mayor=x4;
}

alert("el mayor es "+mayor);
console.log(mayor+" es el numero mayor");

let cuad=""
if (x3%2==0){
    cuad=x2*x2;
}
alert("el cuadrado del segundo es "+cuad);
console.log(cuad+" es el cuadrado de x2");

let media=""
if (x1<x4){
    med=(x1+x2+3+x4)/4;
}
alert("la media es "+med);
console.log(med+" es la media de los cuatro numeros");

let sumCuatro=""
if (x2>x3 && (x3>50 && x3<700)){
    sumCuatro=(x1+x2+x3+x4);
}