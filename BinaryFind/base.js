/**
 * BinaryFind base version
 */

// 非递归
const binarySearch = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArr[mid] === target) {
      return mid
    } else if (sortedArr[mid] < target ) {
      low =  mid + 1
    } else {
      high = mid - 1
    }
  }
}

// 递归
const recurBinSearch = (a, low, high, target) => {
  if (low > high) return -1
  
  let mid = Math.floor((low + high) / 2)
  if (a[mid] === target) {
    return mid
  } else if (a[mid] < target) {
    return recurBinSearch(a, mid + 1, high, target)
  } else {
    return recurBinSearch(a, low, mid - 1, target)
  }
}
const binSearch = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  return recurBinSearch(sortedArr, 0, sortedArr.length - 1, target)
}

const sortedArr = [1, 3, 3, 4, 6, 7]
console.log(binarySearch(sortedArr, 6))
console.log(binSearch(sortedArr, 6))