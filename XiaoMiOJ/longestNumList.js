/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const list = line.split(',').map(i => parseInt(i, 10)).sort((a, b) => (a - b))
  let res = 0
  let thisLen = 1
  for (let index = 0; index < list.length; index++) {
    let value = list[index]
    let nextVal = list[index + 1]
    if (
      !nextVal
      || (nextVal - value) > 1
    ) {
      if (thisLen > res) {
        res = thisLen
      }
      thisLen = 1
    }
    else {
      thisLen += 1
    }
  }
  // 返回处理后的结果
  return res
}

console.log(solution('100,4,5,201,200,1,3,2'))
