/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const num = Number(line)
    .toString(2)
  const len = 32 - num.length
  let a = ''
  for (var index = 0; index < len; index++) {
    a += '0'
  }
  const newNum = (a + num)
    .split('')
    .reverse()
    .join('')
    .toString()
  // 返回处理后的结果
  return parseInt(newNum, 2).toString()
}

console.log(solution('4626149'))
