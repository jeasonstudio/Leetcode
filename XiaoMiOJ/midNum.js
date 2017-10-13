/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const list = line.split(',').map(i => parseInt(i, 10)).sort((a, b) => (a - b))
  const len = list.length
  // 返回处理后的结果
  return list[Math.floor(len/2)]
}

console.log(solution('12,13,14,5,6,7,8,9,10'))
