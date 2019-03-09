/**
 * 判断是否存在和等于一个数的路径
 */

const hasPathSum = (root, sum) => {
  if (!root) return false
  if (!root.left && !root.right && sum === root.val) return true
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}