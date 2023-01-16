/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (target === matrix[i][j]) {
        if (matrix[i][j] <= target && (matrix[i][j + 1] && matrix[i][j + 1] >= target || !matrix[i][j + 1])) return true
      }
    }
  }
  return false
};

var searchMatrix = function (matrix, target) {
  for (let element of matrix) {
    if (element[0] <= target && element[element.length - 1] >= target) {
      for (let i = 0; i < element.length; i++) {
        if (element[i] == target) {
          return true
        }
      }
    }
  }
  return false
};