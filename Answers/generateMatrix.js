/**
 * 输入一串字符，顺时针生成一个二维矩阵
 */

// 用一个循环来生成矩阵，每次生成一个圈

let index = 0  // 字符串下标
let res = []  // 返回的矩阵数组

const printStrToMatrix = (str, m, n) => {
  if (str.length === 0 || m <= 0 || n <= 0)　return

  let start = 0
  for (let i = 0; i < m; i++) res[i] = []
  while (m > start * 2 && n > start * 2) {
    genMatrixInCircle(str, m, n, start)
    ++start
  } 

  return res
}

const genMatrixInCircle = (str, m, n, start) => {
  let endX = m - 1 - start
  let endY = n - 1 - start

  // 从左到右赋值一行
  for (let i = start; i <= endX; ++i) {
    res[start][i] = str[index++]
  }
  
  // 从上到下赋值一列
  if (start < endY) {
    for (let i = start + 1; i <= endY; ++i) {
      res[i][endX] = str[index++]
    }
  }

  // 从右到左赋值一行
  if (start < endX && start < endY) {
    for (let i = endX - 1; i >= start; --i) {
      res[endY][i] = str[index++]
    }
  }

  // 从下到上赋值一列
  if (start < endX && start < endY - 1) {
    for (let i = endY - 1; i>= start + 1; --i) {
      res[i][start] = str[index++]
    }
  }
}

console.log(printStrToMatrix('123456789', 3, 3))