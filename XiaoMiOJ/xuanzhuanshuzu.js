/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [arrs, num] = line.split(' ')
  const arr = arrs.split(',').map(i => Number(i))
  const n = Number(num)
  // 返回处理后的结果
  return arr.indexOf(n)
}
