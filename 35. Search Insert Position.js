/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function (nums, target) {
//   const foundNumber = nums.findIndex((item) => item === target)
//   if (foundNumber !== -1) return foundNumber
//   for (var i = 1; i <= nums.length; i++) {
//     const getterThen = nums[i] < target
//     const lessThan = nums[i - 1] > target

//     if (lessThan) return i - 1
//     else if (!getterThen && !lessThan) return i
//     else if (i == nums.length) return i + 1
//   }
// };

var searchInsert = function (nums, target) {

  let low = 0,
    n = nums.length,
    high = n - 1

  while (low <= high) {
    let mid = (high + low) / 2;
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) low = mid + 1
    else high = mid - 1
  }
  return low
};

console.log(searchInsert([1, 3, 4, 6], 7))
console.log(searchInsert([1, 2, 4, 6], 0))