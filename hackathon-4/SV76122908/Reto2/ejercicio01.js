//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad 
//y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const getData = (name, lastName, age) => {
  return `Hola mi nombre es ${name} ${lastName} y mi edad ${age}`;
}
const result = getData("Sebastián", "Yabiku", 33);
console.log(result);