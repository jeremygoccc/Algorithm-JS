/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

const isSymmetric = root => {
  if (root === null) return true
  return isSymmetricTwo(root.left, root.right)
}

const isSymmetricTwo = (t1, t2) => {
  if (t1 === null && t2 === null) return true
  if (t1 === null || t2 === null) return false
  if (t1.val !== t2.val) return false
  return isSymmetricTwo(t1.left, t2.right) && isSymmetric(t1.right, t2.left)
}