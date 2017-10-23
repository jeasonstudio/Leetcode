function juzhen(zhen, x) {
  if (zhen.length <= 1 && zhen[0][0] !== x) return false
  const newZhen = []
  for (let index = 0; index < zhen.length; index++) {
    for (var jndex = 0; jndex < zhen[index].length; jndex++) {
      if (zhen[index][jndex] === x) return true
    }
    const [first, ...thisRow] = zhen[index]
    newZhen[index] = thisRow
  }
  return juzhen(newZhen, x)
}

console.log(juzhen([
  [1,2,3,4,5],
  [2,3,4,5,6],
  [3,4,5,6,7],
  [4,5,6,7,8],
  [5,6,7,8,9]
], 7))
