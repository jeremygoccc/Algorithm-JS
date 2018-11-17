/**
 * Binary Find Pro
 * Default: 小 -> 大
 */

// 查找第一个值等于给定值的元素
const binFirstEqual = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1

  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArr[mid] < target) {
      low = mid + 1
    } else if (sortedArr[mid] > target) {
      high = mid -1
    } else {
      if (mid === 0 || sortedArr[mid-1] !== target) return mid
      else high = mid -1
    }
  }
}

// 查找最后一个值等于给定值的元素
const binLastEqual = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1

  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArr[mid] < target) {
      low = mid + 1
    } else if (sortedArr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] !== target) return mid
      else low = mid + 1
    }
  }
}

// 查找第一个大于等于给定值的元素
const binFirstMore = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1

  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArr[mid] < target) {
      low = mid + 1
    } else {
      if (mid === 0 || sortedArr[mid-1] < target) return mid
      else high = mid - 1
    }
  }
}

// 查找最后一个小于等于给定值的元素
const binLastLess = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1

  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
      else low = mid + 1
    }
  }
}

const sortedArr = [1, 2, 3, 3, 4, 5, 5, 8]
console.log('第一个５的下标：', binFirstEqual(sortedArr, 5))
console.log('最后一个５的下标：', binLastEqual(sortedArr, 5))
console.log('第一个大于等于4的数的下标:', binFirstMore(sortedArr, 4))
console.log('最后一个小于等于5的数的下标', binLastLess(sortedArr, 7))