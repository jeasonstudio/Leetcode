/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort(sortNumber)
  var res = 0
  for (var index = 0; index < nums.length - 1; index += 2) {
    res += nums[index]
  }
  return res
}

function sortNumber(a,b) {
  return a - b
}

// Your runtime beats 79.53 % of javascript submissions.
