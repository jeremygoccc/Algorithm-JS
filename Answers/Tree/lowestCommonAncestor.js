/**
 * 二叉树最近公共祖先
 */

const lowestCommonAncestor = (root, p, q) => {
  if (root === null || root === p || root === q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  return left === null ? right : right === null ? left : root
}