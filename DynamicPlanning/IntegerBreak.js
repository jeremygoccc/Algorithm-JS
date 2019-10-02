/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).
 */

function integerBreak(n) {
  const dp = Array(n + 1).fill(1)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * dp[i - j], j * (i - j)))
    }
  }
  return dp[n]
}

console.log(integerBreak(10))