/**
 * @param {string} s
 * @return {number}
 */

// var firstUniqChar = function (s) {
//   let ss = {}
//   for (var i = 0; i < s.length; i++) {
//     ss[s[i]] = ss[s[i]] ? ss[s[i]] + 1 : 1
//   }
//   let result = 0
//   for (var j in ss) {
//     if (!result && ss[j] === 1) return result = s.split('').indexOf(j)
//   }
//   return result
// };

var firstUniqChar = function (s) {
  let arr = s ? s.split("") : s;
  for (var i = 0; i < s.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return i;
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
