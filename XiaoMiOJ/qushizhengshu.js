/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const list = line.split(',')
    .map(i => parseInt(i, 10))
    .filter(j => (j > 0))
    .sort((a, b) => (a - b))

  if (list.length === 0 || list[0] !== 1) return '1'

  for (let index = 1; index < list.length; index++) {
    if (list[index] - list[index - 1] !== 1) {
      return String(list[index - 1] + 1)
    }
  }

  // 返回处理后的结果
  return String(list[list.length - 1] + 1)
}

console.log(solution('1,2,0'))
console.log(solution('3,4,-1,1'))
console.log(solution('-1,-3,-5'))
console.log(solution('1,2,3'))
console.log(solution('-1,-10,0'))
