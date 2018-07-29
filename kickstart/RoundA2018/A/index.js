const { reader, printer } = require('../../../codejam-helper');
const bigInt = require("big-integer");

const judge = (str = '') => {
  const len = str.split('');
  return len.every((n, i) => {
    return parseInt(len[i], 10) % 2 === 0
  })
}

(async () => {
  const res = await reader({
    each: (line, i) => (line)
  });
  const total = res.shift();
  const result = res.map(n => {
    if (judge(n)) return 0;
    let [plusN, minusN] = [0, 0];
    let [stagep, stagem] = [n, n];
    while (!judge(stagep)) {
      plusN += 1;
      if (Number(stagep) + 1000 >= Number.MAX_SAFE_INTEGER) {
        stagep = bigInt(stagep).add(1).toString();
      } else {
        stagep = String(Number(stagep) + 1);
      }
    }
    while (!judge(stagem)) {
      minusN += 1;
      if (Number(stagem) + 1000 >= Number.MAX_SAFE_INTEGER) {
        stagem = bigInt(stagem).minus(1).toString();
      } else {
        stagem = String(Number(stagem) - 1);
      }
    }
    return plusN > minusN ? minusN : plusN;
  })
  printer(result);
})()
