// 并查集: 每个节点都有一个父节点，如果只有当前一个节点，则该节点父节点指向自己

class DisjoinSet {
  constructor (count) {
    this.parent = new Array(count)
    this.rank = new Array(count)
    for (let i = 0; i < count; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }
  // 确定元素属于哪一个子集
  find (p) {
    // 寻找当前节点的父节点是否为自己
    // 进行路径压缩优化：将当前节点挂载到当前节点父节点的父节点上
    while (p != this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }
    return p
  }
  isConnected (p, q) {
    return this.find(p) === this.find(q)
  }
  // 将两个子集合并为同一个集合
  union (p, q) {
    // 找到两个数字的父节点
    let i = this.find(p)
    let j = this.find(q)
    if (i === j) return
    // 深度小的树加到深度大的树下面，深度相等就随意加
    if (this.rank[i] < this.rank[j]) {
      this.parent[i] = j
    } else if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i
    } else {
      this.parent[i] = j
      this.rank[j]++
    }
  }
}