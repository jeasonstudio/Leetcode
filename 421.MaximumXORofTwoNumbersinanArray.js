/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  var res = 0
  for (var index = 0; index < nums.length; index++) {
    for (var jndex = 0; jndex < nums.length; jndex++) {
      if (nums[index] === nums[jndex]) continue
      var self = nums[index] ^ nums[jndex]
      res = self > res ? self : res
    }
  }
  return res
}

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))
