/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const zu = line.split(';')[1].split(',').map(i => {
    return {
      start: i.split(' ')[0],
      end: i.split(' ')[1],
    }
  })
  const all = line.split(';')[0].split(' ')[0]
  const res = new Set(['0'])
  for (let index = 0; index < zu.length; index++) {
    if (zu[index].start === '0' || res.has(zu[index].start)) {
      res.add(zu[index].end)
    }
  }
  // 返回处理后的结果
  return Number(all) - res.size
}

console.log(solution('5 5;0 1,1 2,2 3,3 4,2 1'))
console.log(solution('5 3;0 1,1 2,3 4'))
console.log(solution('29 25;28 20,17 23,9 17,15 16,1 21,17 27,5 10,2 5,0 19,28 1,4 21,5 13,12 9,19 2,27 20,0 7,10 14,27 9,21 23,4 19,17 7,27 12,1 24,4 11,0 10')) // 21
