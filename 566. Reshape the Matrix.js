/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

const chunk = (arr, n) => arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : [];

var matrixReshape = function (mat, r, c) {
  const newMat = [].concat.apply([], mat);
  if (newMat.length === c && mat.length === r) return mat
  else {
    const maximumMat = newMat.slice(0, c)
    const numberOfArray = maximumMat.length / r
    if (maximumMat.length <= r) return maximumMat
    const value = chunk(maximumMat, numberOfArray)
    return value
  }
};
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1))