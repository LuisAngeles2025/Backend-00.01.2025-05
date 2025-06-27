const toArray = (objeto) => {
  return Object.entries(objeto);
};

console.log(toArray({ a: 1, b: 2 })); 
// [["a", 1], ["b", 2]]