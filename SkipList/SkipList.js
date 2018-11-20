/**
 * Skip List
 * 空间换时间，构建多级索引缩短查找时间
 */

class Node {
  constructor (el) {
    this.el = el
    this.next = null
    this.down = null
  }
}

class SkipList {
  constructor () {
    this.head = null
    this.topLevel.down = this.head
    this.level = 1
    this.LListLength = 0
  }
  getRandomLevel () {
    return 10*Math.random()*this.level
  }

  find (el) {
    let currentNode = this.topLevel
    while(currentNode !== null) {
      if (currentNode.el === el || currentNode.next.el > el) { // 从当前索引节点下去
        if (currentNode.down !== null) { // 当前层还是索引层
          currentNode = currentNode.down
        } else { // 已找到原链表前一个结点, 执行插入
          return currentNode
        }
      }
      currentNode = currentNode.next
    }
  }

  insert (el) {
    const findNode = this.find(el)
    const newNode = new Node(el)
    newNode.next = findNode.next
    findNode.next = newNode
    this.LListLength++
    if (this.LListLength > 3) { // 更新索引
      let currentIndex = this.topLevel
      const k = this.getRandomLevel() // 更新 $1 至 $k 的索引
      for (let i = 0; i <= this.level - k; i++) { // 先到第 k 层
        currentIndex = currentIndex.down
      }
      while(currentIndex !== null) {
        if (currentIndex.el === el || currentIndex.next.el > el) {
          if (currentIndex.down !== null) {
            const newIndex = new Node(el)   // 插入索引值
            newIndex.next = currentIndex.next
            currentIndex.next = newIndex
            currentIndex = currentIndex.down // 向下继续更新
          }
        }
        currentIndex = currentIndex.next
      }
    }
  }
}