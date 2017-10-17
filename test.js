function caculate(array) {
  for (let index = 0; index < array.length; index++) {
    const left = array.slice(0, index).length > 0 ? array.slice(0, index).reduce((a, b) => (a * b)) : 1
    const right = array.slice(index + 1).length > 0 ? array.slice(index + 1).reduce((a, b) => (a * b)) : 1
    array[index] = left * right
  }
  return array
}

console.log(caculate([1,2,3,4]))
