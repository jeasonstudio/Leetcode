/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const n = parseInt(line, 10)

  if (n === 0) return 1
  if (n === 1 || n === 2) return n

  // 返回处理后的结果
  return Math.floor(
    1 / Math.sqrt(5) * (Math.pow((1 + Math.sqrt(5)) / 2, n + 1) - Math.pow((1 - Math.sqrt(5)) / 2, n + 1))
  )
}

console.log(solution('5'))
console.log(solution('8'))
