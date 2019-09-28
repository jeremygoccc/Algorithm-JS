/**
 * 给定一个长度为 N 的整数数组，只允许乘法，不能用除法。计算任意 N - 1 个数的组合中乘积最大的一组，并写出算法的时间复杂度。
 */

// 暴力法
function LSP1(list) {
  let res = 1
  let max = -Number.MAX_VALUE
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j) res *= list[j]
    }
    max = Math.max(max, res)
    res = 1
  }

  return max
}