/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// const chunk = (arr, n) => arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : [];

// var matrixReshape = function (mat, r, c) {
//   const newMat = [].concat.apply([], mat);
//   if (newMat.length === c && mat.length === r) return mat
//   else {
//     const maximumMat = newMat.slice(0, c)
//     const numberOfArray = maximumMat.length / r
//     if (maximumMat.length <= r) return maximumMat
//     const value = chunk(maximumMat, numberOfArray)
//     return value
//   }
// };


var matrixReshape = function (mat, r, c) {
  if ((r * c != mat.length * mat[0].length) || mat.length === r) return mat
  else {
    let newMat = []
    let columns = 0;
    let values = []
    for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat[0].length; j++) {
        values.push(mat[i][j])
        columns++
        if (columns == c) {
          newMat.push(values)
          columns = 0
          values = []
        }
      }
    }
    return newMat
  }
};

console.log(matrixReshape([[1, 2], [3, 4]], 2, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 4, 4))