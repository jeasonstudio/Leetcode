/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const S = Number(line)
  for (let index = 0; index < 10; index++) {
    rsum(index, 0, S)
  }

  // 返回处理后的结果
  return '-1'
}

function rsum(num, sum, tagNum) {
  for (let index = 0; index < 10; index++) {
    let newNum = Number(String(num) + String(index))
    sum += newNum
    if (sum === tagNum) return String(newNum)
    if (String(num).length > String(tagNum).length) return '-1'
    rsum(newNum, sum, tagNum)
  }
  return '-1'
}

console.log(solution('905'))
// console.log(solution('10'))
// console.log(solution('137174210616796')) // 123456789555123
