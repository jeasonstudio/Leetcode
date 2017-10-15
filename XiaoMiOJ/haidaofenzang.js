/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const list = line.split(',')
    .map(i => parseInt(i, 10))
    .sort((a, b) => (a - b))
  const sumr = list.reduce((a, b) => (a + b))
  if (sumr % 2 !== 0) return 'false'
  let half = sumr / 2
  let sum = 0
  for (var index = 0; index < list.length; index++) {
    sum += list[index]
    if (sum === half) return 'true'
  }
  // 返回处理后的结果
  return 'false'
}

function f(len, half) {
  max{F[i-1][v], F[i-1][v-C[i]]+W[i]}
}


console.log(solution('1,2,3'))
console.log(solution('1,2,6,4'))
console.log(solution('1,6,8,3,5,9'))
console.log(solution('10,5,8,6,20,13,7,11'))
