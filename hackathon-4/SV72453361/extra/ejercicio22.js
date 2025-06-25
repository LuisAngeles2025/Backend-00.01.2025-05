const capLast = (frase) => {
  return frase
    .split(" ")
    .map(palabra => {
      if (palabra.length === 0) return "";
      const ultima = palabra.slice(-1).toUpperCase();
      return palabra.slice(0, -1) + ultima;
    })
    .join(" ");
};

console.log(capLast("hello world")); 
// hellO worlD
