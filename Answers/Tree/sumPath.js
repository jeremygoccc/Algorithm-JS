/**
 * 求一个二叉树所有根节点到子节点路径组成数字的和
 */

const sumPath = (root, sum = 0) => {
  if (!root) return 0
  sum = sum * 10 + root.val
  if (!root.left && !root.right) return sum
  return sumPath(root.left, sum) + sumPath(root.right, sum)
}