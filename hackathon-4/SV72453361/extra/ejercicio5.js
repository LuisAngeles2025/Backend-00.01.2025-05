const soloStrings = (lista) => {
  return lista.filter(item => typeof item === "string");
};

console.log(soloStrings(["hola", 123, "mundo", true])); // ["hola", "mundo"]