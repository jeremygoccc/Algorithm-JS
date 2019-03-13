/**
 * 在未排序的数组中找到第 k 个最大的元素
 */

const partition = (arr, pivot, left, right) => {
  let pivotal = arr[pivot]
  let l = left
  let r = right
  while (l < r) {
    while (l < r && arr[l] < pivotal) l++
    if (l < r) { arr[r] = arr[l]; r-- }
    while (l < r && arr[r] > pivotal) r--
    if (l < r) { arr[l] = arr[r]; l++ }
  }
  arr[r] = pivotal
  return r
}

const findKthLargest = (nums, k) => {
  let l = 0
  let r = nums.length - 1
  k = r + 1 - k
  while (l < r) {
    pivot = r
    let index = partition(nums, pivot, l, r)
    if (index < k) {
      l = index + 1
    } else if (index > k) {
      r = index - 1
    } else {
      break
    }
  }
  return nums[k]
}

console.log(findKthLargest([3,2,1,5,6,4], 2))