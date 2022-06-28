/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// var getRow = function (rowIndex) {
//   if (rowIndex === 0) return [1]

//   let triangle = [[1]]

//   for (var i = 0; i < rowIndex; i++) {
//     let PreviewTriangle = triangle[i]
//     let currentTriangle = [1]

//     for (var j = 1; j < PreviewTriangle.length; j++) {
//       currentTriangle[j] = PreviewTriangle[j] + PreviewTriangle[j - 1]
//     }

//     currentTriangle.push(1)
//     triangle.push(currentTriangle)
//   }
//   return triangle[rowIndex]
// };



var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]

  let triangle = []
  let icc = 1;

  for (var i = 0; i < rowIndex + 1; i++) {
    triangle.push(icc)
    icc = icc * (rowIndex - i) / (i + 1)
  }
  return triangle
};


console.log(getRow(3))