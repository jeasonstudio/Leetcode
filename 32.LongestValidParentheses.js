/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var input = s.split('')
  if (input.length < 2) return 0

  var longest = 0
  for (var index = 0; index < input.length; index++) {
    var thisZhan = new safeArray()
    var len = 0
    for (var jndex = index; jndex < input.length; jndex++) {
      if (input[jndex] === '(') thisZhan.push('(')
      if (input[jndex] === ')') thisZhan.pop()
      if (thisZhan.length() === 0 && thisZhan.maxLen > len) len = thisZhan.maxLen
      console.log(thisZhan.length())
    }
    // console.log(len)
  }
};

var safeArray = function () {
  this.val = []
  this.maxLen = 0
}
safeArray.prototype.push = function (params) {
  this.val.push(params)
  this.maxLen = this.val.length
}
safeArray.prototype.pop = function () {
  if (this.val !== 0) this.val.pop()
}
safeArray.prototype.length = function () {
  return this.val.length
}
safeArray.prototype.maxLen = this.maxLen

// console.log(a.length(), a.maxLen)

longestValidParentheses(')()())')
