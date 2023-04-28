/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */


var flat = function (arr, n) {
  if (!n) return arr
  else if (!arr.length) return arr

  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      newArray.push(...flat(arr[i], n - 1))
    } else newArray.push(arr[i])
  }
  return newArray
};