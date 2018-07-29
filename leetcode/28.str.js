/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var strLen = needle.length
  for (var i = strLen - 1; i < haystack.length; ) {
    for (var j = 0; j < strLen; j++) {
      if (needle[strLen - j] != haystack[i - j]) {
        break
      }
      if (j == strLen - 1) {
        return i - j
      }
    }
  }
};

console.log(strStr('Happy', 'Ha'))
