/**
 * 删除 s 中的一些字符，使得它构成字符串列表 d 中的一个字符串，找出能构成的最长字符串。如果有多个相同长度的结果，返回字典序的最小字符串
 * Input:
    s = "abpcplea", d = ["ale","apple","monkey","plea"]

    Output:
      "apple"

  思路： 删除 s 中的一个字符能得到字符串 t，可以认为 t 是 s 的序列，可以使用双指针判断一个字符串是否为另一个字符串的子序列
*/

function isSubstr(s, target) {
  let i = 0, j = 0
  while (i < s.length && j < target.length) {
    if (s[i] === target[j]) j++
    i++
  }
  return j === target.length
}

function findLongestWord(s, d) {
  let longestWord = ''
  for (let i = 0, len = d.length; i < len; i++) {
    let l1 = longestWord.length, l2 = d[i].length
    if (l1 > l2 || (l1 === l2 && longestWord.indexOf(d[i]) < 0)) {
      continue
    }
    if (isSubstr(s, d[i])) {
      longestWord = d[i]
    }
  }
  return longestWord
}

console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"]))