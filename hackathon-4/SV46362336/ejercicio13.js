const objectToArray = (obj) => {
    return Object.entries(obj)
} 

const result = objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})

console.log(result)