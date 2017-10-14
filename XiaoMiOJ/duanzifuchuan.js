/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [s, l] = line.split(' ').map(o => o.split(''))
  for (let index = 0; index < s.length; index++) {
    let element = s[index]
    let ind = l.indexOf(element)
    if (ind === -1) return 'false'
    l.splice(ind, 1)
  }
  // 返回处理后的结果
  return 'true'
}

console.log(solution('a b'))
console.log(solution('aa ab'))
console.log(solution('aa aab'))
