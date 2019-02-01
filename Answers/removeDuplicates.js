/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 */
const nums = [0, 0, 1, 2, 4]

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0
  let fast = 0, slow = 0
  let len = nums.length
  while (fast < len) {
    if (nums[fast] === nums[slow]) {
      fast++
    } else {
      slow++
      nums[slow] = nums[fast]
      fast++
    }
  }
  nums.length = slow + 1
  return slow + 1
}

console.log(nums, removeDuplicates(nums))