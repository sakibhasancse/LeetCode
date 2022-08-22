/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return (n & (n - 1)) == 0 && n % 3 == 1;
};

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
