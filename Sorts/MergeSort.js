/**
 * MergeSort by Array
 */

const mergeArr = (leftArr, rightArr) => {
  const temp = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftArr.length > leftIndex && rightArr.length > rightIndex) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      temp.push(leftArr[leftIndex])
      leftIndex++
    } else {
      temp.push(rightArr[rightIndex])
      rightIndex++
    }
  }

  return temp.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)

  return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}

const testArr = []
for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random() * 1000))
}

console.log(mergeSort(testArr))