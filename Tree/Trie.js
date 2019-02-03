class TrieNode {
  constructor () {
    // 代表每个字符经过节点的次数
    this.path = 0
    // 代表到该节点的字符串有几个
    this.end = 0
    this.next = new Array(26).fill(null)
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode()
  }
  insert (str) {
    if (!str) return
    let node = this.root
    for (let i = 0, len = str.length; i < len; i++) {
      // 获得字符对应的索引
      let index = str[i].charCodeAt() - 'a'.charCodeAt()
      // 创建索引
      if (!node.next[index]) {
        node.next[index] = new TrieNode()
      }
      node.path++
      node = node.next[index]
    }
    node.end++
  }
  search (str) {
    if (!str) return
    let node = this.root
    for (let i = 0, len = str.length; i < len; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt()
      // 索引不存在就返回
      if (!node.next[index]) {
        return 0
      }
      node.path++
      node = node.next[index]
    }
    return node.end
  }
  delete (str) {
    if (!this.search(str)) return
    let node = this.root
    for (let i = 0, len = str.length; i < len; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt()
      // 如果索引只剩一个就删除
      if (--node.next[index].path == 0) {
        node.next[index] = null
        return
      }
      node = node.next[index]
    }
    node.end--
  }
}

const trie = new Trie()
console.log(trie.insert('jeremy'))
console.log(trie.insert('jeremygo)'))
console.log(trie.search('jeremy'))
console.log(trie.delete('jeremygo)'))
console.log(trie.search('jeremygo'))