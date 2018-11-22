/**
 * Skip List
 * 空间换时间，构建多级索引缩短查找时间
 */

class Node { // 链表结点
  constructor (el) {
    this.el = el
    this.prev = null
    this.next = null
  }
}

class IndexNode { // 索引结点
  constructor (el) {
    this.el = el
    this.next = null
    this.down = null
  }
}

class SkipList {
  constructor () {
    this.head = null
    this.topLevel = new Node('top')
    this.topLevel.down = this.head
    this.level = 1
    this.LListLength = 0
  }
  getRandomLevel () {
    return 10*Math.random()*this.level
  }

  find (el) {
    let currentNode = this.topLevel.down
    while(currentNode !== null) {
      if (currentNode.el === el || (currentNode.el < el && currentNode.next === null) || (currentNode.next && currentNode.next.el > el)) { // 从当前索引节点下去
        if (currentNode.down && currentNode.down !== null) { // 当前层还是索引层
          currentNode = currentNode.down
        } else { // 返回找到的原链表对应结点的前一个结点或是对应结点
          return currentNode
        }
      }
      currentNode = currentNode.next
    }
    return this.head
  }

  insert (el) {
    let findNode = this.find(el)
    if (findNode === null) { // 插入第一个结点
      this.head = new Node(el)
      this.topLevel.el = el
      this.topLevel.down = this.head
      return
    }
    const newNode = new Node(el)
    newNode.next = findNode.next
    newNode.prev = findNode
    findNode.next = newNode
    this.LListLength++
    if (this.LListLength > 3) { // 插入需要更新索引
      let currentIndex = this.topLevel
      const k = this.getRandomLevel() // 动态更新 $1 至 $k 的索引
      for (let i = 0; i <= this.level - k; i++) { // 先到第 k 层
        currentIndex = currentIndex.down
      }
      while(currentIndex !== null) {
        if (currentIndex.el === el || (currentIndex.next && currentIndex.next.el > el)) {
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

  remove (el) {
    let findNode = this.find(el)
    if (findNode === null) return
    if (findNode.el !== el) { // findNode 为前驱结点
      const nextNode = findNode.next.next
      if (nextNode) {
        nextNode.prev = findNode
        findNode.next = nextNode
      } else { // 查找结点为末尾结点
        findNode.next = null
      }
    } else { // findNode 为查找结点
      const prevNode = findNode.prev
      if (prevNode) {
        const nextNode = findNode.next
        // console.log('prevNode: ', prevNode)
        // console.log('nextNode: ', nextNode)
        if (nextNode) {
          nextNode.prev = prevNode
          prevNode.next = nextNode
        } else {
          prevNode.next = null
        }
      } else { // 查找结点为开头结点
        const headNode = prevNode.next
        let topIndexNode = this.topLevel
        while(topIndexNode.down.down) { // 跳出条件即为到达头结点的上方索引结点
          topIndexNode.el = headNode.el
          topIndexNode = topIndexNode.down
        }
        topIndexNode.down = headNode
      }
    }

    // 删除索引结点
    let topIndexPrev = this.topLevel.down
    let topIndexNode = topIndexPrev.next 
    while(topIndexNode.next !== null && topIndexNode.down) { // 索引结点
      if (topIndexNode.el === el) {
        const prevNode = topIndexPrev
        const indexNode = topIndexNode
        topIndexPrev = topIndexNode.down
        topIndexNode = topIndexNode.down.next
        prevNode.next = indexNode.next
      } else if (topIndexNode.next.el > el) {
        topIndexNode = topIndexNode.down
      } else {
        topIndexPrev = topIndexPrev.next
        topIndexNode = topIndexNode.next
      }
    }
  }
}

// Test
const skipList = new SkipList()
skipList.insert(1)
skipList.insert(3)
skipList.insert(3)
skipList.insert(6)
skipList.insert(7)
console.log(skipList.find(3).el)
console.log(skipList.find(6).el)
// console.log(skipList.remove(3))
skipList.remove(6)
console.log(skipList.find(6))