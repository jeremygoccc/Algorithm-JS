/**
  给定一个数组nums，写一个函数，将数组中所有的0挪到数组的末尾，⽽维持其他所有非0元素的相对位置。   
  举例: nums = [0, 1, 0, 3, 12]，函数运⾏后结果为[1, 3, 12, 0, 0]

  设定一个临时变量k=0，遍历数组nums，将非零元素与之前的零元素进行交换，维护变量k的值。
 */

const nums = [0, 1, 0, 3, 12]

const moveZeros = (nums) => {
  let k = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i]) {
      nums[k] = nums[i]
      k++
    }
  }
  for (let i = k, len = nums.length; i < len; i++) {
    nums[i] = 0
  }
  return nums
}

// const moveZeros2 = (nums) => {
//   let k = 0
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (nums[i]) {
//       if (k !== i) {
//         let tmp = nums[i]
//         nums[i] = nums[k]
//         nums[k] = tmp
//         k++
//       }
//     } else {
//       k++
//     }
//   }
//   return nums
// }

console.log(moveZeros(nums))