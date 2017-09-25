/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var bet = {
    f: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    s: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    t: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  }

  return words.filter(function(item) {
    var wordArray = item.split('').map(function(i) { return i.toLowerCase()})
    var finalBet = []
    for (var index = 0; index < wordArray.length; index++) {

      if (index === 0) {
        if (bet.f.indexOf(wordArray[index]) >= 0) {
          finalBet = bet.f
          continue
        }
        if (bet.s.indexOf(wordArray[index]) >= 0) {
          finalBet = bet.s
          continue
        }
        if (bet.t.indexOf(wordArray[index]) >= 0) {
          finalBet = bet.t
          continue
        }
      } else {
        if (finalBet.indexOf(wordArray[index]) === -1) {
          return false
        }
      }
    }
    return true
  })
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))

// Your runtime beats 48.17 % of javascript submissions.
