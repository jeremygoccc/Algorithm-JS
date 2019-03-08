/**
 * 归并两棵树：如果在某个节点处两棵树都不为空则将值相加，否则取有值的节点
 */

const mergeTrees = (root1, root2) => {
  if (!root1 && !root2) return null
  if (!root2) return root1
  if (!root1) return root2
  let root = new TreeNode(root1.val + root2.val)
  root.left = mergeTrees(root1.left, root2.left)
  root.right = mergeTrees(root1.right, root2.right)

  return root
}