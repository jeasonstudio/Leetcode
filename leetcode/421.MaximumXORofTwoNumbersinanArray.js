/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  var max = mask = 0
  for(var i = 31; i >= 0; i--){
      mask = mask | (1 << i)
      var set = []
      for (var num = 0; num < nums.length; num++) {
        var item = num & mask
        if (set.indexOf(item) < 0) {
          set.push(item)
        }
      }
      var tmp = max | (1 << i)
      for(var prefix = 0; prefix < set.length; prefix++){
          if(set.indexOf(tmp ^ prefix) >= 0) {
              max = tmp
              break
          }
      }
  }
  return max
}

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))
