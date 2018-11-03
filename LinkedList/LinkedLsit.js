/**
 * 1. 单链表的插入 删除 查找
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
}