/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairsOne = function (nums) {
  let numberOfGoodPair = 0;
  for (let num = 0; num < nums.length; num++) {
    const elementOne = nums[num];
    for (let item = num + 1; item < nums.length; item++) {
      const element = nums[item];
      if (elementOne == element) numberOfGoodPair++;
    }
  }
  return numberOfGoodPair;
};

var numIdenticalPairs = function (nums) {
  let numberOfGoodPair = 0;
  let hash = {};
  for (let num = 0; num < nums.length; num++) {
    const element = nums[num];
    if (hash[element]) hash[element]++;
    else hash[element] = 1;
  }
  for (const ddd in hash) {
    const element = hash[ddd];
    console.log({ element });
    numberOfGoodPair += (element * (element - 1)) / 2;
  }
  console.log({ hash });

  return numberOfGoodPair;
};
// Example 1:

// Input: nums = [1, 2, 3, 1, 1, 3]
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0 - indexed.
//   Example 2:

// Input: nums = [1, 1, 1, 1]
// Output: 6
// Explanation: Each pair in the array are good.
//   Example 3:

// Input: nums = [1, 2, 3]
// Output: 0
