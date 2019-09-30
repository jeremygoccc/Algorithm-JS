/***
 * 计算让一组区间不重叠所需要移除的区间个数
 * 
 * 思路： 先计算最多能组成的不重叠区间个数，然后用区间总个数减去不重叠区间的个数
 */

function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1, end = intervals[0][1]
  for (let i = 1, len = intervals.length; i < len; i++) {
    if (intervals[i][0] < end) {
      continue
    }
    end = intervals[i][1]
    count++
  }
  return intervals.length - count
}

console.log(eraseOverlapIntervals([[1,2], [2,3]]))