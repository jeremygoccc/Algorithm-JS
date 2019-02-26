// 堆每个节点的左边子节点索引是 i*2+1，右边是 i*2+2，父节点是 (i-1)/2

class MaxHeap {
  constructor () {
    this.heap = []
  }
  size () {
    return this.heap.length
  }
  empty () {
    return this.size() === 0
  }
  add (item) {
    this.heap.push(item)
    this._shiftUp(this.size() - 1)
  }
  removeMax () {
    this._shiftDown(0)
  }
  getParentIndex (k) {
    return parseInt((k - 1) / 2)
  }
  getLeftIndex (k) {
    return k * 2 + 1
  }
  // 一路将节点与父节点比对大小，如果大于父节点就和父节点交换位置
  _shiftUp (k) {
    while (this.heap[k] > this.heap[this.getParentIndex(k)]) {
      this._swap(k, this.getParentIndex(k))
      k = this.getParentIndex(k)
    }
  }
  // 交换根节点和末尾，移除末尾元素。循环判断父节点和子节点的大小，如果子节点更大就将父节点与更大的子节点交换
  _shiftDown (k) {
    this._swap(k, this.size() - 1)
    this.heap.splice(this.size() - 1, 1)
    // 如果有左子节点
    while (this.getLeftIndex(k) < this.size()) {
      let j = this.getLeftIndex(k)
      // 有右孩子并且大于左孩子
      if (j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++
      // 如果父节点大于左右子节点就跳过
      if (this.heap[k] >= this.heap[j]) break
      this._swap(k, j)
      k = j
    }
  }
  _swap (left, right) {
    let rightValue = this.heap[right]
    this.heap[right] = this.heap[left]
    this.heap[left] = rightValue 
  }
}

const findKthLargest = (nums, k) => {
  const maxHeap = new MaxHeap()
  for (let num of nums) maxHeap.add(num)
  while (maxHeap.size() > k) {
    maxHeap.removeMax()
  }
  return maxHeap.heap[0]
}

console.log(findKthLargest([1, 3, 5, 7, 8, 6], 3))