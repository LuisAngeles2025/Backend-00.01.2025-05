//Escribe una función que tome la base y la altura de un 
//triángulo y devuelva su área. triArea(3, 2) ➞ 3

let base=parseFloat(prompt("Ingrese la base"));
let altura=parseFloat(prompt("Ingrese la altura"));

function areaTriangulo(x,y){
    result=(x*y)/2;
    return result
}
areaTriangulo(base,altura);
alert("El area del triangulo es de "+result);
console.log(result+" es el area del triangulo");
