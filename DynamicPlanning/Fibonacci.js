/**
 * 斐波那契数列
 */

// Base recursive version
const fib = n => {
  if (n >= 0 && n < 2) return n
  return fib(n - 2) + fib(n - 1)
}
console.log(fib(10))

// Array Storage
const fibPro = n => {
  let array = new Array(n + 1).fill(null)
  array[0] = 0
  array[1] = 1
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}
console.log(fibPro(10))