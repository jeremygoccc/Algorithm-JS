/**
 * Bubble Insert Select
 */

const bubbleSort = arr => {
  if (arr.length <= 1) return
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    let flag = false
    for (let j = 0; j < iLen-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    if (!flag) break // 排序已完成
  }
  return arr
}

const insertSort = arr => {
  if (arr.length <= 1)　return
  for (let i = 1, iLen = arr.length; i < iLen; i++) { // 未排序区间
    const temp = arr[i]
    let j
    for (j = i-1; j >=0; j--) { // 已排序区间
      if (arr[j] > temp) {
        arr[j+1] = arr[j]
      } else {
        break
      }
    }
    arr[j+1] = temp
  }
  return arr
}

const selectSort = arr => {
  if (arr.length <= 1) return
  for (let i = 0, iLen = arr.length; i < iLen-1; i++) { // 未排序区间
    let minIndex = i
    for (let j = i + 1; j < iLen; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    const temp = arr[i]   // 未排序区间最小值放入已排序区间末尾
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

const arr1 = [1, 5, 2, 6, 3]
console.log(bubbleSort(arr1))

const arr2 = [4, 3, 2, 5, 7, 8, 9]
console.log(insertSort(arr2))

const arr3 = [5, 2, 1, 4, 6, 6, 0]
console.log(selectSort(arr3))