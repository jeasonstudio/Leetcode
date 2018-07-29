/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var tx = x.toString(2)
    var ty = y.toString(2)
    var length = tx.length > ty.length ? tx.length : ty.length
    while (tx.length < length) {
        tx = '0' + tx
    }
    while (ty.length < length) {
        ty = '0' + ty
    }
    tx = tx.split("")
    ty = ty.split("")
    var res = 0
    for (var index = 0; index < length; index++) {
        if (tx[index] !== ty[index]) res += 1
    }
    return res
}

// Your runtime beats 67.57 % of javascript submissions.