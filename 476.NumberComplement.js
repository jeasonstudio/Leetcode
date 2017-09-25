/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return (Math.pow(2, num.toString(2).length) - 1) ^ num
}

console.log(findComplement(11243341))

// Line 9: SyntaxError: Unexpected token var
// WHAT THE FUCK ???