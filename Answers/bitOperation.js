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