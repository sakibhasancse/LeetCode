// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var runningSum = function (nums) {
//   let sum = []

//   for (var i = 0; i < nums.length; i++) {
//     const currentValue = nums[i]
//     if (i == 0) sum.push(currentValue)
//     else {
//       let value = 0
//       for (var j = 0; j <= i; j++) {
//         value = value + nums[j]
//       }
//       sum.push(value)
//     }
//   }

//   return sum
// };

// Approach 2: Using Separate Space

// var runningSum = function (nums) {
//   let sum = [nums[0]]

//   for (var i = 1; i < nums.length; i++) {
//     sum[i] = sum[i - 1] + nums[i]
//   }

//   return sum
// };

// Approach 3: Using Input Array for Output

var runningSum = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }

  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
