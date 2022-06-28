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
  let current = 1;

  for (var i = 0; i < rowIndex + 1; i++) {
    triangle.push(current)
    current = current * (rowIndex - i) / (i + 1)

    // getRow(3)
    // 1 * 3 / 1 = 3     
    // 3 * 2 / 2 = 3

    // getRow(4)
    // 1 * 4 / 1 = 4
    // 4 * 3 / 2 = 6
  }
  return triangle
};


console.log(getRow(3))