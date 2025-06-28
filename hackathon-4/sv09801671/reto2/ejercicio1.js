//Utilizando función arrow, crear una función que reciba como 
// parámetros un nombre, apellido y edad y los retorne en un 
// string concatenado “Hola mi nombre es sebastián yabiku y 
// mi edad 33”

let nombre=prompt("ingrese su nombre");
let apellido=prompt("ingrese su apellido");
let edad=parseInt(prompt("ingrese su edad"));

function datos(x,y,z){
    return (`Mi nombre es ${nombre}, mi apellido es ${apellido} y mi edad es de ${edad} anos`);  
}
alert("Mi nombre es "+nombre+", mi apellido es "+apellido+" y mi edad es de "+edad+" anos");
console.log(`los datos son nombre: ${nombre}, apellido: ${apellido} y edad: ${edad}`);
