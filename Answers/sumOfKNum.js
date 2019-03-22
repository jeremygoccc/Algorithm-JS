/**
 * 输入两个整数 n 和 m，从数列1，2，3.......n 中随意取几个数,使其和等于 m ,要求将其中所有的可能组合列出来
 */

const arr = []
const sumOfKNum = (m, n) => {
  if (n <= 0 || m <= 0) return

  if (m === n) {
    let flag = true
    for (let i = 0, len = arr.length; i < len; i++) {
      console.log(arr[i] + " " + n)
      flag = false
    }
    if (flag) console.log(n)
  }
  arr.unshift(n)
  sumOfKNum(m - n, n - 1)
  arr.shift()
  sumOfKNum(m, n - 1)
}

console.log(sumOfKNum(5, 5))