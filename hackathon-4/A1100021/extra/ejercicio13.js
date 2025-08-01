// 13) Escriba una función que convierta un objeto en una matriz de claves y valores.

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const objectToArray = obj => Object.entries(obj);

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));