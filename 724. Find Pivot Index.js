/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let leftsum = 0;

  nums.map((item) => {
    sum += item;
  });
  for (var i = 0; i < nums.length; i++) {
    console.log({ leftsum, sum, n: nums[i] });
    if (leftsum === sum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }
  return -1;
};

// Input: nums = [2, 1, -1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0(no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
