/**
 * 气球在一个水平数轴上摆放，可以重叠，飞镖垂直投向坐标轴，使得路径上的气球都被刺破。求解最小的投飞镖次数使所有气球都被刺破。
 * 
 * 思路：实质上是计算不重叠区间的个数，区别是 [1, 2] 和 [2, 3] 是重叠的
 */

function findMinArrowShots(points) {
  if (points.length === 0) return 0
  points.sort((a, b) => a[0] - b[0])
  let count = 1, end = points[0][1]
  for (let i = 1, len = points.length; i < len; i++) {
    if (points[i][0] <= end) continue
    count++
    end = points[i][1]
  }
  return count
}

console.log(findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]))