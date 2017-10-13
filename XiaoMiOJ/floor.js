/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const n = parseInt(line, 10)

  if (n === 0) return 1
  if (n === 0 || n === 1) return 1

  // 返回处理后的结果
  return solution(String(n - 1)) + solution(String(n - 2))
}

console.log(solution('5'))
console.log(solution('8'))
