/**
 * 单链表的插入 删除 查找
 * 
 * 单链表反转
 * 链表中环的检测
 * 两个有序链表合并
 * 删除链表倒数第n个结点
 * 求链表的中间结点
 */

class Node {
  constructor (el) {
    this.el = el
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }
  // 显示所有节点
  display () {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.el)
      currentNode = currentNode.next
    }
  }
  // 头插法
  insert (el) { 
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    const newNode = new Node(el)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 双变量
  remove (el) { 
    let prevNode = this.head
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.el !== el) {
      prevNode = prevNode.next
      currentNode = currentNode.next
    }
    if (currentNode === null) {
      console.log('未找到元素')
      return
    }
    prevNode.next = currentNode.next
  }
  // 依据变量查找
  findByvalue (el) { 
    let currentNode = this.head
    while (currentNode !== null && currentNode.el !== el) {
      currentNode = currentNode.next
    }
    if (currentNode !== null) {
      console.log(currentNode)
    } else {
      console.log(`${el} is not found`)
    }
  }

  // 单链表反转
  // 思路: 从头至尾遍历原链表, 尾插法生成新链表
  revertList () {
    const newList = new Node('head')
    let currentNode = this.head.next
    while (currentNode !== null) {
      const next = currentNode.next
      currentNode.next = newList.next
      newList.next = currentNode
      currentNode = next
    }
    this.head = newList
  }
  // 直接反转
  revertListDirectly () {
    if (!this.head.next || !this.head.next.next) return this.head
    // 第一个结点反转为尾部结点
    let prev = null
    let current = this.head.next
    let next
    // 先保存下一结点
    // 将当前结点的 next 设为上一结点
    // prev 设为当前结点, current 设为下一结点
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head.next = prev
  }

  // 链表中环的检测
  // 初始思路: 一个结点在头, 一个结点一直遍历, 相等即为环(错误: 链表中存在环不等于是一个环链表)
  // 正确思路: 一个结点走快点, 另一个结点走慢点, 相遇即含环(相遇点是环的入口?)
  checkCircle () {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }
  // 删除链表倒数第n个结点
  // 思路: 先反转, 遍历删除第n个结点, 再反转回去
  removeByIndexFromEnd (index) {
    if (this.checkCircle()) return
    this.revertList()
    let pos = 1
    let prevNode = this.head
    let currentNode = this.head.next
    while (currentNode !== null && pos < index) {
      prevNode = prevNode.next
      currentNode = currentNode.next
      pos++
    }
    if (currentNode === null) {
      console.log('该结点不存在')
      return false
    }
    prevNode.next = currentNode.next
    this.revertList()
  }
  // 求链表的中间结点
  // 思路: 快结点走两步, 慢结点走一步, 快结点走完慢结点即为中间结点(可扩展求n分之一结点)
  findMiddleNode () {
    let fast = this.head.next
    let slow = this.head.next
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
}

// 两个有序链表合并
const mergeSortedLists = (listA, listB) => {
  if (!listA) return listB
  if (!listB) return listA
  const newList = new LinkedList()
  let currentNode = newList.head
  let nodeA = listA.head.next
  let nodeB = listB.head.next
  while (nodeA !== null && nodeB !== null) {
    if (nodeA.el < nodeB.el) {
      currentNode.next = nodeA
      nodeA = nodeA.next
    } else {
      currentNode.next = nodeB
      nodeB = nodeB.next
    }
    currentNode = currentNode.next
  }
  if (nodeA !== null) {
    currentNode.next = nodeA
  } else {
    currentNode.next = nodeB
  }
  return newList
}

const List  = new LinkedList()
List.insert('Jeremy')
List.insert('Emrys')
List.insert('Eden')
console.log('-----Initial-----')
List.display()
console.log('-----------------')
List.remove('Emrys')
console.log('-----After Remove-----')
List.display()
console.log('-----------------')
console.log('-----Find Jeremy-----')
List.findByvalue('Jeremy')
console.log('---------------------')

const sortedList = new LinkedList()
sortedList.insert(1)
sortedList.insert(2)
sortedList.insert(3)
sortedList.insert(4)
sortedList.insert(5)
console.log('-----Initial-----')
sortedList.display()
console.log('-----------------')
sortedList.revertList()
console.log('-----After Revert-----')
sortedList.display()
console.log('-----------------')
sortedList.revertListDirectly()
console.log('-----After Revert2-----')
sortedList.display()
console.log('----------------------')
const sortedList1 = new LinkedList()
sortedList1.insert(1)
sortedList1.insert(2)
sortedList1.insert(3)
sortedList1.insert(4)
sortedList1.insert(5)
const sortedList2 = new LinkedList()
sortedList2.insert(2)
sortedList2.insert(5)
sortedList2.insert(7)
sortedList2.insert(8)
sortedList2.insert(9)
const sortedList3 = mergeSortedLists(sortedList1, sortedList2)
console.log('-----After Merged-----')
sortedList3.display()
console.log('----------------------')
sortedList3.removeByIndexFromEnd(3)
console.log('-----After remove last 3 index-----')
sortedList3.display()
console.log('-----------------------------------')
console.log('-----Find the MiddleNode-----')
console.log(sortedList3.findMiddleNode())
console.log('-----------------------------------')

exports.LinkedList = LinkedList