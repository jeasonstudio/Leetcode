/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const numList = line.split(' ')

  for (let index = 0; index < numList.length; index++) {
    let strNum = numList[index]
    if (line.match(new RegExp(strNum,'g')).length === 1) return strNum
  }
  // 返回处理后的结果
  return
}

console.log(solution('10 10 11 12 12 11 16'))
