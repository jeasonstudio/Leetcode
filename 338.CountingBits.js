/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var res = []
  for (var index = 0; index < num; index++) {
    console.log(index.toString(2))
    res[index] = index.toString(2).split('').reduce(function(a, b) {
      return parseInt(a) + parseInt(b)
    })
  }
  return res
}

console.log(countBits(5))
