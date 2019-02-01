/**
 * 给定一个字符串, 找出不含有重复字符的最长子串的长度
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
  建立一个空对象 obj ，用来建立字符和其出现位置之间的映射。

  维护一个滑动窗口，窗口内的都是没有重复的字符，去尽可能的扩大窗口的大小，窗口不停的向右滑动。

  （1）如果当前遍历到的字符从未出现过，那么直接扩大右边界, 并增加 obj 属性；

  （2）如果当前遍历到的字符出现过，则缩小窗口（左边索引向右移动），并将 obj 对应属性置为 undefined 然后继续观察当前遍历到的字符；

  （3）重复（1）（2），直到左边索引无法再移动；

  （4）维护一个结果res，每次用出现过的窗口大小来更新结果res，最后返回res获取结果。
 */

const str = 'abcbcdeaa'

function lengthOfLongestSubString (s) {
  const obj = {}
  let strL = 0, strR = -1
  let res = 0, len = str.length
  while (strL < len) {
    if (strR+1 < len && !obj[str[strR+1]]) { // 未出现
      strR++
      obj[str[strR]] = 1
    } else { // 重复出现
      obj[str[strL]] = void 0
      strL++
    }
    res = Math.max(res, strR-strL+1)
  }
  return res
}

console.log(lengthOfLongestSubString(str))