// https://leetcode.com/problems/3sum/
// Given an array nums of n integers, 
// are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

const arr = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]

const threeNums = (arr) => {
  let res = []
  let sortedArr = arr.sort((a, b) => a - b)
  for (let i = 0, len = sortedArr.length; i < len; i++) {
    let l = i + 1
    let r = sortedArr.length - 1
    if (sortedArr[i] > 0) break  // 如果最小已经是整数，则直接跳出循环
    if (sortedArr[i] === sortedArr[i - 1]) continue // 如果当前与前一个相等说明已经比较过，可以跳过
    while (l < r) {
      let sum = sortedArr[i] + sortedArr[l] + sortedArr[r]
      if (sum === 0) {
        let findArr = [sortedArr[i], sortedArr[l], sortedArr[r]]
        res.push(findArr)
        while (l < r && sortedArr[l] === sortedArr[l + 1]) l++ // 将 l 移至下一个更大的数
        while (l < r && sortedArr[r] === sortedArr[r - 1]) r-- // 将 r 移至前一个更小的数
        l++
        r--
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}

console.log(threeNums(arr))