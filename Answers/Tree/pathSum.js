/**
 * 找出路径和等于给定数值的路径总数。
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */

const pathSum = (root, sum) => {
  if (!root) return 0
  let res = pathSumStartWithRoot(root, sum) + pathSumStartWithRoot(root.left, sum) + pathSumStartWithRoot(root.left, sum)
  return res
}

const pathSumStartWithRoot = (root, sum) => {
  if (!root) return 0
  let res = 0
  if (root.val === sum) res++
  res += pathSumStartWithRoot(root.left, sum - root.val) + pathSumStartWithRoot(root.right, sum - root.val)
  return res
}