/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const list = line.split(',').map(i => parseInt(i, 10))

  // 返回处理后的结果
  return cal(0, list)
}

function cal(times, arr) {
  const len = arr.length
  if (len === 1) return times
  const max = Math.max(...arr)
  const maxIndex = arr.indexOf(max)

  const newArr = [
    ...arr.slice(0, maxIndex),
    ...arr.slice(maxIndex + 1)
  ]

  return cal(times + (len - maxIndex - 1), newArr)
}

console.log(solution('4,2,3,1')) // 5
console.log(solution('2,3,1')) // 2
console.log(solution('1,2,3,4,5')) // 0
