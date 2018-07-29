/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  if (points.length < 3) return 0
  var pointMap = {}
  var count = 0
  for (var index = 0; index < points.length; index++) {
    var thisPoint = new Point(points[index])
    pointMap[index] = thisPoint
  }
  for (var index = 0; index < points.length; index++) {
    var res = {}
    for (var jndex = 0; jndex < points.length; jndex++) {
      if (pointMap[index] === pointMap[jndex]) {
        continue
      }
      var dis = cd(pointMap[index], pointMap[jndex])
      var n = res[dis] || 0
      res[dis] = n + 1
      count += n
    }
  }
  return count * 2
}

function Point(point) {
  this.x = point[0]
  this.y = point[1]
}

function cd(point1, point2) {
  return Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
}

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))
console.log(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]))

// Your runtime beats 93.75 % of javascript submissions.
