/**
 * Queue based on LinkedList
 */

class Node {
  constructor (el) {
    this.el = el
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }
  
  // 队尾入栈
  enqueue (value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
  }

  // 队首出栈
  outqueue () {
    if (this.head === null) return -1
    const value = this.head.el
    this.head = this.head.next
    return value
  }

  isEmpty () {
    return this.head === null
  }

  display () {
    while (!this.isEmpty()) {
      console.log(this.outqueue())
    }
  }
}

const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
console.log('-----Queue-----')
newQueue.display()
console.log('---------------')