/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  let isValid = true;
  let currentValue = 0
  let lastIndex = 0

  for (var i = 1; i < board.length; i++) {
    const current = board[i]
    const prevValue = board[i - 1]
    const duplicates = current.filter((item, index) => Number(item) && index !== current.indexOf(item));
 
    if (duplicates.length > 0) return isValid = false

    for (let j = 0; j < current.length; j++) {
      const element = current[j];
      console.log({ element })
    }

    if (lastIndex + 3 === i) lastIndex = i

  }
  console.log({ isValid })
  return isValid
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])