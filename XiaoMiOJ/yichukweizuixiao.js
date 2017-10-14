/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [num, n] = line.split(',')
  const time = k = parseInt(n, 10)
  const list = num.split('').map(i => parseInt(i, 10))
  let index = 0
  for (var i = 0; i < time; i++) {
    const thisArr = list.slice(index, index + time - i)
    console.log(TouchList)
  }
  // 返回处理后的结果
  return String(Number(list.join('')))
}

console.log(solution('1432219,3')) // 1219
console.log(solution('10200,1')) // 200
console.log(solution('1234567890,9')) // 0
