const charIndex = (palabra, letra) => {
  const primera = palabra.indexOf(letra);
  const ultima = palabra.lastIndexOf(letra);

  return primera === -1 ? "No encontrado" : [primera, ultima];
};

console.log(charIndex("hello", "l")); // [2, 3]