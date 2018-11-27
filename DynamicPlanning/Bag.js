/**
 * 0-1 背包问题
 * 给定一组物品，每种物品有自己的重量和价格，在限定的总重量内如何选择才能使物品总价最高
 */

/**
 * 
 * @param {Array} w 物品重量
 * @param {Array} v 物品价值
 * @param {Number} c 总容量
 */
function knapsack(w, v, c) {
  if (w.length === 0) return 0

  // 一维代表物品，二维代表剩余容量，值为背包物品总价值
  let array = new Array(w.length).fill(new Array(c + 1).fill(null))

  // 初始化为物品1的价值
  for (let i = 0; i <= c; i++) {
    array[0][i] = i >= w[0] ? v[0] : 0
  }

  for (let i = 1; i < w.length; i++) {
    for (let j = 0; j <= c; j++) {
      // 不放当前物品
      array[i][j] = array[i-1][j]

      // 放当前物品
      if (j >= w[i]) {
        array[i][j] = Math.max(array[i][j], v[i]+array[i-1][j-w[i]])
      }
    }
  }
  return array[w.length-1][c]
}

console.log(knapsack([1, 2, 3], [3, 7, 12], 5))