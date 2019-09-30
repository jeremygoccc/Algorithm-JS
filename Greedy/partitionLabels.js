/**
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 */

function partitionLabels(s) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = i
  }
  let start = 0, end = 0
  const res = []
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, obj[s[i]])
    if (end === i) {
      res.push(end - start + 1)
      start = i + 1
    }
  }
  return res
}