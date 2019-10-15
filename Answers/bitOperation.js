/**
 * LeetCode 191: 编写一个函数，输入一个无符号整数，返回其二进制中 1 的个数
 * 思路: n & (n - 1) 可以消除最后一个1
 */

function hammingWeight (n) {
  let res = 0
  while (n > 0) {
    n = n & (n - 1)
    res++
  }
  return res
}

console.log(hammingWeight(11))

/**
 * LeetCode 231: 给定一个整数，编写一个函数判断它是否是 2 的幂次方
 * 思路: n & (n - 1) 为 0
 */

function isPowerOfTwo (n) {
  return n > 0 && (!(n & (n - 1)))
}

console.log(isPowerOfTwo(11))

/**
 * 给定一个从零开始的乱序连续数组，找出缺失的那个数字
 * 最简单的思路是利用数学公式，计算数组的和再用 1-N 的值减去这个和
 * 思路: ret ^ i ^ nums[i]，余下最大值与缺失的值的异或，再与最大值（数组的长度）进行一次异或
 */
function missingNumber(nums) {
  let ret = 0, len = nums.length
  for (let i = 0; i < len; i++) {
    ret = ret ^ i ^ nums[i]
  }
  return ret ^ len
}

console.log(missingNumber([0, 5, 3, 4, 1]))