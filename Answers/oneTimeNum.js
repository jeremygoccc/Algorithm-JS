/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

const singleNum = [2, 3, 2, 5, 1, 3, 5]

// 利用额外的一个空间
function findSingleNumer (singleNum) {
  const tmpObj = {}
  for (let i = 0, len = singleNum.length; i < len; i++) {
    tmpObj[singleNum[i]] = tmpObj[singleNum[i]] ? tmpObj[singleNum[i]] + 1 : 1
  }
  for (let key in tmpObj) {
    if (tmpObj[key] === 1) {
      return key
    }
  }
}
console.log(findSingleNumer(singleNum))

// 遍历数组将所有的值取异或, 最后剩下的就是只出现一次的数字
function findSingleNumerPro (singleNum) {
  for (let i = 1, len = singleNum.length; i < len; i++) {
    singleNum[0] ^= singleNum[i]
  }
  return singleNum[0]
}

console.log(findSingleNumerPro(singleNum))