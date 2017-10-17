/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [Array1, Array2] = line.split(',').map(i => i.split(''))
  if (Array1.length !== Array2.length) return '0'
  const res = {}
  for (let index = 0; index < Array1.length; index++) {
    const w1 = Array1[index]
    const w2 = Array2[index]
    if (!res[w1]) {
      res[w1] = w2
    } else {
      if (res[w1] !== w2) {
        return '0'
      }
    }
  }
  // 返回处理后的结果
  return '1'
}

console.log(solution('edd,abb'))
console.log(solution('aaa,aba'))
