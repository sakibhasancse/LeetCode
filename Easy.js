// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
/**
 * @param {string} s
 * @return {number}
 */

// Answer 01

// var romanToInt = function (string) {
//   let symbol = [{ I: 1 }, { V: 5 }, { X: 10 }, { L: 50 }, { C: 100 }, { D: 500 }, { M: 1000 }]
//   let number = 0;
//   let stringArray = string.split('');
//   stringArray.map((item) => {
//     number += symbol.find((a => a[item]))[item]
//   })
//   return number
// };

// console.log(romanToInt("LVIII"))

// Answer 02
// var romanToInt = function (s) {
//     let answer = 0;
//     const values = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     return s.split('').reduce((prev, curr, i) => {
//         return prev + (i >= s.length - 1 || values[s[i + 1]] <= values[s[i]] ? values[s[i]] : -values[s[i]]);
//     }, 0);
// };

// console.log(romanToInt("LVIII"))

// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let temp = x;
  let reversedNum = 0;

  while (temp > 0) {
    let lastDigit = temp % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return x === reversedNum;
};

console.log(isPalindrome(121));

// 13. Roman to Integer

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let symbol = [
    { I: 1 },
    { V: 5 },
    { X: 10 },
    { L: 50 },
    { C: 100 },
    { D: 500 },
    { M: 1000 },
  ];
  let number = 0;
  let lastValue;

  s.split("").forEach((item) => {
    const currentNumber = symbol.find((a) => a[item])[item];
    if (lastValue) {
      const lastNumber = symbol.find((a) => a[lastValue])[lastValue];
      if (
        (lastValue === "I" && (item === "X" || item === "V")) ||
        (lastValue === "X" && (item === "C" || item === "L")) ||
        (lastValue === "C" && (item === "M" || item === "D"))
      ) {
        const newNumber = currentNumber - lastNumber;
        number += newNumber - lastNumber;
      } else number += currentNumber;
    } else {
      number += currentNumber;
    }
    lastValue = item;
  });

  return number;
};

console.log(romanToInt("MCMXCIV"));
