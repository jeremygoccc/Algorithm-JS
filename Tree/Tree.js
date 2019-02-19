const Queue = require('../Queue/Queue.js')

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor () {
    this.root = null
  }
  addNode (v) {
    this.root = this._addChild(this.root, v)
  }
  _addChild (node, v) {
    if (!node) return new Node(v)
    if (node.value > v) {
      node.left = this._addChild(node.left, v)
    } else {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
  preTraversal () {
    this._pre(this.root)
  }
  _pre (node) {
    if (!node) return null 
    console.log(node.value)
    this._pre(node.left)
    this._pre(node.right)
  }
  midTraversal () {
    this._mid(this.root)
  }
  _mid (node) {
    if (!node) return null 
    this._mid(node.left)
    console.log(node.value)
    this._mid(node.right)
  }
  postTraversal () {
    this._post(this.root)
  }
  _post (node) {
    if (!node) return null 
    this._post(node.left)
    this._post(node.right)
    console.log(node.value)
  }
  breadthTraversal () {
    if (!this.root) return null
    const q = new Queue()
    q.enqueue(this.root)
    while (!q.isEmpty()) {
      let n = q.outqueue()
      console.log(n.value)
      if (n.left) q.enqueue(n.left)
      if (n.right) q.enqueue(n.right)
    }
  }
  getMin () {
    return this._getMin(this.root).value
  }
  _getMin (node) {
    if (!node.left) return node
    return this._getMin(node.left)
  }
  getMax () {
    return this._getMax(this.root).value
  }
  _getMax (node) {
    if (!node.right) return node
    return this._getMax(node.right)
  }
  // 向下取整
  floor (v) {
    const node = this._floor(this.root, v)
    return node ? node.value : null
  }
  _floor (node, v) {
    if (!node) return null
    if (node.value === v) return node
    if (node.value > v) {
      return this._floor(node.left, v)
    }
    let right = this._floor(node.right, v)
    if (right) return right
    return node
  }
  // 验证 BST
  // 非递归中序遍历
  isValidBST () {
    let p = this.root, current = null
    let stack = []
    while (p !== null || stack.length > 0) {
      while (p !== null) {
        stack.push(p)
        p = p.left;
      }
      p = stack.pop()
      if (current !== null && p.val <= current.val) return false
      current = p
      p = p.right
    }
    return true
  }
}

const bst = new BST()
bst.addNode(3)
bst.addNode(2)
bst.addNode(1)
bst.addNode(4)
bst.addNode(5)
console.log('--- 前序遍历 ---')
bst.preTraversal()
console.log('---------------')
console.log('--- 中序遍历 ---')
bst.midTraversal()
console.log('---------------')
console.log('--- 后序遍历 ---')
bst.postTraversal()
console.log('---------------')
console.log('---- 最小值 ----')
console.log(bst.getMin())
console.log('---------------')
console.log('---- 最大值 ----')
console.log(bst.getMax())
console.log('---------------')
console.log('---- 向 2.6 下取整 ----')
console.log(bst.floor(2.6))
console.log('---------------')
console.log('---- 验证 BST ----')
console.log(bst.isValidBST())
console.log('---------------')

