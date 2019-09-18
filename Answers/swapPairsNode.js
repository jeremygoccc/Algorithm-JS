/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

 * 示例:
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.

 * 说明:
 * 你的算法只能使用常数的额外空间。    

 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 
 * 思路: 设置 dummy 节点简化操作, dummy.next = head
  1. 初始化 first 为第一个节点
  2. 初始化 second 为第二个节点
  3. 初始化 current 为 dummy
  4. first.next = second.next
  5. second.next = first
  6. current.next = second
  7. current = current.next.next
 */

const { LinkedList } = require('../LinkedList/LinkedList.js')

const swapPairs = head => {
  const dummy = new LinkedList()
  dummy.head = head
  let current = dummy.head
  while (current.next !== null && current.next.next !== null) {
    // 初始化
    const first = current.next
    const second = current.next.next
    // 交换
    first.next = second.next
    second.next = first
    current.next = second
    // 更新 current
    current = current.next.next
  }
  return dummy
}

const List = new LinkedList()
List.insert(1)
List.insert(2)
List.insert(3)
List.insert(4)
console.log('-----Initial-----')
List.display()
console.log('-----Swap--------')
const swapList = swapPairs(List.head)
swapList.display()