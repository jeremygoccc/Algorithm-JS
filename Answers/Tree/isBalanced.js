/**
 * 判断平衡二叉树: 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过１
 */

let result = true

const isBalanced = root => {
  maxDepth(root)

  return result
}

const maxDepth = root => {
  if (!root) return 0
  let l = maxDepth(root.left)
  let r = maxDepth(root.right)
  if (Math.abs(l - r) > 1) result = false

  return Math.max(l, r) + 1
}

const root = []

console.log(isBalanced(root) === true)