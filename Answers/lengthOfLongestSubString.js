/**
 * 给定一个字符串, 找出不含有重复字符的最长子串的长度
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

const str = 'abcbcdeaa'

function lengthOfLongestSubString (s) {
  const arr = {}
  let strL = 0, strR = -1
  let res = 0, len = str.length
  while (strL < len) {
    if (strR+1 < len && !arr[str[strR+1]]) { // 未出现
      strR++
      arr[str[strR]] = 1
    } else { // 重复出现
      arr[str[strL]] = void 0
      strL++
    }
    res = Math.max(res, strR-strL+1)
  }
  return res
}

console.log(lengthOfLongestSubString(str))