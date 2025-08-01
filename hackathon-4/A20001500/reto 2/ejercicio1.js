//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
// los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const datos = (name, last, age) => `Hola mi nombre es ${name} ${last}, tengo ${age} años`

console.log(datos('Patricia', 'Zuñiga', 30))