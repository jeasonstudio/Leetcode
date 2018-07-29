const readline = require('readline');
const fs = require('fs');
const Promise = require('bluebird');

/**
 * Google codejam reader
 * @param {Object} options params
 *   @param {string} [options.inputPath] *.in file path, or use stdin
 *   @param {Function} [each]
 * @returns {Object}
 */
module.exports.reader = ({ inputPath, each }) => new Promise((resolve, reject) => {
  const rl = readline.createInterface({
    input: inputPath ? fs.createReadStream(inputPath) : process.stdin,
  });
  const data = [];
  let index = 0;
  rl.on('line', line => {
    line = each ? each(line, index++) : line.trim();
    data.push(line);
  });
  rl.on('close', () => resolve(data));
})

/**
 * Output result to stdout
 * @param {(string[]|string|number)[]} result
 * @param {string} [char=' '] join split char
 */
module.exports.printer = (result, char = ' ') => {
  result.forEach((r, index) => {
    if (Array.isArray(r)) {
      r = r.join(char);
    }
    console.log(`Case #${index + 1}: ${r}`);
  })
}
