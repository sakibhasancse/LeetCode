// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"


// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var longestCommonPrefix = function (strs) {
//   let i = 0
//   let letter = strs[0][i]
//   const prefix = [];

//   while (i < strs[0].length) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] != letter)
//         return prefix.join('')
//     }
//     prefix.push(letter)
//     i++
//     letter = strs[0][i]
//   }

//   return prefix.join('')
// };



var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (var i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["kplas", "awlas", "lwqelas"]))
console.log(longestCommonPrefix(["flower", "flow", "flight"]))