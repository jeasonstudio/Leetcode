/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [己方英雄等级, 对方英雄护甲] = line.split(' ').map(i => parseInt(i, 10))
  const [axe, bow] = [{
    装备攻击: 85,
    护甲穿透: 英雄等级 => 100 + 英雄等级 * 10,
  }, {
    装备攻击: 80,
    护甲穿透: 原始护甲值 => 原始护甲值 * 0.45,
  }]
  // todo
  const [axe护甲, bow护甲] = [对方英雄护甲 - axe.护甲穿透(己方英雄等级), 对方英雄护甲 - bow.护甲穿透(对方英雄护甲)]

  const axe伤害 = (100 + axe.装备攻击) * (1 - (axe护甲 / (602 + axe护甲)))
  const bow伤害 = (100 + bow.装备攻击) * (1 - (bow护甲 / (602 + bow护甲)))

  // 返回处理后的结果
  if (axe伤害 > bow伤害) {
    return 'axe'
  } else if (axe伤害 < bow伤害) {
    return 'bow'
  } else {
    return 'same'
  }
}

console.log(solution('15 100'))
console.log(solution('0 1000'))
console.log(solution('0 200'))
