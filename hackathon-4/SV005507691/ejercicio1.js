//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const presentar = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;

console.log(presentar("Luis", "Machado", 24));