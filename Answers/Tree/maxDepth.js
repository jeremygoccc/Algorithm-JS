/**
 * 求二叉树的高度
 */

const maxDepth = root => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(roo.right)) + 1;
}