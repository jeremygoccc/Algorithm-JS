/**
在计算机界中，我们总是追求用有限的资源获取最大的收益。

现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。

你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。

注意:

给定 0 和 1 的数量都不会超过 100。
给定字符串数组的长度不会超过 600。
示例 1:

输入: Array = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出: 4

解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
示例 2:

输入: Array = ["10", "0", "1"], m = 1, n = 1
输出: 2

解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。

https://leetcode-cn.com/problems/ones-and-zeroes
 */

/**
 * 多维背包
 * F(i, m, n) = max(F(i - 1, m, n), F(i - 1, m - j, n - k) + 1); j 为当前字符串 0 的数量, k 为 1 的数量
 * 每遍历到 strs 的一个位置，可以选择或者不选择
 * 如果选择，F(i, m, n) 最优结果为减去这个字符串占用 01 数量后的最优结果，即 F(i - 1, m - j, n - k) + 1
 * 如果不选择，F(i, m, n) 的最优结果为到上一个字符串时的结果，即 F(i - 1, m, n)
 */

const findMaxForm = (strs, m, n) => {
  if (strs.length === 0) return 0
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i < strs.length; i++) {
    let count0 = 0, count1 = 0
    for (let item of strs[i]) {
      if (item == '1') count1++
      else count0++
    }

    for(let k = m; k >= count0; k--) {
      for (let j = n; j >= count1; j--) {
        dp[k][j] = Math.max(dp[k][j], dp[k - count0][j - count1] + 1)
      }
    }
  }

  return dp[m][n]
}

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))