const getStudentNames = (estudiantes) => {
  return estudiantes.map(e => e.name);
};

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); 
// ["Steve", "Mike", "John"]
