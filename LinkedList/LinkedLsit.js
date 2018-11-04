/**
 * 单链表的插入 删除 查找
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
    let currentNode = this.head
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