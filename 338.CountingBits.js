/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = []
    for (var index = 0; index <= num; index++) {
        // console.log(index.toString(2))
        var self = index.toString(2).split('')
        res[index] = 0
        self.forEach(function(item) {
            res[index] += parseInt(item)
        })
    }
    return res
}

console.log(countBits(5))

// Your runtime beats 10.46 % of javascript submissions.