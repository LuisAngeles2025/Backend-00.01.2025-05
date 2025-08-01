const filterList = (lista) => {
  return lista.filter(item => typeof item === "number");
};

console.log(filterList([1, 2, 3, "x", "y", 10])); 
// [1, 2, 3, 10]
