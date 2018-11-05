/**
 * Stack By LinkedList
 */

 class Node {
  constructor (el) {
    this.el = el
    this.next = null
  }
 }

 class Stack {
  constructor () {
    this.top = null
  }

  push (value) {
    const node = new Node(value)
    if (this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }
  pop () {
    if (this.top === null) return -1
    const value = this.top.el
    this.top = this.top.next
    return value
  }

  display () {
    if (this.top === null) return
    let temp = this.top
    while(temp !== null) {
      console.log(temp.el)
      temp = temp.next
    }
  }
 }

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log('----display----')
stack.display()
console.log('---------------')