/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
    if (numRows === 1) return [[1]];
    if (numRows < 1) return [];

    let triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        let previousTriangle = triangle[i - 1];
        let currentTriangle = [];
        currentTriangle.push(1);
        for (var j = 1; j < previousTriangle.length; j++) {
            currentTriangle[j] = previousTriangle[j] + previousTriangle[j - 1];
        }
        currentTriangle.push(1);
        triangle.push(currentTriangle);
    }
    return triangle;
};

console.log(generate(5));
