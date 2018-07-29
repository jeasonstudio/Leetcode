const { reader, printer } = require('../../../codejam-helper');

(async () => {
  const res = await reader({
    each: (line, i) => (line)
  });
  const total = res.shift();
  printer(result);
})()
