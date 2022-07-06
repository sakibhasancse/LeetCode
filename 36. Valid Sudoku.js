/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function (board) {

//   let hashSet = new Set();

//   for (var i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] !== '.') {
//         if (hashSet.has('row-' + i + board[i][j]) || hashSet.has('col-' + j + board[i][j]) || hashSet.has(`box ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${board[i][j]
//           }`)) {
//           return false;
//         } else {
//           hashSet.add('row-' + i + board[i][j])
//           hashSet.add('col-' + j + board[i][j])
//           hashSet.add(`box ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${board[i][j]
//             }`)
//         }
//       }

//     }
//   }
//   return true
// };


var isValidSudoku = function (board) {
  const set = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        const colHash = `col ${i} i ${board[i][j]}`;
        const rowHash = `row ${i} j ${board[i][j]}`;
        const boxHash = `box ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${board[i][j]
          }`;
        if (set.has(rowHash) || set.has(colHash) || set.has(boxHash)) {
          return false;
        }
        set.add(rowHash);
        set.add(colHash);
        set.add(boxHash);
      }
    }
  }
  return true;
};

const result = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])


const result2 = isValidSudoku([
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]])

const result4 = isValidSudoku([
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]])

console.log({ result, result2, result4 })