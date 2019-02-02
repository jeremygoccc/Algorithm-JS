/**
 给出⼀个整形数组nums和⼀个整数k，是否存在索引i和j，使得nums[i] == nums[j] 且i和j之间的差不超过k

  Example 1:   
  Input: nums = [1,2,3,1], k = 3    
  Output: true.

  Example 2:    
  Input: nums = [1,0,1,1], k = 1   
  Output: true

  Example 3:    
  Input: nums = [1,2,3,1,2,3], k = 2   
  Output: false

  考虑用滑动窗口与查找表来解决。

  设置查找表record，用来保存每次遍历时插入的元素，record的最大长度为k

  遍历数组nums，每次遍历的时候在record查找是否存在相同的元素，如果存在则返回true，遍历结束

  如果此次遍历在record未查找到，则将该元素插入到record中，而后查看record的长度是否为k + 1

  如果此时record的长度是否为k + 1，则删减record的第一个元素

  如果遍历完整个数组nums未查找到则返回false

 */

const nums = [1, 2, 3, 1, 4, 5]

const containsNearbyDuplicate = (nums, k) => {
  const record = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (record.includes(nums[i])) {
      return true
    } else {
      record.push(nums[i])
      if (record.length > k) record.splice(0, 1)
    }
  }
  return false
}

console.log(containsNearbyDuplicate(nums, 2))