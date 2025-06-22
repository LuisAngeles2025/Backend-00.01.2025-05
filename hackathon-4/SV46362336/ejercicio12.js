const getStudentNames = (arr=[]) => {
    return arr.map(x => x.name)
}

const result = getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }])

  console.log(result)

