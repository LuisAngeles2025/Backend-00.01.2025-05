// 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

const getStudentNames = (students) => students.map(student => student.name);

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); 