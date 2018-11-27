/**
 * 在一组数字中，找出最长一串递增的数字
 * 
 * 求最大递增子序列长度规律: 找出刚好比当前数字小的数，并在该数组成的数组长度上＋１
 */

function lis (n) {
  if (n.length === 0) return 0
  const array = new Array(n.length).fill(1)
  let maxLen = 1
  let maxIndex = 0
  for (let i = 1; i < n.length; i++) {     // 两个循环求出 maxLen 最大递增子序列长度
    for (let j = 0; j < i; j++) {
      if (n[i] > n[j]) {
        array[i] = Math.max(array[i], 1 + array[j])
        if (array[i] >= maxLen) maxIndex = i
        maxLen = Math.max(maxLen, array[i])
      }
    }
  }

  let res = []
  let index = 0
  let maxNum = n[0]-1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index+1 && n[i] > maxNum && n[i] < n[maxIndex]+1) { // 递增则插入
      let skipFlag = false
      for (let m = i; m < n.length; m++) {  // 凸节点的判断
        if (n[m] <= n[i] && array[m] > array[i]) {
          skipFlag = true
          break
        }
      }
      if (skipFlag) continue
      index++
      maxNum = Math.max(maxNum, n[i])
      res.push(n[i])
    }
  }

  return res
}

console.log(lis([0, 3, 4, 17, 2, 8, 8, 6, 50, 40, 17, 30, 25]))