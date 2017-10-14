/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [s1, s2, s3] = line.split(',').map(i => i.split(''))
  let s1p = 0
  let s2p = 0

  for (let index = 0; index < s3.length; index++) {
    if (s2[s2p] === s3[index]) {
      s2p += 1
      continue
    }
    else if (s1[s1p] === s3[index]) {
      s1p += 1
      continue
    }
    else {
      return 'false'
    }
  }
  // 返回处理后的结果
  return 'true'
}

console.log(solution('dbbca,aabcc,aadbbcbcac'))
console.log(solution('aabcc,dbbca,aadbbbaccc'))
console.log(solution('a,b,ab'))
console.log(solution('a,b,ba'))
console.log(solution('a,b,ac'))
console.log(solution('abc,bca,bcaabc'))
console.log(solution('abc,bca,aabbcc'))
1
