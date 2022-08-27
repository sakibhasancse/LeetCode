/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  if (k <= 0) return -1
  let result = 0
  for (var i = 0; i < matrix.length; i++) {
    const element = matrix[i]
    let total = 0
    for (var j = 0; j < element.length; j++) {
      const currentEleement = total + element[j]
      if (currentEleement <= k) {
        console.log({ currentEleement, total })
        total += element[j]
      }

    }
    // if(total >= k) return k
    if (result < total) result = total

  }
  return result
};