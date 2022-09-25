/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];
  let array2d = [];
  for (var i = 0; i < m; i++) {
    array2d.push([]);
    for (var j = 0; j < n; j++) {
      array2d[i][j] = original[i * n + j];
    }
  }

  return array2d;
};
