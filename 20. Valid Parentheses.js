/**
 * @param {string} s
 * @return {boolean}
 */

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// var isValid = function (s) {
//   if (!s) return false;
//   let string = s.replace('()', '').replace('{}', '').replace('[]', '')
//   return !string
// };


var isValid = function (s) {
  const stack = [];
  const openSet = new Set(['(', '{', '[']);
  for (let i = 0; i < s.length; i += 1) {
    if (openSet.has(s[i])) {
      stack.push(s[i]);
    } else stack.pop();
  }

  return stack.length === 0;
}

console.log(isValid("[()[]]{}[]"))