const findNemo = (frase) => {
  const palabras = frase.split(" ");
  const posicion = palabras.indexOf("Nemo");
  if (posicion !== -1) {
    return `I found Nemo at ${posicion + 1}!`;
  } else {
    return "Nemo not found!";
  }
};

console.log(findNemo("I am finding Nemo !")); 
// I found Nemo at 4!
