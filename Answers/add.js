/**
 * 不用加减乘除做加法
 * 
 * 两个数先做位与运算，然后向左移一位，再将两步骤结果相加（即重复前两步）直至不产生进位
 */

const add = (num1, num2) => {
  let sum = 0
  let carry = 0
  while (num2 !== 0) {
    sum = num1 ^ num2
    carry = (num1 & num2) << 1
    num1 = sum
    num2 = carry
  }

  return num1
}

console.log(add(10, 5))