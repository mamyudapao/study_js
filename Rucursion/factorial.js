function factorial(x) {
  // factorialは階乗という意味
  if (x < 0) return
  if (x === 0) return 1
  return x * factorial(x - 1)
}

factorial(3)
// 6
