/**
 * 给定一个整数数组，找到一个具有最大和的连续子数组，返回其最大和
 * 
 * sum[i] = max{sum[i - 1] + a[i], a[i]}
 */

const nums = [-2, -3, 4, -1, -2, 1, 5, -3]

const maxSubArray = nums => {
  if (!nums.length) return
  let max_ending_here = nums[0]
  let max_so_far = nums[0]

  for (let i = 1; i < nums.length; i++) {
    max_ending_here = Math.max(max_ending_here + nums[i], nums[i])
    max_so_far = Math.max(max_so_far, max_ending_here)
  }

  return max_so_far
}

console.log(maxSubArray(nums))