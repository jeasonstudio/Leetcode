/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  var hasLeft = !!root.left
  var hasRight = !!root.right

  if (!hasLeft && !hasRight) {
    return true
  } else {
    if ((hasLeft && root.left.val >= root.val) || (hasRight && root.right.val <= root.val)) return false
  }
  return (
    hasLeft ? isValidBST(root.left) : true
  )
  && (
    hasRight ? isValidBST(root.right) : true
  )
}

// WRONG ANSWER: [10,5,15,null,null,6,20]
