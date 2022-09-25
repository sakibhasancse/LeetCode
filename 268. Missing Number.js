/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var sum = nums.length;
  for (var i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }
  return sum;
};

console.log(missingNumber([3, 2, 1, 0, 4, 6]));
