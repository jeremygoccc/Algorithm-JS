/**
 * 二叉树层次遍历
 */

// 广度优先

const levelOrder = root => {
  if (!root) return []

  const res = []
  const queue = [root]

  let level = 0
  
  while (queue.length) {
    let levelSize = queue.length
    let i = 0
    while (i < levelSize) {
      let node = queue.shift()
      if (res[level]) {
        res[level].push(node.val)
      } else {
        res[level] = [node.val]
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      i++
    }
    level++
  }
  return res
}
