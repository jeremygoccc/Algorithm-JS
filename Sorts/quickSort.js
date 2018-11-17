/**
 * Quick Sort
 */

// const partition = (arr, pivot, left, right) => {
//   const pivotal = arr[pivot]
//   let i = left
//   let j = right
//   while (i < j) {
//     while (i < j && arr[i] < pivotal) i++
//     if (i < j) { arr[j] = arr[i]; j-- }
//     while (i < j && arr[j] > pivotal) j--
//     if (i < j) { arr[i] = arr[j]; i++ }
//   }
//   arr[j] = pivotal
//   return j
// } 

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
  const pivotal = arr[pivot]
  let startIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

const quickSort = (arr, left, right) => {
  if (left > right) return

  let pivot = right
  let partitionIndex = partition(arr, pivot, left, right)
  quickSort(arr, partitionIndex + 1, right)
  quickSort(arr, left, partitionIndex - 1)
}


// Test
const testArr = []
for (let i = 0; i < 100; i++) {
  testArr.push(Math.floor(Math.random()*1000))
}

quickSort(testArr, 0, testArr.length - 1)
console.log(testArr)