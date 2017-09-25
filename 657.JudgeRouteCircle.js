/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var locationX = 0
  var locationY = 0
  moves.split("").map(item => {
    switch (item.toUpperCase()) {
      case 'U':
        locationY += 1
        break;
      case 'D':
        locationY -= 1
        break;
      case 'L':
        locationX += 1
        break;
      case 'R':
        locationX -= 1
        break;
      default:
        break;
    }
  })
  return locationX === 0 && locationY === 0
};