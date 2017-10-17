/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [n, k, m] = line.split(',').map(i => parseInt(i, 10))
  const round = Math.floor(n / 8) * 100
  for (let index = 0; index < round; index++) {
    if(
      (k >= (m + 16 * (index - 1)))
      && (k < (m + 8 * (2 * index - 1)))
    ) {
      return '1'
    }
  }
  // 返回处理后的结果
  return '0'
}

// m~(m+8), (m+16)~(m+24), (m+32)~(m+40)
// start: 0,16,32
// start: m + 16(i - 1) = k    i - 1 = (14012 - 1596) / 16
// end:   m + 8(2i - 1) = k

console.log(solution('280,36920,56')) // 1
console.log(solution('5759,37165,4661')) // 0
console.log(solution('8702,36977,6699')) // 1
console.log(solution('2550,14012,1596')) // 1
console.log(solution('10,2,2')) // 1
console.log(solution('10,1,2')) // 0
console.log(solution('10,2,3')) // 0
